// "use client";

// import { motion } from "framer-motion";

// // ─── DATA ────────────────────────────────────────────────
// const footerLinks = {
//   "Quick Links": ["Home", "Explore", "Bookings", "Services", "Customers", "Blog", "Contact"],
//   Contact: ["support@elitedrive.com", "+971 50 123-4567", "Mon - Fri, 9am to 6pm"],
//   "Our Services": ["Luxury Rentals", "Long Term Hire", "Airport Transfers", "Corporate Plans", "Highland Reserve"],
// };

// // ─── ICONS ───────────────────────────────────────────────
// const IconFacebook = () => (
//   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//   </svg>
// );
// const IconInstagram = () => (
//   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <circle cx="12" cy="12" r="4" />
//     <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
//   </svg>
// );
// const IconX = () => (
//   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );
// const IconYoutube = () => (
//   <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// );

// // ─── Gold Ornament ────────────────────────────────────────
// const GoldDivider = () => (
//   <div className="flex items-center gap-3 w-full">
//     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
//     <div className="flex items-center gap-1.5">
//       <div className="w-1 h-1 rotate-45 bg-[#C9A84C]/60" />
//       <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
//       <div className="w-1 h-1 rotate-45 bg-[#C9A84C]/60" />
//     </div>
//     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
//   </div>
// );

// // ─── FOOTER ──────────────────────────────────────────────
// export default function FooterLuxury() {
//   return (
//     <footer className="w-full  text-[#F5F0E8] relative overflow-hidden" >

//       {/* Background glow accents */}
//       <div
//           className="absolute inset-0 z-[5] pointer-events-none opacity-[0.04]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           }}
//         />

//       {/* ── Newsletter Banner ── */}
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="relative z-10 "
//       >
//         <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
//           {/* Text */}
//           <div className="flex flex-col gap-1.5">
//             <div className="flex items-center gap-2 mb-1">
//               <div className="w-4 h-px bg-[#C9A84C]" />
//               <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
//                 Exclusive Updates
//               </span>
//             </div>
//             <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300, color: "#F5F0E8" }} className="text-lg font-bold text-[#F5F0E8]">Stay Ahead of the Fleet</p>
//             <p className="text-xs text-[#F5F0E8]">Receive curated deals, new arrivals, and VIP offers directly to your inbox.</p>
//           </div>

//           {/* Input */}
//           <div className="flex w-full sm:w-auto gap-2">
//             <div className="relative flex-1 sm:w-64">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="w-full bg-[#111111] border border-[#2a2a2a] focus:border-[#C9A84C]/50  px-5 py-2.5 text-xs text-[#F5F0E8] placeholder-gray-600 focus:outline-none transition"
//               />
//             </div>
//             <button className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#a8863c] hover:from-[#d4b35a] hover:to-[#C9A84C] text-black text-xs font-semibold px-5 py-2.5 transition-all whitespace-nowrap">
//               Subscribe
//               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//               </svg>
//             </button>
//           </div>
//         </div>

//          {/* Bottom rule */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-px"
//         style={{
//           background:
//             "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
//         }}
//       />
//       </motion.div>

//       {/* ── Main Footer Grid ── */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-14 pb-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* ── Brand Column ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="flex flex-col gap-5"
//           >
//             {/* Logo */}
//             <div className="flex flex-col gap-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300, color: "#F5F0E8" }}>
//               <span className="text-xl font-bold tracking-wider">
//                 <span className="text-[#C9A84C]">IFM </span>
//                 <span className="text-[#F5F0E8]">Luxury</span>
//               </span>
//               <div className="w-8 h-0.5 bg-gradient-to-r from-[#C9A84C] to-transparent" />
//             </div>

//             <p className="text-xs text-gray-500 leading-relaxed">
//               IFM Luxury offers an unparalleled luxury car rental experience — curated fleet, seamless booking, and white-glove delivery for the discerning driver.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-2.5 mt-1">
//               {[
//                 { icon: <IconFacebook />, label: "Facebook" },
//                 { icon: <IconInstagram />, label: "Instagram" },
//                 { icon: <IconX />, label: "X" },
//                 { icon: <IconYoutube />, label: "YouTube" },
//               ].map((social) => (
//                 <a
//                   key={social.label}
//                   href="#"
//                   aria-label={social.label}
//                   className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Certification badge */}
//             <div className="flex items-center gap-2.5 mt-1 p-3 rounded-xl border border-[#1e1e1e] bg-[#0f0f0f]">
//               <svg className="w-5 h-5 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//               <div>
//                 <p className="text-[10px] font-semibold text-[#F5F0E8]">Certified Luxury Operator</p>
//                 <p className="text-[9px] text-gray-600 mt-0.5">ISO 9001 · 5-Star Rated</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── Link Columns ── */}
//           {Object.entries(footerLinks).map(([title, links], i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: "easeOut" }}
//               className="flex flex-col gap-5"
//             >
//               {/* Column heading */}
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-xs font-semibold  tracking-wider uppercase" style={{ fontFamily: "'Cormorant Garamond', serif",  color: "#F5F0E8" }}>{title}</h4>
//                 <div className="w-6 h-0.5 bg-gradient-to-r from-[#C9A84C] to-transparent" />
//               </div>

