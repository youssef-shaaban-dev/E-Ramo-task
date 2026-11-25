import React from "react";
import { Users, UsersRound, Building2, Laptop, Headphones } from "lucide-react";

export const PRICING_SIDEBAR_CATEGORIES = [
  { id: "shared-space",    label: "Shared Space",    icon: Users },
  { id: "meeting-rooms",   label: "Meeting Rooms",   icon: UsersRound },
  { id: "private-offices", label: "Private Offices", icon: Building2 },
  { id: "virtual-offices", label: "Virtual Offices", icon: Laptop },
];

interface PricingSidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function PricingSidebar({
  activeCategory,
  onSelectCategory,
}: PricingSidebarProps) {
  return (
    <aside className="flex flex-col gap-2">
      <h3 className="text-base font-bold text-write-main font-title leading-snug mb-2">
        Select Form The<br />Upcoming Options.
      </h3>

      {PRICING_SIDEBAR_CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-body text-left transition-colors cursor-pointer ${
              isActive
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
  );
}
