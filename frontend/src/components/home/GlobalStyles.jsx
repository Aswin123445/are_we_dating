function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');

      :root {
        --bg: #121013;
        --card: #1c191e;
        --text: #f3ece7;
        --muted: #9e9490;
        --rose: #e29578;
        --blush: #f2cc8f;
        --burgundy: #8b4a52;
        --border: rgba(226, 149, 120, 0.15);
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--text);
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }

      .font-serif {
        font-family: "Instrument Serif", Georgia, serif;
      }

      .font-handwritten {
        font-family: "Caveat", cursive;
      }

      .grain {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E");
      }

      .hero-line {
        stroke-dasharray: 900;
        stroke-dashoffset: 900;
        animation: draw 2.4s cubic-bezier(.22,1,.36,1) .4s forwards;
      }

      .hero-line.delay {
        animation-delay: .65s;
      }

      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }

      @keyframes softPulse {
        0%, 100% { opacity: .35; transform: scale(.85); }
        50% { opacity: .9; transform: scale(1.25); }
      }

      .pulse {
        transform-origin: center;
        animation: softPulse 3.5s ease-in-out infinite;
      }

      .focus-ring:focus-visible {
        outline: 2px solid var(--rose);
        outline-offset: 4px;
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
        }
        .hero-line {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
  );
}

export default GlobalStyles;