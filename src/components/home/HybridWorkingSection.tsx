import Image from "next/image";

interface HybridImage {
  src: string;
  alt: string;
}

const HYBRID_IMAGES: HybridImage[] = [
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

export function HybridWorkingSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-write-main font-title">
          Hybrid working can work for you
        </h2>
        <p className="mt-4 text-sm text-write-sub font-body font-normal mx-auto leading-relaxed">
          Hybrid working offers you the freedom to work closer to clients,
          colleagues or home. It&apos;s also greener and more cost-effective. With over
          <br />
          4,000 locations globally, nobody is better placed than Regus to help
          you make the best of it.
        </p>
      </div>

      {/* Images Grid */}
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
    </section>
  );
}
