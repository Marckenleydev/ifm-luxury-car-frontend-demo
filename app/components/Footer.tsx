

"use client";


import { FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon, TwitterIcon, WhatsAppIcon } from "../Icons";
import { footerLinks } from "../data";



// ─── FOOTER DATA ─────────────────────────────────────────


const socialLinks = [
  { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
  { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/+971 50 123 4567", label: "WhatsApp" },
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
                  +971 55 999 0003
                </span>
              </a>

              <a href="mailto:ifmluxurycarrental@gmail.com" className="flex items-center gap-2.5 no-underline group">
                <span style={{ color: "rgba(201,168,76,0.6)" }}><MailIcon /></span>
                <span className="text-[11px] transition-colors duration-300" style={{ color: "rgba(245,240,232,0.4)" }}>
                  ifmluxurycarrental@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <span style={{ color: "rgba(201,168,76,0.6)" }}><LocationIcon /></span>
                <span className="text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
                  Deira - Riggat Al Buteen - 4th St - Deira Suites Business Tower - 2nd Floor - Office No: 205 {"\u00A0"}<br />Dubai, UAE
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