"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Message, useChat } from "ai/react";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation, useQuery } from "convex/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useActions, useAIState, useUIState } from "ai/rsc";
import { Textarea } from "@/components/ui/textarea";
import { useSuperVizContext } from "@/context";
import { useRealtime, useSuperviz } from "@superviz/react-sdk";
import {
  ArrowDown,
  ArrowUp,
  Bot,
  File,
  Paperclip,
  RefreshCw,
  Smile,
  X,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, RefAttributes, useEffect, useRef, useState } from "react";
import { JSONValue } from "ai";
import { AI } from "../ai";
import { api } from "@/convex/_generated/api";
import { encodeImageToBase64, prepareImagePrompt } from "@/lib/utils";
import { Input } from "@/components/ui/input";

// Algo
/**
 * 1. Capture user message, append user is eg #user1 or #user2
 * 2. Send that message to backend chatbot, then store it in realtime database
 * 3. After chatbot responds append the reponse to realtime database
 * 4. Continue this process. The goal is to maintain an external chat session state.
 * 5. When user2 joins, load by room id.
 * 6. User2 messages are also appended to the realtime database.
 *
 */

export const dynamic = "force-dynamic";

const Participant = {
  id: "participant1",
  name: "emee", // username of escrowee
};
const Participant2 = {
  id: "participant2",
  name: "samuel", // username of escrowee
};

const Group = {
  id: "dispute1",
  name: "samuel-and-emee", // from the usernames of the escrowee(s)
};

const Room = "Room";

type DisputePayload = {
  message: string;
  participantId: string;
  participantName: string;
};

type SubscriptionPayload = {
  name: string;
  data: DisputePayload;
  connectionId: string;
  participantId: string;
  timestamp: number;
};

export interface UploadedFile {
  name: string;
  base64: string;
}

