import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { LatestListings } from "@/components/home/LatestListings";
import { SpaceDetailsSection } from "@/components/home/SpaceDetailsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { HybridWorkingSection } from "@/components/home/HybridWorkingSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";

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
    </>
  );
}
