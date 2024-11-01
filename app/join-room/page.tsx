"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSuperVizContext } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "convex/react";
import { AlertTriangle, Hourglass, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../convex/_generated/api";

type ViewTypes = "accept_escrow" | "start_timer" | "payment_complete";

type EscrowTimerProps = {
  roomId: string;
  groupId: string;
  startEscrow: boolean;
  paymentStatus: "dispute" | "pending" | "default" | "refused";
  initialTimeInSeconds?: number;
};

type WaitingRoomProps = {
  params: {};
  searchParams: { view: ViewTypes; roomId: string; groupId: string };
};

export default function WaitingRoom({ searchParams }: WaitingRoomProps) {
  const router = useRouter();
  const roomId = searchParams.roomId;
  const groupId = searchParams.groupId;

  const context = useSuperVizContext();
  const [startEscrow, setStartEscrow] = useState(false);
  const [disputeRoomUrl, setDisputeRoomUrl] = useState("");

  const getRoomStatus = useQuery(
    api.escrow.getRoomStatus,
    groupId && roomId ? { groupId, roomId } : "skip"
  );

  useEffect(
    () => {
      async function onRoomStatusChange() {
        if (getRoomStatus && getRoomStatus.data?.payment_status === "pending") {
          setStartEscrow(true);
        } else if (
          getRoomStatus &&
          getRoomStatus.data?.payment_status === "dispute"
        ) {
          const room = getRoomStatus.data!;

          const userType: "creator" | "reciever" =
            room.creator.visitorId === context.visitorId
              ? "creator"
              : "reciever";

          // router.push(
          //   `/dispute?userType=${userType}&roomId=${room.roomId}&groupId=${room.groupId}`
          // );

          setDisputeRoomUrl(
            `/dispute?userType=${userType}&roomId=${room.roomId}&groupId=${room.groupId}`
          );
        } else if (
          getRoomStatus &&
          getRoomStatus.data?.payment_status === "refused"
        ) {
          const room = getRoomStatus.data!;

          const userType: "creator" | "reciever" =
            room.creator.visitorId === context.visitorId
              ? "creator"
              : "reciever";

          setDisputeRoomUrl(
            `/dispute?userType=${userType}&roomId=${room.roomId}&groupId=${room.groupId}`
          );
        } else {
          setStartEscrow(false);
        }
      }

      onRoomStatusChange();
    },

    /* eslint-disable react-hooks/exhaustive-deps */
    [getRoomStatus, context.visitorId]
  );

  return (
    <main className="w-screen h-screen">
      <EscroNavbar />
      <div className=" h-full flex flex-col pt-10 items-center bg-gradient-to-r from-blue-100 to-purple-100">
        {/* {getRoomStatus && getRoomStatus.data?.payment_status === "" && (
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

        {getRoomStatus && getRoomStatus.data?.payment_status === "refused" && (
          <Card>
            <CardHeader>
              You have decided not to pay. Prepare for trouble.
            </CardHeader>
            <CardContent className="justify-center flex flex-col">
              <Button className="w-full">
                <Link href={disputeRoomUrl} className="w-full">
                  Go to dispute
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

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

        {getRoomStatus &&
          getRoomStatus.data &&
          getRoomStatus.data.payment_status === "default" && (
            <AcceptEscrow
              roomId={roomId}
              groupId={groupId}
              terms={getRoomStatus.data.terms}
              asset={getRoomStatus.data.asset}
              amount={getRoomStatus.data.amount}
            />
          )}
      </div>
    </main>
  );
}

function EscrowTimer(props: EscrowTimerProps) {
  const [timeLeft, setTimeLeft] = useState(25);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const refuseToPay = useMutation(api.escrow.refusePayment);

  useEffect(() => {
    if (timeLeft > 0 && props.startEscrow) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      if (props.paymentStatus === "pending") {
        setIsTimerExpired(true);
      } else {
        setIsTimerExpired(false);
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
        <p className="text-xl mb-4">Please pay within the stipulated time</p>
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
          // onClick={async () => handleCreateDispute()}
          onClick={async () =>
            refuseToPay({ groupId: props.groupId, roomId: props.roomId })
          }
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Refuse to pay
        </Button>
      </CardFooter>
    </Card>
  );
}

const joinEscrowRoomSchema = z.object({
  username: z.string().min(2, {
    message: "Username is short.",
  }),
  amount_to_recieve: z.string(),
  asset_to_recieve: z.string(),
  terms: z.string(),
});

function AcceptEscrow(props: {
  amount: string;
  asset: string;
  terms: string;
  roomId: string;
  groupId: string;
}) {
  const context = useSuperVizContext();
  const joinEscrowRoom = useMutation(api.escrow.joinEscrowRoom);

  const form = useForm<z.infer<typeof joinEscrowRoomSchema>>({
    resolver: zodResolver(joinEscrowRoomSchema),
    defaultValues: {
      username: "",
      amount_to_recieve: "0",
      asset_to_recieve: "USDT",
      terms: "",
    },
  });

  useEffect(
    () => {
      if (props) {
        form.setValue("terms", props.terms);
        form.setValue("asset_to_recieve", props.asset);
        form.setValue("amount_to_recieve", props.amount);
      }
    },

    /* eslint-disable react-hooks/exhaustive-deps */
    [props]
  );

  async function onSubmit(values: z.infer<typeof joinEscrowRoomSchema>) {
    if (!props.roomId || !props.groupId || !context.visitorId) {
      console.log("RoomId, GroupId and VisitorId is undefined.");
      return;
    }

    await joinEscrowRoom({
      roomId: props.roomId,
      groupId: props.groupId,
      payment_status: "pending",
      reciever: {
        username: values.username,
        visitorId: context.visitorId,
      },
    });
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Accept Escrow</CardTitle>
        <CardDescription>
          Someone is hoping to create an escrow with you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="user_name">Username</Label>
              <Input
                id="user_name"
                type="text"
                placeholder="Your username"
                {...form.register("username")}
              />

              {form.formState.errors.username && (
                <span className="p-4 text-red-400 text-sm tracking-tighter">
                  {form.formState.errors.username.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to send</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                {...form.register("amount_to_recieve")}
                disabled
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="token-types">Asset to recieve</Label>
            <Input
              id="asset"
              type="text"
              placeholder="Tether (USDT)"
              disabled
              {...form.register("asset_to_recieve")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="terms">Escrow Terms</Label>
            <Textarea
              id="terms"
              rows={2}
              {...form.register("terms")}
              disabled
              placeholder="Enter any additional terms or conditions..."
            />
          </div>
          <Button className="ml-auto">Accept Escrow and Terms</Button>
        </form>
      </CardContent>
    </Card>
  );
}

function EscroNavbar() {
  return (
    <div className="sticky top-0 px-3 z-50 w-full border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center">
        <div className="hidden md:flex flex-1">
          <Link className="flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Buyer View</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <Link href={"/"}>
              <Button variant="outline" size="sm">
                <span className="sr-only">Close</span>
                <X className="h-4 w-4" />
                <span className="">Close</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
