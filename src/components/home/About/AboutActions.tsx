import React from "react";
import { Button } from "@/components/ui/Button";

export function AboutActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
      <Button
        variant="primary"
        size="md"
        className="rounded-xl px-7 font-semibold text-sm"
      >
        View Products
      </Button>
      <Button
        variant="outline"
        size="md"
        className="rounded-xl px-7 font-medium text-sm"
      >
        Book Now
      </Button>
    </div>
  );
}
