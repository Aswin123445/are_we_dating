const EmptyState = ({ onSelectPrompt, selectedGoal, setSelectedGoal }) => {
  const goals = [
    {
      id: "summarize",
      icon: "📋",
      title: "Summarize",
      subtitle: "What's going on?",
    },
    {
      id: "reply",
      icon: "💬",
      title: "Reply",
      subtitle: "What should I say?",
    },
    {
      id: "analyze",
      icon: "🔍",
      title: "Analyze",
      subtitle: "What does it mean?",
    },
  ];

  const suggestions = [
    "She hasn't replied since yesterday.",
    "Is this flirting or just being friendly?",
    "Am I overthinking this text?",
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto animate-fade-in">
      {/* Abstract Glowing Node graphic */}
      <div className="mb-6 opacity-80">
        <svg
          className="w-48 h-10 text-[#E08E79] overflow-visible"
          viewBox="0 0 200 40"
          fill="none"
          stroke="currentColor"
        >
          {/* Top Wave Path with Subtle Pulse */}
          <path
            d="M0,20 Q50,0 100,20 T200,20"
            strokeWidth="1"
            strokeOpacity="0.35"
            className="animate-pulse"
          />

          {/* Bottom Wave Path with Offset Pulse */}
          <path
            d="M0,20 Q50,40 100,20 T200,20"
            strokeWidth="1"
            strokeOpacity="0.25"
            className="animate-pulse duration-1000"
          />

          {/* Left Node: Radial Ping Ring */}
          <circle
            cx="65"
            cy="14"
            r="6"
            stroke="#E08E79"
            strokeOpacity="0.4"
            strokeWidth="0.8"
            className="animate-ping origin-[65px_14px] opacity-75"
            style={{ animationDuration: "3s" }}
          />
          {/* Left Node: Core Dot + Soft Glow */}
          <circle
            cx="65"
            cy="14"
            r="2.5"
            fill="#E08E79"
            className="drop-shadow-[0_0_6px_rgba(224,142,121,0.8)]"
          />

          {/* Center Node: Radial Ping Ring */}
          <circle
            cx="100"
            cy="20"
            r="7"
            stroke="#E08E79"
            strokeOpacity="0.4"
            strokeWidth="0.8"
            className="animate-ping origin-[100px_20px] opacity-75"
            style={{ animationDuration: "3.5s", animationDelay: "0.8s" }}
          />
          {/* Center Node: Core Dot + Soft Glow */}
          <circle
            cx="100"
            cy="20"
            r="3"
            fill="#E08E79"
            className="drop-shadow-[0_0_8px_rgba(224,142,121,0.9)]"
          />

          {/* Right Node: Radial Ping Ring */}
          <circle
            cx="135"
            cy="26"
            r="6"
            stroke="#E08E79"
            strokeOpacity="0.4"
            strokeWidth="0.8"
            className="animate-ping origin-[135px_26px] opacity-75"
            style={{ animationDuration: "4s", animationDelay: "0.4s" }}
          />
          {/* Right Node: Core Dot + Soft Glow */}
          <circle
            cx="135"
            cy="26"
            r="2.5"
            fill="#E08E79"
            className="drop-shadow-[0_0_6px_rgba(224,142,121,0.8)]"
          />
        </svg>
      </div>

      {/* Romantic Italic Serif Headline */}
      <h1 className="text-4xl sm:text-5xl font-serif italic text-[#E08E79] mb-3 font-normal tracking-wide">
        What's going on?
      </h1>
      <p className="text-stone-400 text-xs sm:text-sm max-w-sm mb-8 font-light italic">
        Tell me what's happening and I'll try to make sense of it. No judgment.
      </p>

      {/* Goal Selector Section */}
      <div className="w-full max-w-2xl mb-8">
        <p className="text-xs uppercase tracking-widest text-stone-500 mb-4 font-medium">
          What do you want help with?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {goals.map((g) => {
            const isSelected = selectedGoal === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGoal(g.id)}
                className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-[#E08E79]/10 border-[#E08E79] text-white shadow-[0_0_15px_rgba(224,142,121,0.15)]"
                    : "bg-white/[0.02] border-white/10 text-stone-400 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm">{g.icon}</span>
                  <span className="text-sm font-medium text-stone-200">
                    {g.title}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-light">
                  {g.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xl">
        {suggestions.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPrompt(prompt)}
            className="px-4 py-2 bg-white/[0.03] border border-white/10 hover:border-[#E08E79]/40 hover:bg-[#E08E79]/5 text-stone-300 rounded-full text-xs transition-all duration-150 focus:outline-none"
          >
            "{prompt}"
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;