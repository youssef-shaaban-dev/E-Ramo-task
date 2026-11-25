"use client";

import React, { useState } from "react";

const inputBase =
  "w-full bg-transparent border-b border-border py-3 text-sm text-write-main font-body placeholder:text-write-sub focus:outline-none focus:border-primary transition-colors";

export function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
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
  );
}
