"use client";

import Image from "next/image";
import { useState } from "react";

const CONTACT_IMAGES = [
  {
    src: "/contact-1.jpg",
    alt: "Co-working space with brick wall and Edison bulb lighting",
    className: "relative rounded-2xl overflow-hidden bg-muted aspect-4/3",
  },

  {
    src: "/contact-2.jpg",
    alt: "Bright co-working space with colorful chairs",
    className: "relative rounded-2xl overflow-hidden bg-muted aspect-4/3",
  },
];


const inputBase =
  "w-full bg-transparent border-b border-border py-3 text-sm text-write-main font-body placeholder:text-write-sub focus:outline-none focus:border-primary transition-colors";

export function ContactSection() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", city: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up API call
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">

      {/* ── Header ── */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-write-main font-title">
          Contact Us
        </h2>
        <p className="mt-2 text-sm text-write-sub font-body font-normal">
          We Are Here For Your Help
        </p>
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── Left: image mosaic ── */}
        <div className="relative grid grid-cols-2 gap-3">

          {/* Left stack: 2 images */}
          <div className="flex flex-col gap-3">
            {CONTACT_IMAGES.map((img) => (
              <div key={img.src} className={img.className}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Right: 1 tall image */}
          <div className="relative rounded-2xl overflow-hidden bg-muted min-h-80">
            <Image
              src="/contact-3.jpg"
              alt="Colorful co-working space with mural wall and wooden beams"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Centre frosted-glass circle overlay */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full backdrop-blur-md"
            style={{ background: "rgba(255,255,255,0.45)" }}
          />
        </div>

        {/* ── Right: contact form ── */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <p className="text-sm font-semibold text-write-main font-body">
            Please fill the upcoming fields
            <span className="text-unavailable ml-0.5">*</span>
          </p>

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name..."
            value={form.fullName}
            onChange={handleChange}
            required
            className={inputBase}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-mail..."
            value={form.email}
            onChange={handleChange}
            required
            className={inputBase}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number..."
            value={form.phone}
            onChange={handleChange}
            className={inputBase}
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City..."
            value={form.city}
            onChange={handleChange}
            className={inputBase}
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message Text..."
            value={form.message}
            onChange={handleChange}
            rows={3}
            className={`${inputBase} resize-none`}
          />

          {/* Send button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold font-title text-sm py-3.5 rounded-xl hover:bg-primary-hover transition-colors cursor-pointer mt-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
