import React from "react";
import Image from "next/image";

export interface AboutImageItem {
  src: string;
  alt: string;
}

export const ABOUT_IMAGES: AboutImageItem[] = [
  {
    src: "/about-1.jpg",
    alt: "Business team collaborating in a modern conference room",
  },
  {
    src: "/about-2.jpg",
    alt: "Spacious open-plan coworking office with desks and natural lighting",
  },
  {
    src: "/about-3.jpg",
    alt: "Professionals discussing workspace options over laptops",
  },
];

export function AboutGallery() {
  return (
    <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
      {ABOUT_IMAGES.map((image) => (
        <div
          key={image.src}
          className="relative w-full aspect-16/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-xs border border-border/50 bg-muted/40"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
