"use client";

import React, { useState } from "react";
import { Users, Building2, UsersRound, Laptop } from "lucide-react";
import { SpaceDetailsPills, SpaceTab } from "./SpaceDetailsPills";
import { SpaceDetailsInfo } from "./SpaceDetailsInfo";
import { SpaceDetailsMedia } from "./SpaceDetailsMedia";

const SPACE_TABS: SpaceTab[] = [
  { id: "shared-space",    label: "Shared Space",    icon: Users },
  { id: "private-offices", label: "Private Offices", icon: Building2 },
  { id: "meeting-rooms",   label: "Meeting Rooms",   icon: UsersRound },
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
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-14 pb-10 md:pt-16 md:pb-12">
      {/* Outer Card with Floating Top Pills */}
      <div className="relative bg-panel-warm rounded-3xl lg:rounded-4xl p-6 sm:p-10 lg:p-14 pt-12 sm:pt-16 border border-border/50 shadow-xs">
        {/* Floating Top Pill Bar */}
        <SpaceDetailsPills
          tabs={SPACE_TABS}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />

        {/* Content Grid */}
        <div className="pt-4 sm:pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <SpaceDetailsInfo bulletPoints={BULLET_POINTS} />
          <SpaceDetailsMedia />
        </div>
      </div>
    </section>
  );
}

export default SpaceDetailsSection;
