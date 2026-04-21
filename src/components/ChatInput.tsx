import { useState, type ChangeEvent } from "react";

export const ChatInput = () => {
  const [inputText, setInputText] = useState('');

  const saveInputText = (event: ChangeEvent<HTMLInputElement, HTMLInputElement> ) => {
    setInputText(event.target.value)
  }

  const sendMessage = () => {
    console.log(inputText)
  }
  return (
    <>
      <input placeholder="Send a message to Chatbot" size={30} onChange={saveInputText} />

      <button onClick={sendMessage}>Send</button>
    </>
  );
};

