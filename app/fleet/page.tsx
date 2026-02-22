"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useCars } from "../hooks/useCar";
import LuxuryNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IconAC, IconAutomatic, IconDiesel, IconElectric, IconHybrid, IconManual, IconPetrol, IconSearch, IconSeat, IconWhatsApp } from "../Icons";

// ─── ICONS ───────────────────────────────────────────────


// ─── HELPER FUNCTIONS ───────────────────────────────────
const getFuelIcon = (fuelType: string) => {
  switch(fuelType?.toUpperCase()) {
    case 'PETROL': return <IconPetrol />;
    case 'DIESEL': return <IconDiesel />;
    case 'ELECTRIC': return <IconElectric />;
    case 'HYBRID': return <IconHybrid />;
    default: return <IconPetrol />;
  }
};

const getTransmissionIcon = (transmission: string) => {
  switch(transmission?.toUpperCase()) {
    case 'AUTOMATIC': return <IconAutomatic />;
    case 'MANUAL': return <IconManual />;
    default: return <IconAutomatic />;
  }
};

const getTransmissionLabel = (transmission: string) => {
  switch(transmission?.toUpperCase()) {
    case 'AUTOMATIC': return 'Auto';
    case 'MANUAL': return 'Manual';
    default: return transmission || 'Auto';
  }
};

const getFuelLabel = (fuelType: string) => {
  switch(fuelType?.toUpperCase()) {
    case 'PETROL': return 'Petrol';
    case 'DIESEL': return 'Diesel';
    case 'ELECTRIC': return 'Electric';
    case 'HYBRID': return 'Hybrid';
    default: return fuelType || 'Petrol';
  }
};

// Derive categories from data
const getCategoriesFromCars = (cars: any[]) => {
  const categories = ['All', ...new Set(cars.map(car => car.category || car.fuelType || 'Luxury'))];
  return categories;
};

