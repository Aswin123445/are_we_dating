import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-3xl mx-auto min-h-full flex flex-col justify-end">

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
          />
        ))}

        <div ref={messagesEndRef} />

      </div>
    </div>
  );
};

export default ChatWindow;
;