export default function Component() {
  const formRef = useRef<FormEvent<HTMLFormElement>>(null);
  const roomId = "";
  const groupId = "";

  const uploadInputRef = useRef<HTMLInputElement>(null);
  const messages = useQuery(
    api.store.fetchRoomMessages,
    groupId && roomId ? { groupId, roomId } : "skip"
  );

  const setMessage = useMutation(api.store.storeMessage);
  // const {
  //   input,
  //   isLoading,
  //   messages,
  //   append,
  //   reload,
  //   setMessages,
  //   handleInputChange,
  //   handleSubmit,
  //   addToolResult,
  //   setData,
  //   stop,
  // } = useChat({
  //   // body: { participant: "participant1" },
  //   // maxSteps: 5,
  //   // // run client-side tools that are automatically executed:
  //   // async onToolCall({ toolCall }) {
  //   //   if (toolCall.toolName === "getLocation") {
  //   //     const cities = [
  //   //       "New York",
  //   //       "Los Angeles",
  //   //       "Chicago",
  //   //       "San Francisco",
  //   //     ];
  //   //     return cities[Math.floor(Math.random() * cities.length)];
  //   //   }
  //   // },
  // });

  const isSubscribed = useRef(false);
  const superviz = useSuperviz();
  const { subscribe, isReady, publish, unsubscribe, fetchHistory } =
    useRealtime("default");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const context = useSuperVizContext();

  useEffect(() => {
    // if (files && files.length > 0) {
    //   files.map(async (item) => {
    //     console.log("Base64 image: ", await encodeImageToBase64(item));
    //   });
    // }
    console.log("uploadedFiles", uploadedFiles);
  }, [uploadedFiles]);

  // const sendMessageToChatBot = async (payload: SubscriptionPayload) => {
  //   if (!context.participant) {
  //     console.log("User is not defined.");
  //     return;
  //   }

  //   console.log("Sub: ", payload);

  //   // Make sure the current user's message is sent, if not it will also send the
  //   // other persons subscribed message. It helps avoid duplicating messages.
  //   if (payload.data.participantId === context.participant.id) {
  //     append({
  //       role: "user",
  //       content: `#${context.participant.name}: ${payload.data.message}`,
  //     });
  //   }
  // };

  const sendMessageToChatBot = async (payload: SubscriptionPayload) => {
    if (!context.participant) {
      console.log("User is not defined.");
      return;
    }

    // Make sure the current user's message is sent, if not it will also send the
    // other persons subscribed message. It helps avoid duplicating messages.
    if (payload.data.participantId === context.participant.id) {
      const userPrompt = payload.data.message;

      // Upload images with detail prompt
      // if (uploadedFiles.length > 0) {
      //   const prompt = `#${context.participant.name}: ${userPrompt}`;

      //   const data = await prepareImagePrompt(prompt, uploadedFiles);

      //   const newData = await setMessage({
      //     groupId,
      //     roomId,
      //     newMessage: {
      //       role: "user",
      //       content: [data.content],
      //       id: Date.now().toString(),
      //       uploadType: "image-prompt",
      //     },
      //   });

      //   // reset the file list
      //   setUploadedFiles([]);
      // } else {
      //   const newData = await setMessage({
      //     groupId,
      //     roomId,
      //     newMessage: {
      //       role: "user",
      //       id: Date.now().toString(),
      //       content: `#${context.participant.name}: ${userPrompt}`,
      //       uploadType: "text-prompt",
      //     },
      //   });
      // }

      console.log("Sub: ", payload);
    }
  };

  // Subscribe to dispute messages
  useEffect(() => {
    if (!isReady || isSubscribed.current) return;

    // Called multiple times
    subscribe("dispute_message", sendMessageToChatBot);

    isSubscribed.current = true;
    // return () => {
    //   unsubscribe("dispute_message", (data) => {
    //     console.log("unsubscribed: ", data);
    //   });
    // };
  }, [isReady]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newFiles = await Promise.all(
        Array.from(files).map(async (file) => {
          const base64 = await encodeImageToBase64(file);
          return { name: file.name, base64 };
        })
      );
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  // useEffect(
  //   () => {
  //     context.setGroup(Group);
  //     context.setRoomId(Room);
  //     context.setParticipant(Participant);
  //   },
  //   /* eslint-disable react-hooks/exhaustive-deps */
  //   []
  // );

  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] bg-background">
      <div className="flex flex-col border-r bg-muted/40 p-4">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <Bot className="h-6 w-6" />
            <span>AI Chat</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <WalletCard />
      </div>
      <div className="flex flex-col">
        <ChatHeader />
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <Button
            onClick={() => {
              context.setGroup(Group);
              context.setRoomId(Room);
              context.setParticipant(Participant);
              console.log("Set user1");
            }}
          >
            Set User1
          </Button>
          <Button
            onClick={() => {
              context.setGroup(Group);
              context.setRoomId(Room);
              context.setParticipant(Participant2);
              console.log("Set user2");
            }}
          >
            Set User2
          </Button>
          <Button
            onClick={() => {
              superviz.startRoom();
              console.log("Joined room");
            }}
          >
            Start Room
          </Button>

          <div className="flex items-center">
            {uploadedFiles.map((file, index) => (
              <div key={index} style={{ margin: "8px", textAlign: "center" }}>
                <h4>{file.name}</h4>
                <img
                  src={file.base64}
                  alt={file.name}
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                />
              </div>
            ))}
          </div>

          {messages && messages.data.length > 0 ? (
            <ChatBody messages={messages.data} />
          ) : (
            <div>
              <span>There are no messages</span>
            </div>
          )}

          <Input
            multiple
            id="picture"
            type="file"
            ref={uploadInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden cursor-none invisible"
            placeholder="Click here"
          />
        </div>
        <div className="sticky bottom-0 z-10 bg-background p-4 sm:p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();

              // @ts-expect-error readonly error
              formRef.current = e;

              if (!context.participant) {
                return;
              }

              const form = new FormData(e.currentTarget);

              const input = form.get("message") as string;

              publish("dispute_message", {
                message: input,
                participantId: context.participant.id,
                participantName: context.participant.name,
              } as DisputePayload);

              console.log("Published");
            }}
            className="relative"
          >
            <Button
              type="submit"
              size="icon"
              variant="outline"
              className="absolute w-8 h-8 top-3 left-3"
              onClick={() => {
                const uploadInput = uploadInputRef.current;
                if (uploadInput) {
                  uploadInput.click();
                }
              }}
            >
              <Paperclip className="w-4 h-4" />
              <span className="sr-only">Upload</span>
            </Button>
            <Textarea
              placeholder="Type your message..."
              name="message"
              id="message"
              rows={1}
              // value={input}
              // onChange={handleInputChange}
              className="min-h-[48px] rounded-2xl resize-none p-4 pl-16 border border-neutral-400 shadow-sm pr-16"
            />
            <Button
              size="icon"
              type="submit"
              className="absolute w-8 h-8 top-3 right-3"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function WalletCard() {
  return (
    <Card className="flex flex-col w-full mt-3">
      <CardContent className="flex-1 grid gap-4 p-4   md:p-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold">Your Balance</h1>
            <Button
              size="icon"
              variant="outline"
              className="ml-auto rounded-full"
            >
              <RefreshCw className="size-4" />
              <span className="sr-only">Refresh</span>
            </Button>
          </div>
          <div className="text-lg font-semibold">$700.00</div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm">Recent Transactions</h2>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3 mt-2">
              <ArrowDown className="size-4 text-green-500" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  March 1, 2023
                </p>
              </div>
              <div className="text-right text-sm">$500.00</div>
            </div>
            <div className="flex items-center gap-3">
              <ArrowDown className="size-4 text-green-500" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  February 25, 2023
                </p>
              </div>
              <div className="text-right text-sm">$200.00</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const ChatHeader = () => (
  <div className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-16 sm:px-6">
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-muted-foreground">Process..</div>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <X className="h-5 w-5" />
        <span className="sr-only">Add emoji</span>
      </Button>
    </div>
  </div>
);

// const ChatBody = ({
//   messages,
// }: {
//   messages: {
//     role: "user" | "assistant";
//     content: string;
//     prefix?: boolean;
//   }[] /* messages: Message[] */;
// }) => {
//   return (
//     <div className="grid gap-4">
//       {messages.map((message) => {
//         if (message.role === "assistant") {
//           return (
//             <LeftAlignMessage key={message.id} content={message.content} />
//           );
//         }

//         if (message.role === "user") {
//           return (
//             <RightAlignMessage key={message.id} content={message.content} />
//           );
//         }
//       })}

//       {/* <div className="flex items-start gap-4">
//         <Avatar className="w-10 h-10 border">
//           <AvatarImage src="/placeholder-user.jpg" alt="User" />
//           <AvatarFallback>JD</AvatarFallback>
//         </Avatar>
//         <div className="grid gap-1 rounded-lg bg-muted p-3">
//           <div className="font-medium">John Doe</div>
//           <div className="text-sm leading-relaxed">
//             Sounds good! Let me know if you have any questions or need any
//             clarification.
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };
const ChatBody = ({
  messages,
}: {
  messages: {
    id: string;
    content: string;
    prefix?: boolean;
    role: "user" | "assistant";
  }[] /* messages: Message[] */;
}) => {
  return (
    <div className="grid gap-4">
      {messages.map((message) => {
        if (message.role === "assistant") {
          return (
            <LeftAlignMessage key={message.id} content={message.content} />
          );
        }

        if (message.role === "user") {
          return (
            <RightAlignMessage key={message.id} content={message.content} />
          );
        }
      })}

      {/* <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-1 rounded-lg bg-muted p-3">
          <div className="font-medium">John Doe</div>
          <div className="text-sm leading-relaxed">
            Sounds good! Let me know if you have any questions or need any
            clarification.
          </div>
        </div>
      </div> */}
    </div>
  );
};

const LeftAlignMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage src="/placeholder-user.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="grid gap-1 rounded-lg bg-muted p-3">
        <div className="font-medium">John Doe</div>
        <div className="text-sm leading-relaxed">
          {/* Hey there! I wanted to share a document with you. Let me know what you
          think. */}
          {content}
        </div>
        {/* {upload && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <File className="h-5 w-5" />
              <span className="sr-only">View document</span>
            </Button>
            <div className="text-sm text-muted-foreground">
              Sales Report Q4 2023.pdf
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

const RightAlignMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start gap-4 justify-end">
      <div className="grid gap-1 rounded-lg bg-primary p-3 text-primary-foreground">
        <div className="font-medium">You</div>
        <div className="text-sm leading-relaxed">
          {/* Great, thanks for sharing! I'll take a look at the document and get
          back to you. */}
          {content}
        </div>
      </div>
      <Avatar className="w-10 h-10 border">
        <AvatarImage src="/placeholder-user.jpg" alt="User" />
        <AvatarFallback>YO</AvatarFallback>
      </Avatar>
    </div>
  );
};
