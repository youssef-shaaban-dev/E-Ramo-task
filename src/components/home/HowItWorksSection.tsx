import React from "react";
import Image from "next/image";

interface Step {
  id: number;
  label: string;
  image: string;
  alt: string;
  description: React.ReactNode;
}

const STEP_DESCRIPTION = (
  <>
    Lorem Ipsum is simply dummy
    <br />
    text of the printing and
    <br />
    typesetting industry
  </>
);

const STEPS: Step[] = [
  {
    id: 1,
    label: "Book, Reach or Call",
    image: "/how-step-1.jpg",
    alt: "Calendar and office supplies on a desk representing booking a workspace",
    description: STEP_DESCRIPTION,
  },
  {
    id: 2,
    label: "View Location Info",
    image: "/how-step-2.jpg",
    alt: "Team viewing location information on a tablet over a map",
    description: STEP_DESCRIPTION,
  },
  {
    id: 3,
    label: "Search Locations",
    image: "/how-step-3.jpg",
    alt: "Professional searching for co-working locations on a laptop at night",
    description: STEP_DESCRIPTION,
  },
];

export function HowItWorksSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14 md:mb-18">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-write-main font-title">
          How It Works
        </h2>
        <p className="mt-4 text-sm sm:text-base text-write-sub font-body font-normal max-w-md mx-auto leading-relaxed">
          Coworking &amp; Flexible Office Marketplace | Search &amp; Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        {STEPS.map((step) => (
          <div key={step.id} className="flex flex-col">
            {/* Step Number + Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-badge-warm text-badge-warm-foreground text-xs font-bold shrink-0 font-title">
                {step.id}
              </span>
              <span className="text-sm sm:text-base font-semibold text-write-main font-title">
                {step.label}
              </span>
            </div>

            {/* Step Image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-muted">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Description */}
            <p className="mt-4 text-xs text-write-sub font-body font-normal leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
