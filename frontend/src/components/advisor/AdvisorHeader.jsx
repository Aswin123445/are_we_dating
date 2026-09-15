const AdvisorHeader = ({ onBack }) => {
  return (
    <header className="h-16 border-b border-white/5 bg-[#131114]/80 backdrop-blur-md sticky top-0 z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto h-full flex items-center justify-between">
        {/* Left Side: Back Arrow + App Name */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-1.5 -ml-1.5 text-stone-400 hover:text-stone-200 hover:bg-white/5 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-[#E08E79]"
            aria-label="Back to home page"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm tracking-wider uppercase font-medium text-stone-200">
              ARE WE DATING?
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E08E79]" />
          </div>
        </div>

        {/* Right Side: Advisor Badge */}
        <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-500 font-medium">
          <span>RELATIONSHIP ADVISOR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E08E79]/60" />
        </div>
      </div>
    </header>
  );
};

export default AdvisorHeader;