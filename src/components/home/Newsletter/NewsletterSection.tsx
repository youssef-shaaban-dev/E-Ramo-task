import React from "react";
import AmenitiesWorkspaceIcon from "@/components/icons/AmenitiesWorkspaceIcon";
import Support247Icon from "@/components/icons/Support247Icon";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background section-padding">
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-write-main font-title">
          Subscribe To Our Newsletter
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-write-sub font-body font-normal max-w-md mx-auto leading-relaxed">
          Every couple of weeks we send out an update and a few things
          <br className="hidden sm:inline" /> that have inspired us.
        </p>

        {/* Form Container */}
        <NewsletterForm />
      </div>
    </section>
  );
}

export default NewsletterSection;
