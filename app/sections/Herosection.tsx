


"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles — add these to your global CSS or layout
// import "swiper/css";
// import "swiper/css/effect-fade";

// ─── TYPES ───────────────────────────────────────────────
type CarSlide = {
  brand: string;
  model: string;
  year: string;
  image: string;
  tagline: string;
  specs: { label: string; value: string }[];
  accentHex: string;
};

// ─── DATA ────────────────────────────────────────────────
const slides: CarSlide[] = [
  {
    brand: "PORSCHE",
    model: "911 Carrera S",
    year: "2024",
    image: "/white-porshe_transparent.svg",
    tagline: "Born on the Track.\nBuilt for the Road.",
    specs: [
      { label: "Horsepower", value: "443 HP" },
      { label: "0 – 60 mph", value: "3.5s" },
      { label: "Top Speed", value: "191 mph" },
    ],
    accentHex: "#C9A84C",
  },
  {
    brand: "ROLLS ROYCE",
    model: "Cullinan",
    year: "2024",
    image: "/Rolls_Royce_Cullinan.svg",
    tagline: "The Ultimate\nDriving Machine.",
    specs: [
      { label: "Engine", value: "6.7L V12" },
      { label: "0 – 60 mph", value: "4.5s" },
      { label: "Top Speed", value: "155 mph" },
    ],
    accentHex: "#C9A84C",
  },
  {
    brand: "FERRARI",
    model: "F8 Spider",
    year: "2024",
    image: "/ferrari_f8_spider.svg",
    tagline: "Where Art Meets\nPure Performance.",
    specs: [
      { label: "Horsepower", value: "986 HP" },
      { label: "0 – 60 mph", value: "2.5s" },
      { label: "Top Speed", value: "211 mph" },
    ],
    accentHex: "#C9A84C",
  },
  {
    brand: "BENTLEY",
    model: "Continental GT",
    year: "2023",
    image: "/bently_new_continental_gtc.svg",
    tagline: "Dominance Refined.\nPower Redefined.",
    specs: [
      { label: "Engine", value: "4.0L V8" },
      { label: "0 – 60 mph", value: "3.2s" },
      { label: "Top Speed", value: "196 mph" },
    ],
    accentHex: "#C9A84C",
  },
  {
    brand: "LAMBORGHINI",
    model: "Revuelto",
    year: "2024",
    image: "/lamdoguini_revuelto.svg",
    tagline: "Ferocity Sculpted\nin Motion.",
    specs: [
      { label: "Horsepower", value: "631 HP" },
      { label: "0 – 60 mph", value: "2.9s" },
      { label: "Top Speed", value: "202 mph" },
    ],
    accentHex: "#C9A84C",
  },
];

const BRAND_STRIP = ["PORSCHE", "ROLLS ROYCE", "FERRARI", "BENTLEY", "LAMBORGHINI"];
const SLIDE_DURATION = 6000;

// ─── FRAMER VARIANTS ─────────────────────────────────────
const contentVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: "easeIn" } },
};

const carVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
  exit: {
    opacity: 0,
    x: -40,
    scale: 0.97,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// ─── SUB-COMPONENTS ──────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9A84C]/60" />
      <div className="w-1 h-1 rotate-45 bg-[#C9A84C]/70" />
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9A84C]/60" />
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C]/10 z-20">
      <motion.div
        className="h-full bg-gradient-to-r from-[#8B7035] to-[#C9A84C]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─── MAIN HERO ───────────────────────────────────────────
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Magnetic cursor effect
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  // Progress bar timer
  const startProgress = useCallback(() => {
    if (progressTimer.current) clearInterval(progressTimer.current);
    setProgress(0);
    const start = Date.now();
    progressTimer.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressTimer.current!);
    }, 60);
  }, []);

  useEffect(() => {
    startProgress();
    return () => {
      if (progressTimer.current) clearInterval(progressTimer.current);
    };
  }, [current, startProgress]);

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent(index);
    swiperRef.current?.slideTo(index);
    startProgress();
  };

  const slide = slides[current];

  return (
    <>
      {/* ── CUSTOM CURSOR ─────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C9A84C]/60 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY }}
      />

      <section className="relative w-full h-screen min-h-[680px] max-h-[960px] overflow-hidden bg-[#090909] flex flex-col">

        {/* ── NOISE GRAIN OVERLAY ─────────────── */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* ── ART DECO CORNER ORNAMENTS ───────── */}
        <div className="absolute top-[76px] left-[48px] z-10 pointer-events-none hidden lg:block">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 48 L0 0 L48 0" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.35" />
            <path d="M0 32 L0 0 L32 0" stroke="#C9A84C" strokeWidth="0.4" strokeOpacity="0.2" />
            <rect x="0" y="0" width="5" height="5" fill="#C9A84C" fillOpacity="0.5" />
          </svg>
        </div>
        <div className="absolute top-[76px] right-[24px] z-10 pointer-events-none hidden lg:block rotate-90">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 48 L0 0 L48 0" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.35" />
            <rect x="0" y="0" width="5" height="5" fill="#C9A84C" fillOpacity="0.5" />
          </svg>
        </div>

        {/* ── GOLD VERTICAL LINE ──────────────── */}
        <div className="absolute left-[52px] top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#8B7035]/50 to-transparent z-10 hidden lg:block" />

        {/* ══════════════════════════════════════
            NAVBAR
        ══════════════════════════════════════ */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 border-b border-[#C9A84C]/12"
          style={{ background: "linear-gradient(to bottom, rgba(9,9,9,0.97), transparent)" }}
        >
          {/* Logo */}
          <a href="/" className="flex flex-col gap-0.5 no-underline group">
            <span
              className="text-[#C9A84C] tracking-[0.42em] leading-none font-light group-hover:tracking-[0.48em] transition-all duration-500"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}
            >
              IFM Luxury
            </span>
            <span className="text-[7.5px] tracking-[0.45em] text-white/25 uppercase font-medium">
              car rentals
            </span>
          </a>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {["HOME", "FLEET", "ABOUT US","MY BOOKINGS", "FAQ", "CONTACT"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-[9.5px] tracking-[0.28em] uppercase text-white/45 hover:text-[#C9A84C] transition-colors duration-300 no-underline relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Reserve CTA */}
          <a
            href="/reserve"
            className="relative overflow-hidden px-6 py-2.5 bg-[#C9A84C] text-[#090909] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300 hover:bg-[#E8C97A]"
          >
            <span className="relative z-10">Reserve Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>
        </motion.nav>

        {/* ══════════════════════════════════════
            HERO BODY — SWIPER
        ══════════════════════════════════════ */}
        <div className="relative flex-1 overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade, Keyboard]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: SLIDE_DURATION, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            speed={700}
            loop={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setCurrent(swiper.activeIndex);
              startProgress();
            }}
            className="w-full h-full"
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={s.brand} className="relative w-full h-full">
                {/* Atmospheric background glow */}
                <AnimatePresence>
                  {current === idx && (
                    <motion.div
                      variants={glowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-[5%] bottom-0 w-[60%] h-[70%] pointer-events-none z-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 60% 85%, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 40%, transparent 72%)",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Left black fade */}
                <div className="absolute left-0 top-0 bottom-0 w-[55%] z-[2] pointer-events-none"
                  style={{ background: "linear-gradient(to right, rgba(9,9,9,1) 45%, transparent)" }} />
                {/* Bottom black fade */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] z-[2] pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(9,9,9,1), transparent)" }} />

                {/* ── CAR IMAGE ── */}
                <AnimatePresence mode="wait">
                  {current === idx && (
                    <motion.div
                      key={`car-${idx}`}
                      variants={carVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute bottom-[-6%] right-[-4%] w-[68%] max-w-[880px] z-[1] pointer-events-none"
                    >
                      <Image
                        src={s.image}
                        alt={`${s.brand} ${s.model}`}
                        width={900}
                        height={560}
                        priority={idx === 0}
                        className="w-full h-auto object-contain"
                        style={{
                          filter:
                            "drop-shadow(0 30px 90px rgba(201,168,76,0.18)) drop-shadow(0 0 160px rgba(0,0,0,0.95))",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── HERO CONTENT ── */}
                <div className="absolute inset-0 z-10 flex items-center">
                  <div className="pl-16 lg:pl-24 max-w-[580px] pt-4">
                    <AnimatePresence mode="wait">
                      {current === idx && (
                        <motion.div key={`content-${idx}`} className="flex flex-col">

                          {/* Slide counter */}
                          <motion.div
                            custom={0.05}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex items-center gap-3.5 mb-7"
                          >
                            <span className="text-[9.5px] tracking-[0.42em] text-[#C9A84C] font-semibold">
                              0{idx + 1}
                            </span>
                            <div className="w-9 h-px bg-[#8B7035]" />
                            <span className="text-[9.5px] tracking-[0.35em] text-white/25">
                              0{slides.length}
                            </span>
                          </motion.div>

                          {/* Brand name */}
                          <motion.h1
                            custom={0.12}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="font-light tracking-[0.14em] leading-[0.88] text-white mb-1.5"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "clamp(52px, 7.5vw, 96px)",
                            }}
                          >
                            {s.brand}
                          </motion.h1>

                          {/* Model */}
                          <motion.p
                            custom={0.2}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="font-light italic tracking-[0.14em] text-[#C9A84C] mb-6"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "clamp(14px, 1.9vw, 23px)",
                            }}
                          >
                            {s.model} — {s.year}
                          </motion.p>

                          {/* Tagline */}
                          <motion.p
                            custom={0.27}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-[10.5px] tracking-[0.2em] uppercase text-white/50 leading-[1.9] border-l-2 border-[#8B7035]/60 pl-4 mb-9 max-w-[290px] whitespace-pre-line"
                          >
                            {s.tagline}
                          </motion.p>

                          {/* Specs */}
                          <motion.div
                            custom={0.33}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex items-center gap-0 mb-10"
                          >
                            {s.specs.map((spec, i) => (
                              <div key={spec.label} className="flex items-center">
                                {i > 0 && <div className="w-px h-10 bg-[#C9A84C]/18 mx-6" />}
                                <div className="flex flex-col gap-1.5">
                                  <span
                                    className="text-[#C9A84C] tracking-[0.04em] leading-none font-semibold"
                                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px" }}
                                  >
                                    {spec.value}
                                  </span>
                                  <span className="text-[7.5px] tracking-[0.38em] text-white/28 uppercase">
                                    {spec.label}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </motion.div>

                          {/* Gold ornament */}
                          <motion.div
                            custom={0.38}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mb-9"
                          >
                            <GoldDivider />
                          </motion.div>

                          {/* CTA Row */}
                          <motion.div
                            custom={0.44}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex items-center gap-6"
                          >
                            <a
                              href="/reserve"
                              className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-3.5 bg-[#C9A84C] text-[#090909] text-[9.5px] font-bold tracking-[0.32em] uppercase no-underline transition-colors duration-300 hover:bg-[#E8C97A]"
                            >
                              <span className="relative z-10">Reserve This Car</span>
                              <svg
                                className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                            </a>

                            <a
                              href="/fleet"
                              className="text-[9.5px] tracking-[0.25em] uppercase text-white/40 hover:text-[#C9A84C] no-underline border-b border-transparent hover:border-[#8B7035]/50 pb-0.5 transition-all duration-300"
                            >
                              Explore Fleet
                            </a>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── SIDE VERTICAL NAVIGATION ─────── */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3.5">
            <span
              className="text-[8.5px] tracking-[0.42em] text-white/25 uppercase mb-2"
              style={{ writingMode: "vertical-rl" }}
            >
              Collection {slides[current].year}
            </span>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-0.5 rounded-sm cursor-pointer transition-all duration-400 border-none outline-none"
                style={{
                  height: i === current ? "30px" : "8px",
                  background: i === current ? "#C9A84C" : "rgba(139,112,53,0.4)",
                  opacity: i === current ? 1 : 0.5,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* ── LEFT ARROW ───────────────────── */}
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#C9A84C" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => goTo(Math.max(0, current - 1))}
            className="absolute left-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 hidden lg:flex items-center justify-center border border-[#C9A84C]/18 bg-[#0D0D0D]/80 text-white/35 hover:text-[#C9A84C] transition-colors duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* ── RIGHT ARROW ──────────────────── */}
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#C9A84C" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => goTo(Math.min(slides.length - 1, current + 1))}
            className="absolute right-20 top-1/2 -translate-y-1/2 z-20 w-11 h-11 hidden lg:flex items-center justify-center border border-[#C9A84C]/18 bg-[#0D0D0D]/80 text-white/35 hover:text-[#C9A84C] transition-colors duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* ── PROGRESS BAR ─────────────────── */}
          <ProgressBar progress={progress} />
        </div>

        {/* ══════════════════════════════════════
            BRAND STRIP
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 border-t border-[#C9A84C]/12 bg-[#070707]/95 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-stretch">
            {BRAND_STRIP.map((brand, i) => (
              <motion.button
                key={brand}
                onClick={() => goTo(i)}
                whileHover={{ backgroundColor: "rgba(201,168,76,0.04)" }}
                className="relative flex-1 flex flex-col items-center justify-center py-4 gap-1.5 border-r border-[#C9A84C]/10 first:border-l cursor-pointer bg-transparent outline-none transition-colors duration-300 group"
                aria-label={`Select ${brand}`}
              >
                {/* Active top bar */}
                <motion.span
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B7035] to-[#C9A84C]"
                  animate={{ scaleX: i === current ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                />

                <span
                  className="text-[8.5px] font-semibold tracking-[0.32em] uppercase transition-colors duration-300"
                  style={{ color: i === current ? "#C9A84C" : "rgba(245,240,232,0.25)" }}
                >
                  {brand}
                </span>

                {/* Active dot */}
                <motion.span
                  className="w-1 h-1 rounded-full bg-[#C9A84C]"
                  animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}