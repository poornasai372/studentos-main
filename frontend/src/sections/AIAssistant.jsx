function AIAssistant() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        🤖 AI Study Assistant
      </h2>

      <textarea
        rows="4"
        placeholder="Ask your study questions..."
        className="w-full border rounded-xl p-4 resize-none"
      />

      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
        Ask AI
      </button>

    </div>
  );
}

export default AIAssistant;