function AdvisorIcon() {
  return (
    <svg
      viewBox="0 0 140 80"
      className="h-16 w-28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 52C28 24 57 17 78 31C92 40 101 52 119 52"
        stroke="#E29578"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M31 54C45 36 67 31 83 43C92 50 99 57 112 57"
        stroke="#F2CC8F"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity=".75"
      />
      <circle cx="65" cy="37" r="3" fill="#E29578" className="pulse" />
    </svg>
  );
}

export default AdvisorIcon;