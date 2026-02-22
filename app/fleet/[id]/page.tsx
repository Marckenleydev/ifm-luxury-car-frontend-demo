 "use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/components/Footer";
import { useCar, useCars } from "@/app/hooks/useCar";
import { useParams } from "next/navigation";
import {  CheckIcon, } from "@/app/Icons";
import BookingCard from "@/app/components/BookingCard";
import LuxuryNavbar from "@/app/components/Navbar";


// ─── HELPER FUNCTIONS ───────────────────────────────────
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

const getTransmissionLabel = (transmission: string) => {
  switch(transmission) {
    case 'AUTOMATIC': return 'Automatic';
    case 'MANUAL': return 'Manual';
    case 'SEMI_AUTOMATIC': return 'Semi-Auto';
    case 'CVT': return 'CVT';
    default: return transmission;
  }
};

// ─── MAIN PAGE ───────────────────────────────────────────
export default function SingleCarPage() {
  const params = useParams();
  const carId = params.id as string;
  
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("Overview");
  const [days, setDays] = useState(1);
  
  const contentRef = useRef(null);


  const {
    data: carData,
    isLoading,
    error
  } = useCar(carId);
 const {
    data: carsData,
    isLoading: isLoadingCars,
    error: errorCars
  } = useCars();

  const car = carData;
  const cars = carsData;
  console.log('cars', cars);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Error state
  if (error || !car) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="text-red-400">Failed to load car details. Please try again.</div>
      </div>
    );
  }

  const total = car.pricePerDay * days;
  const specs = [
    { label: "Transmission", value: getTransmissionLabel(car.transmission) },
    { label: "Fuel Type", value: getFuelLabel(car.fuelType) },
    { label: "Seats", value: `${car.seats} Seats` },
    { label: "Year", value: car.year.toString() },
    { label: "Color", value: car.color },
    { label: "Plate", value: car.plateNumber },
  ];

  const features = [
    "Climate Control",
    "Bluetooth Connectivity",
    "GPS Navigation",
    "Apple CarPlay",
    "Android Auto",
    "Cruise Control",
    "Parking Sensors",
    "Keyless Entry",
  ];

  const included = [
    "Comprehensive Insurance",
    "24/7 Roadside Assistance",
    "Unlimited Mileage",
    "Airport Delivery",
    "Professional Detailing",
  ];

  

  return (
    <div className="w-full min-h-screen relative mt-18">
      <LuxuryNavbar/>

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      {/* ══ BREADCRUMB ══ */}
      <div className=" px-6 md:px-12 lg:px-20 py-4" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
        <div className="max-w-[1320px] mx-auto flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
          <a href="/" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Home</a>
          <span>›</span>
          <a href="/fleet" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Fleet</a>
          <span>›</span>
          <span style={{ color: "#C9A84C" }}>{car.brand} {car.model}</span>
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-12">

          {/* ── LEFT: IMAGES + TABS ── */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Back button */}
            <a href="/fleet" className="flex items-center gap-2 w-fit no-underline group">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:-translate-x-1 transition-transform duration-200" style={{ color: "#C9A84C" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Back to Fleet</span>
            </a>

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-80 overflow-hidden"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={car.images[activeImg]}
                  alt={`${car.brand} ${car.model}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.9)" }}
                />
              </AnimatePresence>

              {/* Category badge - using transmission */}
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[8.5px] tracking-[0.28em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>
                {getTransmissionLabel(car.transmission)}
              </span>

              {/* Availability badge */}
              {car.status === 'AVAILABLE' && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 text-[8.5px] tracking-[0.28em] uppercase font-medium" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}>
                  Available Now
                </span>
              )}

              {/* Image navigation arrows */}
              <button
                onClick={() => setActiveImg(i => (i - 1 + car.images.length) % car.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
                style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setActiveImg(i => (i + 1) % car.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
                style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {car.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="flex-1 aspect-video overflow-hidden transition-all duration-300"
                  style={{ border: i === activeImg ? "2px solid #C9A84C" : "1px solid rgba(201,168,76,0.2)" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" style={{ filter: i === activeImg ? "brightness(1)" : "brightness(0.5)" }} />
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b pb-0" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
              {["Overview", "Specifications", "Features"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="text-[10px] font-semibold pb-3 px-3 border-b-2 transition-all tracking-[0.25em] uppercase"
                  style={{
                    borderColor: activeTab === tab ? "#C9A84C" : "transparent",
                    color: activeTab === tab ? "#C9A84C" : "rgba(245,240,232,0.3)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "Overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                    Experience the {car.brand} {car.model} — a masterpiece of automotive engineering. 
                    This {car.year} model features a powerful engine, luxurious interior, and cutting-edge technology.
                    Perfect for business trips, special occasions, or weekend getaways.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {included.map((item) => (
                      <div key={item} className="flex items-center gap-2 px-3 py-2 text-[11px]" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(245,240,232,0.55)" }}>
                        <CheckIcon />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "Specifications" && (
                <motion.div key="specs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-2 gap-4">
                  {specs.map((s) => (
                    <div key={s.label} className="p-4 flex flex-col gap-1" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>{s.label}</span>
                      <span className="text-[15px] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>{s.value}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "Features" && (
                <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 px-4 py-3" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <CheckIcon />
                      <span className="text-[11.5px]" style={{ color: "rgba(245,240,232,0.55)" }}>{f}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT: BOOKING CARD ── */}
         <BookingCard car={car} />
        </div>
      </section>

      {/* ══ RELATED CARS ══ */}
     <section ref={contentRef} className="border-t px-6 md:px-12 lg:px-20 py-16" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
  <div className="max-w-[1320px] mx-auto">
    
    <div className="flex items-end justify-between mb-10">
      <motion.div >
        <span className="text-[9px] tracking-[0.4em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Similar Vehicles</span>
        <h2 className="mt-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "#F5F0E8" }}>
          You Might Also Like
        </h2>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cars?.filter(c => c._id !== car._id) // Exclude current car
        .slice(0, 3) // Take only first 3
        .map((rc, i) => {
          // Get first image or fallback
          const imageUrl = rc.images?.[0] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80";
          
          return (
            <motion.div
              key={rc._id}
             
              className="overflow-hidden group"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.13)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={`${rc.brand} ${rc.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  style={{ filter: "brightness(0.75)" }} 
                />
                <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold tracking-[0.2em]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>
                  AED {rc.pricePerDay}/day
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[8px] tracking-[0.25em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>
                  {rc.transmission}
                </span>
              </div>
              
              <div className="p-4 flex flex-col gap-3">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "#F5F0E8" }}>
                  {rc.brand} {rc.model}
                </h3>
                <div className="flex items-center justify-between text-[10px]" style={{ color: "rgba(245,240,232,0.3)" }}>
                  <span>{rc.year} · {rc.color}</span>
                  <span>{rc.seats} Seats</span>
                </div>
                <div className="h-px" style={{ background: "rgba(201,168,76,0.1)" }} />
                <div className="flex gap-2">
                  <a 
                    href={`/cars/${rc._id}`} 
                    className="flex-1 text-center text-[9.5px] font-semibold tracking-[0.25em] uppercase py-2.5 transition-all no-underline" 
                    style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                  >
                    View
                  </a>
                  <a 
                    href={`/reserve?car=${rc._id}`} 
                    className="flex-1 text-center text-[9.5px] font-bold tracking-[0.25em] uppercase py-2.5 transition-all hover:bg-[#E8C97A] no-underline" 
                    style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}
                  >
                    Book
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  </div>
</section>
      
      <Footer />

      <style jsx global>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A84C' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; }
      `}</style>
    </div>
  );
}