//               <ul className="flex flex-col gap-2.5">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       className="group flex items-center gap-2 text-xs text-gray-500 hover:text-[#C9A84C] transition-colors duration-200"
//                     >
//                       <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 overflow-hidden" />
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//         {/* ── Gold Divider ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="my-10"
//         >
//           <GoldDivider />
//         </motion.div>

//         {/* ── Bottom Bar ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex flex-col sm:flex-row items-center justify-between gap-4"
//         >
//           {/* Copyright */}
//           <p className="text-[10px] text-gray-600">
//             © {new Date().getFullYear()}{" "}
//             <span className="text-[#C9A84C]/70">IFM Luxury</span>
//             . All rights reserved. Crafted with precision.
//           </p>

//           {/* Legal Links */}
//           <div className="flex items-center gap-1">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i, arr) => (
//               <span key={item} className="flex items-center gap-1">
//                 <a
//                   href="#"
//                   className="text-[10px] text-gray-600 hover:text-[#C9A84C] transition-colors"
//                 >
//                   {item}
//                 </a>
//                 {i < arr.length - 1 && (
//                   <span className="text-[#C9A84C]/30 text-xs">·</span>
//                 )}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { motion } from "framer-motion";

// ─── SOCIAL ICONS ────────────────────────────────────────
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// ─── FOOTER DATA ─────────────────────────────────────────
const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Hourly Rental", href: "/services/hourly" },
    { label: "Daily Rental", href: "/services/daily" },
    { label: "Monthly Packages", href: "/services/monthly" },
    { label: "Chauffeur Service", href: "/services/chauffeur" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Booking Guide", href: "/guide" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
  { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/1234567890", label: "WhatsApp" },
];

// ─── MAIN FOOTER ─────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: "#090909" }}>
      
      {/* Noise grain overlay */}
      <div
       className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.22) 20%, rgba(201,168,76,0.22) 80%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20">

        {/* ══ MAIN FOOTER CONTENT ══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">

          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <a href="/" className="flex flex-col gap-1 no-underline w-fit">
              <span
                className="tracking-[0.22em] leading-none font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#C9A84C" }}
              >
                IFM <span className="text-[#C9A84C]">Luxury</span>
              </span>
              <span className="text-[7.5px] tracking-[0.45em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.25)" }}>
                Luxury
              </span>
            </a>

            {/* Description */}
            <p className="text-[12px] leading-relaxed max-w-sm" style={{ color: "rgba(245,240,232,0.35)" }}>
              Experience unparalleled luxury with our curated collection of the world's finest automobiles. Every journey, an occasion.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2.5 no-underline group">
                <span style={{ color: "rgba(201,168,76,0.6)" }}><PhoneIcon /></span>
                <span className="text-[11px] transition-colors duration-300" style={{ color: "rgba(245,240,232,0.4)" }}>
                  +1 (234) 567-890
                </span>
              </a>

              <a href="mailto:info@aurum.com" className="flex items-center gap-2.5 no-underline group">
                <span style={{ color: "rgba(201,168,76,0.6)" }}><MailIcon /></span>
                <span className="text-[11px] transition-colors duration-300" style={{ color: "rgba(245,240,232,0.4)" }}>
                  reserve@aurum.com
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <span style={{ color: "rgba(201,168,76,0.6)" }}><LocationIcon /></span>
                <span className="text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
                  123 Luxury Boulevard<br />Dubai, UAE
                </span>
              </div>
            </div>
          </div>

          {/* ── COMPANY LINKS ── */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A84C" }}>
              Company
            </span>
            <div className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C] w-fit"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── SERVICES LINKS ── */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A84C" }}>
              Services
            </span>
            <div className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C] w-fit"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── SUPPORT LINKS ── */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: "#C9A84C" }}>
              Support
            </span>
            <div className="flex flex-col gap-2.5">
              {footerLinks.support.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11.5px] no-underline transition-colors duration-300 hover:text-[#C9A84C] w-fit"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px mb-8" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* ══ BOTTOM BAR ══ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.25)" }}>
            © {new Date().getFullYear()} IFM Luxury. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "rgba(245,240,232,0.4)",
                }}
                aria-label={social.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)";
                  e.currentTarget.style.color = "#C9A84C";
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                  e.currentTarget.style.color = "rgba(245,240,232,0.4)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-[10px] tracking-[0.2em] uppercase no-underline transition-colors duration-300 hover:text-[#C9A84C]"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Privacy
            </a>
            <span style={{ color: "rgba(245,240,232,0.15)" }}>·</span>
            <a
              href="/terms"
              className="text-[10px] tracking-[0.2em] uppercase no-underline transition-colors duration-300 hover:text-[#C9A84C]"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}