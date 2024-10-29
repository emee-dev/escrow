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

const systemMessage = `
  You are an AI dispute bot. You specifically help resolve escrow disputes between two people (participants).
  A participant is identified by the hashtag in their message.

  eg
  #participant1: I need help the other person has refused to pay me and the timer has gone to zero.
  #participant2: I have paid, but it seems my bank is having payment issues. It is not my fault.

  Be direct. Best to reply with a generic response, if you do not understand.

  Assume they are confused and need assistance.

  I need your reply to contain the participant id.

  eg your reply
  #participant1-reply: <your reply>
  #participant2-reply: Give me the transaction info.

  Note: They may provide additional proofs like transaction info or images. Extract valuable context from it and use that in your judgement.
  
`;
const system = {
  role: "system",
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
      return { message: "Could not find escrow room.", data: [] };
    }

    const disputeRoom = await ctx.db
      .query("disputeRooms")
      .filter((q) => q.eq(q.field("escrowRoomId"), escrowRoom._id))
      .first();

    if (!disputeRoom) {
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

      oldMessages.push(newMessage);

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
        message: "Data was fetched.",
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
