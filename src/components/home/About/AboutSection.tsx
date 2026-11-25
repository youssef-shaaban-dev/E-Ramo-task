import React from "react";
import { AboutFeatures } from "./AboutFeatures";
import { AboutGallery } from "./AboutGallery";
import { AboutActions } from "./AboutActions";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-padding overflow-hidden">
      {/* Decorative ambient tint matching design */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/30 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Features */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-write-main font-title leading-tight">
            About Chair Location
          </h2>

          <p className="mt-4 text-sm sm:text-base text-write-sub leading-relaxed max-w-xl">
            &ldquo;Chair location&rdquo; is a website where you can search, find and reserve co-working space,
            including co-working offices, private offices, meeting rooms, and virtual offices near you.
            It shows the features and amenities this space can provide. Professionals and businesses can
            then compare all available co-working spaces to find one with the services and facilities
            that best suit their requirements.
          </p>

          <h3 className="mt-7 text-base sm:text-lg font-semibold text-foreground">
            Why Chair Location
          </h3>

          <AboutFeatures />
          <AboutActions />
        </div>

        {/* Right Column: Stacked Office Images */}
        <AboutGallery />
      </div>
    </section>
  );
}

export default AboutSection;
