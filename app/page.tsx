
import HeroSection from "./sections/Herosection";
import LuxuryFreedomSection from "./sections/LuxuryFreedomSection";
import FindYourRideSection from "./sections/FindYourrideSection";
import LuxuryReliabilitySection from "./sections/LuxuryReliabilitySection";
import TopPicksSection from "./sections/TopPicksSection";
import SimpleFastSection from "./sections/SimpleFastSection";
import TrustedSection from "./sections/TrustedSection";
import FaqSection from "./sections/Faqsection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {

  return (
    <main className="">
      <HeroSection />
      <LuxuryFreedomSection />
      <FindYourRideSection />
      <LuxuryReliabilitySection />
      <TopPicksSection />
      <SimpleFastSection />
      <TrustedSection />
      <FaqSection />
      <Footer />

      
    </main>
  );
}
