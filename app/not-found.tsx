"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconHome } from "./Icons";

// ─── ICONS ───────────────────────────────────────────────




// ─── ANIMATED CAR ICON ───────────────────────────────────
function AnimatedCarIcon() {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Car body */}
      <motion.path
        d="M5 11L6.5 6H17.5L19 11M5 11V17H8V19H10V17H14V19H16V17H19V11M5 11H19"
        stroke="url(#gold-gradient)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
      />
      
      {/* Wheels */}
      <motion.circle
        cx="8"
        cy="17"
        r="1.5"
        stroke="url(#gold-gradient)"
        strokeWidth={1.2}
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.circle
        cx="16"
        cy="17"
        r="1.5"
        stroke="url(#gold-gradient)"
        strokeWidth={1.2}
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
      
      {/* Windows */}
      <motion.path
        d="M7.5 8L9 10H15L16.5 8"
        stroke="url(#gold-gradient)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      />
      
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7035" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E8C97A" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// ─── 404 NUMBER ANIMATION ────────────────────────────────
function AnimatedNumber({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "inline-block",
        background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  );
}

// ─── MAIN 404 PAGE ───────────────────────────────────────
export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6" style={{ background: "#090909" }}>
      
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center gap-8">

        {/* Animated car icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedCarIcon />
        </motion.div>

        {/* 404 Number */}
        <div
          className="leading-none tracking-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(80px, 15vw, 180px)",
            fontWeight: 300,
          }}
        >
          <AnimatedNumber delay={0.3}>4</AnimatedNumber>
          <AnimatedNumber delay={0.4}>0</AnimatedNumber>
          <AnimatedNumber delay={0.5}>4</AnimatedNumber>
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-24 h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
        />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-3"
        >
          <h1
            className="leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 300,
              color: "#F5F0E8",
            }}
          >
            Route Not Found
          </h1>
          <p className="text-[13px] leading-relaxed max-w-md mx-auto" style={{ color: "rgba(245,240,232,0.4)" }}>
            The page you&apos;re looking for has taken a different route. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          {/* Go back */}
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              background: "transparent",
            }}
          >
            <IconArrowLeft />
            Go Back
          </motion.button>

          {/* Home */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase no-underline transition-all duration-300 hover:bg-[#E8C97A]"
            style={{
              background: "linear-gradient(135deg, #8B7035, #C9A84C)",
              color: "#090909",
            }}
          >
            <IconHome />
            Home
          </motion.a>
        </motion.div>

        {/* Suggested links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col gap-4 mt-8"
        >
          <span className="text-[9px] tracking-[0.35em] uppercase font-semibold" style={{ color: "rgba(245,240,232,0.3)" }}>
            Quick Links
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Our Fleet", href: "/fleets" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase no-underline transition-colors duration-300"
                style={{ color: "rgba(245,240,232,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute -z-10 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  );
}