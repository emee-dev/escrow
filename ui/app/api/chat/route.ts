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

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    console.log("Messages: ", messages);

    const response = await streamText({
      // model: google(FILE_MODEL),
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
