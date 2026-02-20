"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IconClock, IconLocation, IconMail, IconPhone , IconSend, IconChevron, IconFacebook, IconInstagram, IconTwitter, IconArrow } from "../Icons";



// Gold ornament component
const GoldOrnament = () => (
  <div className="flex items-center gap-2">
    <div className="h-px w-6" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
    <div className="w-1 h-1 rotate-45" style={{ background: "#C9A84C", opacity: 0.7 }} />
  </div>
);

// ─── DATA ────────────────────────────────────────────────
const contactInfo = [
  {
    icon: <IconPhone />,
    label: "Phone",
    value: "+971 55 999 00 03",
    sub: "Mon – Fri, 9am to 6pm",
  },
  {
    icon: <IconMail />,
    label: "Email",
    value: "support@dreamdrive.com",
    sub: "We reply within 2 hours",
  },
  {
    icon: <IconLocation />,
    label: "Headquarters",
    value: "Dubai Marina, Executive Tower",
    sub: "Dubai, UAE",
  },
  {
    icon: <IconClock />,
    label: "Working Hours",
    value: "24/7 Concierge",
    sub: "Always here for you",
  },
];

const offices = [
  { 
    city: "Dubai Marina", 
    address: "Executive Tower, Level 15", 
    phone: "+971 55 999 00 03",
    email: "dubai@dreamdrive.ae"
  },
  
];

const subjects = [
  "Booking Inquiry",
  "Fleet Information",
  "Payment Issue",
  "Cancellation Request",
  "Insurance Question",
  "General Inquiry",
];

// ─── PAGE ────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-5 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
            <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
              Get In Touch
            </span>
            <GoldOrnament />
          </div>
          
          <h1 
            className="leading-[0.9] max-w-3xl"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "clamp(42px, 6vw, 72px)", 
              fontWeight: 300, 
              color: "#F5F0E8" 
            }}
          >
            We'd Love to{' '}
            <span style={{ 
              background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text" 
            }}>
              Hear From You
            </span>
          </h1>
          
          <p className="text-[13px] leading-[1.85] max-w-md" style={{ color: "rgba(245,240,232,0.45)" }}>
            Whether you have a question about our fleet, need help with a booking, 
            or just want to say hello — our team is always ready to help.
          </p>
        </motion.div>

        {/* ── Contact Info Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ color: "#C9A84C" }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(245,240,232,0.3)" }}>
                    {info.label}
                  </p>
                  <p className="text-[15px] font-medium mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                    {info.value}
                  </p>
                  <p className="text-[10px]" style={{ color: "rgba(245,240,232,0.3)" }}>
                    {info.sub}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: "1px solid rgba(201,168,76,0.28)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Form + Sidebar ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 p-8"
            style={{
              background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
              border: "1px solid rgba(201,168,76,0.14)",
            }}
          >
            <h2 className="text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
              Send Us a Message
            </h2>
            <p className="text-[11px] tracking-[0.2em] uppercase mb-7" style={{ color: "rgba(245,240,232,0.3)" }}>
              We reply within 2 hours
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-5 py-12"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.1)" }}>
                  <svg className="w-8 h-8" style={{ color: "#C9A84C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                  Message Sent
                </h3>
                <p className="text-sm max-w-xs" style={{ color: "rgba(245,240,232,0.45)" }}>
                  Thanks for reaching out. Our team will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-4 px-8 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Marcus"
                      required
                      className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all"
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#F5F0E8",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Laurent"
                      required
                      className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all"
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#F5F0E8",
                      }}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marcus@email.com"
                      required
                      className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all"
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#F5F0E8",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all"
                      style={{
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#F5F0E8",
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all appearance-none"
                    style={{
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: formData.subject ? "#F5F0E8" : "rgba(245,240,232,0.3)",
                    }}
                  >
                    <option value="" disabled className="bg-[#111]">Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-[#111]" style={{ color: "#F5F0E8" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-[13px] bg-transparent focus:outline-none transition-all resize-none"
                    style={{
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#F5F0E8",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 text-[9px] font-bold tracking-[0.25em] uppercase transition-all flex items-center justify-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  <IconSend />
                  Send Message
                </button>

                <p className="text-[9px] text-center" style={{ color: "rgba(245,240,232,0.25)" }}>
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-80 flex-shrink-0 flex flex-col gap-6"
          >
            {/* Office Locations */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3 className="text-sm mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                Our Offices
              </h3>
              <div className="flex flex-col gap-5">
                {offices.map((office, i) => (
                  <div key={office.city} className="flex flex-col gap-2 pb-4" style={{ borderBottom: i < offices.length - 1 ? "1px solid rgba(201,168,76,0.12)" : "none" }}>
                    <p className="text-sm font-medium" style={{ color: "#C9A84C" }}>
                      {office.city}
                    </p>
                    <p className="text-[11px]" style={{ color: "rgba(245,240,232,0.45)" }}>
                      {office.address}
                    </p>
                    <p className="text-[11px]" style={{ color: "rgba(245,240,232,0.3)" }}>
                      {office.phone}
                    </p>
                    <button className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider mt-1 hover:underline w-fit" style={{ color: "#C9A84C" }}>
                      Get Directions <IconChevron />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3 className="text-sm mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                Follow Us
              </h3>
              <p className="text-[11px] mb-5" style={{ color: "rgba(245,240,232,0.45)" }}>
                Stay connected for the latest updates and exclusive offers.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <IconFacebook />, label: "Facebook" },
                  { icon: <IconInstagram />, label: "Instagram" },
                  { icon: <IconTwitter />, label: "Twitter" },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "rgba(245,240,232,0.45)",
                    }}
                    whileHover={{
                      borderColor: "#C9A84C",
                      color: "#C9A84C",
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Chat CTA */}
            <div
              className="p-6 relative overflow-hidden group"
              style={{
                background: "linear-gradient(160deg, #0A0A0A, #000000)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#4CAF50" }} />
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#4CAF50" }}>
                    Online Now
                  </span>
                </div>
                <h3 className="text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                  Prefer to Chat Live?
                </h3>
                <p className="text-[11px]" style={{ color: "rgba(245,240,232,0.45)" }}>
                  Our agents are online and ready to assist you right now.
                </p>
                <button
                  className="w-full py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all mt-2"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  Start Live Chat
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 relative overflow-hidden h-80"
          style={{
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <img
            src="/dubai3.jpg"
            alt="Map location"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
          
          {/* Location card */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 p-4"
            style={{
              background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
              border: "1px solid rgba(201,168,76,0.14)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center" style={{ color: "#C9A84C" }}>
                <IconLocation />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F0E8" }}>
                  Dream Drive Headquarters
                </p>
                <p className="text-[10px] mt-1" style={{ color: "rgba(245,240,232,0.45)" }}>
                  Dubai Marina, Executive Tower<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
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
              Skip the wait and book your luxury vehicle directly from our fleet page.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              Browse Fleet <IconArrow />
            </button>
            <button
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
              }}
            >
              View FAQs
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}