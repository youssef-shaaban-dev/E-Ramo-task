import React from "react";
import Image from "next/image";

export const BRANDS = [
  { id: "almarai",  src: "/images/brands/almarai.png",  alt: "Almarai" },
  { id: "alrajhi",  src: "/images/brands/alrajhi.png",  alt: "Al Rajhi Bank" },
  { id: "visa",     src: "/images/brands/visa.png",     alt: "Visa" },
  { id: "slack",    src: "/images/brands/slack.png",    alt: "Slack" },
  { id: "xbox",     src: "/images/brands/xbox.png",     alt: "Xbox One" },
  { id: "linkedin", src: "/images/brands/linkedin.png", alt: "LinkedIn" },
  { id: "cisco",    src: "/images/brands/cisco.png",    alt: "Cisco" },
  { id: "albilad",  src: "/images/brands/albilad.png",  alt: "Bank Albilad" },
];

export function BrandLogos() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {BRANDS.map(({ id, src, alt }) => (
        <div
          key={id}
          className="flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-5 min-h-18"
        >
          <Image
            src={src}
            alt={alt}
            width={120}
            height={48}
            className="max-h-10 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}