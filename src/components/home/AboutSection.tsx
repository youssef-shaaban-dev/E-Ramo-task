import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import LocationPinIcon from "../icons/LocationPinIcon";
import AmenitiesWorkspaceIcon from "../icons/AmenitiesWorkspaceIcon";
import Support247Icon from "../icons/Support247Icon";

interface AboutFeature {
  id: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AboutImageItem {
  src: string;
  alt: string;
}


const ABOUT_FEATURES: AboutFeature[] = [
  {
    id: "locations",
    text: "More Than (4652) Location",
    icon: LocationPinIcon,
  },
  {
    id: "amenities",
    text: "We Offer All Amenities in Our All Location",
    icon: AmenitiesWorkspaceIcon,
  },
  {
    id: "support",
    text: "All Kinda Of Supports 24/7",
    icon: Support247Icon,
  },
];

const ABOUT_IMAGES: AboutImageItem[] = [
  {
    src: "/about-1.jpg",
    alt: "Business team collaborating in a modern conference room",
  },
  {
    src: "/about-2.jpg",
    alt: "Spacious open-plan coworking office with desks and natural lighting",
  },
  {
    src: "/about-3.jpg",
    alt: "Professionals discussing workspace options over laptops",
  },
];

export function AboutSection() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20 overflow-hidden">
      {/* Decorative ambient tint matching design */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/30 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Features */}
        <div className="flex flex-col">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
            About Chair Location
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
            &ldquo;Chair location&rdquo; is a website where you can search, find and reserve co-working space,
            including co-working offices, private offices, meeting rooms, and virtual offices near you.
            It shows the features and amenities this space can provide. Professionals and businesses can
            then compare all available co-working spaces to find one with the services and facilities
            that best suit their requirements.
          </p>

          {/* Subheading */}
          <h3 className="mt-7 text-base sm:text-lg font-semibold text-foreground">
            Why Chair Location
          </h3>

          {/* Feature List with exact badges & green styling */}
          <ul className="mt-4 space-y-4">
            {ABOUT_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <li key={feature.id} className="flex items-center gap-3.5 group">
                  {/* Warm badge with primary green icon */}
                  <span className="w-10 h-10 rounded-full bg-badge-warm text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </span>
                  {/* Feature text in primary brand green */}
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-primary">
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="md"
              className="rounded-xl px-7 font-semibold text-sm"
            >
              View Products
            </Button>
            <Button
              variant="outline"
              size="md"
              className="rounded-xl px-7 font-medium text-sm"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Column: Stacked Office Images */}
        <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
          {ABOUT_IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative w-full aspect-16/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-xs border border-border/50 bg-muted/40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
