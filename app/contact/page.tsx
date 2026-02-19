"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── ICONS ───────────────────────────────────────────────
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconLocation = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconFacebook = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const IconInstagram = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const IconTwitter = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconChevron = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const IconSend = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────
const contactInfo = [
  {
    icon: <IconPhone />,
    label: "Phone",
    value: "+971 55 123 4567",
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
    value: "123 Luxury Ave, Suite 500",
    sub: "New York, NY 10001",
  },
  {
    icon: <IconClock />,
    label: "Working Hours",
    value: "24/7 Support Available",
    sub: "Always here for you",
  },
];

const offices = [
  { city: "Dubai", address: " Jvc, Dubai", phone: "+971 55 123 4567" },
  { city: "Abu Dhabi", address: "456 Sunset Blvd, Floor 3", phone: "+971 55 123 4568" },
  { city: "Ajman", address: "789 Ocean Drive, Unit 12", phone: "+971 55 123 4569" },
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
    <main className="min-h-screen mt-20">
        <Navbar />

      {/* ── Hero ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We'd Love to<br />Hear From You
            </h1>
            <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
              Whether you have a question about our fleet, need help with a booking, or just want to say hello — our team is always ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="w-full bg-[#f5f5f5] px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                {info.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">{info.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{info.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-10 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 bg-white rounded-2xl shadow-sm p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
            <p className="text-xs text-gray-400 mb-7">Fill in the form below and we'll get back to you within 2 hours.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-4 py-12"
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                <p className="text-sm text-gray-400 max-w-xs">Thanks for reaching out. Our team will get back to you within 2 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-2 bg-black text-white text-xs px-6 py-2.5 rounded-full hover:bg-gray-800 transition"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Marcus"
                      required
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Laurent"
                      required
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-gray-50"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marcus@email.com"
                      required
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-700">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (800) 000-0000"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-gray-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition bg-gray-50 appearance-none"
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={5}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition bg-gray-50 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm font-medium py-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2"
                >
                  <IconSend />
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-72 flex-shrink-0 flex flex-col gap-4"
          >
            {/* Office Locations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5">
              <h3 className="text-sm font-bold text-gray-900">Our Offices</h3>
              {offices.map((office, i) => (
                <div key={office.city} className="flex flex-col gap-1 pb-4 border-b border-gray-100 last:border-none last:pb-0">
                  <p className="text-sm font-semibold text-gray-900">{office.city}</p>
                  <p className="text-xs text-gray-400">{office.address}</p>
                  <p className="text-xs text-gray-400">{office.phone}</p>
                  <button className="flex items-center gap-1 text-xs text-black font-medium mt-1 hover:underline w-fit">
                    Get Directions <IconChevron />
                  </button>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-sm font-bold text-gray-900">Follow Us</h3>
              <p className="text-xs text-gray-400">Stay connected for the latest updates, offers, and luxury car content.</p>
              <div className="flex gap-3">
                {[
                  { icon: <IconFacebook />, label: "Facebook" },
                  { icon: <IconInstagram />, label: "Instagram" },
                  { icon: <IconTwitter />, label: "Twitter" },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:border-black hover:text-white transition"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Chat CTA */}
            <div className="bg-black rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Online Now</span>
              </div>
              <h3 className="text-sm font-bold text-white">Prefer to Chat Live?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Our agents are online and ready to assist you right now.</p>
              <button className="w-full bg-white text-black text-xs font-medium py-2.5 rounded-full hover:bg-gray-100 transition mt-1">
                Start Live Chat
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="w-full px-6 md:px-16 lg:px-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden h-64 md:h-80 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80"
              alt="Map location"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                  <IconLocation />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Dream Drive HQ</p>
                  <p className="text-xs text-gray-400">123 Luxury Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-14">
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
              Skip the wait and book your luxury vehicle directly from our fleet page.
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
              View FAQs
            </button>
          </motion.div>
        </div>
      </section>
<Footer/>
    </main>
  );
}