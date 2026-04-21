import type { ChatMessageType } from "../types/ChatMessageType";
import { ChatMessage } from "./ChatMessage";

type Props = {
  chatMessages: ChatMessageType[];
};

export const ChatMessages = ({ chatMessages }: Props) => {
  return (
    <>
      {chatMessages.map((item) => (
        <ChatMessage
          key={item.id}
          message={item.message}
          sender={item.sender}
        />
      ))}
    </>
  );
};
