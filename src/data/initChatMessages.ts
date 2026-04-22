import type { ChatMessageType } from "../types/ChatMessageType";

export const initChatMessages: ChatMessageType[] = [
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