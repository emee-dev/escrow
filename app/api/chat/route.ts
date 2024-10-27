import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { mistral } from "@ai-sdk/mistral";
import { convertToCoreMessages, CoreMessage, Message, streamText } from "ai";
import { getMutableAIState } from "ai/rsc";

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

// const mistral = createMistral({
//   apiKey: process.env.MISTRAL_API_KEY!,
// });

const NORMAL_MODEL = "gemini-pro-vision";
const FILE_MODEL = "gemini-1.5-flash";

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   try {
//     const { messages }: { messages: Message[] } = await req.json();

//     console.log("messages: ", messages);

//     const result = await streamText({
//       // model: google(FILE_MODEL),
//       // @ts-expect-error it is complaining about some type error.
//       model: mistral("pixtral-12b-2409"),
//       messages: convertToCoreMessages(messages),
//       system: `
//     You are an AI dispute bot. You specifically help resolve escrow disputes between two people (participants).
//     A participant is identified by the hashtag in their message.

//     eg
//     #participant1: I need help the other person has refused to pay me and the timer has gone to zero.
//     #participant2: I have paid, but it seems my bank is having payment issues. It is not my fault.

//     Be direct. Best to reply with a generic response, if you do not understand.

//     Assume they are confused and need assistance.

//     I need your reply to contain the participant id.

//     eg your reply
//     #participant1-reply: <your reply>
//     #participant2-reply: Give me the transaction info.

//     `,
//       // tools: {
//       //   // server-side tool with execute function:
//       //   getWeatherInformation: {
//       //     description: "show the weather in a given city to the user",
//       //     parameters: z.object({ city: z.string() }),
//       //     execute: async ({}: { city: string }) => {
//       //       const weatherOptions = ["sunny", "cloudy", "rainy", "snowy", "windy"];
//       //       return weatherOptions[
//       //         Math.floor(Math.random() * weatherOptions.length)
//       //       ];
//       //     },
//       //   },
//       //   // client-side tool that starts user interaction:
//       //   askForConfirmation: {
//       //     description: "Ask the user for confirmation.",
//       //     parameters: z.object({
//       //       message: z.string().describe("The message to ask for confirmation."),
//       //     }),
//       //   },
//       //   // client-side tool that is automatically executed on the client:
//       //   getLocation: {
//       //     description:
//       //       "Get the user location. Always ask for confirmation before using this tool.",
//       //     parameters: z.object({}),
//       //   },
//       // },
//     });

//     return result.toDataStreamResponse();
//   } catch (error: any) {
//     console.log(error.message);
//     return Response.json({ message: "Ai error" });
//   }
// }
export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    console.log("Messages: ", messages);

    const response = await streamText({
      // model: google(FILE_MODEL),
      // @ts-expect-error it is complaining about some type error.
      model: mistral("pixtral-12b-2409"),
      messages: convertToCoreMessages(messages),
      system: `
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
  
      `,
    });

    return response.toDataStreamResponse();
    // return response;
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: "Ai error" });
  }
}
