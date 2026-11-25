import Link from "next/link";
import Image from "next/image";
import { Users, UsersRound, Building2, Laptop } from "lucide-react";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import AppleIcon from "@/components/icons/AplleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterXIcon from "../icons/TwitterXIcon";

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
    <footer className="w-full bg-panel-warm border-t border-border/60 pt-12 md:pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          
          {/* Col 1: Logo & Socials */}
          <div className="flex flex-col items-start gap-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Chair Location"
                width={140}
                height={90}
                className="h-auto w-28 sm:w-32 object-contain"
              />
            </Link>

            {/* Social Icons 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 text-write-main">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center text-write-main hover:text-primary transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center text-write-main hover:text-primary transition-colors"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center text-write-main hover:text-primary transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 flex items-center justify-center text-write-main hover:text-primary transition-colors"
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
