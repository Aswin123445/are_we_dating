function CalculatorIcon() {
  return (
    <svg
      viewBox="0 0 140 80"
      className="h-16 w-28"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="15"
        y1="61"
        x2="125"
        y2="61"
        stroke="#F3ECE7"
        strokeOpacity=".16"
      />
      <path d="M27 52L64 20L101 52" stroke="#E29578" strokeWidth="1.2" />
      <path
        d="M40 22L64 52L88 22"
        stroke="#F2CC8F"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <circle cx="64" cy="36" r="3" fill="#E29578" className="pulse" />
      <path d="M35 57V65M64 55V65M93 57V65" stroke="#9E9490" strokeWidth=".7" />
    </svg>
  );
}

export default CalculatorIcon;