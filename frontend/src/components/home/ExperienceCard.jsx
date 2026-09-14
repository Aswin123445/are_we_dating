function ExperienceCard({
  eyebrow,
  title,
  description,
  ctaText,
  Icon,
  onNavigate,
}) {
  const activate = () => onNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      }}
      className="focus-ring group relative flex min-h-[400px] cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border border-[#E29578]/15 bg-[#1C191E]/75 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#E29578]/40 hover:bg-[#211d22] hover:shadow-[0_20px_60px_rgba(0,0,0,.25)] sm:p-9"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#E29578]/10 blur-3xl transition-all duration-500 group-hover:bg-[#E29578]/20" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between border-b border-[#E29578]/10 pb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E29578]">
            {eyebrow}
          </span>
          <span className="font-handwritten text-sm text-[#9E9490]">
            experience
          </span>
        </div>

        <div className="mb-3 flex h-16 items-center">
          <Icon />
        </div>

        <h2 className="font-serif text-3xl font-normal text-[#F3ECE7] transition-colors duration-500 group-hover:text-[#F2CC8F]">
          {title}
        </h2>

        <p className="mt-3 max-w-md text-xs font-light leading-6 text-[#9E9490] sm:text-sm">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-7 flex items-center justify-between border-t border-[#E29578]/10 pt-4">
        <span className="text-xs font-medium uppercase tracking-wider text-[#F3ECE7] transition-colors group-hover:text-[#E29578]">
          {ctaText}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E29578]/30 text-[#F3ECE7] transition-all duration-300 group-hover:border-[#E29578] group-hover:bg-[#E29578] group-hover:text-[#121013]">
          →
        </span>
      </div>
    </div>
  );
}

export default ExperienceCard;