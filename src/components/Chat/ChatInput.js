import React, { useState } from "react";

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="flex-grow p-2 border rounded"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
