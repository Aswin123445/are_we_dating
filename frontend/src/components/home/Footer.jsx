function Footer() {
  return (
    <footer
      id="editorial-footer"
      className="mx-auto mt-8 w-full max-w-6xl border-t border-[#E29578]/10 px-6 pb-9 pt-10 md:px-12"
    >
      <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F3ECE7]">
            ARE WE DATING?
          </span>
          <span className="font-serif text-sm italic text-[#E29578]">
            For the complicated ones.
          </span>
        </div>

        <div className="text-xs font-light tracking-wider text-[#9E9490]">
          © 2026 Are We Dating? All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;