import { useState } from "react";
import type { ChatMessageType } from "../types/ChatMessageType";
import { ChatMessage } from "./ChatMessage";

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

export const ChatMessages = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>(initChatMessages)
  
  const sendMessage = ()=> {
    setChatMessages([
      ...chatMessages,
      {
        message: 'test',
        sender: 'user',
        id: new Date().getTime()
      }
    ])
  }

  console.log(chatMessages)

  return (
    <>
    <button onClick={sendMessage}>Send message</button>

      {
        chatMessages.map((item) => (
          <ChatMessage
            key={item.id}
            message={item.message}
            sender={item.sender}
          />
        ))

        //  chatMessages.map((item) => {
        //     return (
        //       <ChatMessage key={item.id} message={item.message} sender={item.sender} />
        //     )
        //   })
      }
    </>
  );
};
