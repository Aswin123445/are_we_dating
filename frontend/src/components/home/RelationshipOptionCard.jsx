export function RelationshipOptionCard({
  eyebrow,
  title,
  description,
  actionText,
  icon,
  onClick,
}) {
  return (
    <article
      className="
        group
        flex min-h-[360px] cursor-pointer flex-col justify-between
        rounded-[2rem]
        border border-[#E5E1DC]
        bg-[#F7F5F2]
        p-8
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:border-[#D8D1CB]
        hover:bg-[#F1EEEA]
        hover:shadow-[0_20px_60px_rgba(23,22,21,0.06)]
        focus:outline-none
        focus:ring-2
        focus:ring-[#A65D63]
        focus:ring-offset-4
        sm:p-10
      "
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Top Content */}
      <div>
        {/* Eyebrow + Icon */}
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium tracking-[0.18em] text-[#A65D63]">
            {eyebrow}
          </span>

          {icon && (
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-[#DDD7D1]
                text-[#77736D]
                transition-transform duration-500
                group-hover:rotate-[-8deg]
              "
            >
              {icon}
            </div>
          )}
        </div>

        {/* Title */}
        <h2
          className="
            mt-12
            text-3xl font-medium
            tracking-[-0.03em]
            text-[#171615]
            sm:text-4xl
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-md
            text-base
            leading-7
            text-[#77736D]
          "
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 flex items-center gap-3 text-sm font-medium text-[#171615]">
        <span>{actionText}</span>

        <span
          aria-hidden="true"
          className="
            inline-block
            transition-transform duration-300
            group-hover:translate-x-2
          "
        >
          →
        </span>
      </div>
    </article>
  );
}
