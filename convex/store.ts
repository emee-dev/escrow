import { v } from "convex/values";
import { internalAction, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

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
      const createRecord = await ctx.db.insert("store", {
        // roomId,
        // groupId,
        disputeRoomId: disputeRoom._id,
        messages: [
          {
            id: newMessage.id,
            role: newMessage.role,
            content: newMessage.content,
          },
        ],
      });

      const getRecord = await ctx.db.get(createRecord);

      return {
        data: getRecord?.messages || [],
        message: "Record was inserted.",
      };
    }

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
        escrowRoomId: escrowRoom._id,
      });
    }

    return {
      data: fetchAgain?.messages || [],
      message: "Data was fetched.",
    };
  },
});

export const fetchRoomMessages = query({
  args: {
    // roomId: v.string(),
    // groupId: v.string(),
    escrowRoomId: v.id("escrowRooms"),
  },
  handler: async (ctx, { escrowRoomId /* roomId, groupId */ }) => {
    // const record = await ctx.db
    //   .query("store")
    //   .filter((q) => q.eq(q.field("roomId"), roomId))
    //   .unique();

    // if (!record) {
    //   return {
    //     data: [],
    //     message: "Data was not found.",
    //   };
    // }

    const disputeRoom = await ctx.db
      .query("disputeRooms")
      .filter((q) => q.eq(q.field("escrowRoomId"), escrowRoomId))
      .unique();

    if (!disputeRoom) {
      return { message: "Could not find dispute room.", data: [] };
    }

    const record = await ctx.db
      .query("store")
      .filter((q) => q.eq(q.field("disputeRoomId"), disputeRoom._id))
      .unique();

    if (!record) {
      return {
        data: [],
        message: "Data was not found.",
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
    escrowRoomId: v.string(),
  },
  handler: async (_, { groupId, roomId, escrowRoomId }) => {
    try {
      // const req = await fetch(`${BACKEND_AI_WEBHOOK}/sse/${roomId}/${groupId}`);
      const req = await fetch(
        `${BACKEND_AI_WEBHOOK}/sse/${roomId}/${groupId}/${escrowRoomId}`
      );

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
