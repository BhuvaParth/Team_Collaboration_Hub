import React, { useState } from "react";
import ChatInput from "./ChatInput";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl mb-4">Chat Room</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="border-b py-2">
            {msg}
          </div>
        ))}
      </div>
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default ChatRoom;
