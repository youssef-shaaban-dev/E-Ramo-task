import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavItem } from "./NavDesktopMenu";

interface NavMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function NavMobileMenu({ isOpen, onClose, items }: NavMobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-border bg-card px-4 pt-3 pb-6 space-y-3">
      <nav className="flex flex-col space-y-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={`px-3 py-2 rounded-lg text-sm font-medium ${
              item.isActive
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-write-sub hover:bg-muted"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="pt-3 border-t border-border flex flex-col gap-2">
        <Button variant="primary" size="md" className="w-full">
          Create Account
        </Button>
        <Button
          variant="outline"
          size="md"
          leftIcon={<User className="w-4 h-4" />}
          className="w-full"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
