import Link from "next/link";
import { Users, UsersRound, Building2, Laptop } from "lucide-react";

export const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact Us", href: "#contact" },
  { label: "Membership", href: "#pricing" },
];

export const PRODUCTS = [
  { label: "Shared Space", href: "#", icon: Users },
  { label: "Private Offices", href: "#", icon: Building2 },
  { label: "Meeting Rooms", href: "#", icon: UsersRound },
  { label: "Virtual Offices", href: "#", icon: Laptop },
];

export function FooterNavList() {
  return (
    <>
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
    </>
  );
}
