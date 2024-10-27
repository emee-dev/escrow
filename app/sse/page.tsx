"use client";

import { useEffect, useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ sender: number; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  // Initialize SSE connection on mount
  useEffect(() => {
    const baseURL = "http://localhost:4560";
    const eventSource = new EventSource(`${baseURL}/sse`);

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const sendMessage = async (sender: number) => {
    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender, text: input }),
    });
    setInput(""); // Clear input field after sending
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender === 10 ? "You" : "Friend"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={() => sendMessage(10)}>Send as You</button>
      <button onClick={() => sendMessage(20)}>Send as Friend</button>
    </div>
  );
};

export default ChatPage;
