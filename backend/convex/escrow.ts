import { v } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const createEscrowRoom = mutation({
  args: {
    roomId: v.string(),
    groupId: v.string(),
    payment_status: v.literal("default"),
    terms: v.string(),
    amount: v.string(),
    asset: v.string(),
    creator: v.object({
      username: v.string(),
      visitorId: v.number(),
    }),
  },
  handler: async (
    ctx,
    { roomId, groupId, payment_status, terms, amount, asset, creator }
  ) => {
    const record = await ctx.db.insert("escrowRooms", {
      roomId,
      groupId,
      terms,
      amount,
      asset,
      payment_status,
      creator: creator,
    });

    if (!record) {
      return { message: "Could not save record", data: [] };
    }
  },
});

export const joinEscrowRoom = mutation({
  args: {
    roomId: v.string(),
    groupId: v.string(),
    reciever: v.object({
      username: v.string(),
      visitorId: v.number(),
    }),
    payment_status: v.literal("pending"),
  },
  handler: async (ctx, { roomId, groupId, reciever, payment_status }) => {
    const record = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    if (!record) {
      return { message: "Could not find Escrow room", data: [] };
    }

    await ctx.db.patch(record._id, {
      reciever,
      payment_status,
    });
  },
});

export const listEscrowRooms = query({
  args: {
    visitorId: v.number(),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, { visitorId, paginationOpts }) => {
    const disputes = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.or(
          q.eq(q.field("creator.visitorId"), visitorId),
          q.eq(q.field("reciever.visitorId"), visitorId)
        )
      )
      .order("desc")
      .paginate(paginationOpts);

    return disputes;
  },
});

export const getRoomStatus = query({
  args: {
    roomId: v.string(),
    groupId: v.string(),
  },
  handler: async (ctx, { roomId, groupId }) => {
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    return { message: "Room status", data: room };
  },
});

export const getRoomById = query({
  args: {
    escrowRoomId: v.string(),
  },
  handler: async (ctx, { escrowRoomId }) => {
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) => q.eq(q.field("_id"), escrowRoomId))
      .first();

    return { message: "Room details", data: room };
  },
});

// Updates room status
export const refusePayment = mutation({
  args: {
    roomId: v.string(),
    groupId: v.string(),
  },
  handler: async (ctx, { groupId, roomId }) => {
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    if (!room) {
      return null;
    }

    const data = await ctx.db.patch(room._id, { payment_status: "refused" });
  },
});

export const disputePayment = internalMutation({
  args: {
    roomId: v.string(),
    groupId: v.string(),
  },
  handler: async (ctx, { groupId, roomId }) => {
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), roomId),
          q.eq(q.field("groupId"), groupId)
        )
      )
      .first();

    if (!room) {
      return null;
    }

    const data = await ctx.db.patch(room._id, { payment_status: "dispute" });
  },
});
