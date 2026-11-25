
---
name: landing-page
description: Builds high-converting, responsive landing pages while strictly enforcing existing CSS/Tailwind color variables and reusing existing UI components without duplication. Trigger when asked to create, scaffold, or update landing pages, hero sections, or marketing views.
---
# Landing Page Architecture & Strict Token Enforcement

Follow these rules strictly whenever building or modifying a landing page.

## 1. Pre-Flight Inspection (Mandatory)

Before writing any JSX/TSX or CSS, inspect the workspace to establish ground truth:

1. **Color & Theme Tokens:** Read `globals.css`, `index.css`, or `tailwind.config.*` to extract all defined CSS custom properties (e.g., `--primary`, `--background`, `--accent`) and Tailwind color aliases.
2. **Component Inventory:** Scan `src/components/` (especially `ui/`, `common/`, and `shared/`) to list all existing buttons, cards, badges, inputs, modals, and layout wrappers.

## 2. Color & Styling Rules (Zero Hardcoding)

- **Strict Token Usage:** Use ONLY semantic theme variables or Tailwind theme classes mapped to variables (e.g., `bg-background`, `text-foreground`, `bg-primary`, `border-border`, `var(--brand-accent)`).
- **Banned Values:** NEVER write raw hex codes (`#ffffff`), RGB/HSL values (`rgb(0,0,0)`), or arbitrary Tailwind color utilities (`bg-blue-600`, `text-slate-900`) unless explicitly defined in the theme file.
- **Missing Tokens:** If a needed shade or opacity variant is missing, use Tailwind opacity modifiers on existing semantic tokens (e.g., `bg-primary/10`) rather than inventing a new color.

## 3. Component Reuse (Strict DRY Principle)

- **Audit Before Creating:** Before creating any UI element (Button, Card, SectionHeader, Container, Badge), check if an equivalent already exists in `src/components/`.
- **Extend, Don't Duplicate:** If an existing component covers 80% of the need, extend it via optional props or `className` overrides instead of creating a new file (e.g., do not create `HeroButton.tsx` if `Button.tsx` exists).
- **Section Abstraction:** If a landing page pattern repeats 2 or more times (e.g., Feature Cards, Pricing Tiers, Testimonials, FAQ items), extract it into a single data-driven sub-component mapped over a typed config array.

## 4. Landing Page Structure & Quality

- **Section Hierarchy:** Organize pages cleanly into modular sections (`Hero`, `SocialProof`, `Features`, `HowItWorks`, `Pricing`, `FAQ`, `CTA`, `Footer`) inside a dedicated feature folder (e.g., `src/components/landing/`).
- **Responsive & Accessible:** Build mobile-first (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), use semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and ensure interactive elements have visible focus states using theme ring variables (`focus-visible:ring-ring`).

## 5. Verification Checklist

Before finishing the task, verify:

- [ ] Zero raw hex/rgb color codes exist in new files.
- [ ] No duplicate UI primitives were created in `src/components/`.
- [ ] Repeated cards or list items are rendered via `.map()` from a structured data array.
