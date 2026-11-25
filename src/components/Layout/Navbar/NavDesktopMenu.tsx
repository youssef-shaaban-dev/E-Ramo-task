import React from "react";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavDesktopMenuProps {
  items: NavItem[];
}

export function NavDesktopMenu({ items }: NavDesktopMenuProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-sm transition-colors py-1 relative ${
            item.isActive
              ? "text-primary font-semibold"
              : "text-write-sub hover:text-write-main"
          }`}
        >
          {item.label}
          {item.isActive && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
}
