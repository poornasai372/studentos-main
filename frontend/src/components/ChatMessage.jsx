function ChatMessage({ sender, text }) {
  return (
    <div
      className={`flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl p-4 rounded-2xl ${
          sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;