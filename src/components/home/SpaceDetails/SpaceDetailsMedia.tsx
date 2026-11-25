import React from "react";
import Image from "next/image";

export function SpaceDetailsMedia() {
  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden shadow-xs border border-border/40 bg-muted/40">
      <Image
        src="/shared-space.jpg"
        alt="Shared co-working space with wooden workstations and colorful wall mural"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
