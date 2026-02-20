"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryNavbar from "../components/Navbar";
import { IconStar } from "../Icons";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
 

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-12 mt-10" style={{ background: "#090909" }}>
      <LuxuryNavbar />
      
      {/* Noise grain */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 w-full max-w-6xl flex overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>

        {/* LEFT PANEL (Image & Content) */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 overflow-hidden" style={{ background: "#0A0A0A" }}>
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src="/porshe_hero.jpg" alt="Luxury Car" className="w-full h-full object-cover" style={{ filter: "brightness(0.4)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)" }} />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#C9A84C" }}>
              IFM LUXURY
            </span>
            <div className="text-[7.5px] tracking-[0.45em] uppercase font-medium mt-1" style={{ color: "rgba(245,240,232,0.25)" }}>
              Elite Motor Collection
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Quote */}
            <div className="p-6 flex flex-col gap-4" style={{ background: "rgba(17,17,17,0.5)", border: "1px solid rgba(201,168,76,0.15)", backdropFilter: "blur(10px)" }}>
              <p className="text-[13px] leading-relaxed font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                "The entire booking experience was seamless. Definitely the best luxury rental experience I've had."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 overflow-hidden" style={{ background: "rgba(201,168,76,0.2)" }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium" style={{ color: "#F5F0E8" }}>Marcus Laurent</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>Car Enthusiast</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[["500+", "Luxury Cars"], ["800+", "Happy Clients"], ["60+", "Locations"]].map(([val, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
                    {val}
                  </span>
                  <span className="text-[8px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (Forms) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 md:px-12 overflow-y-auto max-h-screen mt-6 lg:mt-0" style={{ background: "#111" }}>

          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#C9A84C" }}>
              IFM LUXURY
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 mb-8 w-fit mt-16 lg:mt-0" style={{ background: "rgba(9,9,9,0.5)", border: "1px solid rgba(201,168,76,0.2)" }}>
            {[
              { key: "login" as const, label: "Sign In" },
              { key: "register" as const, label: "Sign Up" }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setMode(tab.key)}
                className="text-[10px] font-semibold px-6 py-2 tracking-[0.25em] uppercase transition-all duration-300"
                style={
                  mode === tab.key
                    ? { background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }
                    : { background: "transparent", color: "rgba(245,240,232,0.4)" }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Forms with Animation */}
          <AnimatePresence mode="wait">
            {mode === "login" ? (
              <LoginForm key="login" onSwitch={() => setMode("register")} />
            ) : (
              <RegisterForm key="register" onSwitch={() => setMode("login")} />
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        input::placeholder { color: rgba(245,240,232,0.25); }
        input:focus { border-color: rgba(201,168,76,0.6) !important; }
      `}</style>
    </div>
  );
}