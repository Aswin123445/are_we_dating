
export function RelationshipMotif() {
  return (
    <div className="motif-wrapper" aria-hidden="true">
      <svg
        width="140"
        height="48"
        viewBox="0 0 140 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 20 24 C 45 4, 65 44, 90 24"
          stroke="#A65D63"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M 50 24 C 75 44, 95 4, 120 24"
          stroke="#171615"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.25"
        />
        <circle cx="20" cy="24" r="2.5" fill="#A65D63" opacity="0.7" />
        <circle cx="120" cy="24" r="2.5" fill="#171615" opacity="0.5" />
      </svg>
    </div>
  );
}
