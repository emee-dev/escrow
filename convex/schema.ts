import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

type TempStore = {
  role: "user" | "assistant" | "system" | "tool";
  content: string;
};

type LastMessageByAI = {
  role: "assistant";
  prefix: true;
};

export default defineSchema(
  {
    escrowRooms: defineTable({
      roomId: v.string(),
      groupId: v.string(),
      payment_status: v.union(
        v.literal("pending"),
        v.literal("default"),
        v.literal("timeout")
      ),
      terms: v.string(),
      amount: v.string(),
      asset: v.string(),
      creator: v.object({
        username: v.string(),
        visitorId: v.number(),
      }),
      reciever: v.optional(
        v.object({
          username: v.string(),
          visitorId: v.number(),
        })
      ),
    }),

    disputeRooms: defineTable({
      escrowRoomId: v.id("escrowRooms"),
      disputeStatus: v.union(v.literal("open"), v.literal("closed")),
      creator: v.optional(v.number()),
      receiver: v.optional(v.number()),
    }),

    // escrow dispute messages
    store: defineTable({
      disputeRoomId: v.id("disputeRooms"),
      messages: v.array(
        v.object({
          id: v.string(),
          content: v.union(
            v.string(),
            v.array(
              v.object({
                imageUrl: v.object({
                  url: v.string(),
                  detail: v.union(v.null(), v.string()),
                }),
                type: v.literal("image_url"),
              })
            )
          ),
          prefix: v.optional(v.boolean()),
          role: v.union(
            v.literal("system"),
            v.literal("user"),
            v.literal("assistant")
          ),
        })
      ),
    }),
  },
  { schemaValidation: true }
);
