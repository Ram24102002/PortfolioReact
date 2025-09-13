
import React, { useState } from "react";

const initialMessages = [
  { id: 1, sender: "Alice", subject: "Meeting tomorrow", read: false },
  { id: 2, sender: "Bob", subject: "Project update", read: true },
  { id: 3, sender: "Charlie", subject: "Hello!", read: false },
];

const temp = () => {
  const [messages, setMessages] = useState(initialMessages);

  const toggleRead = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, read: !msg.read } : msg
      )
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Inbox</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex justify-between items-center p-4 border rounded-md ${
              msg.read ? "bg-gray-800" : "bg-gray-900"
            }`}
          >
            <div>
              <p className="font-semibold">{msg.sender}</p>
              <p className="text-gray-300">{msg.subject}</p>
            </div>
            <button
              onClick={() => toggleRead(msg.id)}
              className={`px-3 py-1 rounded-md text-sm ${
                msg.read
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {msg.read ? "Read" : "Unread"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default temp;
