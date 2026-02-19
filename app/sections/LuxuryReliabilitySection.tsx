"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────
const tabs = [
  { label: "Paint", desc: "Bespoke exterior finishes from matte obsidian to pearl champagne." },
  { label: "Porsche", desc: "Hand-selected Porsche models maintained to factory concours standards." },
  { label: "Air Rent", desc: "Seamless airport-to-destination delivery with meet & greet." },
  { label: "Pickup", desc: "White-glove doorstep delivery anywhere in the city, any hour." },
  { label: "Mileage", desc: "Generous mileage packages tailored to your journey length." },
];

const features = [
  {
    label: "Expert Service",
    description:
      "Our specialist team brings decades of automotive expertise — every rental is curated, not just booked.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Premium Fleet",
    description:
      "Handpicked marques — Ferrari, Lamborghini, Bentley, Rolls-Royce — maintained at concours standards.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    label: "Easy Booking",
    description:
      "Reserve your vehicle in under 60 seconds — online, by phone, or through our dedicated concierge.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "24/7 Support",
    description:
      "A human concierge answers every call. No bots, no queues — just immediate, personal attention.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Flexible Plans",
    description:
      "Hourly escapes to month-long arrangements — our rental packages flex around your life, not the other way around.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// ─── GOLD ORNAMENT ──────────────────────────────────────
function GoldOrnament() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-6" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
      <div className="w-1 h-1 rotate-45" style={{ background: "#C9A84C", opacity: 0.7 }} />
      <div className="h-px w-6" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
    </div>
  );
}

