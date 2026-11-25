import React from "react";
import Image from "next/image";

export interface StepItem {
  id: number;
  label: string;
  image: string;
  alt: string;
  description: React.ReactNode;
}

interface StepCardProps {
  step: StepItem;
}

export function StepCard({ step }: StepCardProps) {
  return (
    <div className="flex flex-col">
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
  );
}
