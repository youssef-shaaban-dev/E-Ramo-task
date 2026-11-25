import {
  Hero,
  AboutSection,
  LatestListings,
  SpaceDetailsSection,
  HowItWorksSection,
  HybridWorkingSection,
  AppDownloadSection,
  PricingSection,
  RecentArticlesSection,
  ContactSection,
  TrustedBySection,
  NewsletterSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LatestListings />
      <SpaceDetailsSection />
      <HowItWorksSection />
      <HybridWorkingSection />
      <AppDownloadSection />
      <PricingSection />
      <RecentArticlesSection />
      <ContactSection />
      <TrustedBySection />
      <NewsletterSection />
    </>
  );
}
