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
import { api } from "../convex/_generated/api";
import { useMutation, usePaginatedQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LandingPage() {
  const context = useSuperVizContext();

  const {
    results: escrows,
    isLoading: isLoadingEscrows,
    loadMore: loadMoreEscros,
    status,
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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Escrow Management System</h1>
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
                {escrows &&
                  escrows.map((escrow) => (
                    <TableRow key={escrow._id}>
                      <TableCell>{escrow._id}</TableCell>
                      <TableCell>
                        {/* title */}$ {escrow.amount} - {escrow.asset}
                      </TableCell>
                      <TableCell>{escrow.payment_status}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          {/* {escrow.} */}
                          BTN
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="disputes">
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
                {disputes &&
                  disputes.map((dispute) => (
                    <TableRow key={dispute._id}>
                      <TableCell>{dispute._id}</TableCell>
                      <TableCell>{dispute.disputeStatus}</TableCell>
                      <TableCell>{dispute.escrowRoomId}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          {/* {dispute.action} */}
                          BTN
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </main>
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
  const context = useSuperVizContext();
  const router = useRouter();
  const createEscrow = useMutation(api.escrow.createEscrowRoom);

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
                <Label htmlFor="amount">Amount to recieve</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  {...form.register("amount_to_recieve")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="token-types">Asset to recieve</Label>
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
            <Button type="submit" className="ml-auto">
              Create Escrow
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
