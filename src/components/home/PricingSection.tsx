"use client";

import { useState } from "react";
import { Users, UsersRound, Building2, Laptop, Check, Headphones } from "lucide-react";

/* ─── Sidebar categories (same icons as Hero/SpaceDetails) ─── */
const SIDEBAR_CATEGORIES = [
  { id: "shared-space",    label: "Shared Space",    icon: Users },
  { id: "meeting-rooms",   label: "Meeting Rooms",   icon: UsersRound },
  { id: "private-offices", label: "Private Offices", icon: Building2 },
  { id: "virtual-offices", label: "Virtual Offices", icon: Laptop },
];

/* ─── Plan card decorative icons (inline SVG) ─── */
function PlanIcon({ type, featured }: { type: "basic" | "mid" | "big"; featured?: boolean }) {
  const bg   = featured ? "bg-white/20" : "bg-accent";
  const col  = featured ? "white"       : "var(--color-primary)";

  if (type === "basic") {
    return (
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9.5" stroke={col} strokeWidth="1.5" />
          <path d="M11 1.5A9.5 9.5 0 0 1 11 20.5z" fill={col} />
        </svg>
      </div>
    );
  }
  if (type === "mid") {
    return (
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path
            d="M1 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18.382a.5.5 0 0 1-.724.447L9 17.236l-7.276 3.593A.5.5 0 0 1 1 20.382V2Z"
            stroke={col} strokeWidth="1.5"
          />
          <path d="M6 8h6" stroke={col} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
      <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
        <rect x="1" y="1" width="20" height="15" rx="2" stroke={col} strokeWidth="1.5" />
        <path d="M1 4l10 7 10-7" stroke={col} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Pricing data ─── */
interface Plan {
  id:          string;
  badge?:      string;
  tier:        string;
  name:        string;
  description: string;
  price:       { monthly: number; annually: number };
  currency:    string;
  features:    string[];
  featured?:   boolean;
  iconType:    "basic" | "mid" | "big";
}

const PLANS: Plan[] = [
  {
    id: "basic",
    tier: "For individuals",
    name: "Basic",
    iconType: "basic",
    description:
      "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
    price:    { monthly: 99,  annually: 79  },
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
    price:    { monthly: 199, annually: 159 },
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
    price:    { monthly: 399, annually: 319 },
    currency: "SAR",
    features: [
      "All analytics features",
      "Up to (5 Million) tracked visits",
      "Dedicated support",
      "Up to 50 team members",
    ],
  },
];

/* ─── Component ─── */
export function PricingSection() {
  const [annually,       setAnnually]       = useState(true);
  const [activeCategory, setActiveCategory] = useState("meeting-rooms");

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">

      {/* ── Section Header ── */}
      <div className="text-center mb-12">
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
        <div className="mt-7 inline-flex items-center gap-3">
          <span className={`text-sm font-body transition-colors ${!annually ? "font-semibold text-write-main" : "text-write-sub"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annually}
            onClick={() => setAnnually(!annually)}
            className="relative w-12 h-6 rounded-full bg-primary focus:outline-none cursor-pointer"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                annually ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-body transition-colors ${annually ? "font-semibold text-write-main" : "text-write-sub"}`}>
            Annually
          </span>
        </div>
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">

        {/* ── Left Sidebar ── */}
        <aside className="flex flex-col gap-2">
          <h3 className="text-base font-bold text-write-main font-title leading-snug mb-2">
            Select Form The<br />Upcoming Options.
          </h3>

          {SIDEBAR_CATEGORIES.map((cat) => {
            const Icon     = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-body text-left transition-colors cursor-pointer
                  ${isActive
                    ? "bg-badge-warm text-write-main font-semibold"
                    : "text-write-sub hover:bg-muted"
                  }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {cat.label}
              </button>
            );
          })}

          {/* Contact box */}
          <div className="mt-5 pt-4 border-t border-border">
            <p className="text-sm font-bold text-write-main font-title leading-snug">
              Do you face Any Problems ?
            </p>
            <p className="mt-1 text-xs text-write-sub font-body leading-relaxed">
              Contact us Any time Anyplace<br />we will be Happy.
            </p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-write-sub font-body">
                <Headphones className="w-4 h-4 text-primary shrink-0" />
                <span>Available 24/7</span>
              </div>
              <a
                href="#"
                className="text-xs font-semibold text-primary font-body hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </aside>

        {/* ── Right: Pricing Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PLANS.map((plan) => {
            const price = annually ? plan.price.annually : plan.price.monthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl p-6 border ${
                  plan.featured
                    ? "bg-primary border-primary shadow-xl"
                    : "bg-card border-border shadow-sm"
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 bg-badge-warm text-badge-warm-foreground text-[10px] font-semibold px-3 py-1.5 rounded-full font-body">
                      ✦ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon + tier + name */}
                <div className="flex items-center gap-3 mt-2">
                  <PlanIcon type={plan.iconType} featured={plan.featured} />
                  <div>
                    <p className={`text-[10px] font-body ${plan.featured ? "text-white/70" : "text-write-sub"}`}>
                      {plan.tier}
                    </p>
                    <h3 className={`text-lg font-bold font-title ${plan.featured ? "text-white" : "text-write-main"}`}>
                      {plan.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className={`mt-3 text-xs font-body leading-relaxed ${plan.featured ? "text-white/70" : "text-write-sub"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-0.5">
                  <span className={`text-xs font-semibold font-body mr-0.5 ${plan.featured ? "text-white/80" : "text-write-sub"}`}>
                    {plan.currency}
                  </span>
                  <span className={`text-4xl font-bold font-title leading-none ${plan.featured ? "text-white" : "text-write-main"}`}>
                    {price}
                  </span>
                  <span className={`text-xs font-body ml-1 ${plan.featured ? "text-white/70" : "text-write-sub"}`}>
                    /monthly
                  </span>
                </div>

                {/* Features */}
                <div className={`mt-5 pt-4 border-t ${plan.featured ? "border-white/20" : "border-border"}`}>
                  <p className={`text-xs font-semibold font-title mb-3 ${plan.featured ? "text-white" : "text-write-main"}`}>
                    What&apos;s included
                  </p>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs font-body">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-available"}`}
                          strokeWidth={2.5}
                        />
                        <span className={plan.featured ? "text-white/85" : "text-write-sub"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  {plan.featured ? (
                    <button
                      type="button"
                      className="w-full py-3 px-6 bg-white text-write-main rounded-xl text-sm font-semibold font-title hover:bg-white/90 transition-colors cursor-pointer"
                    >
                      Get started
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full py-3 px-6 bg-primary text-white rounded-xl text-sm font-semibold font-title hover:bg-primary-hover transition-colors cursor-pointer"
                    >
                      Get started
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
