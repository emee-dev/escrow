import { v } from "convex/values";
import { internalAction, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

type Store = {
  prefix?: boolean | undefined;
  id: string;
  content:
    | string
    | {
        type: "image_url";
        imageUrl: {
          url: string;
          detail: string | null;
        };
      }[];
  role: "system" | "user" | "assistant";
};

export type StoreResponse = {
  data: Store[];
  message: string;
};

export type SystemMessage = {
  id: string;
  role: Store["role"];
  content: string;
};

// const systemMessage = `
//   You are an AI dispute bot. You specifically help resolve escrow disputes between two people (participants).
//   A participant is identified by the hashtag in their message.

//   eg
//   <user1 or user2> are placeholders for the usernames.
//   #participant-user1: I need help the other person has refused to pay me and the timer has gone to zero.
//   #participant-user2: I have paid, but it seems my bank is having payment issues. It is not my fault.

//   Be direct. Best to reply with a generic response, if you do not understand.

//   Assume they are confused and need assistance.

//   I need your reply to contain the participant id.

//   eg your reply
//   #participant-user1-reply: <your reply>
//   #participant-user2-reply: Give me the transaction info.

//   Note: They may provide additional proofs like transaction info or images. Extract valuable context from it and use that in your judgement.
//   In your replies do not respond like this '#participant-user1-reply: #participant1 Give me the transaction info' instead, reply
//   like such '#participant-user1-reply: user1 Give me the transaction info'
// `;

const systemMessage = `
  You are an AI mediator for resolving escrow disputes between two participants (#participant-user1 and #participant-user2).
  
  Use the hashtag in each participant’s message to identify them and address them directly in replies.
  
  Example:
  #participant-user1: The other party hasn’t paid, and the timer has expired.
  #participant-user2: I have paid, but there are bank delays.

  Approach the conversation as if participants are confused and need guidance.
  
  Always respond with the participant ID in your reply, as in:
  #participant-user1-reply: I understand; please share the transaction info.
  #participant-user2-reply: user2, could you provide proof of payment?

  Note: Extract any relevant details from provided evidence (like transaction data or images) to make informed responses.
`;

const system = {
  role: "system",
  id: Date.now().toString(),
  content: systemMessage,
} as SystemMessage;
const BACKEND_AI_WEBHOOK = process.env.BACKEND_AI_WEBHOOK;

export const storeMessage = mutation({
  args: {
    roomId: v.string(),
    groupId: v.string(),
    newMessage: v.union(
      // text prompt
      v.object({
        id: v.string(),
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.string(),
        prefix: v.optional(v.boolean()),
        uploadType: v.literal("text-prompt"),
      }),

      // image with text prompt
      v.object({
        id: v.string(),
        role: v.union(v.literal("user"), v.literal("assistant")),
        content: v.array(
          v.object({
            imageUrl: v.object({
              url: v.string(),
              detail: v.union(v.null(), v.string()),
            }),
            type: v.literal("image_url"),
          })
        ),
        uploadType: v.literal("image-prompt"),
      })
    ),
  },
  handler: async (ctx, { roomId, groupId, newMessage }) => {
    const escrowRoom = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    if (!escrowRoom) {
      console.log("Could not find escrow room");
      return { message: "Could not find escrow room.", data: [] };
    }

    const disputeRoom = await ctx.db
      .query("disputeRooms")
      .filter((q) => q.eq(q.field("escrowRoomId"), escrowRoom._id))
      .first();

    if (!disputeRoom) {
      console.log("Could not find dispute room.");
      return { message: "Could not find dispute room.", data: [] };
    }

    const data = await ctx.db
      .query("store")
      .filter((q) => q.eq(q.field("disputeRoomId"), disputeRoom._id))
      .first();

    if (!data) {
      const initialMessage = [
        system,
        {
          id: newMessage.id,
          role: newMessage.role,
          content: newMessage.content,
        },
      ];

      console.log("First prompt: ", initialMessage);

      const createRecord = await ctx.db.insert("store", {
        disputeRoomId: disputeRoom._id,
        messages: initialMessage,
      });

      const getRecord = await ctx.db.get(createRecord);

      // To avoid an infinite webhook loop
      if (newMessage.role === "user") {
        await ctx.scheduler.runAfter(0, internal.store.webhookCallback, {
          roomId,
          groupId,
        });
      }

      return {
        data: getRecord?.messages || [],
        message: "Record was inserted.",
      };
    }

    if (data.messages.length === 0) {
      const initialMessage = [
        system,
        {
          id: newMessage.id,
          role: newMessage.role,
          content: newMessage.content,
        },
      ];

      console.log("Messages are empty: ", initialMessage);

      await ctx.db.patch(data._id, { messages: initialMessage });

      const fetchAgain = await ctx.db.get(data._id);

      // To avoid an infinite webhook loop
      if (newMessage.role === "user") {
        await ctx.scheduler.runAfter(0, internal.store.webhookCallback, {
          roomId,
          groupId,
        });
      }

      return {
        data: fetchAgain?.messages || [],
        message: "Record was inserted.",
      };
    } else {
      const oldMessages = data.messages;

      oldMessages.push({
        id: newMessage.id,
        content: newMessage.content,
        role: newMessage.role,
        prefix:
          newMessage.uploadType === "text-prompt"
            ? newMessage.prefix
            : undefined,
      });

      // Update message list if record exists
      await ctx.db.patch(data._id, { messages: oldMessages });

      const fetchAgain = await ctx.db.get(data._id);

      // To avoid an infinite webhook loop
      if (newMessage.role === "user") {
        await ctx.scheduler.runAfter(0, internal.store.webhookCallback, {
          roomId,
          groupId,
        });
      }

      return {
        data: fetchAgain?.messages || [],
        message: "Room dispute messages was retrieved.",
      };
    }
  },
});

export const fetchRoomMessages = query({
  args: {
    roomId: v.string(),
    groupId: v.string(),
  },
  handler: async (ctx, { roomId, groupId }) => {
    const escrowRoom = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    if (!escrowRoom) {
      return { message: "Could not find escrow room.", data: [] };
    }

    const disputeRoom = await ctx.db
      .query("disputeRooms")
      .filter((q) => q.eq(q.field("escrowRoomId"), escrowRoom._id))
      .first();

    if (!disputeRoom) {
      return { message: "Could not find dispute room.", data: [] };
    }

    const record = await ctx.db
      .query("store")
      .filter((q) => q.eq(q.field("disputeRoomId"), disputeRoom._id))
      .first();

    if (!record) {
      return {
        data: [],
        message: "Was unable to find any message.",
      };
    }

    return {
      data: record.messages,
      message: "Data was found",
    };
  },
});

// After we make changes to db, trigger chatbot
// Trigger only after "user" prompt
export const webhookCallback = internalAction({
  args: {
    roomId: v.string(),
    groupId: v.string(),
  },
  handler: async (_, { groupId, roomId }) => {
    try {
      const req = await fetch(`${BACKEND_AI_WEBHOOK}/sse/${roomId}/${groupId}`);

      if (!req.ok) {
        console.log("Bad Request: ", await req.text());

        return;
      }

      const res = await req.json();

      console.log("Response: ", res);
    } catch (error: any) {
      console.error("AI Webhook Fetch Error:", error);
    }
  },
});

export const serverHealthCheck = internalAction({
  args: {},
  handler: async (_, args) => {
    try {
      const req = await fetch(`${BACKEND_AI_WEBHOOK}`);

      if (!req.ok) {
        console.log("Bad Request: ", await req.text());

        return;
      }

      const res = await req.json();

      console.log("Response: ", res);
    } catch (error: any) {
      console.error("AI Webhook Fetch Error:", error);
    }
  },
});

// utils
export const addSystemMessage = (system: SystemMessage, messages: Store[]) => {
  // Check if the first item is a system message; if not, prepend the system message.
  if (messages[0]?.role !== "system") {
    messages.unshift(system);
  }

  return messages.map(
    (msg) => ({ role: msg.role, content: msg.content }) as SystemMessage
  );
};
