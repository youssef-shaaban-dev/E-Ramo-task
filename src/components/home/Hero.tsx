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
      <div className="relative w-full aspect-4/3 sm:aspect-16/10 md:aspect-video lg:aspect-21/9 min-h-100 sm:min-h-120 md:min-h-135 lg:min-h-145 rounded-3xl md:rounded-4xl overflow-hidden shadow-md">
        {/* Background Image */}
        <Image
          src="/hero-banner.jpg"
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
              "linear-gradient(180.13deg, #3F3533 -2.35%, rgba(76, 63, 59, 0) 118.18%)",
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

      {/* Floating Filter & Search Card */}
      <div className="relative z-20 max-w-4xl mx-auto -mt-16 sm:-mt-20 md:-mt-24 px-3 sm:px-0">
        <div className="rounded-2xl sm:rounded-3xl shadow-xl shadow-black/8 border border-border/60 overflow-hidden">
          {/* Top Category Tabs Row (Pure White) */}
          <div className="bg-card px-4 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {SPACE_CATEGORIES.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-accent text-primary font-semibold border border-primary/25 shadow-2xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Search Bar Section (Warm Tinted #FFFAF5) */}
          <div className="bg-panel-warm px-4 py-3 sm:px-6 sm:py-4 border-t border-border/40">
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
            >
              {/* Search Input Field (Pure White container) */}
              <div className="relative flex-1 flex items-center bg-card shadow-2xs rounded-xl px-3.5 py-2 transition-colors border border-border/80 focus-within:ring-2 focus-within:ring-ring focus-within:border-primary">
                <Search className="w-4 h-4 text-muted-foreground shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Here..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-0.5"
                />
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  leftIcon={<Compass className="w-4 h-4 text-muted-foreground" />}
                  className="flex-1 sm:flex-none text-foreground hover:text-primary font-medium text-xs sm:text-sm bg-transparent hover:bg-black/5"
                >
                  Search Nearby
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="flex-1 sm:flex-none px-7 sm:px-9 font-semibold rounded-xl text-sm"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
