import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface ArticleItem {
  id: number;
  image: string;
  alt: string;
  author: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

interface ArticleCardProps {
  article: ArticleItem;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col">
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
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-write-main font-body hover:text-primary transition-colors group"
      >
        Read More
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
