import CalculatorIcon from "../home/CalculatorIcon";
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

        <ExperienceCard
          eyebrow="02 — PUT IT TO THE TEST"
          title="Relationship Calculator"
          description="Answer a few subtle questions. See where the connection between you two might stand."
          ctaText="Find out"
          Icon={CalculatorIcon}
          onNavigate={() => onNavigate("/calculator")}
        />
      </div>
    </section>
  );
}

export default RelationshipOptions;