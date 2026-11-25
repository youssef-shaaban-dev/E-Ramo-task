"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact Us", href: "/contact" },
    { label: "Membership", href: "/membership" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full border-b border-border/40 sticky top-0 z-50 backdrop-blur-md bg-background/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <Image src="/logo.png" alt="Logo" width={500} height={500} className="w-20 h-20" loading="eager" fetchPriority="high" />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm transition-colors py-1 relative ${item.isActive
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

                {/* Right Actions & Utilities */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language Switcher */}
                    <button
                        type="button"
                        className="flex items-center gap-1.5 text-xs font-medium text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    >
                        <span className="text-sm" aria-hidden="true">🇸🇦</span>
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

                {/* Mobile menu button */}
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
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-card px-4 pt-3 pb-6 space-y-3">
                    <nav className="flex flex-col space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${item.isActive
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
            )}
        </header>
    );
}
