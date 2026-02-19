"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────
const stats = [
  { num: 500, suffix: "+", label: "Luxury Vehicles", sub: "Curated fleet" },
  { num: 24,  suffix: "/7", label: "Concierge Support", sub: "Always available" },
  { num: 100, suffix: "%", label: "Service Guarantee", sub: "No compromises" },
  { num: 60,  suffix: "+", label: "Elite Locations", sub: "Worldwide access" },
  { num: 800, suffix: "+", label: "Satisfied Clients", sub: "& counting" },
];

// ─── ANIMATED COUNTER ───────────────────────────────────
function AnimatedCounter({
  end,
  suffix,
  duration = 2.2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    stiffness: 40,
    damping: 18,
    restDelta: 0.5,
  });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      // Small delay before kicking off
      const t = setTimeout(() => motionVal.set(end), 200);
      return () => clearTimeout(t);
    }
  }, [inView, end, motionVal]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  );
}

// ─── GOLD ORNAMENT ──────────────────────────────────────
function GoldOrnament() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#C9A84C]/50" />
      <div
        className="w-1 h-1 rotate-45"
        style={{ background: "#C9A84C", opacity: 0.7 }}
      />
      <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#C9A84C]/50" />
    </div>
  );
}

// ─── STAT CARD ──────────────────────────────────────────
function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-3 py-8 px-2 cursor-default"
    >
      {/* Top gold line — animates in */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.35 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background:
            "linear-gradient(to right, #8B7035, #C9A84C, rgba(201,168,76,0.2))",
        }}
      />

      {/* Number */}
      <div
        className="leading-none tracking-tight"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 5vw, 62px)",
          fontWeight: 300,
          background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 50%, #E8C97A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <AnimatedCounter end={stat.num} suffix={stat.suffix} />
      </div>

      {/* Label */}
      <div className="flex flex-col gap-1">
        <span
          className="text-[11px] font-semibold tracking-[0.28em] uppercase"
          style={{ color: "#F5F0E8" }}
        >
          {stat.label}
        </span>
        <span
          className="text-[9.5px] tracking-[0.22em] uppercase"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          {stat.sub}
        </span>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// ─── MAIN SECTION ───────────────────────────────────────
export default function LuxuryFreedomSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#090909" }}
    >
      {/* ── NOISE GRAIN ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.038,
        }}
      />

      {/* ── LARGE WATERMARK NUMBER ── */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(180px, 22vw, 320px)",
          fontWeight: 300,
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.07)",
          letterSpacing: "-0.02em",
          userSelect: "none",
          transform: "translateY(-50%) translateX(8%)",
        }}
      >
        500+
      </div>

      {/* ── HORIZONTAL GOLD RULE TOP ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(201,168,76,0.25) 20%, rgba(201,168,76,0.25) 80%, transparent 100%)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">

        {/* ── TOP ROW: EYEBROW + RULE ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-16"
        >
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
            }}
          />
          <span
            className="text-[9.5px] font-semibold tracking-[0.45em] uppercase"
            style={{ color: "#C9A84C" }}
          >
            Our Legacy
          </span>
          <div
            className="flex-1 h-px max-w-[60px]"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.5), transparent)",
            }}
          />
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-0">

          {/* LEFT — Heading block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:w-[38%] flex flex-col gap-8"
          >
            {/* Heading */}
            <h2
              className="leading-[0.92] tracking-[-0.01em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 5.5vw, 78px)",
                fontWeight: 300,
                color: "#F5F0E8",
              }}
            >
              Drive{" "}
              <em
                className="not-italic"
                style={{
                  background:
                    "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Luxury.
              </em>
              <br />
              Live{" "}
              <em
                className="not-italic"
                style={{
                  background:
                    "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Freedom.
              </em>
            </h2>

            {/* Gold ornament */}
            <GoldOrnament />

            {/* Description */}
            <p
              className="leading-[1.85] text-[13px]"
              style={{ color: "rgba(245,240,232,0.45)", maxWidth: "340px" }}
            >
              Experience premium car rentals crafted for comfort, performance,
              and prestige. Whether a swift business engagement or a long
              weekend escape — our fleet is engineered to elevate every mile.
            </p>

            {/* CTA */}
            <motion.a
              href="/fleet"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 no-underline group w-fit"
            >
              <span
                className="text-[9.5px] font-semibold tracking-[0.3em] uppercase border-b pb-0.5 transition-colors duration-300"
                style={{
                  color: "#C9A84C",
                  borderBottomColor: "rgba(201,168,76,0.35)",
                }}
              >
                Explore the Fleet
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* RIGHT — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:w-[62%] w-full"
          >
            {/* Stats grid — 3 top, 2 bottom, separated by vertical gold lines */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              {stats.slice(0, 3).map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            {/* Horizontal divider */}
            <div
              className="w-full h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.12), rgba(201,168,76,0.12))",
              }}
            />

            <div
              className="grid grid-cols-2 divide-x"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              {stats.slice(3).map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i + 3} />
              ))}
            </div>

            {/* Bottom decorative rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-px mt-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.5), rgba(201,168,76,0.1), transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── HORIZONTAL GOLD RULE BOTTOM ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent 100%)",
        }}
      />
    </section>
  );
}