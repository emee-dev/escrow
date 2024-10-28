import { serve } from "@hono/node-server";
import { Mistral } from "@mistralai/mistralai";
import { ConvexHttpClient } from "convex/browser";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { stream } from "hono/streaming";
import { api } from "@packages/store/convex/_generated/api";
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

app.get("/", (c) => c.text("Hello Hono!"));

app.use("/sse/*", async (c, next) => {
  c.header("Content-Type", "text/event-stream");
  c.header("Cache-Control", "no-cache");
  c.header("Connection", "keep-alive");
  await next();
});

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

app.post("/", async (c) => {
  const body = await c.req.json();

  return c.json({ message: "Server is good." });
});

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
