import  { useState,  } from "react";
import ChatInput from "../components/advisor/ChatInput";
import EmptyState from "../components/advisor/EmptyState";
import ChatWindow from "../components/advisor/ChatWindow";
import AdvisorHeader from "../components/advisor/AdvisorHeader";






export default function RelationshipAdvisorPage({ onNavigateHome }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("summarize");
  const [isStreaming, setIsStreaming] = useState(false);


;


  const handleSend = async (textToSend) => {
    const text = textToSend || input;

    if (!text.trim() || isStreaming) return;

    const newUserMsg = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, newUserMsg];

    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal: selectedGoal,
          messages: updatedMessages.map(({ ...message }) => message),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get advisor response");
      }

      const data = await response.json();

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Something went wrong. Even I can't analyze this mess right now.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#131114] text-stone-100 font-sans antialiased selection:bg-[#E08E79]/20 selection:text-[#E08E79]">
      {/* Header */}
      <AdvisorHeader
        onBack={onNavigateHome || (() => alert("Navigating home"))}
      />

      {/* Main Chat / Empty State */}
      {messages.length === 0 ? (
        <EmptyState
          onSelectPrompt={(text) => handleSend(text)}
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
        />
      ) : (
        <ChatWindow
          messages={messages}
          isStreaming={isStreaming}
        />
      )}

      {/* Input Area */}
      <ChatInput
        input={input}
        setInput={setInput}
        onSend={() => handleSend()}
        isStreaming={isStreaming}
      />
    </div>
  );
}
