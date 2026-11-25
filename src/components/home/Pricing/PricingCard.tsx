import React from "react";
import { Check } from "lucide-react";

export interface Plan {
  id: string;
  badge?: string;
  tier: string;
  name: string;
  description: string;
  price: { monthly: number; annually: number };
  currency: string;
  features: string[];
  featured?: boolean;
  iconType: "basic" | "mid" | "big";
}

function PlanIcon({
  type,
  featured,
}: {
  type: "basic" | "mid" | "big";
  featured?: boolean;
}) {
  const bg = featured ? "bg-white/20" : "bg-accent";
  const col = featured ? "white" : "var(--color-primary)";

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
            stroke={col}
            strokeWidth="1.5"
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

interface PricingCardProps {
  plan: Plan;
  annually: boolean;
}

export function PricingCard({ plan, annually }: PricingCardProps) {
  const price = annually ? plan.price.annually : plan.price.monthly;

  return (
    <div
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
          <p
            className={`text-[10px] font-body ${
              plan.featured ? "text-white/70" : "text-write-sub"
            }`}
          >
            {plan.tier}
          </p>
          <h3
            className={`text-lg font-bold font-title ${
              plan.featured ? "text-white" : "text-write-main"
            }`}
          >
            {plan.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p
        className={`mt-3 text-xs font-body leading-relaxed ${
          plan.featured ? "text-white/70" : "text-write-sub"
        }`}
      >
        {plan.description}
      </p>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-0.5">
        <span
          className={`text-xs font-semibold font-body mr-0.5 ${
            plan.featured ? "text-white/80" : "text-write-sub"
          }`}
        >
          {plan.currency}
        </span>
        <span
          className={`text-4xl font-bold font-title leading-none ${
            plan.featured ? "text-white" : "text-write-main"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-xs font-body ml-1 ${
            plan.featured ? "text-white/70" : "text-write-sub"
          }`}
        >
          /monthly
        </span>
      </div>

      {/* Features */}
      <div
        className={`mt-5 pt-4 border-t ${
          plan.featured ? "border-white/20" : "border-border"
        }`}
      >
        <p
          className={`text-xs font-semibold font-title mb-3 ${
            plan.featured ? "text-white" : "text-write-main"
          }`}
        >
          What&apos;s included
        </p>
        <ul className="flex flex-col gap-2.5 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs font-body">
              <Check
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  plan.featured ? "text-white" : "text-available"
                }`}
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
}
