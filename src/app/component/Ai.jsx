import { useState } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `OPEN_API_KEY`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [...messages, newMessage],
      }),
    });

    const data = await response.json();
    const reply = {
      role: "assistant",
      content: data.choices[0].message.content,
    };

    setMessages([...messages, newMessage, reply]);
    setInput("");
  };

  return (
    <div className="p-4">
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === "user" ? "text-blue-500" : "text-green-500"
            }`}
          >
            <b>{msg.role === "user" ? "You:" : "ChatGPT:"}</b> {msg.content}
          </div>
        ))}
      </div>
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
