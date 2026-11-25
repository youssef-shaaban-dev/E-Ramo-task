
---
name: landing-page-builder
description: Builds high-converting, responsive landing pages while strictly enforcing existing CSS/Tailwind color variables, reusing existing UI components without duplication, avoiding unnecessary Tailwind arbitrary sizing, and optimizing image loading and layout stability. Trigger when asked to create, scaffold, or update landing pages, hero sections, or marketing views.
---
# Landing Page Architecture, Token Enforcement & Performance

Follow these rules strictly whenever building or modifying a landing page.

## 1. Pre-Flight Inspection (Mandatory)

Before writing any JSX/TSX or CSS, inspect the workspace to establish ground truth:

1. **Color & Theme Tokens:** Read `globals.css`, `index.css`, or `tailwind.config.*` to extract all defined CSS custom properties (e.g., `--primary`, `--background`, `--accent`) and Tailwind color aliases.
2. **Component Inventory:** Scan `src/components/` (especially `ui/`, `common/`, and `shared/`) to list all existing buttons, cards, badges, inputs, modals, and layout wrappers.
3. **Tailwind Version & Config:** Check `package.json` and theme/config files to see whether the project uses Tailwind v4 (`@theme` / dynamic spacing) or v3 so spacing utilities match the active scale.

## 2. Color & Styling Rules (Zero Hardcoding)

- **Strict Token Usage:** Use ONLY semantic theme variables or Tailwind theme classes mapped to variables (e.g., `bg-background`, `text-foreground`, `bg-primary`, `border-border`, `var(--brand-accent)`).
- **Banned Values:** NEVER write raw hex codes (`#ffffff`), RGB/HSL values (`rgb(0,0,0)`), or arbitrary Tailwind color utilities (`bg-blue-600`, `text-slate-900`) unless explicitly defined in the theme file.
- **Missing Tokens:** If a needed shade or opacity variant is missing, use Tailwind opacity modifiers on existing semantic tokens (e.g., `bg-primary/10`) rather than inventing a new color.

## 3. Tailwind Sizing & Arbitrary Value Discipline

- **Prefer Scale Utilities Over Arbitrary Values:** Never write arbitrary brackets like `h-[400px]`, `w-[300px]`, `p-[16px]`, or `gap-[24px]` when a standard or dynamic Tailwind spacing utility exists (for example, `h-100` for `400px`, `w-75` for `300px`, `p-4` for `16px`, `gap-6` for `24px`).
- **Aspect Ratio Fractions (Tailwind v4):** In Tailwind v4, dynamic ratios do not need arbitrary bracket syntax. For example, `lg:aspect-[21/9]` can and should be written as `lg:aspect-21/9`, `aspect-[16/9]` as `aspect-16/9`, and `aspect-[4/3]` as `aspect-4/3`.
- **No Arbitrary Guesswork:** Reserve bracketed arbitrary values (`[...]`) strictly for genuinely custom measurements that do not map cleanly to the spacing scale, and document why an arbitrary value is needed.
- **Fluid & Responsive Sizing:** Use responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`) and `clamp()` / scale utilities instead of rigid fixed pixel boxes that break on smaller or larger viewports.

## 4. Component Reuse (Strict DRY Principle)

- **Audit Before Creating:** Before creating any UI element (Button, Card, SectionHeader, Container, Badge), check if an equivalent already exists in `src/components/`.
- **Extend, Don't Duplicate:** If an existing component covers 80% of the need, extend it via optional props or `className` overrides instead of creating a new file (e.g., do not create `HeroButton.tsx` if `Button.tsx` exists).
- **Section Abstraction:** If a landing page pattern repeats 2 or more times (e.g., Feature Cards, Pricing Tiers, Testimonials, FAQ items), extract it into a single data-driven sub-component mapped over a typed config array.

## 5. Image & Media Performance

- **Prevent Layout Shift (CLS):** Always assign an explicit aspect ratio (`aspect-video`, `aspect-square`, `aspect-[4/3]`, or `aspect-[...]`) or explicit width/height constraints on image containers so space is reserved before the image loads.
- **Above-the-Fold / Hero Images:** Set `loading="eager"` and high fetch priority (`fetchPriority="high"`, or framework `priority` prop when applicable) on primary hero/above-the-fold images so LCP is fast. Never lazy-load above-the-fold hero images.
- **Below-the-Fold Images:** Set `loading="lazy"` and `decoding="async"` on non-critical images below the fold, and use `object-cover` (with appropriate `object-*` focal positioning) to avoid distortion.

## 6. Landing Page Structure & Quality

- **Section Hierarchy:** Organize pages cleanly into modular sections (`Hero`, `SocialProof`, `Features`, `HowItWorks`, `Pricing`, `FAQ`, `CTA`, `Footer`) inside a dedicated feature folder (e.g., `src/components/landing/`).
- **Responsive & Accessible:** Build mobile-first (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), use semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and ensure interactive elements have visible focus states using theme ring variables (`focus-visible:ring-ring`).

## 7. Verification Checklist

Before finishing the task, verify:

- [ ] Zero raw hex/rgb color codes exist in new files.
- [ ] No unnecessary arbitrary sizing like `h-[400px]` when a Tailwind spacing class like `h-100` applies.
- [ ] No duplicate UI primitives were created in `src/components/`.
- [ ] Repeated cards or list items are rendered via `.map()` from a structured data array.
- [ ] Images have explicit aspect ratios, `loading="eager"` on hero/above-the-fold media, and `loading="lazy"` on below-the-fold media.
