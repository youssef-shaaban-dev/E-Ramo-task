"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavbarLogo } from "./NavbarLogo";
import { NavDesktopMenu, NavItem } from "./NavDesktopMenu";
import { NavActions } from "./NavActions";
import { NavMobileMenu } from "./NavMobileMenu";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact Us", href: "#contact" },
  { label: "Membership", href: "#pricing" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  return (
    <header className="w-full border-b border-border/40 sticky top-0 z-50 backdrop-blur-md bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <NavbarLogo />

        {/* Desktop Navigation Links */}
        <NavDesktopMenu
          items={NAV_ITEMS}
          activeHref={activeHref}
          onSelect={setActiveHref}
        />

        {/* Right Actions & Utilities */}
        <NavActions />

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <NavMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeHref={activeHref}
        onSelect={setActiveHref}
      />
    </header>
  );
}

export default Navbar;
