import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { internal } from "./_generated/api";

// export const createDisputeRoom = mutation({
//   args: {
//     roomId: v.string(),
//     creator: v.optional(v.number()),
//     receiver: v.optional(v.number()),
//   },
//   handler: async (ctx, { roomId, creator, receiver }) => {
//     const room = await ctx.db
//       .query("escrowRooms")
//       .filter((q) => q.eq(q.field("roomId"), roomId))
//       .first();

//     if (!room) {
//       return { message: "Could not find room", data: [] };
//     }

//     const doesDisputeExist = await ctx.db
//       .query("disputeRooms")
//       .filter((q) =>
//         q.and(
//           q.eq(q.field("creator"), creator),
//           q.eq(q.field("escrowRoomId"), room._id),
//           q.eq(q.field("receiver"), room.reciever?.visitorId)
//         )
//       )
//       .first();

//     if (!doesDisputeExist) {
//       const record = await ctx.db.insert("disputeRooms", {
//         creator: creator,
//         disputeStatus: "open",
//         escrowRoomId: room._id,
//         receiver: room.reciever?.visitorId,
//       });

//       if (!record) {
//         return { message: "Could not createDisputeRoom", data: [] };
//       }

//       return { message: "Dispute room was created sucessfully.", data: [] };
//     }

//     await ctx.runMutation(internal.escrow.disputePayment, {
//       groupId: room.groupId,
//       roomId: room.roomId,
//     });
//   },
// });

export const createDisputeRoom = mutation({
  args: {
    roomId: v.string(),
    creator: v.optional(v.number()),
    receiver: v.optional(v.number()),
  },
  handler: async (ctx, { roomId, creator, receiver }) => {
    // Retrieve the escrow room by roomId
    const room = await ctx.db
      .query("escrowRooms")
      .filter((q) => q.eq(q.field("roomId"), roomId))
      .first();

    // Check if the escrow room exists
    if (!room) {
      return { message: "Could not find room", data: [] };
    }

    // Check if a dispute already exists with the same creator, receiver, and escrowRoomId
    const doesDisputeExist = await ctx.db
      .query("disputeRooms")
      .filter((q) =>
        q.and(
          q.eq(q.field("creator"), creator),
          q.eq(q.field("escrowRoomId"), room._id),
          // @ts-expect-error Ignore because it should exist before dispute is initiated
          q.eq(q.field("receiver"), room.receiver?.visitorId)
        )
      )
      .first();

    // If no dispute exists, create a new dispute room
    if (!doesDisputeExist) {
      const record = await ctx.db.insert("disputeRooms", {
        creator: creator,
        disputeStatus: "open",
        escrowRoomId: room._id,
        // @ts-expect-error Ignore because it should exist before dispute is initiated
        receiver: room.receiver?.visitorId,
      });

      if (!record) {
        return { message: "Could not create dispute room", data: [] };
      }

      return { message: "Dispute room was created successfully.", data: [] };
    }

    // If a dispute exists, run the mutation to dispute payment
    await ctx.runMutation(internal.escrow.disputePayment, {
      groupId: room.groupId,
      roomId: room.roomId,
    });

    return { message: "A dispute already exists for this room.", data: [] };
  },
});

export const listDisputeRooms = query({
  args: {
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

export const doesDisputeExistForThisRoom = query({
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
      console.log("Could not find escrow room");
      return { message: "Could not find escrow room.", data: false };
    }

    const disputeRoom = await ctx.db
      .query("disputeRooms")
      .filter((q) => q.eq(q.field("escrowRoomId"), escrowRoom._id))
      .first();

    if (!disputeRoom) {
      console.log("Could not find dispute room.");
      return { message: "Could not find dispute room.", data: false };
    }

    return { message: "Dispute does exist for this room.", data: true };
  },
});
