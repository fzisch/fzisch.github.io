import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PlatformLinks } from "@/components/PlatformLinks";
import { TwitchLiveEmbed } from "@/components/TwitchLiveEmbed";
import { DonationLinks } from "@/components/DonationLinks";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PlatformLinks />
        <TwitchLiveEmbed />
        <DonationLinks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
