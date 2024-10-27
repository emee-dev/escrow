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
import { CONSTANTS } from "@/consts";
import { useSuperVizContext } from "@/context";
import { useRealtime, useSuperviz } from "@superviz/react-sdk";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePaginatedQuery, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

type User = {
  user_id: number;
  user_name: string;
  user_wallet_balance: number;
  asset_identifier: "USDT" | "BTC";
};

type EscrowCreator = Pick<
  User,
  "user_id" | "user_name" | "asset_identifier"
> & {
  asset_amount_to_recieve: number;
  escrow_terms: string;
};

type EscrowPayer = Pick<User, "user_id" | "user_name" | "asset_identifier"> & {
  asset_amount_to_pay: number;
};

const User1AccountRecord: User = {
  user_id: 1,
  user_name: "Emee",
  user_wallet_balance: 100,
  asset_identifier: "USDT",
};

const User2AccountRecord: User = {
  user_id: 1,
  user_name: "Sam",
  user_wallet_balance: 10,
  asset_identifier: "USDT",
};

const ESCROW_CREATOR: EscrowCreator = {
  user_id: 2,
  user_name: "Sam",
  asset_amount_to_recieve: 10,
  asset_identifier: "USDT",
  escrow_terms: "I will not waste your time, pay me as soon as possible.",
};

const ESCROW_PAYER: EscrowPayer = {
  user_id: 2,
  user_name: "Samuel",
  asset_amount_to_pay: 10,
  asset_identifier: "USDT",
};

// useEffect(
//   () => {
//     context.setRoomId("roomId");
//     subscribe("text", (data: any) => console.log("Received: ", data));
//   },
//   /* eslint-disable react-hooks/exhaustive-deps */
//   [isReady]
// );

export default function LandingPage() {
  const context = useSuperVizContext();

  // useEffect(() => {
  //   console.log("context.visitorId", context.visitorId);
  // }, [context.visitorId]);

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

  // const escrows = [
  //   {
  //     id: "ESC001",
  //     title: "Project A Escrow",
  //     status: "Active",
  //     action: "View",
  //   },
  //   {
  //     id: "ESC002",
  //     title: "Service B Escrow",
  //     status: "Completed",
  //     action: "Close",
  //   },
  //   {
  //     id: "ESC003",
  //     title: "Transaction C Escrow",
  //     status: "Pending",
  //     action: "Review",
  //   },
  // ];

  // const disputes = [
  //   { id: "DSP001", status: "Open", goto: "Mediation", action: "Respond" },
  //   { id: "DSP002", status: "Resolved", goto: "Closed", action: "View" },
  //   {
  //     id: "DSP003",
  //     status: "Under Review",
  //     goto: "Arbitration",
  //     action: "Update",
  //   },
  // ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Escrow Management System</h1>
            <Button variant="default">Create New</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
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
