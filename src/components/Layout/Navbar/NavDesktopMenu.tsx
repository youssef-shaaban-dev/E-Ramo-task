import React from "react";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
}

interface NavDesktopMenuProps {
  items: NavItem[];
  activeHref: string;
  onSelect: (href: string) => void;
}

export function NavDesktopMenu({
  items,
  activeHref,
  onSelect,
}: NavDesktopMenuProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {items.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => onSelect(item.href)}
            className={`text-sm transition-colors py-1 relative ${
              isActive
                ? "text-primary font-semibold"
                : "text-write-sub hover:text-write-main"
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
