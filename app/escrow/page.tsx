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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { api } from "@/convex/_generated/api";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "convex/react";
import {
  AlertTriangle,
  CircleCheck,
  Copy,
  Download,
  Hourglass,
  X,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { z } from "zod";
import { useSuperVizContext } from "@/context";

type ViewTypes =
  | "create_escrow"
  | "accept_escrow"
  | "escrow_timer"
  | "payment_complete";

type EscrowStartedProps = {
  initialTimeInSeconds?: number;
  handleDispute: () => void;
};

type WaitingRoomProps = {
  params: {};
  searchParams: { view: ViewTypes; roomId: string; groupId: string };
};

export default function WaitingRoom({ searchParams }: WaitingRoomProps) {
  const [roomUrl, setRoomUrl] = useState<string | undefined>(undefined);
  const [view, setView] = useState<
    "create_escrow" | "accept_escrow" | "escrow_timer" | "payment_complete"
    // >("create_escrow");
  >("accept_escrow");

  // const getEscrow = useQuery(api.escrow);

  useEffect(() => {
    if (searchParams.view) {
      setView(searchParams.view);
    }
  }, [searchParams]);

  const handleDispute = () => {
    console.log("Dispute initiated");
    // Add your dispute logic here
  };

  return (
    <main className="w-screen h-screen">
      <EscroNavbar />
      <div className=" h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
        {view === "create_escrow" && <CreateEscrow />}
        {view === "payment_complete" && <PaymentConfirmed />}
        {view === "escrow_timer" && (
          <EscrowStarted
            initialTimeInSeconds={30}
            handleDispute={handleDispute}
          />
        )}
        {view === "accept_escrow" && <AcceptEscrow />}
      </div>
    </main>
  );
}

function PaymentConfirmed() {
  return (
    <Card className="flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="flex items-center justify-center">
          <CircleCheck className="h-16 w-16 text-green-500" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Payment Confirmed
          </h1>
          <p className="text-muted-foreground">
            Your payment has been successfully processed.
          </p>
        </div>
        <Card>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Amount</div>
              <div className="font-medium">$499.99</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Recipient</div>
              <div className="font-medium">Acme Inc.</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Transaction ID</div>
              <div className="font-medium">12345678</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Payment Method</div>
              <div className="font-medium">Crypto (USDT)</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Card>
  );
}

function EscrowStarted({
  handleDispute,
  initialTimeInSeconds = 15,
}: EscrowStartedProps) {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  // const updateEscrowStatus = useMutation(api.escrow);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setIsTimerExpired(true);
    }
  }, [timeLeft]);

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
          onClick={handleDispute}
          disabled={!isTimerExpired}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Initiate Dispute
        </Button>
      </CardFooter>
    </Card>
  );
}

const createEscrowSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  amount_to_recieve: z.string(),
  asset_to_recieve: z.string(),
  terms: z.string(),
});

function CreateEscrow() {
  const context = useSuperVizContext();
  const createEscrow = useMutation(api.escrow.createEscrowRoom);

  const form = useForm<z.infer<typeof createEscrowSchema>>({
    resolver: zodResolver(createEscrowSchema),
    defaultValues: {
      username: "",
      amount_to_recieve: "0",
      asset_to_recieve: "USDT",
      terms: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createEscrowSchema>) {
    console.log(values);

    if (!context.roomId || !context.group?.id || !context.visitorId) {
      console.log("Context data was not set.");
      return;
    }

    await createEscrow({
      roomId: context.roomId,
      groupId: context.group?.id,
      payment_status: "not_accepted",
      terms: values.terms,
      creator: {
        username: values.username,
        visitorId: context.visitorId,
      },
      amount: values.amount_to_recieve,
      asset: values.asset_to_recieve,
    });
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Create New Escrow</CardTitle>
        <CardDescription>
          Set up an escrow to securely transfer funds or assets.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="user_name">Username</Label>
              <Input id="user_name" type="text" placeholder="Your username" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to recieve</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="token-types">Asset to recieve</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usdt">Tether (USDT)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="terms">Additional Terms</Label>
            <Textarea
              id="terms"
              rows={4}
              placeholder="Enter any additional terms or conditions..."
            />
          </div>
          <Button
            className="ml-auto"
            onClick={() => {
              // redirect to escrow ui
              // create room there and provide a share url button
            }}
          >
            Create Escrow
          </Button>
        </form>
      </CardContent>
      {/* <CardFooter>
        
      </CardFooter> */}
    </Card>
  );
}

function AcceptEscrow() {
  // const acceptEscrow = useMutation(api.escrow);

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Accept Escrow</CardTitle>
        <CardDescription>
          Someone is hoping to create an escrow with you.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="user_name">Username</Label>
            <Input id="user_name" type="text" placeholder="Your username" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount to send</Label>
            <Input id="amount" type="number" placeholder="0.00" disabled />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="token-types">Asset to recieve</Label>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usdt">Tether (USDT)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="terms">Additional Terms</Label>
          <Textarea
            rows={4}
            id="terms"
            disabled
            placeholder="Enter any additional terms or conditions..."
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="ml-auto"
          onClick={() => {
            // redirect to escrow ui
            // create room there and provide a share url button
          }}
        >
          Accept Escrow and Terms
        </Button>
      </CardFooter>
    </Card>
  );
}

function EscroNavbar() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copyUrlToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "URL Copied!",
          description:
            "The current page URL has been copied to your clipboard.",
          action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast({
          title: "Copy failed",
          description: "Unable to copy the URL. Please try again.",
          variant: "destructive",
        });
      });
  }, [toast]);

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
              variant="outline"
              size="sm"
              className=""
              onClick={copyUrlToClipboard}
            >
              <span className="sr-only">Copy URL</span>
              <Copy className="h-4 w-4" />
              <span className="">Copy URL</span>
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
