import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([
    { from: "Alice", text: "Hi everyone!" },
    { from: "Bob", text: "Hello Alice 👋" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setMessages([...messages, { from: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Community Chat</h2>
      <div className="bg-gray-100 p-4 rounded h-64 overflow-y-auto mb-4">
        {Array.isArray(messages) &&
          messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <strong>{msg.from}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
      </div>
      <form onSubmit={sendMessage} className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 rounded hover:bg-purple-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
