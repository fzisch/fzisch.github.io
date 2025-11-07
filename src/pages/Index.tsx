import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PlatformLinks } from "@/components/PlatformLinks";
import { LatestStream } from "@/components/LatestStream";
import { DonationLinks } from "@/components/DonationLinks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PlatformLinks />
      <LatestStream />
      <DonationLinks />
      <Footer />
    </div>
  );
};

export default Index;
