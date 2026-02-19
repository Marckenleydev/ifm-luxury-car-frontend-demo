
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
  const message = "Hello I’m interested in your luxury car rental services. Can you share availability and pricing? ";
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

      <div className="fixed bottom-6 right-6 z-9999 pointer-events-auto">
        <a
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/971559990003?text=${encodeURIComponent(message)}`}
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
