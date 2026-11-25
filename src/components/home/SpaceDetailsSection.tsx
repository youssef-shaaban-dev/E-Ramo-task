"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Building2, UsersRound, Laptop, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SpaceTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPACE_TABS: SpaceTab[] = [
  { id: "shared-space", label: "Shared Space", icon: Users },
  { id: "private-offices", label: "Private Offices", icon: Building2 },
  { id: "meeting-rooms", label: "Meeting Rooms", icon: UsersRound },
  { id: "virtual-offices", label: "Virtual Offices", icon: Laptop },
];

const BULLET_POINTS = [
  "Reserved permanent workspace as long as you need",
  "Book a desk by the hour or day in anyplace",
  "A well-prepared place for your service and comfort",
  "Hot desk as often as you need in any place",
];

export function SpaceDetailsSection() {
  const [activeTab, setActiveTab] = useState<string>("shared-space");

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-16 md:pb-24">
      {/* Outer Card with Floating Top Pills */}
      <div className="relative bg-panel-warm rounded-3xl lg:rounded-4xl p-6 sm:p-10 lg:p-14 pt-12 sm:pt-16 border border-border/50 shadow-xs">
        {/* Floating Top Pill Bar (Figma: width 748px, height 92px) */}
        <div className="absolute -top-10 sm:-top-11 md:-top-12 left-1/2 -translate-x-1/2 z-20 w-full max-w-187 px-3 sm:px-4">
          <div className="bg-primary rounded-full h-19 sm:h-23 px-3 sm:px-5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 shadow-xl shadow-black/10 overflow-x-auto no-scrollbar">
            {SPACE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-write-main font-semibold shadow-sm"
                      : "bg-white/8 text-white/85 hover:text-white hover:bg-white/15"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="pt-4 sm:pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Details */}
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
              {BULLET_POINTS.map((point) => (
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

          {/* Right Column: Office Image */}
          <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden shadow-xs border border-border/40 bg-muted/40">
            <Image
              src="/shared-space.jpg"
              alt="Shared co-working space with wooden workstations and colorful wall mural"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
