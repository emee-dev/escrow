import { create } from "zustand";

export type Entity = {
  id: string;
  name: string;
};

type SuperViz = {
  group: Entity | null;
  participant: Entity | null;
  roomId: string | undefined;
  visitorId: number | undefined;

  setGroup: (group: SuperViz["group"]) => void;
  setParticipant: (participant: SuperViz["participant"]) => void;
  setRoomId: (roomId: string) => void;
  setVisitorId: (roomId: number) => void;
};

type AppContext = {
  superviz: SuperViz;
  application: SuperViz;
};

export const useSuperVizContext = create<SuperViz>((set) => ({
  group: null,
  participant: null,
  roomId: undefined,
  visitorId: undefined,

  setGroup: (group) => set({ group }),
  setParticipant: (participant) => set({ participant }),
  setRoomId: (roomId) => set({ roomId }),
  setVisitorId: (visitorId) => set({ visitorId }),
}));
