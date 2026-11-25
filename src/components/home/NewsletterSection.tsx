"use client";

import { useState } from "react";
import AmenitiesWorkspaceIcon from "@/components/icons/AmenitiesWorkspaceIcon";
import Support247Icon from "@/components/icons/Support247Icon";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Left Badge Icon */}
        <div
          aria-hidden="true"
          className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-badge-warm/80 items-center justify-center shadow-xs -rotate-12 pointer-events-none select-none transition-transform hover:rotate-0"
        >
          <AmenitiesWorkspaceIcon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>

        {/* Floating Right Badge Icon */}
        <div
          aria-hidden="true"
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-badge-warm/80 items-center justify-center shadow-xs rotate-12 pointer-events-none select-none transition-transform hover:rotate-0"
        >
          <Support247Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>

        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-write-main font-title">
          Subscribe To Our Newsletter
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-write-sub font-body font-normal max-w-md mx-auto leading-relaxed">
          Every couple of weeks we send out an update and a few things
          <br className="hidden sm:inline" /> that have inspired us.
        </p>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-10 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write Your Mail Here..."
            required
            className="w-full flex-1 bg-white border border-badge-warm/70 rounded-xl px-4 py-3.5 text-sm text-write-main font-body placeholder:text-write-sub/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary shadow-xs transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold font-title text-sm rounded-xl hover:bg-primary-hover shadow-xs transition-colors cursor-pointer shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
