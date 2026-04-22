import { useState } from "react";
import type { ChatMessageType } from "./types/ChatMessageType";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";

export const App = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

  const sendMessage = (userMessage: string, robotResponse: string) => {
    const newChatMessages = [
      ...chatMessages,
      {
        message: userMessage,
        sender: "user",
        id: new Date().getTime(),
      },
      {
        message: robotResponse,
        sender: "robot",
        id: new Date().getTime() + 1,
      },
    ];

    setChatMessages(newChatMessages);
  };

  return (
    <>
      <ChatInput sendMessage={sendMessage} />

      <ChatMessages chatMessages={chatMessages} />
    </>
  );
};
