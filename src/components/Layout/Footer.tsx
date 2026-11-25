import React from "react";
import Link from "next/link";
import { Armchair } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-primary">
            <Armchair className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-foreground">CHAIR LOCATION</span>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Chair Location. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
