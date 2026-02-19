"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryNavbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── ICONS ───────────────────────────────────────────────
const IconElectric = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
    <path d="M12 2v20" />
  </svg>
);

const IconSeat = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M5 12h14M8 8h8M8 16h8" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
  </svg>
);

const IconAC = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const IconAutomatic = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconPetrol = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M4 20V6a2 2 0 012-2h8a2 2 0 012 2v14" />
    <path d="M4 12h12M18 20h2M18 8h2" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────
const categories = ["All", "Sports", "SUV", "Sedan", "Electric", "Convertible"];

const allCars = [
  {
    name: "Porsche 911 Carrera 2025",
    category: "Sports",
    price: "$320/day",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconElectric />, label: "Electric" },
      { icon: <IconSeat />, label: "2 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: true,
  },
  {
    name: "Audi R8 V10 Performance",
    category: "Sports",
    price: "$280/day",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "2 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Ferrari Portofino M 2025",
    category: "Convertible",
    price: "$450/day",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "2 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "BMW X7 M Sport",
    category: "SUV",
    price: "$210/day",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "7 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Porsche Taycan Turbo",
    category: "Electric",
    price: "$340/day",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconElectric />, label: "Electric" },
      { icon: <IconSeat />, label: "4 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Mercedes AMG GT 63",
    category: "Sedan",
    price: "$260/day",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "4 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Lamborghini Huracán",
    category: "Sports",
    price: "$590/day",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "2 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Range Rover Autobiography",
    category: "SUV",
    price: "$230/day",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "5 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
  {
    name: "Aston Martin DB11",
    category: "Convertible",
    price: "$480/day",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80",
    specs: [
      { icon: <IconPetrol />, label: "Petrol" },
      { icon: <IconSeat />, label: "2 Seats" },
      { icon: <IconAC />, label: "A/C" },
      { icon: <IconAutomatic />, label: "Automatic" },
    ],
    featured: false,
  },
];

// ─── CARD ────────────────────────────────────────────────
function CarCard({ car, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
    >
      {/* Image */}
      <div className="relative bg-gray-100 h-44 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
        />
        {/* Price Badge */}
        <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full">
          {car.price}
        </span>
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white text-gray-700 text-[10px] font-medium px-3 py-1 rounded-full shadow-sm">
          {car.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Car Name */}
        <h3 className="text-sm font-semibold text-gray-900">{car.name}</h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2">
          {car.specs.map((spec) => (
            <span
              key={spec.label}
              className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
            >
              <span className="text-gray-600">{spec.icon}</span>
              <span>{spec.label}</span>
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-1" />

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 text-xs font-medium py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
            View Details
          </button>
          <button className="flex-1 text-xs font-medium py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────────
export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allCars.filter((car) => {
    const matchCategory = activeCategory === "All" || car.category === activeCategory;
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  

  return (
    <main className="min-h-screen mt-20">
        <LuxuryNavbar />

      {/* ── Hero Banner ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 pt-16 pb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Your<br />Perfect Ride
            </h1>
            <p className="text-sm text-gray-400 mt-3 max-w-md leading-relaxed">
              Explore our handpicked selection of premium vehicles tailored to suit every taste and occasion.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="flex gap-8"
          >
            {[["500+", "Luxury Cars"], ["60+", "Locations"], ["800+", "Happy Clients"]].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">{val}</span>
                <span className="text-xs text-gray-400 mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filters + Search ── */}
      <section className="w-full bg-white border-t border-gray-100 px-6 md:px-16 lg:px-24 py-5 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-56">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <IconSearch />
            </span>
            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-gray-400 transition"
            />
          </div>
        </div>
      </section>

      {/* ── Cars Grid ── */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Result Count */}
          <motion.p
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-gray-400 mb-6"
          >
            Showing <span className="text-gray-900 font-semibold">{filtered.length}</span> vehicles
            {activeCategory !== "All" && (
              <> in <span className="text-gray-900 font-semibold">{activeCategory}</span></>
            )}
          </motion.p>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((car, i) => (
                  <CarCard key={car.name} car={car} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <p className="text-2xl font-bold text-gray-200">No cars found</p>
                <p className="text-sm text-gray-400 mt-2">Try a different category or search term.</p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearch(""); }}
                  className="mt-5 bg-black text-white text-xs px-5 py-2.5 rounded-full hover:bg-gray-800 transition"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer/>

    </main>
  );
}