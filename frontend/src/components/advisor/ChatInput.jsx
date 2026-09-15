import { useEffect, useRef } from "react";

const ChatInput = ({ input, setInput, onSend, isLoading }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;

      // Reset height to compute actual scrollHeight accurately
      textarea.style.height = "auto";

      // Set new height capped at 140px
      const newHeight = Math.min(textarea.scrollHeight, 140);
      textarea.style.height = `${newHeight}px`;

      // Enable Y-overflow only when content exceeds maximum height
      textarea.style.overflowY =
        textarea.scrollHeight > 140 ? "auto" : "hidden";
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!isLoading && input.trim()) {
        onSend();
      }
    }
  };

  return (
    <div className="border-t border-white/5 bg-[#131114]/90 px-4 sm:px-6 lg:px-8 pb-3 pt-3">
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!isLoading && input.trim()) {
              onSend();
            }
          }}
          className="relative flex items-end bg-white/[0.03] border border-white/10 rounded-[24px] focus-within:border-[#E08E79]/60 focus-within:ring-1 focus-within:ring-[#E08E79]/30 transition-all shadow-inner px-3 py-1.5"
        >
          <label htmlFor="chat-input" className="sr-only">
            Message Relationship Advisor
          </label>

          <textarea
            id="chat-input"
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tell me what's happening..."
            disabled={isLoading}
            className="w-full resize-none pl-3 pr-10 py-2 bg-transparent text-stone-200 placeholder-stone-600 text-sm sm:text-base focus:outline-none min-h-[40px] max-h-[140px]"
          />

          {/* Send Button anchored to bottom-right */}
          <div className="absolute right-3 bottom-2.5">
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-stone-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E08E79] hover:text-[#131114] transition-all focus:outline-none"
              aria-label="Send message"
            >
              <svg
                className="w-4 h-4 transform rotate-45 -translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-[#E08E79]/60 mt-2 tracking-wide font-light">
          AI can be wrong. Your relationship is still your problem.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
