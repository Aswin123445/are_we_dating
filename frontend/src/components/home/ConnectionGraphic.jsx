import { motion } from "framer-motion";

function ConnectionGraphic() {
  return (
    <div className="mx-auto h-[145px] w-full max-w-[560px] sm:h-[175px]">
      <svg
        viewBox="0 0 600 190"
        className="h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strandA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#121013" stopOpacity="0" />
            <stop offset=".35" stopColor="#E29578" stopOpacity=".9" />
            <stop offset=".7" stopColor="#F2CC8F" stopOpacity=".85" />
            <stop offset="1" stopColor="#121013" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="strandB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#121013" stopOpacity="0" />
            <stop offset=".35" stopColor="#8B4A52" stopOpacity=".85" />
            <stop offset=".7" stopColor="#E29578" stopOpacity=".8" />
            <stop offset="1" stopColor="#121013" stopOpacity="0" />
          </linearGradient>
        </defs>

        <ellipse
          cx="300"
          cy="95"
          rx="225"
          ry="65"
          stroke="#F3ECE7"
          strokeOpacity=".07"
          strokeDasharray="2 12"
        />

        <motion.path
          className="hero-line"
          d="M45 95 Q120 42 195 95 T345 95 T495 95 T555 95"
          stroke="url(#strandA)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <motion.path
          className="hero-line delay"
          d="M45 95 Q120 148 195 95 T345 95 T495 95 T555 95"
          stroke="url(#strandB)"
          strokeWidth="1.1"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {[195, 345].map((x, index) => (
          <g key={x}>
            <circle
              cx={x}
              cy="95"
              r="4"
              fill={index === 0 ? "#F3ECE7" : "#F2CC8F"}
            />
            <circle
              cx={x}
              cy="95"
              r="12"
              stroke={index === 0 ? "#E29578" : "#F2CC8F"}
              strokeOpacity=".4"
            />
          </g>
        ))}

        <circle cx="300" cy="95" r="3" fill="#E29578" className="pulse" />
      </svg>
    </div>
  );
}
export default ConnectionGraphic;
