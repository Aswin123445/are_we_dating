import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={isUser ? "flex justify-end mb-6" : "flex justify-start mb-6"}
    >
      {isUser ? (
        <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-xs bg-white/[0.06] border border-white/10 px-4 py-3 text-stone-200">
          {message.content}
        </div>
      ) : (
        <div className="max-w-[85%] sm:max-w-[75%] text-stone-300 font-light leading-7">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-xl font-semibold text-stone-100 mb-3">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="text-lg font-semibold text-stone-100 mb-3">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-base font-semibold text-stone-100 mb-2">
                  {children}
                </h3>
              ),

              p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,

              strong: ({ children }) => (
                <strong className="font-semibold text-stone-100">
                  {children}
                </strong>
              ),

              ul: ({ children }) => (
                <ul className="list-disc pl-5 mb-4 space-y-2">{children}</ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal pl-5 mb-4 space-y-2">{children}</ol>
              ),

              li: ({ children }) => <li>{children}</li>,

              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-[#E08E79]/60 pl-4 italic text-stone-400 mb-4">
                  {children}
                </blockquote>
              ),

              code: ({ children }) => (
                <code className="bg-white/[0.06] px-1.5 py-0.5 rounded text-sm">
                  {children}
                </code>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
