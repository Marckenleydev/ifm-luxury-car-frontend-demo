




"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCars } from "../hooks/useCar";
import { Car } from "../types";
import { IconAC, IconArrow, IconAutomatic, IconDiesel, IconElectric, IconHybrid, IconManual, IconPetrol, IconSeat, IconWhatsApp } from "../Icons";

// ─── YOUR WHATSAPP NUMBER ─────────────────────────────────




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

// ─── HELPER FUNCTIONS ───────────────────────────────────
const getFuelIcon = (fuelType: string) => {
  switch(fuelType) {
    case 'PETROL': return <IconPetrol />;
    case 'DIESEL': return <IconDiesel />;
    case 'ELECTRIC': return <IconElectric />;
    case 'HYBRID': return <IconHybrid />;
    default: return <IconPetrol />;
  }
};

const getTransmissionIcon = (transmission: string) => {
  switch(transmission) {
    case 'AUTOMATIC': return <IconAutomatic />;
    case 'MANUAL': return <IconManual />;
    default: return <IconAutomatic />;
  }
};

const getTransmissionLabel = (transmission: string) => {
  switch(transmission) {
    case 'AUTOMATIC': return 'Automatic';
    case 'MANUAL': return 'Manual';
    case 'SEMI_AUTOMATIC': return 'Semi-Auto';
    case 'CVT': return 'CVT';
    default: return transmission;
  }
};

const getFuelLabel = (fuelType: string) => {
  switch(fuelType) {
    case 'PETROL': return 'Petrol';
    case 'DIESEL': return 'Diesel';
    case 'ELECTRIC': return 'Electric';
    case 'HYBRID': return 'Hybrid';
    case 'PLUGIN_HYBRID': return 'Plug-in';
    default: return fuelType;
  }
};

// ─── CAR CARD ────────────────────────────────────────────
function CarCard({ car, index }: { car: Car; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
const WHATSAPP_NUMBER = "+971559990003";
  // Create WhatsApp message dynamically from car data
  const waMsg = `Hi, I'm interested in renting the ${car.brand} ${car.model} ${car.year}. Please share availability and rates.`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  // Create specs array from car data (matching your mock data structure)
  const specs = [
    { icon: getFuelIcon(car.fuelType), label: getFuelLabel(car.fuelType) },
    { icon: <IconSeat />, label: `${car.seats} Seats` },
    { icon: <IconAC />, label: "Climate" },
    { icon: getTransmissionIcon(car.transmission), label: getTransmissionLabel(car.transmission) },
  ];

  // Determine badge and featured status
  const isFeatured = car.status === 'AVAILABLE';
  const badge = isFeatured ? "Available Now" : null;

  // Use first image or fallback
  const imageUrl = car.images?.[0] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
        border: "1px solid rgba(201,168,76,0.14)",
      }}
    >
      {/* ── BADGE ── */}
      {badge && (
        <div
          className="absolute top-3.5 left-3.5 z-20 px-3 py-1 text-[8.5px] font-bold tracking-[0.3em] uppercase"
          style={{
            background: isFeatured
              ? "linear-gradient(135deg, #8B7035, #C9A84C)"
              : "rgba(13,13,13,0.85)",
            color: isFeatured ? "#090909" : "#C9A84C",
            border: isFeatured ? "none" : "1px solid rgba(201,168,76,0.35)",
            backdropFilter: "blur(8px)",
          }}
        >
          {badge}
        </div>
      )}

      {/* ── CAR IMAGE ── */}
      <div className="relative h-52 overflow-hidden" style={{ background: "#0A0A0A" }}>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.3) 40%, transparent 100%)",
          }}
        />

        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />

        <motion.img
          src={imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: "brightness(0.82) saturate(0.9)" }}
        />

        {/* Category chip — top right (using transmission as category for now) */}
        <div
          className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 text-[8px] tracking-[0.28em] uppercase font-medium"
          style={{
            background: "rgba(9,9,9,0.75)",
            color: "rgba(245,240,232,0.45)",
            border: "1px solid rgba(201,168,76,0.12)",
            backdropFilter: "blur(6px)",
          }}
        >
          {car.transmission}
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="flex flex-col gap-4 p-5 flex-1">

        {/* Name + Year */}
        <div className="flex flex-col gap-1">
          <h3
            className="leading-tight tracking-[0.02em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
          >
            {car.brand} {car.model}
          </h3>
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-medium"
            style={{ color: "#C9A84C" }}
          >
            {car.year} Model • {car.color}
          </span>
        </div>

        {/* Price Per Day - Added from backend */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Price per day</span>
          <span className="text-sm font-bold" style={{ color: "#C9A84C" }}>
            AED {car.pricePerDay}
          </span>
        </div>

        {/* Gold hairline */}
        <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* ── SPEC CHIPS ── */}
        <div className="flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              key={spec.label}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9.5px] tracking-[0.18em] uppercase font-medium transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.12)",
                color: "rgba(245,240,232,0.45)",
              }}
            >
              <span style={{ color: "rgba(201,168,76,0.7)" }}>{spec.icon}</span>
              {spec.label}
            </span>
          ))}

          {/* ── WHATSAPP CHIP ── */}
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9.5px] tracking-[0.18em] uppercase font-semibold no-underline transition-all duration-300 group/wa"
            style={{
              background: "rgba(37,211,102,0.08)",
              border: "1px solid rgba(37,211,102,0.28)",
              color: "rgba(37,211,102,0.85)",
            }}
            aria-label="Chat on WhatsApp"
            title="Enquire on WhatsApp"
          >
            <span
              className="transition-transform duration-200 group-hover/wa:scale-110"
              style={{ color: "rgba(37,211,102,0.9)" }}
            >
              <IconWhatsApp />
            </span>
            WhatsApp
          </motion.a>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Gold hairline */}
        <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* ── CTA BUTTON ── */}
        <motion.a
          href={`/fleet/${car._id}`}
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 w-full py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline transition-all duration-300 group/btn"
          style={
            isFeatured
              ? {
                  background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 100%)",
                  color: "#090909",
                }
              : {
                  background: "transparent",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                }
          }
        >
          {/* Shimmer on hover (featured only) */}
          {isFeatured && (
            <span
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
              }}
            />
          )}
          <span className="relative z-10">Reserve Now</span>
          <span
            className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200"
            style={{ color: isFeatured ? "#090909" : "#C9A84C" }}
          >
            <IconArrow />
          </span>
        </motion.a>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1px solid rgba(201,168,76,0.28)" }}
      />
    </motion.div>
  );
}





