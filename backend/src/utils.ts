type Store = {
  prefix?: boolean | undefined;
  id: string;
  content:
    | string
    | {
        type: "image_url";
        imageUrl: {
          url: string;
          detail: string | null;
        };
      }[];
  role: "system" | "user" | "assistant";
};

export type StoreResponse = {
  data: Store[];
  message: string;
};
export type SystemMessage = { id: string; role: "system"; content: string };

export const addSystemAndPrefix = (
  system: SystemMessage,
  messages: Store[]
) => {
  // Check if the first item is a system message; if not, prepend the system message.
  if (messages[0]?.role !== "system") {
    messages.unshift(system);
  }

  // Check if the last item is an assistant message and set prefix to true if so.
  if (messages[messages.length - 1]?.role === "assistant") {
    messages[messages.length - 1].prefix = true;
  }

  // Return the array using map method
  return messages.map(
    (msg) =>
      ({ role: msg.role, content: msg.content }) as Omit<SystemMessage, "id">
  );
};
