"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useSuperVizContext } from "@/context";
import {
  encodeImageToBase64,
  generateId,
  prepareImagePrompt,
} from "@/lib/utils";
import { useRealtime, useSuperviz, useVideo } from "@superviz/react-sdk";
import { useMutation, useQuery } from "convex/react";
import {
  ArrowDown,
  ArrowUp,
  Bot,
  EllipsisVertical,
  Paperclip,
  RefreshCw,
  Router,
  Video,
  VideoOff,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { notFound, useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";
import {
  WifiOff,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Slash,
  RefreshCcw,
  XCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  index: string;
}

type ComponentProps = {
  params: {};
  searchParams: {
    roomId: string;
    groupId: string;
    userType: "creator" | "reciever";
  };
};

const connectionStatusIcons = {
  0: <WifiOff className="size-4" />, // NOT_AVAILABLE: Disconnected from audio/video service.
  1: <CheckCircle className="size-4" />, // GOOD: Good connection quality.
  2: <AlertCircle className="size-4" />, // BAD: Bad connection quality.
  3: <AlertTriangle className="size-4" />, // POOR: Poor connection quality.
  4: <Slash className="size-4" />, // DISCONNECTED: Transmission interrupted.
  5: <RefreshCcw className="size-4" />, // RECONNECTING: In the process of reconnecting.
  6: <XCircle className="size-4" />, // LOST_CONNECTION: Complete loss of connection.
};

function setConnectionStatusIcon(status: number) {
  return connectionStatusIcons[status as keyof typeof connectionStatusIcons];
}

export default function DisputeRoom({ searchParams }: ComponentProps) {
  const roomId = searchParams.roomId;
  const groupId = searchParams.groupId;
  const userType = searchParams.userType;

  const { toast } = useToast();
  const uploadImageInputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();
  const superviz = useSuperviz();
  const context = useSuperVizContext();
  const isSubscribed = useRef(false);
  const formRef = useRef<FormEvent<HTMLFormElement>>(null);
  const setMessage = useMutation(api.store.storeMessage);
  const { subscribe, isReady, publish, unsubscribe } = useRealtime("default");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const filesRef = useRef<any[]>([]);

  const doesDisputeExist = useQuery(
    api.dispute.doesDisputeExistForThisRoom,
    roomId && groupId ? { groupId, roomId } : "skip"
  );
  const messages = useQuery(
    api.store.fetchRoomMessages,
    roomId && groupId ? { roomId, groupId } : "skip"
  );
  const roomInfo = useQuery(
    api.escrow.getRoomStatus,
    roomId && groupId ? { groupId, roomId } : "skip"
  );

  const sendMessageToChatBot = async (payload: SubscriptionPayload) => {
    if (!context.participant) {
      console.log("User is not defined.");
      return;
    }

    // Make sure the current user's message is sent, if not it will also send the
    // other persons subscribed message. It helps avoid duplicating messages.
    if (payload.data.participantId === context.participant.id) {
      const userPrompt = payload.data.message;

      if (!userPrompt) {
        console.log("User did not provide any prompt.");
        return;
      }

      // Upload images with detail prompt
      if (filesRef.current && filesRef.current.length > 0) {
        const prompt = `#${context.participant.name}: ${userPrompt}`;
        const data = await prepareImagePrompt(prompt, filesRef.current);

        const newData = await setMessage({
          groupId,
          roomId,
          newMessage: {
            role: "user",
            content: [data.content],
            id: generateId(),
            uploadType: "image-prompt",
          },
        });
      } else {
        const newData = await setMessage({
          groupId,
          roomId,
          newMessage: {
            role: "user",
            id: generateId(),
            content: `#${context.participant.name}: ${userPrompt}`,
            uploadType: "text-prompt",
          },
        });
      }

      filesRef.current = [];
      setUploadedFiles([]); // safe measure
      console.log("Payload: ", payload);
    }
  };

  useEffect(
    () => {
      if (doesDisputeExist && !doesDisputeExist.data) {
        router.push("/");
      } else if (
        doesDisputeExist &&
        doesDisputeExist.data &&
        roomInfo &&
        roomInfo.data
      ) {
        const room = roomInfo.data;
        const user = userType === "creator" ? room.creator : room.reciever!;

        context.setRoomId(room.roomId);
        context.setGroup({
          id: `group-${room.roomId}`,
          name: `group-${room.roomId}`,
        });
        context.setParticipant({
          id: `participant-${user.visitorId}`,
          name: `participant-${user.username}`,
        });

        console.log("Room details was found.");
      }
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [roomInfo, userType, doesDisputeExist]
  );

  // To run after we set room details
  useEffect(
    () => {
      if (context.roomId && context.group && doesDisputeExist?.data) {
        superviz.startRoom();
        console.log("Room has started.");
      }
    },

    /* eslint-disable react-hooks/exhaustive-deps */
    [context, doesDisputeExist]
  );

  // Subscribe to dispute messages
  useEffect(() => {
    if (!isReady || isSubscribed.current || !doesDisputeExist?.data) {
      return;
    }

    subscribe("dispute_message", sendMessageToChatBot);
    console.log("Subscribed");

    isSubscribed.current = true;
    return () => {
      unsubscribe("dispute_message", (data) => {
        console.log("unsubscribed: ", data);
        isSubscribed.current = false;
      });
    };
  }, [isReady, doesDisputeExist, uploadedFiles]);

  if (!roomId || !groupId) {
    return notFound();
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const newFiles = await Promise.all(
        Array.from(files).map(async (file) => {
          const base64 = await encodeImageToBase64(file);
          return { name: file.name, base64, index: uuidv4() };
        })
      );

      filesRef.current = [...filesRef.current, ...newFiles];
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

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
          <div>
            {/* Connection status */}
            {setConnectionStatusIcon(context.connectionStatus)}
          </div>
        </div>

        <WalletCard />

        <div className="w-full flex mt-5">
          {/* Who is online */}
          <div id="who_is_online_position"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <ChatHeader />
        <div className="flex-1 p-2">
          {messages && messages.data.length > 0 ? (
            <ScrollArea className="h-[600px] w-full border px-7 pb-16">
              <ChatBody messages={messages.data} />
            </ScrollArea>
          ) : (
            <div className="flex w-full pt-28 justify-center">
              <span>There are no messages</span>
            </div>
          )}

          <Input
            multiple
            id="picture"
            type="file"
            ref={uploadImageInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden cursor-none invisible"
          />
        </div>
        <div className="sticky bottom-0 z-10 shadow-md bg-background p-4">
          {uploadedFiles && uploadedFiles.length > 0 && (
            <div className="flex flex-row gap-2 absolute bottom-20 px-4 w-full md:w-[500px] md:px-0">
              {uploadedFiles.map((file) => (
                <div key={file.index} className="relative group">
                  <Image
                    src={file.base64}
                    alt={file.name}
                    className="rounded-md w-16"
                    width={90}
                    height={90}
                  />

                  <div
                    onClick={() => {
                      const updatedFiles = uploadedFiles.filter(
                        (item) => item.index !== file.index
                      );
                      setUploadedFiles(updatedFiles);
                    }}
                    className="hidden group-hover:flex items-center justify-center absolute top-1/2 right-2.5 -translate-y-1/2 bg-gray-800 text-white rounded-full w-6 h-6 text-xs cursor-pointer"
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
          )}

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

              if (!input) {
                console.log("Prompt is empty.");
                return;
              }

              publish("dispute_message", {
                message: input,
                participantId: context.participant.id,
                participantName: context.participant.name,
              } as DisputePayload);

              const textArea = textAreaRef.current;

              if (textArea) {
                textArea.value = "";
              }

              setUploadedFiles([]); // safe measure
            }}
            className="relative"
          >
            <Button
              size="icon"
              type="button"
              variant="outline"
              className="absolute w-8 h-8 top-3 left-3"
              onClick={() => {
                const uploadImageInput = uploadImageInputRef.current;
                if (uploadImageInput) {
                  uploadImageInput.click();
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
              ref={textAreaRef}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && e.shiftKey == false) {
                  e.preventDefault();

                  const parentForm = e.currentTarget.closest("form");

                  if (parentForm) {
                    // Trigger a submit event, which will invoke the onSubmit handler
                    const submitEvent = new Event("submit", {
                      cancelable: true,
                      bubbles: true,
                    });
                    parentForm.dispatchEvent(submitEvent);
                  }
                }
              }}
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

const ChatHeader = () => {
  const { hangUp } = useVideo();
  const context = useSuperVizContext();

  return (
    <div className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-16 sm:px-6">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-sm mt-3 space-x-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                      context.setIsVideoEnabled(true);
                      console.log("Live cam has started.");
                    }}
                  >
                    <Video className="h-5 w-5" />
                    <span className="sr-only">Start video</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Start video</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    onClick={() => {
                      hangUp();
                      context.setIsVideoEnabled(false);
                      console.log("Camera has been terminated.");
                    }}
                  >
                    <VideoOff className="h-5 w-5" />
                    <span className="sr-only">Stop video</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Stop video</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => {}}>
                <EllipsisVertical className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>End dispute</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

type ImageContent = {
  type: "image_url";
  imageUrl: { url: string; detail: string | null };
};

type ChatBodyProps = {
  messages: {
    id: string;
    content: string | ImageContent[];
    prefix?: boolean;
    role: "user" | "assistant" | "system";
  }[];
};

const ChatBody = ({ messages }: ChatBodyProps) => {
  return (
    <div className="grid gap-4">
      {messages.map((message) => {
        if (
          message.role === "assistant" &&
          typeof message.content === "string"
        ) {
          return (
            <LeftAlignMessage key={message.id} content={message.content} />
          );
        }

        if (message.role === "user" && typeof message.content === "string") {
          return (
            <RightAlignMessage key={message.id} content={message.content} />
          );
        }

        if (
          message.role === "user" &&
          Array.isArray(message.content) &&
          typeof message.content !== "string"
        ) {
          return (
            <RightAlignMessageWithImages
              key={message.id}
              content={message.content as ImageContent[]}
            />
          );
        }
      })}
    </div>
  );
};

const LeftAlignMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="grid gap-1 rounded-lg bg-muted p-3">
        <div className="font-medium">AI</div>
        <div className="text-sm leading-relaxed">{stripReply(content)}</div>
      </div>
    </div>
  );
};

const RightAlignMessage = ({ content }: { content: string }) => {
  return (
    <div className="flex items-start gap-4 justify-end">
      <div className="grid gap-1 rounded-lg bg-primary p-3 text-primary-foreground">
        <div className="font-medium">You</div>
        <div className="text-sm leading-relaxed">{stripSent(content)}</div>
      </div>
    </div>
  );
};

const RightAlignMessageWithImages = ({
  content,
}: {
  content: ImageContent[];
}) => {
  // Extract the last image detail from the array (if exists)
  const lastDetail =
    content.length > 0 ? content[content.length - 1].imageUrl.detail : "";

  return (
    <div className="flex flex-col items-end gap-2">
      {/* Text Section */}
      <div className="grid gap-1 rounded-lg bg-primary p-3 text-primary-foreground">
        <div className="font-medium">You</div>
        <div className="text-sm leading-relaxed">
          {stripSent(lastDetail || "")}
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap gap-2">
        {content.map((imageContent, index) => (
          <Image
            key={index}
            src={imageContent.imageUrl.url}
            alt={imageContent.imageUrl.detail || "Image"}
            width={65}
            height={65}
            className="rounded-lg shadow-md"
            priority={false}
          />
        ))}
      </div>
    </div>
  );
};

// Helper functions for stripping text
function stripReply(input: string): string {
  const regex = /^#participant-[\w-]+-reply:\s*/;
  return input.replace(regex, "").trim();
}

function stripSent(input: string): string {
  const regex = /^#participant-[\w-]+:\s*/;
  return input.replace(regex, "").trim();
}
