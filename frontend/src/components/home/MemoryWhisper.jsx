import { motion } from "framer-motion";

function MemoryWhisper({ text, rotate, side }) {
  const right = side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, rotate }}
      animate={{ opacity: 0.7, y: 0, rotate }}
      exit={{ opacity: 0, y: -8, rotate }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className={`pointer-events-none flex items-center gap-2 font-handwritten text-lg text-[#9E9490] ${
        right ? "flex-row-reverse text-left" : "text-right"
      }`}
      style={{ transformOrigin: right ? "left center" : "right center" }}
    >
      <span>{text}</span>
      <svg
        viewBox="0 0 40 20"
        className="h-4 w-8 text-[#E29578]/40 flex-shrink-0"
        style={{ transform: right ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M0 10 Q20 18 35 5"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export default MemoryWhisper;
