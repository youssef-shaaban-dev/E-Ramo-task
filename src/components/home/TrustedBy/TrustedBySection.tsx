import React from "react";
import { BrandLogos } from "./BrandLogos";

export function TrustedBySection() {
  return (
    <section className="w-full bg-primary bg-brand-pattern section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-title leading-snug">
              Chair Location Is Trusted By The World&apos;s Largest Companies.
            </h2>
            <p className="mt-5 text-sm font-body font-normal leading-relaxed max-w-sm text-white/70">
              Lorem ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
          </div>

          {/* Right: 2×4 brand grid */}
          <BrandLogos />
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
