import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { internal } from "./_generated/api";

export const createDisputeRoom = mutation({
  args: {
    roomId: v.string(),
    creator: v.optional(v.number()),
    receiver: v.optional(v.number()),
  },
  handler: async (ctx, { roomId, creator, receiver }) => {
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) => q.eq(q.field("roomId"), roomId))
      .first();

    if (!room) {
      return { message: "Could not find room", data: [] };
    }

    const record = await ctx.db.insert("disputeRooms", {
      creator,
      escrowRoomId: room._id,
      disputeStatus: "open",
      receiver: room.reciever?.visitorId,
    });

    await ctx.runMutation(internal.escrow.disputePayment, {
      groupId: room.groupId,
      roomId: room.roomId,
    });

    if (!record) {
      return { message: "Could not createDisputeRoom", data: [] };
    }
  },
});

export const listDisputeRooms = query({
  args: {
    // escrowRoomId: v.id("escrowRooms"),
    visitorId: v.number(),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, { visitorId, paginationOpts }) => {
    const disputes = await ctx.db
      .query("disputeRooms")
      .filter((q) =>
        q.or(
          q.eq(q.field("creator"), visitorId),
          q.eq(q.field("receiver"), visitorId)
        )
      )
      .order("desc")
      .paginate(paginationOpts);

    return disputes;
  },
});
