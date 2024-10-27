import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const createDisputeRoom = mutation({
  args: {
    escrowRoomId: v.id("escrowRooms"),
  },
  handler: async (ctx, { escrowRoomId }) => {
    const record = await ctx.db.insert("disputeRooms", {
      escrowRoomId,
      disputeStatus: "open",
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