export default function FindYourRideSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { 
    once: true, 
    margin: "-80px",
    amount: 0.3 // 👈 Add this - triggers when 30% visible
  });
  
  const {
    data: carsData,
    isLoading,
    error
  } = useCars();

  const cars = carsData || [];

  // Loading state
  if (isLoading) {
    return (
      <section className="relative w-full overflow-hidden" style={{ minHeight: "600px" }}>
        <div className="flex items-center justify-center h-full py-24">
          <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="relative w-full overflow-hidden bg-[#090909]">
        <div className="text-center py-24 text-red-400">
          Failed to load cars. Please try again.
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef} // 👈 Make sure this is here
      className="relative w-full overflow-hidden bg-[#090909]"
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

        {/* ── SECTION HEADER ── */}
       {/* ── SECTION HEADER ── */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
  {/* Left */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }} // 👈 Changed from animate to whileInView
    viewport={{ once: true, amount: 0.3 }} // 👈 Add viewport options
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col gap-5"
  >
    {/* Eyebrow */}
    <div className="flex items-center gap-4">
      <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
      <span className="text-[9.5px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
        Our Fleet
      </span>
      <div className="h-px w-10" style={{ background: "linear-gradient(to right, rgba(201,168,76,0.5), transparent)" }} />
    </div>

    {/* Heading */}
    <h2
      className="leading-[0.92] text-white"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(40px, 5vw, 68px)",
        fontWeight: 300,
      }}
    >
      Find Your{" "}
      <em
        className="not-italic"
        style={{
          background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Perfect Ride
      </em>
    </h2>

    <GoldOrnament />

    <p className="text-[13px] leading-[1.85] max-w-[360px] text-white/80">
      Handpicked marques engineered for prestige, performance, and
      every occasion — from swift escapes to grand arrivals.
    </p>
  </motion.div>

  {/* Right — View All CTA */}
  <motion.a
    href="/fleet"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }} // 👈 Changed here too
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ x: 4 }}
    className="hidden md:inline-flex items-center gap-3 no-underline self-end group"
  >
    <span
      className="text-[9.5px] font-semibold tracking-[0.3em] uppercase border-b pb-0.5 transition-colors duration-300"
      style={{ color: "#C9A84C", borderBottomColor: "rgba(201,168,76,0.3)" }}
    >
      View Entire Fleet
    </span>
    <span className="group-hover:translate-x-1 transition-transform duration-200" style={{ color: "#C9A84C" }}>
      <IconArrow />
    </span>
  </motion.a>
</div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cars.map((car, i) => (
            <CarCard key={car._id} car={car} index={i} />
          ))}
        </div>

        {/* ── MOBILE VIEW ALL ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-10 md:hidden"
        >
          <a
            href="/fleet"
            className="inline-flex items-center gap-2.5 px-8 py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline"
            style={{
              background: "linear-gradient(135deg, #8B7035, #C9A84C)",
              color: "#090909",
            }}
          >
            View Entire Fleet
            <IconArrow />
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
    </section>
  );
}