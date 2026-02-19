"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    name: "Dar el Rfoua",
    role: "Car Renter",
    review:
      "The entire booking experience was seamless. I picked up a BMW X7 for a weekend trip and it felt brand new. Everything from the cleanliness to the pickup process was perfectly organized. Definitely the best rental experience I've had.",
  },
  {
    name: "Dar el Rfoua",
    role: "Car Renter",
    review:
      "The entire booking experience was seamless. I picked up a BMW X7 for a weekend trip and it felt brand new. Everything from the cleanliness to the pickup process was perfectly organized. Definitely the best rental experience I've had.",
  },
  {
    name: "Dar el Rfoua",
    role: "Car Renter",
    review:
      "The entire cool pickup up a lifts brand new. Everything from the cleanliness to the pickup process was perfectly organized. Definitely the best rental.",
  },
  {
    name: "Sarah Mitchell",
    role: "Business Traveler",
    review:
      "Absolutely outstanding service. The Porsche I rented was immaculate and the staff were professional and courteous. Will definitely be booking again for my next trip.",
  },
  {
    name: "James Whitfield",
    role: "Car Enthusiast",
    review:
      "Dream Drive exceeded every expectation. The Ferrari was in perfect condition and the whole process from booking to drop-off was effortless. Highly recommended.",
  },
];

export default function TrustedSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
   <section className="relative w-full bg-[#090909] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">

       <div
          className="absolute inset-0 z-[5] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Left — heading */}
          <motion.div
            
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
              <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
                Client Stories
              </span>
            </div>

            <h2
              className="leading-[0.9]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300, color: "#F5F0E8" }}
            >
              Trusted by{" "}
              <em
                className="not-italic"
                style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C, #E8C97A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Thousands.
              </em>
            </h2>

            <p className="text-[13px] leading-relaxed max-w-[340px]" style={{ color: "rgba(245,240,232,0.38)" }}>
              Real voices from discerning clients who chose AURUM for life's most important moments.
            </p>
          </motion.div>

          {/* Right — aggregate rating */}
          <motion.div
          
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start md:items-end gap-2"
          >
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
              5.0
            </span>
            <div className="flex gap-1 text-[#C9A84C] text-sm">★★★★★</div>
            <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.25)" }}>
              800+ verified reviews
            </span>
          </motion.div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{
              el: ".trusted-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
              <div
                  className="flex flex-col gap-4 p-6 h-full"
                  style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.13)" }}
                >
                  {/* Quote mark + stars */}
                  <div className="flex items-start justify-between">
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, color: "rgba(201,168,76,0.15)", lineHeight: 0.8 }}>
                      "
                    </span>
                    <div className="flex gap-1 text-[#C9A84C] text-sm">★★★★★</div>
                  </div>

                  {/* Review text */}
                  <p className="flex-1 text-[12.5px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                    {item.review}
                  </p>

                  {/* Divider */}
                  <div className="h-px" style={{ background: "rgba(201,168,76,0.1)" }} />

                  {/* Author row */}
                  <div className="flex items-center gap-3">
                    {/* Monogram avatar */}
                    <div
                      className="w-9 h-9 flex items-center justify-center text-[10px] font-bold flex-shrink-0 rounded-full uppercase"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                    >
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", color: "#F5F0E8" }}>
                        {item.name}
                      </p>
                      <p className="text-[9px] tracking-[0.22em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
                        {item.role}
                      </p>
                    </div>

                    {/* Verified */}
                    <div className="ml-auto flex items-center gap-1">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[8px] tracking-[0.2em] uppercase" style={{ color: "rgba(201,168,76,0.45)" }}>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + Nav Row */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* Previous */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.4)", background: "transparent" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination container */}
            <div className="trusted-pagination flex gap-2 justify-center" />

            {/* Next */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-[rgba(201,168,76,0.6)] hover:text-[#C9A84C]"
              style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.4)", background: "transparent" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Mobile Button */}
        <div className="flex justify-center mt-6 md:hidden">
          <button className="bg-black text-white text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
            Read All Reviews →
          </button>
        </div>

      </div>
      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
        }}
      />

      {/* Pagination Dot Styles */}
      <style jsx global>{`
        .trusted-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(201,168,76,0.3);
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s;
        }
        .trusted-pagination .swiper-pagination-bullet-active {
          background: #C9A84C;
          width: 20px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}