"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ─── DATA ────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Browse the Fleet",
    description: "Explore our curated collection of the world's finest marques — from Bentley to Lamborghini.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose Your Ride",
    description: "Select the vehicle that matches your occasion — business, leisure, or grand arrival.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Set Your Dates",
    description: "Choose your pickup date, time, and rental duration with full flexibility.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Add Preferences",
    description: "Personalise with chauffeur, airport transfer, child seats, or any bespoke extras.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Confirm Booking",
    description: "Review your reservation, receive instant confirmation, and your concierge is notified.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Pick Up & Drive",
    description: "Your vehicle arrives immaculate. Keys in hand — the road is yours.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// ─── STEP NODE COMPONENT ─────────────────────────────────
function StepNode({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-5 group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── TIMELINE COLUMN ── */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 40 }}>
        {/* Node circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center w-9 h-9 flex-shrink-0 z-10"
          style={{
            background: hovered
              ? "linear-gradient(135deg, #8B7035, #C9A84C)"
              : "rgba(201,168,76,0.08)",
            border: `1px solid ${hovered ? "transparent" : "rgba(201,168,76,0.3)"}`,
            transition: "background 0.35s, border-color 0.35s",
          }}
        >
          {/* Pulse ring on inView */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={inView ? { scale: 1.8, opacity: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.1 + 0.2 }}
            className="absolute inset-0"
            style={{ border: "1px solid rgba(201,168,76,0.5)", borderRadius: 0 }}
          />
          <span
            style={{
              color: hovered ? "#090909" : "#C9A84C",
              transition: "color 0.3s",
            }}
          >
            {step.icon}
          </span>
        </motion.div>

        {/* Connector line */}
        {!isLast && (
          <div className="relative flex-1 w-px mt-1" style={{ background: "rgba(201,168,76,0.1)" }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 h-full origin-top"
              style={{
                background: "linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.15))",
              }}
            />
          </div>
        )}
      </div>

      {/* ── STEP CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="pb-8 flex flex-col gap-2 pt-1"
        style={{ minHeight: isLast ? "auto" : "80px" }}
      >
        {/* Number + title row */}
        <div className="flex items-baseline gap-3">
          <span
            className="text-[10px] tracking-[0.4em] font-semibold"
            style={{ color: "rgba(201,168,76,0.55)" }}
          >
            {step.number}
          </span>
          <h3
            className="leading-tight tracking-[0.01em] transition-colors duration-300"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: hovered ? "#F5F0E8" : "rgba(245,240,232,0.82)",
            }}
          >
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-[12px] leading-[1.8] max-w-[300px]"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── IMAGE PANEL ─────────────────────────────────────────
function ImagePanel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: "clamp(280px, 28vw, 380px)",
        border: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Parallax image */}
      <div className="relative overflow-hidden" style={{ height: "560px" }}>
        <motion.img
          src="/lamborghini_yellow.jpg"
          alt="Luxury car"
          className="w-full object-cover"
          style={{ y: imgY, height: "115%", top: "-7.5%", position: "absolute" }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.3) 50%, rgba(9,9,9,0.6) 100%)",
          }}
        />

        {/* Gold top edge line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-0.5 z-20 origin-left"
          style={{
            background: "linear-gradient(to right, #8B7035, #C9A84C, rgba(201,168,76,0.2))",
          }}
        />

        {/* Floating stat chips */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 pointer-events-none">
          {/* Top chip */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="self-end flex flex-col items-center gap-1 px-4 py-3"
            style={{
              background: "rgba(9,9,9,0.75)",
              border: "1px solid rgba(201,168,76,0.22)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 300,
                color: "#C9A84C",
                lineHeight: 1,
              }}
            >
              60s
            </span>
            <span className="text-[7.5px] tracking-[0.35em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.4)" }}>
              Avg. Booking
            </span>
          </motion.div>

          {/* Bottom content */}
          <div className="flex flex-col gap-3">
            {/* Small decorative label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-8" style={{ background: "rgba(201,168,76,0.4)" }} />
              <span className="text-[8.5px] tracking-[0.35em] uppercase font-medium" style={{ color: "rgba(201,168,76,0.6)" }}>
                Ready in Minutes
              </span>
            </motion.div>

            {/* Bottom stat row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-3"
            >
              {[
                { val: "500+", label: "Vehicles" },
                { val: "24/7", label: "Concierge" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 flex flex-col items-center gap-1 py-3"
                  style={{
                    background: "rgba(9,9,9,0.7)",
                    border: "1px solid rgba(201,168,76,0.16)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: "#C9A84C",
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </span>
                  <span className="text-[7.5px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.35)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN SECTION ────────────────────────────────────────
export default function SimpleFastSection() {
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

      {/* Top gold rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.22) 20%, rgba(201,168,76,0.22) 80%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">

        {/* ══ HEADER ══ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">

          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-[440px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9.5px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                How It Works
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
              Simple.{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fast.
              </em>
              <br />
              Effortless.
            </h2>

            <p className="text-[13px] leading-[1.85]" style={{ color: "rgba(245,240,232,0.38)" }}>
              From browse to keys in hand — your entire luxury rental experience
              distilled into six seamless steps.
            </p>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex flex-col items-end gap-3"
          >
            <a
              href="/reserve"
              className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-3.5 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              <span className="relative z-10">Start Booking</span>
              <svg
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
            <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.22)" }}>
              No deposit required
            </span>
          </motion.div>
        </div>

        {/* ══ MAIN CONTENT: TIMELINE + IMAGE ══ */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* ── TIMELINE ── */}
          <div className="flex-1">
            {/* Two-column step grid on md+ */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-12 gap-0">
              {steps.map((step, i) => (
                <StepNode
                  key={step.number}
                  step={step}
                  index={i}
                  isLast={i === steps.length - 1 || (i === steps.length - 2 && steps.length % 2 === 0)}
                />
              ))}
            </div>
          </div>

          {/* ── IMAGE PANEL ── */}
          <div className="hidden lg:block self-start sticky top-24">
            <ImagePanel />
          </div>
        </div>

        {/* Mobile button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-10 md:hidden"
        >
          <a
            href="/reserve"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline"
            style={{
              background: "linear-gradient(135deg, #8B7035, #C9A84C)",
              color: "#090909",
            }}
          >
            Start Booking
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom gold rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
        }}
      />
    </section>
  );
}