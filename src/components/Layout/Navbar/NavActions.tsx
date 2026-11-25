import React from "react";
import { User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NavActions() {
  return (
    <div className="hidden md:flex items-center gap-3">
      {/* Language Switcher */}
      <button
        type="button"
        className="flex items-center gap-1.5 text-xs font-medium text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
      >
        <span className="text-sm" aria-hidden="true">
          🇸🇦
        </span>
        <span>العربية</span>
        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
      </button>

      {/* Action Buttons */}
      <Button variant="primary" size="sm" className="rounded-lg px-4">
        Create Account
      </Button>

      <Button
        variant="outline"
        size="sm"
        leftIcon={<User className="w-4 h-4" />}
        className="rounded-lg px-3.5"
      >
        Login
      </Button>
    </div>
  );
}
