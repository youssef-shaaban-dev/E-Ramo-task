import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  id:          number;
  image:       string;
  alt:         string;
  author:      string;
  date:        string;
  title:       string;
  description: string;
  href:        string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    image: "/blog-1.jpg",
    alt: "Modern co-working space with shelves and wooden desks",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    title: "Blog Title Here",
    description:
      "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a too...",
    href: "#",
  },
  {
    id: 2,
    image: "/blog-2.jpg",
    alt: "Open plan co-working office with orange chairs and large windows",
    author: "Mohamed MO",
    date: "26 Apr 2024",
    title: "Blog Title Here",
    description:
      "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a too...",
    href: "#",
  },
  {
    id: 3,
    image: "/blog-3.jpg",
    alt: "Co-working space with green chairs and wooden furniture",
    author: "Mohamed MO",
    date: "20 Apr 2024",
    title: "Blog Title Here",
    description:
      "One of the primary functions of a POS system is to process transactions and handle sensitive custome...",
    href: "#",
  },
];

export function RecentArticlesSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">

      {/* ── Header row: title + nav arrows ── */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-write-main font-title">
            Our Recent Articles
          </h2>
          <p className="mt-1 text-sm text-write-sub font-body font-normal">
            Stay Informed with Our Latest Insights
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-2 mt-1 shrink-0">
          <button
            type="button"
            aria-label="Previous articles"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-write-sub hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next articles"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-write-sub hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Article Cards Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article) => (
          <article key={article.id} className="flex flex-col">

            {/* Image */}
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-muted">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Meta: author + date */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-write-sub font-body">{article.author}</span>
              <span className="text-xs text-write-sub font-body">{article.date}</span>
            </div>

            {/* Title */}
            <h3 className="mt-2 text-lg font-bold text-write-main font-title leading-snug">
              {article.title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-xs text-write-sub font-body font-normal leading-relaxed line-clamp-3 flex-1">
              {article.description}
            </p>

            {/* Read More */}
            <a
              href={article.href}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-write-sub font-bold font-body hover:text-primary transition-colors group"
            >
              Read More
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
