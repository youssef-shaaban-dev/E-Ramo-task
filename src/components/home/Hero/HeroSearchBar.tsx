import React from "react";
import { Search, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroSearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function HeroSearchBar({
  query,
  onQueryChange,
  onSubmit,
}: HeroSearchBarProps) {
  return (
    <div className="bg-panel-warm px-4 py-3 sm:px-6 sm:py-4 border-t border-border/40">
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
      >
        {/* Search Input Field */}
        <div className="relative flex-1 flex items-center bg-card shadow-2xs rounded-xl px-3.5 py-2 transition-colors border border-border/80 focus-within:ring-2 focus-within:ring-ring focus-within:border-primary">
          <Search className="w-4 h-4 text-muted-foreground shrink-0 mr-2.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
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
  );
}
