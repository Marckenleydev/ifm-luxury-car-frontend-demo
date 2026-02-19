
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

      <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl hover:scale-110
          transition-transform
          sm:animate-bounce"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={42} height={42} />
        </a>
      </div>
    </main>
  );
}
