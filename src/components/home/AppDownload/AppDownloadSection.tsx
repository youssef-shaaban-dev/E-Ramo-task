import React from "react";
import { AppPhoneMockup } from "./AppPhoneMockup";
import { AppDownloadContent } from "./AppDownloadContent";

export function AppDownloadSection() {
  return (
    <section className="w-full bg-panel-warm overflow-hidden section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-80 md:min-h-95">
          <AppPhoneMockup />
          <AppDownloadContent />
        </div>
      </div>
    </section>
  );
}

export default AppDownloadSection;
