"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { milestones, promises, stats, team, values } from "../data";
import { IconArrow, IconCar, IconCheck } from "../Icons";



// Gold ornament component
const GoldOrnament = () => (
  <div className="flex items-center gap-2">
    <div className="h-px w-6" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
    <div className="w-1 h-1 rotate-45" style={{ background: "#C9A84C", opacity: 0.7 }} />
  </div>
);

// ─── DATA ────────────────────────────────────────────────


// ─── PAGE ────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#090909" }}>
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

     
     

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24">

        {/* ── Hero ── */}
        <section className="w-full mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
                <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                  About Dream Drive
                </span>
                <GoldOrnament />
              </div>
              
              <h1 
                className="leading-[0.9]"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: "clamp(42px, 5vw, 68px)", 
                  fontWeight: 300, 
                  color: "#F5F0E8" 
                }}
              >
                We Drive Luxury.<br />
                <span style={{ 
                  background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent", 
                  backgroundClip: "text" 
                }}>
                  You Live Freedom.
                </span>
              </h1>
              
              <p className="text-[13px] leading-[1.85] max-w-lg mt-5" style={{ color: "rgba(245,240,232,0.5)" }}>
                Dream Drive was founded on a simple belief — that everyone deserves to experience the thrill of driving a world-class vehicle. Since 2018, we've been crafting premium rental experiences built on trust, quality, and a passion for extraordinary cars.
              </p>
              
              <div className="flex gap-3 mt-8">
                <a
                  href="/fleet"
                  className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  Explore Our Fleet <IconArrow />
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#C9A84C",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full"
            >
              <div className="relative h-96 overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.14)" }}>
                <img
                  src="/porshe_hero.jpg"
                  alt="Dream Drive"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
                
                {/* Floating badge */}
                <div 
                  className="absolute bottom-4 left-4 p-3 flex items-center gap-3"
                  style={{
                    background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                    border: "1px solid rgba(201,168,76,0.14)",
                  }}
                >
                  <span style={{ color: "#C9A84C" }}>
                    <IconCar />
                  </span>
                  <div>
                    <p className="text-xs font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                      500+ Premium Cars
                    </p>
                    <p className="text-[9px]" style={{ color: "rgba(245,240,232,0.3)" }}>
                      Ready to drive
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="w-full mb-20 p-8" style={{ background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)", border: "1px solid rgba(201,168,76,0.14)" }}>
          <div className="flex flex-wrap justify-between gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-1"
              >
                <span className="text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>
                  {stat.value}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="w-full mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full"
            >
              <div className="grid grid-cols-2 gap-3">
                {[
                  "/lamboghini_about.jpg",
                  "/bentley_about.jpg",
                  "/mclaren_about.jpg",
                  "/porshe_abou1.jpg"
                ].map((src, i) => (
                  <div 
                    key={i}
                    className={`overflow-hidden h-46 ${i === 1 ? 'mt-6' : ''} ${i === 2 ? '-mt-6' : ''}`}
                    style={{ border: "1px solid rgba(201,168,76,0.14)" }}
                  >
                    <img src={src} alt={`Car ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
                <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                  Our Story
                </span>
                <GoldOrnament />
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#F5F0E8" }}>
                Born from a Passion<br />for Extraordinary Cars
              </h2>
              
              <p className="text-[13px] leading-[1.85] mb-3" style={{ color: "rgba(245,240,232,0.5)" }}>
                It started with a single Porsche and a dream. Our founder Marcus Laurent believed that the joy of driving a luxury car shouldn't be reserved for the few. Dream Drive was built to break that barrier — making premium vehicles accessible, affordable, and effortless to book.
              </p>
              
              <p className="text-[13px] leading-[1.85]" style={{ color: "rgba(245,240,232,0.5)" }}>
                Today, we operate a fleet of 500+ world-class vehicles across 60+ locations, serving business travelers, weekend adventurers, and car enthusiasts who refuse to settle for ordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className="w-full mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-px h-5" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                What We Stand For
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#F5F0E8" }}>
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden p-6 flex flex-col gap-4"
                style={{
                  background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                  border: "1px solid rgba(201,168,76,0.14)",
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center" style={{ color: "#C9A84C" }}>
                  {val.icon}
                </div>
                <h3 className="text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                  {val.title}
                </h3>
                <p className="text-[11px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {val.description}
                </p>
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ border: "1px solid rgba(201,168,76,0.28)" }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="w-full mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-px h-5" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                How We Got Here
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#F5F0E8" }}>
              Our Journey
            </h2>
          </motion.div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.2)" }} />

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
                <div 
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-xs font-bold z-10"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  {m.year.slice(2)}
                </div>
                
                {/* Content */}
                <div 
                  className="p-5 flex-1"
                  style={{
                    background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                    border: "1px solid rgba(201,168,76,0.14)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] tracking-wider" style={{ color: "rgba(201,168,76,0.7)" }}>
                      {m.year}
                    </span>
                    <span className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                      {m.title}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        {/* <section className="w-full mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-px h-5" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
                <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                  The People Behind It
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#F5F0E8" }}>
                Meet Our Team
              </h2>
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
                className="group overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                  border: "1px solid rgba(201,168,76,0.14)",
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                    {member.name}
                  </p>
                  <p className="text-[9px] mt-1 tracking-wider" style={{ color: "rgba(245,240,232,0.3)" }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* ── Our Promise ── */}
        <section className="w-full mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
                <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                  What You Can Expect
                </span>
                <GoldOrnament />
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#F5F0E8" }}>
                Our Promise<br />to You
              </h2>
              
              <p className="text-[13px] leading-[1.85] max-w-md mb-6" style={{ color: "rgba(245,240,232,0.5)" }}>
                We don't just rent cars — we craft experiences. Every interaction with Dream Drive is designed to exceed your expectations from start to finish.
              </p>
              
              <a href="/fleet"
                className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                style={{
                  background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                  color: "#090909",
                }}
              >
                Book Your Ride →
              </a>
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
                  className="flex items-center gap-3 p-4"
                  style={{
                    background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                    border: "1px solid rgba(201,168,76,0.14)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                    <IconCheck />
                  </div>
                  <span className="text-xs" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                    {promise}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(160deg, #0A0A0A, #000000)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
              Ready to Drive Your Dream Car?
            </h2>
            <p className="text-[12px]" style={{ color: "rgba(245,240,232,0.45)" }}>
              Join thousands of satisfied customers who chose Dream Drive for their premium rental experience.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/fleet"
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              Browse Fleet <IconArrow />
            </a>
            <a
              href="/contact"
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}