// ─── CAR CARD ────────────────────────────────────────────
function CarCard({ car, index }: { car: any; index: number }) {
const WHATSAPP_NUMBER = "+971559990003";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const waMsg = `Hi, I'm interested in renting the ${car.brand} ${car.model} ${car.year}. Please share availability and rates.`;
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  // Create specs array from car data
  const specs = [
    { icon: getFuelIcon(car.fuelType), label: getFuelLabel(car.fuelType) },
    { icon: <IconSeat />, label: `${car.seats || 4} Seats` },
    { icon: <IconAC />, label: "A/C" },
    { icon: getTransmissionIcon(car.transmission), label: getTransmissionLabel(car.transmission) },
  ];

  // Determine if featured (you can customize this logic)
  const isFeatured = car.status === 'AVAILABLE' && car.pricePerDay > 300;

  // Use first image or fallback
  const imageUrl = car.images?.[0] || "/porshe_hero.jpg";

  // Create car name
  const carName = `${car.brand || ''} ${car.model || ''}`.trim() || 'Luxury Vehicle';

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.4 } }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
        border: "1px solid rgba(201,168,76,0.14)",
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div
          className="absolute top-3.5 left-3.5 z-20 px-3 py-1 text-[8.5px] font-bold tracking-[0.3em] uppercase"
          style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}
        >
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.3) 40%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0 z-[5] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.1) 0%, transparent 70%)" }}
        />
        <motion.img
          src={imageUrl}
          alt={carName}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: "brightness(0.82) saturate(0.9)" }}
        />
        
        {/* Category badge - using fuel type or transmission as category */}
        <div
          className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 text-[8px] tracking-[0.28em] uppercase font-medium"
          style={{
            background: "rgba(9,9,9,0.75)",
            color: "rgba(245,240,232,0.45)",
            border: "1px solid rgba(201,168,76,0.12)",
            backdropFilter: "blur(6px)",
          }}
        >
          {car.fuelType || 'LUXURY'}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="flex flex-col gap-1">
          <h3
            className="leading-tight tracking-[0.02em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px", fontWeight: 400, color: "#F5F0E8" }}
          >
            {carName}
          </h3>
          {car.year && (
            <span className="text-[9px] tracking-[0.2em]" style={{ color: "#C9A84C" }}>
              {car.year} • {car.color || ''}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(245,240,232,0.3)" }}>Per Day</span>
          <span className="text-[15px] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>
            AED {car.pricePerDay}
          </span>
        </div>

        <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

        <div className="flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              key={spec.label}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9.5px] tracking-[0.18em] uppercase font-medium"
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

        <div className="flex-1" />
        <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

        <div className="flex gap-2">
          <motion.a
            href={`/fleet/${car._id}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 text-center text-[9.5px] font-semibold tracking-[0.25em] uppercase py-2.5 transition-all no-underline"
            style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
          >
            Details
          </motion.a>
          <motion.a
            href={`/fleet/${car._id}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 text-center text-[9.5px] font-bold tracking-[0.25em] uppercase py-2.5 transition-all hover:bg-[#E8C97A] no-underline"
            style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}
          >
            Reserve
          </motion.a>
        </div>
         
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: "1px solid rgba(201,168,76,0.28)" }}
      />
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────
export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  // Fetch real cars from backend
  const { data: carsData, isLoading, error } = useCars();
  const cars = carsData || [];

  // Derive categories from actual data
  const categories = useMemo(() => {
    if (!cars.length) return ["All"];
    const uniqueCategories = ['All', ...new Set(cars.map(car => car.fuelType || 'Luxury'))];
    return uniqueCategories;
  }, [cars]);

  // Filter cars based on category and search
  const filtered = cars.filter((car) => {
    const carName = `${car.brand || ''} ${car.model || ''}`.toLowerCase();
    const carCategory = car.fuelType || 'Luxury';
    
    const matchCategory = activeCategory === "All" || carCategory === activeCategory;
    const matchSearch = carName.includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center text-white">
        <div className="text-center">
          <h3 className="text-xl mb-4">Failed to load vehicles</h3>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#C9A84C] text-black"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen" style={{ background: "#090909" }}>
      <LuxuryNavbar/>
      
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top border */}
      

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">

        {/* ══ HEADER ══ */}
        <div ref={headerRef} className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Left */}
          <motion.div
           
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                Premium Collection
              </span>
            </div>
            
            <h1 className="leading-[0.9]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 6vw, 78px)", fontWeight: 300, color: "#F5F0E8" }}>
              Find Your <br />
              <span style={{ background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Perfect Ride
              </span>
            </h1>
            
            <p className="text-[13px] leading-[1.85] max-w-lg" style={{ color: "rgba(245,240,232,0.38)" }}>
              Explore our handpicked selection of {cars.length} premium vehicles tailored to suit every taste and occasion.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
           
            className="flex gap-8"
          >
            {[
              [`${cars.length}+`, "Luxury Cars"], 
              ["60+", "Locations"], 
              ["800+", "Happy Clients"]
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
                  {val}
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ FILTERS BAR ══ */}
        <motion.div
          
          className="mb-12 p-6 flex flex-col md:flex-row gap-6"
          style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          
          {/* Category pills - dynamically generated from data */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[10px] px-4 py-2 font-semibold tracking-[0.25em] uppercase transition-all duration-300"
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }
                    : { background: "transparent", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.5)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative md:w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconSearch />
            </span>
            <input
              type="text"
              placeholder="Search vehicles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-[11px] bg-transparent focus:outline-none transition-all duration-300"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#F5F0E8" }}
            />
          </div>
        </motion.div>

        {/* Result count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[11px] tracking-[0.2em] uppercase mb-8"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Showing <span style={{ color: "#C9A84C" }}>{filtered.length}</span> vehicles
            {activeCategory !== "All" && (
              <> in <span style={{ color: "#C9A84C" }}>{activeCategory}</span></>
            )}
          </motion.p>
        </AnimatePresence>

        {/* ══ CARS GRID ══ */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((car, i) => (
                <CarCard key={car._id} car={car} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 300, color: "rgba(245,240,232,0.2)" }}>
                No Vehicles Found
              </h3>
              <p className="text-[12px] mt-3" style={{ color: "rgba(245,240,232,0.3)" }}>
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearch(""); }}
                className="mt-6 px-6 py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-[#E8C97A]"
                style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer/>

      <style jsx global>{`
        input::placeholder { color: rgba(245,240,232,0.25); }
        input:focus { border-color: rgba(201,168,76,0.6) !important; }
      `}</style>
    </div>
  );
}