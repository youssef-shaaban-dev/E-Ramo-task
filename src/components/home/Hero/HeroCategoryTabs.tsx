import React from "react";

export interface SpaceCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface HeroCategoryTabsProps {
  categories: SpaceCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function HeroCategoryTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: HeroCategoryTabsProps) {
  return (
    <div className="bg-card px-4 pt-4 pb-3 sm:px-6 sm:pt-5 sm:pb-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
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
  );
}
