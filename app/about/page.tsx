"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── ICONS ───────────────────────────────────────────────
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconCar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m8 0H9m4 0h5m0 0h1a1 1 0 001-1v-3.65a1 1 0 00-.222-.624l-3.48-4.35A1 1 0 0015.52 6H13" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Luxury Cars" },
  { value: "24/7", label: "Free Assistance" },
  { value: "100%", label: "Service Guarantee" },
  { value: "60+", label: "Top Locations" },
  { value: "800+", label: "Satisfied Clients" },
];

const values = [
  {
    icon: <IconShield />,
    title: "Trust & Safety",
    description: "Every vehicle undergoes rigorous inspection before every rental to ensure your complete safety on the road.",
  },
  {
    icon: <IconStar />,
    title: "Premium Quality",
    description: "We handpick only the finest luxury vehicles, maintained to the highest standards for an unmatched experience.",
  },
  {
    icon: <IconClock />,
    title: "Always Available",
    description: "Our 24/7 support team is always ready to assist you, from booking to drop-off and everything in between.",
  },
  {
    icon: <IconUsers />,
    title: "Customer First",
    description: "Every decision we make is guided by one question — how does this improve the experience for our customers?",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Dream Drive was born with a fleet of 10 luxury cars and a vision to redefine car rentals." },
  { year: "2020", title: "Expanded Nationwide", description: "Grew to 20+ locations across the country, serving thousands of happy customers." },
  { year: "2022", title: "500+ Fleet", description: "Reached a milestone of 500+ premium vehicles including electric and exotic sports cars." },
  { year: "2025", title: "Global Ambitions", description: "Launching international operations to bring Dream Drive's luxury experience worldwide." },
];

const team = [
  {
    name: "Marcus Laurent",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sophia Reeves",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Daniel Park",
    role: "Fleet Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Aisha Nour",
    role: "Customer Experience Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
];

const promises = [
  "Transparent pricing — no hidden fees",
  "Free cancellation up to 24 hours before pickup",
  "Comprehensive insurance included",
  "Immaculate, fully serviced vehicles every time",
  "Dedicated concierge support 24/7",
  "Flexible pickup & delivery options",
];

// ─── PAGE ────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="min-h-screen mt-20">
      <Navbar />

      {/* ── Hero ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 pt-16 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">About Dream Drive</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We Drive Luxury.<br />You Live Freedom.
            </h1>
            <p className="text-sm text-gray-500 mt-5 leading-relaxed max-w-lg">
              Dream Drive was founded on a simple belief — that everyone deserves to experience the thrill of driving a world-class vehicle. Since 2018, we've been crafting premium rental experiences built on trust, quality, and a passion for extraordinary cars.
            </p>
            <div className="flex gap-3 mt-7">
              <button className="bg-black text-white text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
                Explore Our Fleet →
              </button>
              <button className="border border-gray-300 text-gray-700 text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                alt="Dream Drive"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <IconCar />
                <div>
                  <p className="text-xs font-bold text-gray-900">500+ Premium Cars</p>
                  <p className="text-[10px] text-gray-400">Ready to drive</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden h-48">
                <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=400&q=80" alt="Car 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 mt-6">
                <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=400&q=80" alt="Car 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 -mt-6">
                <img src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=400&q=80" alt="Car 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src="https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=400&q=80" alt="Car 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Born from a Passion<br />for Extraordinary Cars
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              It started with a single Porsche and a dream. Our founder Marcus Laurent believed that the joy of driving a luxury car shouldn't be reserved for the few. Dream Drive was built to break that barrier — making premium vehicles accessible, affordable, and effortless to book.
            </p>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Today, we operate a fleet of 500+ world-class vehicles across 60+ locations, serving business travelers, weekend adventurers, and car enthusiasts who refuse to settle for ordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="w-full bg-[#f5f5f5] px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  {val.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{val.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">How We Got Here</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start pb-10 last:pb-0"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold z-10">
                  {m.year.slice(2)}
                </div>
                {/* Content */}
                <div className="bg-[#f5f5f5] rounded-2xl px-5 py-4 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-gray-400">{m.year}</span>
                    <span className="text-sm font-bold text-gray-900">{m.title}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="w-full bg-[#f5f5f5] px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">The People Behind It</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">What You Can Expect</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Our Promise<br />to You
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-md">
              We don't just rent cars — we craft experiences. Every interaction with Dream Drive is designed to exceed your expectations from start to finish.
            </p>
            <button className="mt-7 bg-black text-white text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
              Book Your Ride →
            </button>
          </motion.div>

          {/* Right - Promise List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 grid grid-cols-1 gap-3"
          >
            {promises.map((promise, i) => (
              <motion.div
                key={promise}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 bg-[#f5f5f5] rounded-xl px-4 py-3"
              >
                <div className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <IconCheck />
                </div>
                <span className="text-sm text-gray-700 font-medium">{promise}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Ready to Drive<br />Your Dream Car?
            </h2>
            <p className="text-sm text-gray-400 mt-3 max-w-md">
              Join thousands of satisfied customers who chose Dream Drive for their premium rental experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3 flex-shrink-0"
          >
            <button className="bg-white text-black text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
              Browse Fleet →
            </button>
            <button className="border border-white/20 text-white text-xs px-6 py-2.5 rounded-full font-medium hover:bg-white/10 transition">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      <Footer/>

    </main>
  );
}