// ─── PRECISION DIAL VISUAL ───────────────────────────────
function PrecisionDial({ activeFeature }: { activeFeature: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Orbit angle per feature
  const orbitAngles = [270, 342, 54, 126, 198];
  const angle = orbitAngles[activeFeature];
  const r = 155; // orbit radius (SVG units, centered at 200,200)
  const rad = (angle * Math.PI) / 180;
  const dotX = 200 + r * Math.cos(rad);
  const dotY = 200 + r * Math.sin(rad);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center flex-shrink-0"
      style={{ width: 340, height: 340 }}
    >
      {/* SVG rings + arcs */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── OUTER DASHED SPINNING RING ── */}
        <motion.circle
          cx="200" cy="200" r="185"
          stroke="rgba(201,168,76,0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        {/* ── RING 1 – outermost solid ── */}
        <circle cx="200" cy="200" r="160" stroke="rgba(201,168,76,0.14)" strokeWidth="0.8" />

        {/* ── RING 2 ── */}
        <circle cx="200" cy="200" r="128" stroke="rgba(201,168,76,0.1)" strokeWidth="0.8" />

        {/* ── RING 3 ── */}
        <circle cx="200" cy="200" r="96" stroke="rgba(201,168,76,0.1)" strokeWidth="0.8" />

        {/* ── INNER FILLED RING ── */}
        <circle cx="200" cy="200" r="68" stroke="rgba(201,168,76,0.18)" strokeWidth="1" fill="rgba(201,168,76,0.03)" />

        {/* ── GOLD ARC SEGMENT (top-right quarter) ── */}
        <motion.path
          d="M 200 40 A 160 160 0 0 1 360 200"
          stroke="url(#goldArcGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── SECONDARY ARC ── */}
        <motion.path
          d="M 200 72 A 128 128 0 0 1 328 200"
          stroke="rgba(201,168,76,0.25)"
          strokeWidth="0.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── TICK MARKS ── */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * 2 * Math.PI;
          const r1 = 160, r2 = 153;
          const x1 = 200 + r1 * Math.cos(a);
          const y1 = 200 + r1 * Math.sin(a);
          const x2 = 200 + r2 * Math.cos(a);
          const y2 = 200 + r2 * Math.sin(a);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={i % 6 === 0 ? "rgba(201,168,76,0.45)" : "rgba(201,168,76,0.18)"}
              strokeWidth={i % 6 === 0 ? "1.5" : "0.8"}
            />
          );
        })}

        {/* ── CROSSHAIR LINES ── */}
        <line x1="200" y1="40" x2="200" y2="68" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <line x1="200" y1="332" x2="200" y2="360" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
        <line x1="40" y1="200" x2="68" y2="200" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
        <line x1="332" y1="200" x2="360" y2="200" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />

        {/* ── GRADIENT DEF ── */}
        <defs>
          <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7035" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8C97A" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="carGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── CAR GLOW ── */}
        <circle cx="200" cy="200" r="65" fill="url(#carGlow)" />

        {/* ── FIXED DOTS ── */}
        <circle cx="200" cy="40" r="4" fill="#C9A84C" opacity="0.9" />
        <circle cx="360" cy="200" r="3" fill="#C9A84C" opacity="0.5" />
        <circle cx="200" cy="360" r="2.5" fill="rgba(201,168,76,0.3)" />
        <circle cx="40" cy="200" r="2.5" fill="rgba(201,168,76,0.3)" />

        {/* ── ANIMATED ORBIT DOT ── */}
        <motion.circle
          r="5"
          fill="#C9A84C"
          animate={{ cx: dotX, cy: dotY }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          r="10"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.8"
          strokeOpacity="0.35"
          animate={{ cx: dotX, cy: dotY }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* ── CENTER CAR ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2 px-4">
        <motion.img
          key={activeFeature}
          src="/white-porshe_transparent.svg"
          alt="Luxury Vehicle"
          className="w-32 object-contain"
          initial={{ opacity: 0, scale: 0.9, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: "drop-shadow(0 8px 24px rgba(201,168,76,0.2)) drop-shadow(0 0 60px rgba(0,0,0,0.9))" }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${activeFeature}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="tracking-[0.02em] leading-tight text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "#F5F0E8",
              }}
            >
              {features[activeFeature].label}
            </span>
            <a
              href="/about"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 mt-1 text-[8.5px] font-bold tracking-[0.28em] uppercase no-underline transition-colors duration-300"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              Learn More
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── MAIN SECTION ────────────────────────────────────────
export default function LuxuryReliabilitySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#090909" }}
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.22) 20%, rgba(201,168,76,0.22) 80%, transparent)" }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">

        {/* ══ TOP ROW ══ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">

          {/* Heading block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-[420px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9.5px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                Why Choose Us
              </span>
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, rgba(201,168,76,0.5), transparent)" }} />
            </div>

            <h2
              className="leading-[0.9]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 300,
                color: "#F5F0E8",
              }}
            >
              Luxury Meets{" "}
              <em
                className="not-italic block"
                style={{
                  background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reliability.
              </em>
            </h2>

            <GoldOrnament />

            <p className="text-[13px] leading-[1.85]" style={{ color: "rgba(245,240,232,0.4)" }}>
              We combine the finest vehicles with unmatched service — every
              journey engineered to exceed your highest expectations.
            </p>
          </motion.div>

          {/* ── TABS ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="text-[8.5px] tracking-[0.4em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.25)" }}>
              Services
            </span>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, i) => (
                <motion.button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-4 py-2 text-[9.5px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 outline-none"
                  style={
                    activeTab === i
                      ? {
                          background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                          color: "#090909",
                          border: "1px solid transparent",
                        }
                      : {
                          background: "transparent",
                          color: "rgba(245,240,232,0.38)",
                          border: "1px solid rgba(201,168,76,0.18)",
                        }
                  }
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
            {/* Active tab description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
                className="text-[11.5px] leading-[1.75] max-w-[340px]"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                {tabs[activeTab].desc}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ══ CENTER ROW: DIAL + FEATURES ══ */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

          {/* Precision Dial */}
          <PrecisionDial activeFeature={activeFeature} />

          {/* Feature Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col w-full lg:w-[360px] gap-0"
          >
            <span
              className="text-[8.5px] tracking-[0.4em] uppercase font-medium mb-4"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Our Strengths
            </span>

            {features.map((feature, i) => {
              const isOpen = activeFeature === i;
              return (
                <motion.div key={feature.label} className="relative">
                  {/* Animated gold left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5"
                    animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: "linear-gradient(to bottom, #8B7035, #C9A84C)",
                      transformOrigin: "top",
                    }}
                  />

                  <button
                    onClick={() => setActiveFeature(i)}
                    className="w-full text-left flex items-center justify-between px-5 py-4 transition-all duration-300 group outline-none"
                    style={{
                      background: isOpen
                        ? "linear-gradient(to right, rgba(201,168,76,0.06), rgba(201,168,76,0.02))"
                        : "transparent",
                      borderBottom: "1px solid rgba(201,168,76,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <span
                        className="flex-shrink-0 transition-colors duration-300"
                        style={{ color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.3)" }}
                      >
                        {feature.icon}
                      </span>
                      <span
                        className="text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300"
                        style={{ color: isOpen ? "#F5F0E8" : "rgba(245,240,232,0.45)" }}
                      >
                        {feature.label}
                      </span>
                    </div>

                    {/* Chevron */}
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.2)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </button>

                  {/* Accordion body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="px-5 pb-4 pt-1 text-[12px] leading-[1.8]"
                          style={{ color: "rgba(245,240,232,0.4)", paddingLeft: "52px" }}
                        >
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Bottom CTA */}
            <motion.a
              href="/fleet"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2.5 mt-6 no-underline group w-fit"
            >
              <span
                className="text-[9.5px] font-semibold tracking-[0.3em] uppercase border-b pb-0.5"
                style={{ color: "#C9A84C", borderBottomColor: "rgba(201,168,76,0.3)" }}
              >
                Explore Our Services
              </span>
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#C9A84C" strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)" }} />
    </section>
  );
}