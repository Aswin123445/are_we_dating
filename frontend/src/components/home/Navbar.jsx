function Navbar() {
  return (
    <header className="relative z-30 mx-auto w-full max-w-6xl border-b border-[#E29578]/10 px-6 pb-4 pt-7 md:px-12">
      <nav
        className="flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <a
          href="#"
          className="focus-ring flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#F3ECE7] transition-colors hover:text-[#E29578]"
          aria-label="Are We Dating? Home"
        >
          <span>ARE WE DATING?</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#E29578]" />
        </a>

        <a
          href="#editorial-footer"
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById("editorial-footer")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="focus-ring group flex items-center gap-2 py-2 text-xs font-medium uppercase tracking-widest text-[#9E9490] transition-colors hover:text-[#F3ECE7]"
        >
          <span>About</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#E29578] transition-transform duration-300 group-hover:scale-150" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;