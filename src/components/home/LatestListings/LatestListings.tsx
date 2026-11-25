"use client";

import React, { useState } from "react";
import { ListingCard, ListingItem } from "./ListingCard";

export const LISTING_ITEMS: ListingItem[] = [
  {
    id: "spot-1",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    image: "/images/listings/listing-office.jpg",
    category: "Shared Area",
    rating: 4.9,
    reviewCount: 162,
    capacity: "12 Per",
    isOpen: true,
    isAvailable: true,
    priceHour: 20,
    currency: "SAR",
    isFavorited: true,
  },
  {
    id: "spot-2",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    image: "/images/listings/listing-office.jpg",
    category: "Meeting Room",
    rating: 4.9,
    reviewCount: 162,
    capacity: "12 Per",
    isOpen: false,
    isAvailable: false,
    priceHour: 20,
    currency: "SAR",
    isFavorited: false,
  },
  {
    id: "spot-3",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    image: "/images/listings/listing-office.jpg",
    category: "Private Office",
    rating: 4.9,
    reviewCount: 162,
    capacity: "12 Per",
    isOpen: false,
    isAvailable: true,
    priceHour: 20,
    currency: "SAR",
    isFavorited: true,
  },
  {
    id: "spot-4",
    title: "Spot Co-Working Space",
    description:
      "Chair location is a website where you can search, find and reserve co-working space, including co-working",
    image: "/images/listings/listing-office.jpg",
    category: "Meeting Room",
    rating: 4.9,
    reviewCount: 162,
    capacity: "12 Per",
    isOpen: false,
    isAvailable: true,
    priceHour: 20,
    currency: "SAR",
    isFavorited: true,
  },
];

export function LatestListings() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() =>
    LISTING_ITEMS.reduce((acc, item) => {
      acc[item.id] = !!item.isFavorited;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-padding">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-write-main font-title">
          Latest Listings
        </h2>
        <p className="mt-2 text-sm sm:text-base text-write-main font-body">
          Check our latest listings
        </p>
      </div>

      {/* Listings Grid */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LISTING_ITEMS.map((item) => (
          <ListingCard
            key={item.id}
            item={item}
            isFavorited={!!favorites[item.id]}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestListings;
