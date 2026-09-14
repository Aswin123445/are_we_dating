import MemoryWhisper from "./MemoryWhisper";
import ConnectionGraphic from "./ConnectionGraphic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLOTS = [
  { id: "left-1", side: "left", rotate: -5 },
  { id: "left-2", side: "left", rotate: 3 },
  { id: "right-1", side: "right", rotate: 4 },
  { id: "right-2", side: "right", rotate: -4 },
];

const MEMORIES = [
  "the unsaid things",
  "the text you didn't send",
  "that look across the room",
  "3:14 AM conversations",
  "the way you say my name",
  "almost holding hands",
  "a song that reminds me of you",
  "rewinding that one moment",
  "the silence between words",
  "what are we doing?",
];

// Sub-component for individual slots so each quote replaces smoothly in-place
function QuoteSlot({ slot, initialText, onSwap, activeTexts }) {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    // Stagger initial delays slightly per slot for organic randomness
    const randomDelay = Math.random() * 2000;

    const interval = setInterval(() => {
      // Pick a new text that isn't currently displayed anywhere
      const available = MEMORIES.filter((m) => !activeTexts.includes(m));
      const nextText = available[Math.floor(Math.random() * available.length)];

      if (nextText) {
        setText(nextText);
        onSwap(slot.id, nextText);
      }
    }, 5000 + randomDelay);

    return () => clearInterval(interval);
  }, [slot.id, activeTexts, onSwap]);

  return (
    <div className="relative h-12 w-full flex items-center justify-center overflow-hidden">
      {/* mode="sync" allows cross-fading so the old quote directly morphs into the new quote */}
      <AnimatePresence mode="sync">
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute"
        >
          <MemoryWhisper text={text} rotate={slot.rotate} side={slot.side} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const [activeMap, setActiveMap] = useState({
    "left-1": MEMORIES[0],
    "left-2": MEMORIES[1],
    "right-1": MEMORIES[2],
    "right-2": MEMORIES[3],
  });

  const handleSwap = (slotId, newText) => {
    setActiveMap((prev) => ({ ...prev, [slotId]: newText }));
  };

  const activeTexts = Object.values(activeMap);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-1 pt-9 md:px-12 md:pt-12">
      <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-[1fr_minmax(0,42rem)_1fr] md:gap-3">
        {/* LEFT COLUMN (2 fixed quote slots) */}
        <div className="hidden flex-col items-end gap-16 pt-16 text-right md:flex">
          {SLOTS.filter((s) => s.side === "left").map((slot) => (
            <QuoteSlot
              key={slot.id}
              slot={slot}
              initialText={activeMap[slot.id]}
              onSwap={handleSwap}
              activeTexts={activeTexts}
            />
          ))}
        </div>

        {/* CENTER HERO */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[9px] font-medium uppercase tracking-[0.38em] text-[#E29578]">
              Relationships are complicated
            </p>

            <h1 className="mt-5 leading-none tracking-[-0.055em] text-[#F3ECE7]">
              <span className="block text-[clamp(3.1rem,7vw,6.8rem)] font-light">
                Are you two...
              </span>

              <span className="mt-2 block font-serif text-[clamp(5rem,10vw,9.5rem)] italic text-[#E29578]">
                something?
              </span>
            </h1>
          </motion.div>

          <ConnectionGraphic />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="z-10 mt-1 w-full max-w-lg"
          >
            <div className="flex min-h-[48px] flex-col items-center justify-center">
              <p className="text-sm leading-6 text-[#F3ECE7] sm:text-base">
                Some connections don't come with a label.
              </p>

              <p className="text-xs font-light leading-5 text-[#9E9490]">
                A quiet space to understand where you both stand.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (2 fixed quote slots) */}
        <div className="hidden flex-col items-start gap-16 pt-16 text-left md:flex">
          {SLOTS.filter((s) => s.side === "right").map((slot) => (
            <QuoteSlot
              key={slot.id}
              slot={slot}
              initialText={activeMap[slot.id]}
              onSwap={handleSwap}
              activeTexts={activeTexts}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
