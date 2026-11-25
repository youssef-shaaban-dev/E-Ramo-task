# 🪑 Chair Location — Coworking & Flexible Office Marketplace

A pixel-perfect, responsive landing page for **Chair Location**, built using **Next.js 16 (App Router & Turbopack)**, **Tailwind CSS v4**, **TypeScript**, and **Lucide React**.

Developed for **e-RAMO For Digital Solutions**.

---

## 🚀 Live Demo & Repository
- **Repository:** [GitHub](https://github.com/youssef-shaaban-dev/E-Ramo-task)
- **Framework:** Next.js 16.4.6
- **Styling:** Tailwind CSS v4

---

## ✨ Features & Sections Built

1. **Header / Navbar (`Navbar.tsx`)**
   - Brand logo and responsive desktop navigation.
   - Language selector and action buttons ("Create Account" & "Login").
   - Responsive mobile navigation drawer with backdrop blur.

2. **Hero Section (`Hero.tsx`)**
   - Full-width hero banner with responsive aspect ratios.
   - Dual-layer design: Tabbed categories row (*Shared Space, Private Offices, Meeting Rooms, Virtual Offices*) floating over the search bar.
   - Search input with "Search Nearby" location trigger.

3. **About Section (`AboutSection.tsx`)**
   - Value propositions with custom badge icons.
   - Staggered office photo composition.
   - "View Products" and "Book Now" call-to-actions.

4. **Latest Listings (`LatestListings.tsx`)**
   - Responsive 4-card grid showing available and booked coworking spaces.
   - Real-time badges: Status ribbon (*Available / Not Available*), category pills, ratings, capacity, and hourly rates.
   - Social share and bookmarking actions.

5. **Space Details Showcase (`SpaceDetailsSection.tsx`)**
   - Centered floating pill switcher for workspace types (*Shared Space, Private Offices, Meeting Rooms, Virtual Offices*).
   - Highlighting key amenities, price tiers, and workspace imagery.

6. **How It Works (`HowItWorksSection.tsx`)**
   - 3-step numbered workflow (*Book, Reach or Call*, *View Location Info*, *Search Locations*).
   - Clean iconography, descriptive copy, and rounded gallery previews.

7. **Hybrid Working (`HybridWorkingSection.tsx`)**
   - Showcase on modern hybrid flexibility with a 3-column curated workspace gallery.

8. **Mobile App Promotion (`AppDownloadSection.tsx`)**
   - Mobile mockup showcase with decorative illustration overlay.
   - App Store and Google Play badges with authentic SVG assets.

9. **Interactive Pricing (`PricingSection.tsx`)**
   - Monthly vs. Annual toggle with dynamic pricing recalculation.
   - Sidebar filter by workspace category (*Meeting Rooms, Shared Space, Private Offices, etc.*).
   - Highlighted *Popular Plan* tier with distinct visual styling and full feature checklist.
   - 24/7 Support contact link.

10. **Recent Articles (`RecentArticlesSection.tsx`)**
    - Blog & insights section with metadata (*author, date, summary*).
    - Slider navigation triggers.

11. **Contact Us (`ContactSection.tsx`)**
    - Dual layout: multi-photo workspace mosaic with frosted-glass focal accent.
    - Minimalist, underline-style contact inquiry form.

12. **Trusted By (`TrustedBySection.tsx`)**
    - Deep green branding section with custom diagonal pattern texture.
    - Grid of 8 global & regional brand logos (*Almarai, Al Rajhi Bank, VISA, Slack, Xbox, LinkedIn, Cisco, Bank Albilad*).

13. **Newsletter Subscription (`NewsletterSection.tsx`)**
    - Clean subscription box flanked by floating decorative amenity badges.

14. **Footer (`Footer.tsx`)**
    - Brand logo, green-tinted social links (*Facebook, YouTube, LinkedIn, X*).
    - Quick navigation for Main Pages and Workspace Products.
    - Mobile app download CTA.
    - Copyright & developer attribution (*e-RAMO For Digital Solutions*).

---

## 🎨 Design System & Tokens

Defined inside `globals.css` using Tailwind CSS v4 `@theme inline`:

- **Primary Green:** `#365327` (`--primary`)
- **Primary Hover:** `#29421e` (`--primary-hover`)
- **Main Heading Text:** `#1A2921` (`--write-main`)
- **Sub / Body Text:** `#717A76` (`--write-sub`)
- **Warm Panel Card:** `#FFFAF5` (`--panel-warm`)
- **Warm Badge / Accent:** `#E7CAAA` (`--badge-warm`)
- **Available Status:** `#8EAA79` (`--available`)
- **Unavailable Status:** `#D9534F` (`--unavailable`)
- **Fonts:**
  - Headings: `DM Sans` (`var(--font-dm-sans)`)
  - Body copy: `Open Sans` (`var(--font-open-sans)`)

---

## 🛠️ Tech Stack & Architecture

- **Next.js 16.4.6** — App Router, React Server Components (RSC) and Client Components.
- **Tailwind CSS v4** — CSS-first configuration using `@theme` and `@utility`.
- **TypeScript** — Strictly typed models, components, and props.
- **Lucide React** — Standardized iconography.
- **next/font/google** — Automatic font optimization.

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- `pnpm` (recommended), `npm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/youssef-shaaban-dev/E-Ramo-task.git

# Navigate to project folder
cd E-Ramo-task

# Install dependencies
pnpm install
```

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and create production build
pnpm build

# Start production server
pnpm start
```

---

## 📄 License
This project was created as a technical assessment for **e-RAMO For Digital Solutions**.
