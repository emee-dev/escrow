import { serve } from "@hono/node-server";
import { Mistral } from "@mistralai/mistralai";
import { ConvexHttpClient } from "convex/browser";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { stream } from "hono/streaming";
import { api } from "@store/api";
import { addSystemAndPrefix, SystemMessage, StoreResponse } from "./utils";

const client = new ConvexHttpClient(process.env["NEXT_PUBLIC_CONVEX_URL"]!);

const PORT = Number(process.env.PORT) || 4560;
const app = new Hono();

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET"],
    allowHeaders: ["Content-Type"],
  })
);

app.get("/", (c) =>
  c.json({
    message: "Server is doing well.",
  })
);

app.use("/sse/*", async (c, next) => {
  c.header("Content-Type", "text/event-stream");
  c.header("Cache-Control", "no-cache");
  c.header("Connection", "keep-alive");
  await next();
});

// const systemMessage = `
//   You are an AI dispute bot. You specifically help resolve escrow disputes between two people (participants).
//   A participant is identified by the hashtag in their message.

//   eg
//   #participant1: I need help the other person has refused to pay me and the timer has gone to zero.
//   #participant2: I have paid, but it seems my bank is having payment issues. It is not my fault.

//   Be direct. Best to reply with a generic response, if you do not understand.

//   Assume they are confused and need assistance.

//   I need your reply to contain the participant id.

//   eg your reply
//   #participant1-reply: <your reply>
//   #participant2-reply: Give me the transaction info.

//   Note: They may provide additional proofs like transaction info or images. Extract valuable context from it and use that in your judgement.
  
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

type Temp = {
  index: number;
  delta: { content: string };
  finishReason: null | "stop" | "tool_calls" | "length" | "error";
};

app.get("/sse/:roomId/:groupId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const groupId = c.req.param("groupId");

    if (!roomId || !groupId) {
      return c.json(
        { message: "Request args was not provided." },
        { status: 404 }
      );
    }

    const messages: StoreResponse = await client.query(
      api.store.fetchRoomMessages,
      {
        roomId,
        groupId,
      }
    );

    const result = await mistral.chat.stream({
      model: "pixtral-12b-2409",
      messages: addSystemAndPrefix(system, messages.data),
    });

    const tempStore: Temp[] = [];

    return stream(c, async (stream) => {
      for await (const event of result) {
        stream.write(event.data.choices[0].delta.content || "");

        // Gradually push responses into the array
        tempStore.push({
          index: event.data.choices[0].index,
          delta: { content: event.data.choices[0].delta.content! },
          finishReason: event.data.choices[0].finishReason,
        });

        if (event.data.choices[0].finishReason === "stop") {
          const aiResponse = tempStore.reduce(
            (acc, curr) => {
              if (acc.index === event.data.choices[0].index) {
                acc.delta.content += curr.delta.content;
              }

              return acc;
            },
            { index: 0, delta: { content: "" }, finishReason: null }
          );

          // After the stream has finished save the data and reset it.
          console.log("aiResponse: ", aiResponse);
          const setAiResponse = await client.mutation(api.store.storeMessage, {
            roomId,
            groupId,
            newMessage: {
              role: "assistant",
              uploadType: "text-prompt",
              id: Date.now().toString(),
              content: aiResponse.delta.content,
              // prefix: true,
            },
          });
        }
      }
    });
  } catch (error: any) {
    console.log("Prompt Error: ", error.message);

    return c.json(
      { message: "Internal server error, try again" },
      { status: 500 }
    );
  }
});

const port = PORT;
console.log(`Server is running on port http://localhost:${port}`);

serve({
  port,
  fetch: app.fetch,
});
