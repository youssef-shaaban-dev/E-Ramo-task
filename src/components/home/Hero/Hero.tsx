"use client";

import React, { useState } from "react";
import { Users, Building2, UsersRound, Laptop } from "lucide-react";
import { HeroBanner } from "./HeroBanner";
import { HeroCategoryTabs, SpaceCategory } from "./HeroCategoryTabs";
import { HeroSearchBar } from "./HeroSearchBar";

const SPACE_CATEGORIES: SpaceCategory[] = [
  { id: "shared-space",    label: "Shared Space",    icon: Users },
  { id: "private-offices", label: "Private Offices", icon: Building2 },
  { id: "meeting-rooms",   label: "Meeting Rooms",   icon: UsersRound },
  { id: "virtual-offices", label: "Virtual Offices", icon: Laptop },
];

export function Hero() {
  const [activeCategory, setActiveCategory] = useState<string>("meeting-rooms");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", { category: activeCategory, query: searchQuery });
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-2 pb-12 md:pb-16">
      {/* Hero Visual Card */}
      <HeroBanner />

      {/* Floating Filter & Search Card */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-16 sm:-mt-20 md:-mt-24 px-3 sm:px-0">
        <div className="rounded-2xl sm:rounded-3xl shadow-xl shadow-black/8 border border-border/60 overflow-hidden">
          <HeroCategoryTabs
            categories={SPACE_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <HeroSearchBar
            query={searchQuery}
            onQueryChange={setSearchQuery}
            onSubmit={handleSearch}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
