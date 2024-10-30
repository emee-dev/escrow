"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useSuperVizContext } from "@/context";
import { generateId } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useConvex, useMutation, usePaginatedQuery } from "convex/react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../convex/_generated/api";
import { Doc, DataModel } from "@/convex/_generated/dataModel";

export default function LandingPage() {
  const router = useRouter();
  const context = useSuperVizContext();
  const convex = useConvex();

  const {
    results: escrows,
    isLoading: isLoadingEscrows,
    loadMore: loadMoreEscrows,
    status: statusEscrows,
  } = usePaginatedQuery(
    api.escrow.listEscrowRooms,
    context.visitorId
      ? {
          visitorId: context.visitorId,
        }
      : "skip",
    { initialNumItems: 5 }
  );

  const {
    results: disputes,
    isLoading: isLoadingDisputes,
    loadMore: loadMoreDisputes,
    status: statusDisputes,
  } = usePaginatedQuery(
    api.dispute.listDisputeRooms,
    context.visitorId
      ? {
          visitorId: context.visitorId,
        }
      : "skip",
    { initialNumItems: 5 }
  );

  useEffect(() => {
    console.log("disputes", disputes);
  }, [disputes]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Escrow System</h1>
            <CreateRoomDialog />
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-9 px-4 py-8">
        <Tabs defaultValue="escrows" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="escrows">Escrows</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
          </TabsList>
          <TabsContent value="escrows">
            <EscrowsTable
              escrows={escrows}
              isLoading={isLoadingEscrows}
              status={statusEscrows}
              loadMore={loadMoreEscrows}
            />
          </TabsContent>
          <TabsContent value="disputes">
            <DisputesTable
              router={router}
              convex={convex}
              context={context}
              disputes={disputes}
              status={statusDisputes}
              isLoading={isLoadingDisputes}
              loadMore={loadMoreDisputes}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function EscrowsTable({
  escrows,
  isLoading,
  status,
  loadMore,
}: {
  escrows: Doc<"escrowRooms">[];
  isLoading: boolean;
  status: any;
  loadMore: (v: number) => void;
}) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (status === "Exhausted" && escrows.length === 0) {
    return <EmptyState message="No escrows found." />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {escrows.map((escrow) => (
            <TableRow key={escrow._id}>
              <TableCell>{escrow._id}</TableCell>
              <TableCell>
                $ {escrow.amount} - {escrow.asset}
              </TableCell>
              <TableCell>{escrow.payment_status}</TableCell>
              <TableCell>
                <Link
                  href={`/room?roomId=${escrow.roomId}&groupId=${escrow.groupId}`}
                >
                  <Button variant="outline" size="sm">
                    Goto Room
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {status === "CanLoadMore" && (
        <div className="mt-4 text-center">
          <Button onClick={() => loadMore(5)} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

function DisputesTable({
  disputes,
  isLoading,
  status,
  loadMore,
  convex,
  context,
  router,
}: {
  disputes: Doc<"disputeRooms">[];
  isLoading: boolean;
  status: any;
  loadMore: (v: number) => void;
  convex: any;
  context: any;
  router: any;
}) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (status === "Exhausted" && disputes.length === 0) {
    return <EmptyState message="No disputes found." />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Escrow Id</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disputes.map((dispute) => (
            <TableRow key={dispute._id}>
              <TableCell>{dispute._id}</TableCell>
              <TableCell>{dispute.disputeStatus}</TableCell>
              <TableCell>{dispute.escrowRoomId}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    const details = await convex.query(api.escrow.getRoomById, {
                      escrowRoomId: dispute.escrowRoomId,
                    });

                    if (!details.data) {
                      console.log("Unable to redirect to dispute chat.");
                      return;
                    }

                    const userType =
                      details.data.creator.visitorId === context.visitorId
                        ? "creator"
                        : "reciever";

                    router.push(
                      `/dispute?userType=${userType}&roomId=${details.data.roomId}&groupId=${details.data.groupId}`
                    );
                  }}
                >
                  Goto Chat
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {status === "CanLoadMore" && (
        <div className="mt-4 text-center">
          <Button onClick={() => loadMore(5)} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

function LoadingState() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-10">
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

const createRoomSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  amount_to_recieve: z.string(),
  asset_to_recieve: z.string(),
  terms: z.string(),
});

function CreateRoomDialog() {
  const router = useRouter();
  const context = useSuperVizContext();
  const createEscrow = useMutation(api.escrow.createEscrowRoom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      username: "",
      amount_to_recieve: "10",
      asset_to_recieve: "USDT",
      terms: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createRoomSchema>) {
    setIsSubmitting(true);
    try {
      if (!context.visitorId) {
        console.log("Could not find visitorId");
        return;
      }

      const roomId = generateId();
      const group = {
        id: `group-${roomId}`,
        name: `group-${roomId}`,
      };

      const participant = {
        id: `participant-${context.visitorId}`,
        name: `participant-${values.username}`,
      };

      context.setGroup(group);
      context.setRoomId(roomId);
      context.setParticipant(participant);

      await createEscrow({
        roomId: roomId,
        groupId: group.id,
        payment_status: "default",
        terms: values.terms,
        creator: {
          username: values.username,
          visitorId: context.visitorId,
        },
        amount: values.amount_to_recieve,
        asset: values.asset_to_recieve,
      });

      router.push(`/room?roomId=${roomId}&groupId=${group.id}`);
    } catch (error: any) {
      console.error("Failed to create room: ", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create Escrow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Escrow</DialogTitle>
          <DialogDescription>
            Set up an escrow to securely transfer funds or assets.
          </DialogDescription>
        </DialogHeader>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to receive</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                {...form.register("amount_to_recieve")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="token-types">Asset to receive</Label>
            <Input
              id="asset"
              type="text"
              value="USDT"
              placeholder="Tether (USDT)"
              {...form.register("asset_to_recieve")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="terms">Additional Terms</Label>
            <Textarea
              id="terms"
              rows={2}
              {...form.register("terms")}
              placeholder="Enter any additional terms or conditions..."
            />
          </div>
          <Button type="submit" className="ml-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Escrow"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
