"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      "Simply browse our fleet, select your preferred vehicle, choose your pickup date and duration, add any preferences, and confirm your booking. The entire process takes just a few minutes.",
    defaultOpen: true,
  },
  {
    question: "Can the car be delivered to my location?",
    answer:
      "Yes, we offer delivery to your preferred location within our service areas. Delivery fees may apply depending on the distance.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "Our minimum rental period is 24 hours. We also offer weekly and monthly rental plans at discounted rates.",
  },
  {
    question: "Is insurance included in my rental?",
    answer:
      "Basic insurance coverage is included with every rental. You can also opt for premium coverage during the booking process for extra peace of mind.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You will need a valid driver's license, a government-issued ID or passport, and a credit card in your name for the security deposit.",
  },
  {
    question: "Is there a security deposit required?",
    answer:
      "Yes, a refundable security deposit is required at the time of pickup. The amount varies depending on the vehicle selected and will be fully refunded upon return.",
  },
];

// ─── Gold Divider ─────────────────────────────────────────
const GoldDivider = () => (
  <div className="flex items-center gap-3">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A84C]" />
    <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A84C]" />
  </div>
);

// ─── FAQ Item ─────────────────────────────────────────────
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(faq.defaultOpen || false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={` border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#C9A84C]/60 bg-gradient-to-br from-[#1a1610] to-[#111008]"
          : "border-[#2a2a2a] bg-[#111111] hover:border-[#C9A84C]/30"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left group"
      >
        {/* Question */}
        <span className={`text-sm font-medium transition-colors ${
          isOpen ? "text-[#C9A84C]" : "text-gray-300 group-hover:text-[#C9A84C]/80"
        }`}>
          {faq.question}
        </span>

        {/* Plus Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
            isOpen
              ? "border-[#C9A84C] text-[#C9A84C]"
              : "border-[#333] text-gray-500 group-hover:border-[#C9A84C]/50 group-hover:text-[#C9A84C]/50"
          }`}
        >
          <span className="text-base font-light leading-none">+</span>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Gold line */}
            <div className="mx-6 h-px bg-gradient-to-r from-[#C9A84C]/40 to-transparent mb-4" />
            <p className="px-6 pb-5 text-xs text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────
export default function FAQSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
{/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />
      {/* Background glow accents */}
    

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-80 flex-shrink-0 flex flex-col gap-6"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#C9A84C]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
                Support
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-2xl font-bold leading-snug " style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300, color: "#F5F0E8" }}>
              <span className="text-white">Got questions?</span>
              <br />
              <span className="text-[#C9A84C]">We've got</span>
              <br />
              <span className="text-white">answers!</span>
            </h2>

            <GoldDivider />

            {/* Subtext */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Find answers to the most common questions about renting with Dream Drive. Can't find what you're looking for? Our concierge team is available around the clock.
            </p>

            {/* CTA Button */}
            <button className="relative group w-fit flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#a8863c] text-black text-xs font-semibold px-6 py-3 transition-all group-hover:from-[#d4b35a] group-hover:to-[#C9A84C]">
                Contact Concierge
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>

            {/* Trust badge */}
            <div className="flex items-center gap-3 mt-2 p-4 rounded-xl border border-[#1e1e1e] bg-[#111111]">
              <div className="w-8 h-8 rounded-full bg-[#1a1610] border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">24/7 Concierge Service</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Response within 2 minutes</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column — FAQ List ── */}
          <div className="flex-1 flex flex-col gap-3 w-full">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-gray-600 text-center mt-3"
            >
              Still have questions?{" "}
              <button className="text-[#C9A84C] hover:text-[#d4b35a] font-medium transition-colors">
                Browse our full help center →
              </button>
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}