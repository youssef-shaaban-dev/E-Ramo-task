import React from "react";

interface PricingToggleProps {
  annually: boolean;
  onToggle: (annually: boolean) => void;
}

export function PricingToggle({ annually, onToggle }: PricingToggleProps) {
  return (
    <div className="mt-7 inline-flex items-center gap-3">
      <span
        className={`text-sm font-body transition-colors ${
          !annually ? "font-semibold text-write-main" : "text-write-sub"
        }`}
      >
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={annually}
        onClick={() => onToggle(!annually)}
        className="relative w-12 h-6 rounded-full bg-primary focus:outline-none cursor-pointer"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            annually ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span
        className={`text-sm font-body transition-colors ${
          annually ? "font-semibold text-write-main" : "text-write-sub"
        }`}
      >
        Annually
      </span>
    </div>
  );
}
