"use client";

import React, { useState } from "react";
import { PricingToggle } from "./PricingToggle";
import { PricingSidebar } from "./PricingSidebar";
import { PricingCard, Plan } from "./PricingCard";

export const PRICING_PLANS: Plan[] = [
  {
    id: "basic",
    tier: "For individuals",
    name: "Basic",
    iconType: "basic",
    description:
      "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
    price: { monthly: 99, annually: 79 },
    currency: "SAR",
    features: [
      "10 Hours / Week",
      "25 Hours in Shared area / Month",
      "Free 1 hour private office",
      "Up to 3 team members",
    ],
  },
  {
    id: "enterprise-mid",
    badge: "Popular Plan (Best Sales)",
    tier: "For mid companies",
    name: "Enterprise",
    iconType: "mid",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
    price: { monthly: 199, annually: 159 },
    currency: "SAR",
    features: [
      "All analytics features",
      "Up to (1 Million) tracked visits",
      "Premium support",
      "Up to 10 team members",
    ],
  },
  {
    id: "enterprise-big",
    tier: "For big companies",
    name: "Enterprise",
    iconType: "big",
    description:
      "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
    price: { monthly: 399, annually: 319 },
    currency: "SAR",
    features: [
      "All analytics features",
      "Up to (5 Million) tracked visits",
      "Dedicated support",
      "Up to 50 team members",
    ],
  },
];

export function PricingSection() {
  const [annually, setAnnually] = useState(true);
  const [activeCategory, setActiveCategory] = useState("meeting-rooms");

  return (
    <section id="pricing" className="w-full px-4 sm:px-6 lg:px-8 section-padding max-w-7xl mx-auto">
      {/* ── Section Header ── */}
      <div className="text-center mb-10 md:mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-write-sub font-body mb-2">
          PRICING
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-write-main font-title">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-sm text-write-sub font-body font-normal max-w-sm mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel
          venenatis eu sit massa volutpat.
        </p>

        {/* Billing Toggle */}
        <PricingToggle annually={annually} onToggle={setAnnually} />
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
        <PricingSidebar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} annually={annually} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
