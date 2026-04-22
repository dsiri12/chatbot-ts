import type { ChatMessageType } from "../types/ChatMessageType";
import { ChatMessage } from "./ChatMessage";

type Props = {
  chatMessages: ChatMessageType[];
};

export const ChatMessages = ({ chatMessages }: Props) => {
  return (
    <>
      {chatMessages.map(({ id, message, sender }) => (
        <ChatMessage
          key={id}
          message={message}
          sender={sender}
        />
      ))}
    </>
  );
};
