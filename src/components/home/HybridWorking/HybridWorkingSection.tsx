import React from "react";
import { HybridImageGrid } from "./HybridImageGrid";

export function HybridWorkingSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 section-padding max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-write-main font-title">
          Hybrid working can work for you
        </h2>
        <p className="mt-4 text-sm text-write-sub font-body font-normal max-w-2xl mx-auto leading-relaxed">
          Hybrid working offers you the freedom to work closer to clients,
          colleagues or home. It&apos;s also greener and more cost-effective. With over
          <br className="hidden sm:inline" />
          {" "}4,000 locations globally, nobody is better placed than Regus to help
          you make the best of it.
        </p>
      </div>

      {/* Images Grid */}
      <HybridImageGrid />
    </section>
  );
}

export default HybridWorkingSection;
