"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { faqs } from "../data";
import { IconCar, IconCalendar, IconShield, IconCreditCard, IconLocation, IconHeadset, IconSearch, IconArrow } from "../Icons";

// Gold ornament component
const GoldOrnament = () => (
  <div className="flex items-center gap-2">
    <div className="h-px w-6" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
    <div className="w-1 h-1 rotate-45" style={{ background: "#C9A84C", opacity: 0.7 }} />
  </div>
);

// ─── DATA ────────────────────────────────────────────────
const categories = [
  { label: "All", icon: null },
  { label: "Booking", icon: <IconCalendar /> },
  { label: "Fleet", icon: <IconCar /> },
  { label: "Insurance", icon: <IconShield /> },
  { label: "Payment", icon: <IconCreditCard /> },
  { label: "Delivery", icon: <IconLocation /> },
  { label: "Support", icon: <IconHeadset /> },
];



// ─── FAQ ITEM ─────────────────────────────────────────────
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
        border: "1px solid rgba(201,168,76,0.14)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left relative z-10"
      >
        <span className="text-sm pr-8" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl flex-shrink-0 ml-4"
          style={{ color: "#C9A84C" }}
        >
          +
        </motion.span>
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
            <p className="px-6 pb-6 text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1px solid rgba(201,168,76,0.28)" }}
      />
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────────
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Group by category for display
  const grouped = filtered.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <main className="min-h-screen" style={{ background: "#090909" }}>
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <LuxuryNavbar />

     

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
            <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
              Help Center
            </span>
            <GoldOrnament />
          </div>
          
          <h1 
            className="leading-[0.9] max-w-3xl"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "clamp(42px, 6vw, 72px)", 
              fontWeight: 300, 
              color: "#F5F0E8" 
            }}
          >
            Got Questions?<br />
            <span style={{ 
              background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text" 
            }}>
              We've Got Answers
            </span>
          </h1>
          
          <p className="text-[13px] leading-[1.85] max-w-md" style={{ color: "rgba(245,240,232,0.45)" }}>
            Find answers to the most common questions about renting with Dream Drive. 
            Can't find what you're looking for? Our support team is here 24/7.
          </p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-md mt-4"
          >
            <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconSearch />
            </span>
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#F5F0E8",
              }}
            />
          </motion.div>
        </motion.div>

        {/* ── Category Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-4"
          style={{
            background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className="flex items-center gap-1.5 text-[10px] px-4 py-2 font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                style={
                  activeCategory === cat.label
                    ? { background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }
                    : { background: "transparent", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.5)" }
                }
              >
                {cat.icon && (
                  <span style={{ color: activeCategory === cat.label ? "#090909" : "rgba(201,168,76,0.7)" }}>
                    {cat.icon}
                  </span>
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ Content ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* FAQ List */}
          <div className="flex-1 flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {Object.keys(grouped).length > 0 ? (
                Object.entries(grouped).map(([category, items]) => (
                  <motion.div
                    key={category}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-3 mb-1">
                      <span 
                        className="w-8 h-8 flex items-center justify-center"
                        style={{ 
                          background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                          color: "#090909"
                        }}
                      >
                        <span className="[&>svg]:w-4 [&>svg]:h-4">
                          {categories.find((c) => c.label === category)?.icon}
                        </span>
                      </span>
                      <h2 className="text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                        {category}
                      </h2>
                      <span className="text-[10px] px-2 py-0.5" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                        {items.length}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-3">
                      {items.map((faq, i) => (
                        <FAQItem key={faq.question} faq={faq} index={i} />
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                  style={{
                    background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                    border: "1px solid rgba(201,168,76,0.14)",
                  }}
                >
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(245,240,232,0.3)" }}>
                    No Results Found
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(245,240,232,0.2)" }}>
                    Try a different search term or category.
                  </p>
                  <button
                    onClick={() => { setActiveCategory("All"); setSearch(""); }}
                    className="px-8 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                    style={{
                      background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                      color: "#090909",
                    }}
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-80 flex-shrink-0 flex flex-col gap-6"
          >
            {/* Still need help */}
            <div
              className="p-6 relative overflow-hidden group"
              style={{
                background: "linear-gradient(160deg, #0A0A0A, #000000)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                  <IconHeadset />
                </div>
                <h3 className="text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                  Still need help?
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                  Our support team is available 24/7 to answer your questions and resolve any issues.
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <button
                    className="w-full py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                    style={{
                      background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                      color: "#090909",
                    }}
                  >
                    Chat with Us
                  </button>
                  <button
                    className="w-full py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                    style={{
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#C9A84C",
                    }}
                  >
                    Send an Email
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3 className="text-sm mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                Quick Stats
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Questions Answered", value: `${faqs.length}+` },
                  { label: "Avg. Response Time", value: "< 2 min" },
                  { label: "Customer Satisfaction", value: "98%" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                    <span className="text-[10px] tracking-wide" style={{ color: "rgba(245,240,232,0.4)" }}>
                      {s.label}
                    </span>
                    <span className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3 className="text-sm mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                Popular Topics
              </h3>
              <div className="flex flex-col gap-2">
                {["How to book a car", "Cancel my reservation", "Insurance coverage", "Security deposit", "Airport delivery"].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSearch(topic)}
                    className="text-left text-[11px] transition flex items-center gap-2 py-2 group"
                    style={{ color: "rgba(245,240,232,0.5)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform" style={{ color: "#C9A84C" }}>
                      ›
                    </span>
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(160deg, #0A0A0A, #000000)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
              Ready to Hit the Road?
            </h2>
            <p className="text-[12px]" style={{ color: "rgba(245,240,232,0.45)" }}>
              Now that your questions are answered, book your dream car today and experience the Dream Drive difference.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              Browse Fleet <IconArrow />
            </button>
            <button
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
              }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}