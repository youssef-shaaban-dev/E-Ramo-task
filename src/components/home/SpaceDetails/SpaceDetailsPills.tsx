import React from "react";

export interface SpaceTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SpaceDetailsPillsProps {
  tabs: SpaceTab[];
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export function SpaceDetailsPills({
  tabs,
  activeTab,
  onSelectTab,
}: SpaceDetailsPillsProps) {
  return (
    <div className="absolute -top-10 sm:-top-11 md:-top-12 left-1/2 -translate-x-1/2 z-20 w-full max-w-187 px-3 sm:px-4">
      <div className="bg-primary rounded-full h-19 sm:h-23 px-3 sm:px-5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 shadow-xl shadow-black/10 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-white text-write-main font-semibold shadow-sm"
                  : "bg-white/8 text-white/85 hover:text-white hover:bg-white/15"
              }`}
              aria-pressed={isActive}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
