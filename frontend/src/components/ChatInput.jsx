import { useState } from "react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex gap-3 mt-6">
      <input
        type="text"
        value={message}
        placeholder="Ask your AI Study Assistant..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border rounded-xl p-4"
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;