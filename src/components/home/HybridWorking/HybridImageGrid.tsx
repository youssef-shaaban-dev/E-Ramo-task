import React from "react";
import Image from "next/image";

export interface HybridImage {
  src: string;
  alt: string;
}

export const HYBRID_IMAGES: HybridImage[] = [
  {
    src: "/hybrid-1.jpg",
    alt: "Modern co-working space with shelves and wooden desks",
  },
  {
    src: "/hybrid-2.jpg",
    alt: "Open plan office with orange chairs and large windows",
  },
  {
    src: "/hybrid-3.jpg",
    alt: "Bright spacious office with white desks and plants",
  },
];

export function HybridImageGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {HYBRID_IMAGES.map((img) => (
        <div
          key={img.src}
          className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-muted"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
