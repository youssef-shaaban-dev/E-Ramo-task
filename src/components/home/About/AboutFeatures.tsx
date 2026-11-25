import React from "react";
import LocationPinIcon from "@/components/icons/LocationPinIcon";
import AmenitiesWorkspaceIcon from "@/components/icons/AmenitiesWorkspaceIcon";
import Support247Icon from "@/components/icons/Support247Icon";

export interface AboutFeature {
  id: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ABOUT_FEATURES: AboutFeature[] = [
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

export function AboutFeatures() {
  return (
    <ul className="mt-4 space-y-4">
      {ABOUT_FEATURES.map((feature) => {
        const Icon = feature.icon;
        return (
          <li key={feature.id} className="flex items-center gap-3.5 group">
            <span className="w-10 h-10 rounded-full bg-badge-warm text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-primary">
              {feature.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
