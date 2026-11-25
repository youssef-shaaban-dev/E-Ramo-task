import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArticleCard, ArticleItem } from "./ArticleCard";

export const RECENT_ARTICLES: ArticleItem[] = [
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
    <section className="w-full px-4 sm:px-6 lg:px-8 section-padding max-w-7xl mx-auto">
      {/* ── Header row: title + nav arrows ── */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-write-main font-title">
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
        {RECENT_ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default RecentArticlesSection;
