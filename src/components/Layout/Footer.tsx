import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, UsersRound, Building2, Laptop } from "lucide-react";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import AppleIcon from "@/components/icons/AplleIcon";

/* ─── Social Icons ─── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.65-1.64A1.64 1.64 0 0 0 6.46 5.5a1.64 1.64 0 0 0-1.65 1.62 1.64 1.64 0 0 0 1.65 1.64m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact Us", href: "#contact" },
  { label: "Membership", href: "#pricing" },
];

const PRODUCTS = [
  { label: "Shared Space", href: "#", icon: Users },
  { label: "Private Offices", href: "#", icon: Building2 },
  { label: "Meeting Rooms", href: "#", icon: UsersRound },
  { label: "Virtual Offices", href: "#", icon: Laptop },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#f3f5f6] border-t border-border/60 pt-12 md:pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          
          {/* Col 1: Logo & Socials */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-tight.png"
                alt="Chair Location"
                width={130}
                height={110}
                className="h-auto w-24 sm:w-28 object-contain"
              />
            </Link>

            {/* Social Icons 2x2 grid */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 text-primary">
              <a
                href="#"
                aria-label="Facebook"
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary-hover transition-colors"
              >
                <TwitterXIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Main Pages */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-write-main font-title mb-4">
              Main Pages
            </h3>
            <ul className="flex flex-col gap-3">
              {MAIN_PAGES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-xs sm:text-sm text-write-sub hover:text-primary transition-colors font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-write-sub/60 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-write-main font-title mb-4">
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.map((prod) => {
                const Icon = prod.icon;
                return (
                  <li key={prod.label}>
                    <Link
                      href={prod.href}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-write-sub hover:text-primary transition-colors font-medium"
                    >
                      <Icon className="w-4 h-4 text-write-sub/70 shrink-0" />
                      <span>{prod.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Download App */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-write-main font-title mb-4 leading-snug">
              Download the<br />Chair Location App
            </h3>

            <div className="flex flex-col gap-3 max-w-[170px]">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2.5 bg-write-main text-white rounded-lg px-3.5 py-2 hover:opacity-90 transition-opacity shadow-xs"
                aria-label="Get it on Google Play"
              >
                <GooglePlayIcon className="w-5 h-6 shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[7px] font-normal uppercase tracking-wider text-white/80">
                    Get it on
                  </span>
                  <span className="text-xs font-semibold font-title">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-2.5 bg-write-main text-white rounded-lg px-3.5 py-2 hover:opacity-90 transition-opacity shadow-xs"
                aria-label="Download on the App Store"
              >
                <AppleIcon className="w-4 h-6 shrink-0" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[7px] font-normal uppercase tracking-wider text-white/80">
                    Download on the
                  </span>
                  <span className="text-xs font-semibold font-title">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* ── Sub Footer ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-write-sub">
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Privacy &amp; Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>

          <p className="text-center sm:text-right font-normal">
            All Copyrights Chair Location | Developed by{" "}
            <strong className="font-semibold text-write-main">
              e-RAMO For Digital Solutions
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
