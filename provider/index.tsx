"use client";

import { VideoConferenceStyles } from "@/consts";
import { Entity, useSuperVizContext } from "@/context";
import {
  Realtime,
  SuperVizRoomProvider,
  VideoConference,
  WhoIsOnline,
} from "@superviz/react-sdk";
import { ConvexProvider, ConvexReactClient } from "convex/react";
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
        try {
          const storedVisitorId = localStorage.getItem("visitorId");
          if (storedVisitorId) {
            context.setVisitorId(Number(storedVisitorId));
            return;
          }

          // Attempt to import ClientJS, generate fingerprint, and store it if not existing
          const { ClientJS } = await import("clientjs");
          const clientjs = new ClientJS();
          const visitorId = clientjs.getFingerprint();

          console.log("Generated visitorId: ", visitorId);

          // Attempt to store the fingerprint in local storage
          localStorage.setItem("visitorId", String(visitorId));

          // Set the fingerprint in context
          context.setVisitorId(visitorId);
        } catch (error) {
          console.error("Error in obtaining or setting visitor ID:", error);
        }
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

        {/* Manually enable the video chat */}
        {/* Could not find a way to do earlier. */}
        {context.isVideoEnabled && (
          <VideoConference
            // devices={{ videoInput: false, audioInput: false, audioOutput: false }}
            participantType="host"
            offset={{
              top: -15,
              right: -8,
              bottom: 0,
              left: 0,
            }}
            styles={VideoConferenceStyles}
            onConnectionStatusChange={(status) =>
              context.setConnectionStatus(status)
            }
          />
        )}

        <WhoIsOnline position="who_is_online_position" />
      </SuperVizRoomProvider>
    </ConvexProvider>
  );
};

export default Provider;
