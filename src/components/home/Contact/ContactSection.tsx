import React from "react";
import { ContactMosaic } from "./ContactMosaic";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8 section-padding max-w-7xl mx-auto">
      {/* ── Header ── */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-write-main font-title">
          Contact Us
        </h2>
        <p className="mt-2 text-sm text-write-sub font-body font-normal">
          We Are Here For Your Help
        </p>
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ContactMosaic />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
