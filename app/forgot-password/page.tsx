'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAuth } from '../hooks/useAuth';

// ─── ICONS ───────────────────────────────────────────────
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const IconLock = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

export default function RequestPasswordResetPage() {
  const { useRequestPasswordResetMutation } = useAuth();
  const resetMutation = useRequestPasswordResetMutation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setError('');

    try {
      await resetMutation.mutateAsync(email);
     
      setEmail('');
    } catch (err) {
      console.error(err);
     
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-12" style={{ background: "#090909" }}>
      
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl flex overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>

        {/* ── LEFT PANEL (Image/Content) ── */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 overflow-hidden" style={{ background: "#0A0A0A" }}>
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/porshe_hero.jpg" 
              alt="Luxury Car" 
              className="w-full h-full object-cover" 
              style={{ filter: "brightness(0.35)" }} 
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)" }} />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#C9A84C" }}>
              AURUM
            </span>
            <div className="text-[7.5px] tracking-[0.45em] uppercase font-medium mt-1" style={{ color: "rgba(245,240,232,0.25)" }}>
              Elite Motor Collection
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Icon */}
            <div className="inline-flex" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconLock />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.2 }}>
                Secure Account Recovery
              </h2>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
                We'll send you a secure link to reset your password and regain access to your account.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[["500+", "Luxury Cars"], ["800+", "Happy Clients"]].map(([val, label]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
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

        {/* ── RIGHT PANEL (Form) ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 md:px-12" style={{ background: "#111" }}>

          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#C9A84C" }}>
              AURUM
            </span>
          </div>

          {/* Back Button */}
          <motion.a
            href="/auth"
            whileHover={{ x: -2 }}
            className="inline-flex items-center gap-2 mb-8 text-[11px] tracking-[0.2em] uppercase no-underline transition-colors"
            style={{ color: "rgba(245,240,232,0.4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.4)")}
          >
            <IconArrowLeft />
            Back to Login
          </motion.a>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 mb-8"
          >
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, color: "#F5F0E8" }}>
              Forgot Password?
            </h2>
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                Email Address
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3" style={{ color: "rgba(201,168,76,0.6)" }}>
                  <IconMail />
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-10 pr-4 py-3 text-[12px] bg-transparent focus:outline-none transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#F5F0E8" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                />
              </div>
              {error && (
                <span className="text-[10px]" style={{ color: "#E74C3C" }}>
                  {error}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={resetMutation.isPending}
              className="w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: resetMutation.isPending ? "rgba(201,168,76,0.5)" : "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              {resetMutation.isPending ? (
                <span className="inline-flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#090909] border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Reset Link'
              )}
            </button>

          </motion.form>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-4 flex flex-col gap-2"
            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
          >
            <p className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
              <span style={{ color: "#C9A84C" }}>Note:</span> The reset link will expire in 10 minutes for security reasons. If you don't receive an email, check your spam folder.
            </p>
          </motion.div>

          {/* Footer Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-[11px] mt-8"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Remember your password?{" "}
            <a
              href="/login"
              className="font-semibold no-underline transition-colors"
              style={{ color: "#C9A84C" }}
            >
              Sign in
            </a>
          </motion.p>

        </div>
      </div>

      <style jsx>{`
        input::placeholder {
          color: rgba(245, 240, 232, 0.25);
        }
      `}</style>
    </div>
  );
}