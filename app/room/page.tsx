"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSuperVizContext } from "@/context";
import { api } from "../../convex/_generated/api";
import useCopyToClipboard from "@/hooks/use-clipboard";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "convex/react";
import { AlertTriangle, CircleCheck, Copy, Hourglass, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { PaymentConfirmed } from "@/components/ui/dispute";

type EscrowTimerProps = {
  roomId: string;
  groupId: string;
  startEscrow: boolean;
  paymentStatus: "dispute" | "pending" | "default" | "refused";
  initialTimeInSeconds?: number;
};

type WaitingRoomProps = {
  params: {};
  searchParams: { roomId: string; groupId: string };
};

export default function WaitingRoom({ searchParams }: WaitingRoomProps) {
  const roomId = searchParams.roomId;
  const groupId = searchParams.groupId;
  const context = useSuperVizContext();
  const [startEscrow, setStartEscrow] = useState(false);
  const [disputeRoomUrl, setDisputeRoomUrl] = useState("");

  const getRoomStatus = useQuery(
    api.escrow.getRoomStatus,
    groupId && roomId ? { groupId, roomId } : "skip"
  );

  useEffect(() => {
    if (getRoomStatus && getRoomStatus.data?.payment_status === "pending") {
      setStartEscrow(true);
    } else if (
      (getRoomStatus && getRoomStatus.data?.payment_status === "refused") ||
      (getRoomStatus && getRoomStatus.data?.payment_status === "dispute")
    ) {
      const room = getRoomStatus.data!;

      const userType: "creator" | "reciever" =
        room.creator.visitorId === context.visitorId ? "creator" : "reciever";

      setDisputeRoomUrl(
        `/dispute?userType=${userType}&roomId=${room.roomId}&groupId=${room.groupId}`
      );
    } else {
      setStartEscrow(false);
    }
  }, [getRoomStatus, context.visitorId]);

  return (
    <main className="w-screen h-screen">
      <EscroNavbar />
      <div className=" h-full flex flex-col pt-10 items-center bg-gradient-to-r from-blue-100 to-purple-100">
        {/* {getRoomStatus && getRoomStatus.data?.payment_status === "pending" && (
          <PaymentConfirmed />
        )} */}

        {getRoomStatus && getRoomStatus.data?.payment_status === "pending" && (
          <EscrowTimer
            roomId={roomId}
            groupId={groupId}
            startEscrow={startEscrow}
            paymentStatus={getRoomStatus.data?.payment_status}
            initialTimeInSeconds={25}
          />
        )}

        {/* {getRoomStatus && getRoomStatus.data?.payment_status === "refused" && (
          <Card>
            <CardHeader>Third party refused to pay.</CardHeader>
            <CardContent className="justify-center flex flex-col">
              <Link href={disputeRoomUrl} className="w-full">
                <Button className="w-full">Go to dispute</Button>
              </Link>
            </CardContent>
          </Card>
        )} */}

        {getRoomStatus && getRoomStatus.data?.payment_status === "dispute" && (
          <Card>
            <CardHeader>Room has been suspended, goto dispute chat.</CardHeader>
            <CardContent className="justify-center flex flex-col">
              <Link href={disputeRoomUrl} className="w-full">
                <Button className="w-full">Go to dispute</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {!getRoomStatus ||
          (getRoomStatus.data?.payment_status === "default" && (
            <div>
              There is nothing to show for now. Waiting for user to accept.
            </div>
          ))}
      </div>
    </main>
  );
}

function EscrowTimer(props: EscrowTimerProps) {
  const router = useRouter();
  const context = useSuperVizContext();
  const [timeLeft, setTimeLeft] = useState(25);
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const createDispute = useMutation(api.dispute.createDisputeRoom);

  const handleCreateDispute = async () => {
    try {
      if (!props.roomId || !props.groupId || !context.visitorId) {
        console.log("roomId and groupId are undefined.");
        return;
      }

      await createDispute({
        roomId: props.roomId,
        creator: context.visitorId,
      });

      // Only the creator can initiate disputes
      router.push(
        `/dispute?userType=${"creator"}roomId=${props.roomId}&groupId=${props.groupId}&userType=${"creator"}`
      );
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (timeLeft > 0 && props.startEscrow) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      if (props.paymentStatus === "pending") {
        setIsTimerExpired(true);
      } else {
        setIsTimerExpired(true);
      }
    }
  }, [timeLeft, props]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Escrow Service
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Hourglass className="w-16 h-16 mx-auto mb-4 text-blue-500 animate-pulse" />
        <p className="text-xl mb-4">Hold on, waiting for user to pay</p>
        <div className="text-4xl font-bold mb-4" aria-live="polite">
          {formatTime(timeLeft)}
        </div>
        {isTimerExpired && (
          <p className="text-red-500 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Payment time has expired
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={async () => handleCreateDispute()}
          disabled={!isTimerExpired}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Initiate Dispute
        </Button>
      </CardFooter>
    </Card>
  );
}

function EscroNavbar() {
  const { toast } = useToast();
  const query = useSearchParams();
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleClose = useCallback(() => {
    // Implement your close logic here
    console.log("Close button clicked");
  }, []);

  return (
    <div className="sticky top-0 px-3 z-50 w-full border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center">
        <div className="hidden md:flex flex-1">
          <a className=" flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Escrow</span>
          </a>
        </div>

        <div className="flex items-center space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const roomId = query.get("roomId");
                const groupId = query.get("groupId");

                copyToClipboard(
                  `${location.origin}/join-room?roomId=${roomId}&groupId=${groupId}`
                );
              }}
            >
              <span className="sr-only">Copy Invite URL</span>
              <Copy className="h-4 w-4" />
              {!copied && <span>Copy Invite URL</span>}
              {copied && <span>URL Copied!!</span>}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className=""
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" />
              <span className="">Close</span>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
