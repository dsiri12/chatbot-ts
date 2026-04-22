import { useState } from "react";
import type { ChatMessageType } from "./types/ChatMessageType";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";

const initChatMessages: ChatMessageType[] = [
  {
    id: 1,
    message: "hello chatbot",
    sender: "user",
  },
  {
    id: 2,
    message: "Hello! How can I help you?",
    sender: "robot",
  },
  {
    id: 3,
    message: "can you get me todays date?",
    sender: "user",
  },
  {
    id: 4,
    message: "Today is April 17",
    sender: "robot",
  },
];

export const App = () => {
  const [chatMessages, setChatMessages] = useState(initChatMessages);

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
