import React from "react";
import { StepCard, StepItem } from "./StepCard";

const STEP_DESCRIPTION = (
  <>
    Lorem Ipsum is simply dummy
    <br />
    text of the printing and
    <br />
    typesetting industry
  </>
);

export const HOW_STEPS: StepItem[] = [
  {
    id: 1,
    label: "Book, Reach or Call",
    image: "/images/how-it-works/how-step-1.jpg",
    alt: "Calendar and office supplies on a desk representing booking a workspace",
    description: STEP_DESCRIPTION,
  },
  {
    id: 2,
    label: "View Location Info",
    image: "/images/how-it-works/how-step-2.jpg",
    alt: "Team viewing location information on a tablet over a map",
    description: STEP_DESCRIPTION,
  },
  {
    id: 3,
    label: "Search Locations",
    image: "/images/how-it-works/how-step-3.jpg",
    alt: "Professional searching for co-working locations on a laptop at night",
    description: STEP_DESCRIPTION,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full px-4 sm:px-6 lg:px-8 section-padding max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-write-main font-title">
          How It Works
        </h2>
        <p className="mt-4 text-sm sm:text-base text-write-sub font-body font-normal max-w-md mx-auto leading-relaxed">
          Coworking &amp; Flexible Office Marketplace | Search &amp; Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        {HOW_STEPS.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
