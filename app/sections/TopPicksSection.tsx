"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useCars } from "../hook/useCar";

// ─── SWIPER CSS (add to globals.css if not already present) ─
// import "swiper/css";

// ─── DATA ────────────────────────────────────────────────
// const cars = [
//   {
//     name: "Aston Martin",
//     model: "DB12 Coupe",
//     category: "Grand Tourer",
//     image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=85",
//     tag: "Editor's Pick",
//   },
//   {
//     name: "BMW",
//     model: "8 Series Coupe",
//     category: "Luxury Sport",
//     image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
//     tag: "Most Booked",
//   },
//   {
//     name: "Audi",
//     model: "R8 V10",
//     category: "Supercar",
//     image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
//     tag: null,
//   },
//   {
//     name: "Porsche",
//     model: "Taycan Turbo S",
//     category: "Electric Sport",
//     image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=900&q=85",
//     tag: "New Arrival",
//   },
//   {
//     name: "Mercedes",
//     model: "AMG GT Black Series",
//     category: "Performance",
//     image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
//     tag: null,
//   },
// ];

// ─── ICONS ───────────────────────────────────────────────
const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ─── CARD COMPONENT ──────────────────────────────────────
function CarCard({ car, index }: { car: Car; index: number }) {
  const [hovered, setHovered] = useState(false);
  
  // Use first image or fallback
  const imageUrl = car.images?.[0] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85";

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden cursor-pointer group"
      style={{
        background: "#0D0D0D",
        border: "1px solid rgba(201,168,76,0.13)",
      }}
    >
      {/* ── IMAGE ── */}
      <div className="relative h-64 overflow-hidden">
        {/* Scan-line sweep on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                width: "40%",
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.07), transparent)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Atmospheric bottom fade */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.45) 45%, transparent 100%)",
          }}
        />

        {/* Hover top-edge gold glow */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "linear-gradient(to right, transparent, #C9A84C, transparent)",
          }}
        />

        {/* Image */}
        <motion.img
          src={imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
          animate={{ 
            scale: hovered ? 1.07 : 1, 
            filter: hovered ? "brightness(0.75) saturate(0.85)" : "brightness(0.7) saturate(0.85)" 
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Index number — top left */}
        <div
          className="absolute top-3.5 left-4 z-20 flex items-baseline gap-0.5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span
            className="text-[10px] leading-none"
            style={{ color: "rgba(201,168,76,0.6)" }}
          >
            0
          </span>
          <span
            className="text-[22px] font-light leading-none"
            style={{ color: "rgba(201,168,76,0.85)" }}
          >
            {index + 1}
          </span>
        </div>

        {/* Tag badge — top right - using status as tag */}
        {car.status === 'AVAILABLE' && (
          <div
            className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 text-[8px] font-bold tracking-[0.28em] uppercase"
            style={{
              background: "linear-gradient(135deg, #8B7035, #C9A84C)",
              color: "#090909",
            }}
          >
            Available Now
          </div>
        )}

        {/* Category — bottom of image - using transmission as category */}
        <div
          className="absolute bottom-3 left-4 z-20 text-[8.5px] tracking-[0.3em] uppercase font-medium"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          {car.transmission}
        </div>
      </div>

      {/* ── CARD FOOTER ── */}
      <div
        className="px-4 py-4 flex items-center justify-between"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="flex flex-col gap-0.5">
          <span
            className="leading-tight tracking-[0.02em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
          >
            {car.brand} {car.model}
          </span>
          <span
            className="text-[9px] tracking-[0.22em] uppercase font-medium"
            style={{ color: "#C9A84C" }}
          >
            {car.year} • AED {car.pricePerDay}/day
          </span>
        </div>

        {/* View arrow */}
        <motion.a
          href={`/fleets/${car._id}`}
          animate={{ x: hovered ? 2 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 no-underline group/link"
          aria-label={`View ${car.brand} ${car.model}`}
        >
          <span
            className="text-[9px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300"
            style={{ color: hovered ? "#C9A84C" : "rgba(245,240,232,0.3)" }}
          >
            View
          </span>
          <span style={{ color: hovered ? "#C9A84C" : "rgba(245,240,232,0.3)", transition: "color 0.3s" }}>
            <ArrowRight />
          </span>
        </motion.a>
      </div>

      {/* Border hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ border: "1px solid rgba(201,168,76,0.3)" }}
      />
    </motion.div>
  );
}

// ─── NAV ARROW BUTTON ────────────────────────────────────
function NavButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.94 }}
      disabled={disabled}
      className="relative w-10 h-10 flex items-center justify-center outline-none"
      style={{
        background: hovered ? "rgba(201,168,76,0.08)" : "transparent",
        border: "1px solid",
        borderColor: hovered ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.2)",
        color: hovered ? "#C9A84C" : "rgba(245,240,232,0.4)",
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.3s, border-color 0.3s, color 0.3s",
      }}
    >
      {/* Animated corner marks */}
      {hovered && (
        <>
          <motion.span
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            className="absolute top-0 left-0 w-2 h-2 pointer-events-none"
            style={{
              borderTop: "1px solid #C9A84C",
              borderLeft: "1px solid #C9A84C",
              transformOrigin: "top left",
            }}
          />
          <motion.span
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            className="absolute bottom-0 right-0 w-2 h-2 pointer-events-none"
            style={{
              borderBottom: "1px solid #C9A84C",
              borderRight: "1px solid #C9A84C",
              transformOrigin: "bottom right",
            }}
          />
        </>
      )}
      {children}
    </motion.button>
  );
}

// ─── MAIN SECTION ────────────────────────────────────────
export default function TopPicksSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

   const {
      data: carsData,
      isLoading,
      error
    } = useCars();
  
    const cars = carsData || [];

  // Progress = (activeIndex / (total - slidesVisible))
  const progressPercent = Math.min(
    100,
    ((activeIndex) / (cars.length - 1)) * 100
  );

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
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.22) 20%, rgba(201,168,76,0.22) 80%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">

        {/* ══ HEADER ROW ══ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div
                className="w-px h-7"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
                }}
              />
              <span
                className="text-[9.5px] font-semibold tracking-[0.45em] uppercase"
                style={{ color: "#C9A84C" }}
              >
                Curated Selection
              </span>
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.5), transparent)",
                }}
              />
            </div>

            {/* Heading */}
            <h2
              className="leading-[0.9]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 300,
                color: "#F5F0E8",
              }}
            >
              Top Picks{" "}
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
                This Week
              </em>
            </h2>

            <p
              className="text-[13px] leading-[1.85] max-w-[360px]"
              style={{ color: "rgba(245,240,232,0.38)" }}
            >
              Handpicked by our specialists for unrivalled performance,
              presence, and prestige — the week's most coveted rides.
            </p>
          </motion.div>

          {/* Right — CTA + slide counter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-4"
          >
            {/* Slide counter */}
            <div className="flex items-baseline gap-2">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#C9A84C",
                  lineHeight: 1,
                }}
              >
                0{activeIndex + 1}
              </span>
              <span
                className="text-[10px] tracking-[0.3em]"
                style={{ color: "rgba(245,240,232,0.25)" }}
              >
                / 0{cars.length}
              </span>
            </div>

            {/* View all link */}
            <motion.a
              href="/fleet"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="hidden md:inline-flex items-center gap-2.5 no-underline group"
            >
              <span
                className="text-[9.5px] font-semibold tracking-[0.3em] uppercase border-b pb-0.5"
                style={{
                  color: "#C9A84C",
                  borderBottomColor: "rgba(201,168,76,0.3)",
                }}
              >
                View All Picks
              </span>
              <ArrowRight />
            </motion.a>
          </motion.div>
        </div>

        {/* ══ SWIPER CAROUSEL ══ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={handleSlideChange}
            breakpoints={{
              640:  { slidesPerView: 1.6, spaceBetween: 16 },
              768:  { slidesPerView: 2.2, spaceBetween: 18 },
              1024: { slidesPerView: 3,   spaceBetween: 20 },
              1280: { slidesPerView: 3.3, spaceBetween: 22 },
            }}
            className="!overflow-visible"
          >
            {cars.map((car, i) => (
              <SwiperSlide key={car.plateNumber} className="!h-auto">
                <CarCard car={car} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* ══ CONTROLS ROW ══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mt-8"
        >
          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <NavButton
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              <ArrowLeft />
            </NavButton>
            <NavButton
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <ArrowRight />
            </NavButton>
          </div>

          {/* Progress track */}
          <div
            className="flex-1 h-px relative max-w-[280px]"
            style={{ background: "rgba(201,168,76,0.12)" }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background:
                  "linear-gradient(to right, #8B7035, #C9A84C)",
              }}
            />
            {/* Dot at end of fill */}
            <motion.div
              animate={{ left: `${progressPercent}%` }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: "#C9A84C" }}
            />
          </div>

          {/* Slide labels */}
          <div className="hidden sm:flex items-center gap-3">
            {cars.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className="text-[8px] tracking-[0.3em] font-semibold transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                style={{
                  color:
                    i === activeIndex
                      ? "#C9A84C"
                      : "rgba(245,240,232,0.2)",
                }}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mobile view all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex justify-center mt-8 md:hidden"
        >
          <a
            href="/fleet"
            className="inline-flex items-center gap-2.5 px-8 py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline"
            style={{
              background: "linear-gradient(135deg, #8B7035, #C9A84C)",
              color: "#090909",
            }}
          >
            View All Picks
            <ArrowRight />
          </a>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
        }}
      />

      {/* Global Swiper reset */}
      <style jsx global>{`
        .swiper-wrapper { align-items: stretch; }
        .swiper-slide { height: auto !important; }
      `}</style>
    </section>
  );
}