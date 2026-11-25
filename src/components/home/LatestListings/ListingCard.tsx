import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Heart, User, Calendar, ChevronRight, Star } from "lucide-react";

export interface ListingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  capacity: string;
  isOpen: boolean;
  isAvailable: boolean;
  priceHour: number;
  currency: string;
  isFavorited?: boolean;
}

interface ListingCardProps {
  item: ListingItem;
  isFavorited: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export function ListingCard({
  item,
  isFavorited,
  onToggleFavorite,
}: ListingCardProps) {
  return (
    <article className="bg-card rounded-2xl sm:rounded-3xl border border-border/80 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col group">
      {/* Card Image Area with Overlays */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-muted/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />

        {/* Corner Diagonal Ribbon */}
        <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
          <div
            className={`absolute transform -rotate-45 text-center text-[10px] font-semibold tracking-wide py-1 w-32 -left-8 top-3.5 shadow-2xs ${
              item.isAvailable
                ? "bg-available text-available-foreground"
                : "bg-unavailable text-unavailable-foreground"
            }`}
          >
            {item.isAvailable ? "Available" : "Not Available"}
          </div>
        </div>

        {/* Floating Top-Right Actions */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Share listing"
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-muted-foreground hover:text-foreground shadow-2xs transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={(e) => onToggleFavorite(item.id, e)}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isFavorited
                  ? "text-unavailable fill-unavailable"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category & Rating Row */}
        <div className="flex items-center justify-between gap-2">
          <span className="bg-badge-warm/40 text-foreground text-[11px] font-medium px-2 py-0.5 rounded-md">
            {item.category}
          </span>

          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Star className="w-3 h-3 text-rating fill-rating" />
            <span>
              <strong className="text-foreground font-semibold">{item.rating}</strong> (
              {item.reviewCount} Review)
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base sm:text-lg font-bold text-foreground font-title leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Meta Capacity & Status */}
        <div className="mt-4 pt-1 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="w-3.5 h-3.5" />
            <span>{item.capacity}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span
              className={`font-medium ${
                item.isOpen ? "text-primary" : "text-unavailable"
              }`}
            >
              {item.isOpen ? "Open" : "Closed"}
            </span>
          </div>
        </div>

        {/* Pricing & Link Footer */}
        <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Starts From :{" "}
            <span className="font-bold text-foreground text-xs">
              {item.priceHour}{item.currency} /HOUR
            </span>
          </div>

          <Link
            href={`/listings/${item.id}`}
            aria-label={`View details for ${item.title}`}
            className="text-primary hover:translate-x-0.5 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
