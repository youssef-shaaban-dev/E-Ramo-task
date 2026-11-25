import React from "react";
import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/10 md:aspect-video lg:aspect-21/9 min-h-100 sm:min-h-120 md:min-h-135 lg:min-h-145 rounded-3xl md:rounded-4xl overflow-hidden shadow-md">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-banner.jpg"
        alt="Modern creative office space with warm wooden architecture and ergonomic chairs"
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />

      {/* Ambient Dark Overlay with exact Figma linear gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-hero-overlay"
        style={{
          background:
            "linear-gradient(182.22deg, #1A2921 -28.59%, rgba(255, 255, 255, 0) 98.14%)",
        }}
        aria-hidden="true"
      />

      {/* Centered Typography */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pb-16 sm:pb-20">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-hero-title drop-shadow-md leading-tight max-w-4xl"
          style={{ color: "var(--hero-title, #F8E9D9)" }}
        >
          <span>Office That Fit You</span>
          <span className="block mt-1 sm:mt-2">Creative Way To Work</span>
        </h1>
      </div>
    </div>
  );
}
