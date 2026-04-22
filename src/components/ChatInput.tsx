import { useState, type ChangeEvent } from "react";
import { Chatbot } from "supersimpledev";

type Props = {
  sendMessage: (msg: string) => void;
};

export const ChatInput = ({ sendMessage }: Props) => {
  const [inputText, setInputText] = useState("");

  const saveInputText = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setInputText(event.target.value);
  };

  const sendMessage2 = () => {
    if (inputText.trim().length === 0) {
      return
    }

    sendMessage(inputText)
  
    const response = Chatbot.getResponse(inputText)
    console.log(response)

    setInputText('')
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        value={inputText}
        onChange={saveInputText}
      />

      <button onClick={sendMessage2}>Send</button>
    </>
  );
};
