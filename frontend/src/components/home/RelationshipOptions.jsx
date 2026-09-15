import ExperienceCard from "./ExperienceCard";
import AdvisorIcon from "../home/AdvisorIcon";
function RelationshipOptions({ onNavigate }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-8 pt-1 md:px-12">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
        <ExperienceCard
          eyebrow="01 — TALK IT THROUGH"
          title="Relationship Advisor"
          description="Tell us what's happening. We'll help you make sense of what you two share."
          ctaText="Start a conversation"
          Icon={AdvisorIcon}
          onNavigate={() => onNavigate("/advisor")}
        />
      </div>
    </section>
  );
}

export default RelationshipOptions;