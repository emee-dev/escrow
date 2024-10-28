"use client";

import { Entity, useSuperVizContext } from "@/context";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {
  Realtime,
  SuperVizRoomProvider,
  WhoIsOnline,
} from "@superviz/react-sdk";
import { useEffect } from "react";
import { hasWindow } from "std-env";

type Participant = {
  activeComponents: any[];
  avatar?: string;
  email?: string;
  id: string;
  name: string;
  slot: {
    color: "";
    colorName: "";
    index: null;
    textColor: "";
    timestamp: number;
  };
};

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const context = useSuperVizContext();

  const onParticipantJoined = (participant: Participant) => {
    console.log("Participant joined", participant);
  };

  useEffect(() => {
    async function initialRun() {
      if (hasWindow) {
        const { ClientJS } = await import("clientjs");
        const clientjs = new ClientJS();
        const visitorId = clientjs.getFingerprint();

        console.log("visitorId: ", visitorId);
        context.setVisitorId(visitorId);
        
      }
    }

    initialRun();
  }, []);

  return (
    <ConvexProvider client={convex}>
      <SuperVizRoomProvider
        debug
        developerKey={process.env.NEXT_PUBLIC_SUPERVIZ_DEVELOPER_TOKEN!}
        group={context.group as Entity}
        participant={context.participant as Entity}
        roomId={context.roomId as string}
        stopAutoStart={true}
        // @ts-ignore
        onParticipantJoined={onParticipantJoined}
      >
        {children}
        <Realtime />
        {/* <WhoIsOnline position="who_is_online_position" /> */}
      </SuperVizRoomProvider>
    </ConvexProvider>
  );
};

export default Provider;
