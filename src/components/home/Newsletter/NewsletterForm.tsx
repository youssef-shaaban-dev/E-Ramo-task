"use client";

import React, { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
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
  );
}
