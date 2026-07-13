import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/aiService";

function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm StudentOS AI. Ask me anything.",
    },
  ]);

  const handleSend = async (message) => {
    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    try {
      const reply = await sendMessage(message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    } catch (err) {
      console.error("AI Error:", err);

      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Unknown server error";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `❌ ${errorMessage}`,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        🤖 AI Study Assistant
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-6 h-[650px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-5">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          ))}
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default AIAssistant;