"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Building2,
  UsersRound,
  Laptop,
  Search,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SpaceCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SPACE_CATEGORIES: SpaceCategory[] = [
  {
    id: "shared-space",
    label: "Shared Space",
    icon: Users,
  },
  {
    id: "private-offices",
    label: "Private Offices",
    icon: Building2,
  },
  {
    id: "meeting-rooms",
    label: "Meeting Rooms",
    icon: UsersRound,
  },
  {
    id: "virtual-offices",
    label: "Virtual Offices",
    icon: Laptop,
  },
];

export function Hero() {
  const [activeCategory, setActiveCategory] = useState<string>("meeting-rooms");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search action with activeCategory and searchQuery
    console.log("Searching for:", { category: activeCategory, query: searchQuery });
  };

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-2 pb-20 md:pb-24">
      {/* Hero Visual Card */}
      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-3xl md:rounded-[36px] overflow-hidden shadow-md">
        {/* Background Image */}
        <Image
          src="/hero-banner.jpg"
          alt="Modern creative office space with warm wooden architecture and ergonomic chairs"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
          loading="eager"
        />

        {/* Ambient Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px]" />

        {/* Centered Typography */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-16 sm:pb-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight max-w-4xl">
            <span>Office That Fit You</span>
            <span className="block mt-1 sm:mt-2">Creative Way To Work</span>
          </h1>
        </div>
      </div>

      {/* Floating Filter & Search Card */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-16 sm:-mt-20 md:-mt-24 px-3 sm:px-0">
        <div className="bg-card text-card-foreground rounded-2xl sm:rounded-3xl shadow-xl shadow-black/8 border border-border p-3 sm:p-5">
          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pb-3 sm:pb-4 border-b border-border/60">
            {SPACE_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${isActive
                      ? "bg-accent text-accent-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  aria-pressed={isActive}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Inputs & Actions */}
          <form
            onSubmit={handleSearch}
            className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
          >
            {/* Search Input Field */}
            <div className="relative flex-1 flex items-center bg-muted/40 hover:bg-muted/60 focus-within:bg-card focus-within:ring-2 focus-within:ring-ring rounded-xl px-3.5 py-1.5 transition-colors border border-transparent focus-within:border-border">
              <Search className="w-4 h-4 text-muted-foreground shrink-0 mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Here..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-1.5"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Button
                type="button"
                variant="ghost"
                size="md"
                leftIcon={<Compass className="w-4 h-4" />}
                className="flex-1 sm:flex-none text-muted-foreground hover:text-foreground font-normal sm:font-medium text-xs sm:text-sm"
              >
                Search Nearby
              </Button>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="flex-1 sm:flex-none px-6 sm:px-8 font-semibold rounded-xl text-sm"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
