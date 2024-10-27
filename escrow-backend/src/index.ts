import { serve } from "@hono/node-server";
import { Mistral } from "@mistralai/mistralai";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { stream, streamText, streamSSE } from "hono/streaming";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";
import { Blob } from "fetch-blob";
import { openAsBlob } from "fs";
import { readFile } from "fs/promises";
import image2uri from "image2uri";
import path from "path";
import { Id } from "@/convex/_generated/dataModel";

const client = new ConvexHttpClient(process.env["NEXT_PUBLIC_CONVEX_URL"]!);

const PORT = Number(process.env.PORT) || 4560;
const app = new Hono();

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

interface Message {
  id: number;
  sender: number; // 10 for you, 20 for your friend
  text: string;
}

const chatHistory: Message[] = [];
let clients: { id: number; res: Response }[] = [];

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

/* 

[{
        content:
          "Who is the best French painter? Answer in one short sentence.",
        role: "user",
}],
[
  {
    index: 0,
    delta: { role: 'assistant', content: '' },
    finishReason: null
  }
]
[ { index: 0, delta: { content: 'Cla' }, finishReason: null } ]   
[ { index: 0, delta: { content: 'ude' }, finishReason: null } ]   
[ { index: 0, delta: { content: ' Monet' }, finishReason: null } ]
[ { index: 0, delta: { content: '' }, finishReason: 'stop' } ]

*/

/* 
[
  {
    index: 0,
    delta: { role: 'assistant', content: '' },
    finishReason: null
  }
]
[ { index: 0, delta: { content: 'Sure' }, finishReason: null } ]       
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' continuing' }, finishReason: null } ]
[ { index: 0, delta: { content: ' the' }, finishReason: null } ]
[ { index: 0, delta: { content: ' sequence' }, finishReason: null } ]
[ { index: 0, delta: { content: ':\n\n' }, finishReason: null } ]
[ { index: 0, delta: { content: '...' }, finishReason: null } ]
[ { index: 0, delta: { content: ' seven' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' eight' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' nine' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' ten' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' eleven' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' twelve' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' thirteen' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' fourteen' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' fifteen' }, finishReason: null } ]
[ { index: 0, delta: { content: ',' }, finishReason: null } ]
[ { index: 0, delta: { content: ' sixteen' }, finishReason: null } ]
[ { index: 0, delta: { content: ' ...' }, finishReason: null } ]
[ { index: 0, delta: { content: '' }, finishReason: 'stop' } ]

*/

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

type TempStore = {
  role: "user" | "assistant";
  content: string;
};

type LastMessageByAI = {
  role: "assistant";
  prefix: true;
};

type Temp = {
  index: number;
  delta: { content: string };
  finishReason: null | "stop" | "tool_calls" | "length" | "error";
};

app.post("/", async (c) => {
  const body = await c.req.json();

  return c.json({ message: "Server is good." });
});

app.get("/sse/:roomId/:groupId/:escrowRoomId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const groupId = c.req.param("groupId");
    const escrowRoomId = c.req.param("escrowRoomId") as Id<"escrowRooms">;

    if (!roomId || !groupId || !escrowRoomId) {
      return c.json(
        { message: "Request args was not provided." },
        { status: 404 }
      );
    }

    const messages = await client.query(api.store.fetchRoomMessages, {
      escrowRoomId,
    });

    const result = await mistral.chat.stream({
      model: "pixtral-12b-2409",
      // messages: messages.data.map((item) => {
      //   return {
      //     role: item.role,
      //     content: item.content,
      //   };
      // }),

      // @ts-expect-error
      messages: messages.data,
      // messages: [
      //   // {
      //   //   content:
      //   //     "Who is the best French painter? Answer in one short sentence.",
      //   //   role: "user",
      //   // },
      //   // {
      //   //   content: [
      //   //     {
      //   //       imageUrl: {
      //   //         // url: "https://qualified-gerbil-72.convex.cloud/api/storage/59155007-bd93-4ac2-9cfe-fb77ae3ed713",
      //   //         url: await image2uri(path.join("./gtbank_reciept.jpeg"))!,
      //   //         detail: "What kind of document is it?",
      //   //       },
      //   //       type: "image_url",
      //   //     },
      //   //   ],
      //   //   role: "user",
      //   // },
      //   // {
      //   //   content: "Complete the next number. One, two, three",
      //   //   role: "user",
      //   // },
      //   // {
      //   //   content: "four, five, six.",
      //   //   role: "assistant",
      //   //   // prefix: true, // set true if ai is the last message, else it will throw an error
      //   // },
      //   // {
      //   //   content: "Count more",
      //   //   role: "user",
      //   // },
      // ],
    });

    const tempStore: Temp[] = [];

    return stream(c, async (stream) => {
      for await (const event of result) {
        // stream the response and also cache it for db store
        // console.log(event.data.choices);

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
