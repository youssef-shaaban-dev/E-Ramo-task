import React from "react";
import { Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SpaceDetailsInfoProps {
  bulletPoints: string[];
}

export function SpaceDetailsInfo({ bulletPoints }: SpaceDetailsInfoProps) {
  return (
    <div className="flex flex-col">
      {/* Title & Subtitle */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-write-main font-title leading-tight">
        Shared Space
      </h2>
      <span className="text-xl sm:text-2xl font-semibold text-write-main font-title mt-1">
        (CO Work Space)
      </span>

      {/* Description */}
      <p className="mt-4 text-xs sm:text-sm text-write-sub leading-relaxed max-w-lg font-body">
        Rent as many desks as you need in a dynamic, shared office space.
        Business Address and storage options included.
      </p>

      {/* Bullet Points */}
      <ul className="mt-6 space-y-3 font-body">
        {bulletPoints.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full bg-brown shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm text-write-sub font-medium">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Price Tag Row */}
      <div className="mt-7 flex items-center gap-2 text-xs sm:text-sm font-body">
        <Tag className="w-4 h-4 text-primary shrink-0" />
        <span className="text-write-sub font-medium">
          Price Starting From:{" "}
          <strong className="text-write-main font-bold text-sm sm:text-base">
            1250 EGP
          </strong>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
        <Button
          variant="primary"
          size="md"
          className="rounded-xl px-8 font-semibold text-sm"
        >
          Book Now
        </Button>
        <Button
          variant="outline"
          size="md"
          className="rounded-xl px-8 font-medium text-sm bg-card hover:bg-muted"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
