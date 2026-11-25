import React from "react";
import Image from "next/image";

export const CONTACT_IMAGES = [
  {
    src: "/images/contact/contact-1.jpg",
    alt: "Co-working space with brick wall and Edison bulb lighting",
    className: "relative rounded-2xl overflow-hidden bg-muted aspect-4/3",
  },
  {
    src: "/images/contact/contact-3.jpg",
    alt: "Bright co-working space with colorful chairs",
    className: "relative rounded-2xl overflow-hidden bg-muted aspect-4/3",
  },
];

export function ContactMosaic() {
  return (
    <div className="relative grid grid-cols-2 gap-3">
      {/* Left stack: 2 images */}
      <div className="flex flex-col gap-3">
        {CONTACT_IMAGES.map((img) => (
          <div key={img.src} className={img.className}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Right: 1 tall image */}
      <div className="relative rounded-2xl overflow-hidden bg-muted min-h-80">
        <Image
          src="/images/contact/contact-2.jpg"
          alt="Colorful co-working space with mural wall and wooden beams"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Centre frosted-glass circle overlay */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full backdrop-blur-md"
        style={{ background: "rgba(255,255,255,0.45)" }}
      />
    </div>
  );
}
