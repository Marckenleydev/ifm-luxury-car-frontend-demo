"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Handbag, Menu, X } from "lucide-react";

export default function LuxuryNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const isActive = (path: string) => pathname === path;
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Faq", href: "/faq" },
  ];

  // Mobile menu variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <a href="/" className="text-[18px] font-medium tracking-wider">
          Elite Drive
        </a>

        {/* CENTER FLOATING NAV PILL - DESKTOP */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-6 px-6 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-xl">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] transition-all duration-300 ${
                    active
                      ? "text-white bg-black rounded-full px-4 py-1"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT CTA & MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4">
          <div className="flex gap-4 ">
            <a
             
              href="/login"
              className="px-5 py-2 border border-black/30 rounded-full font-semibold text-black text-[11px] tracking-[0.12em] uppercase hover:bg-black/10 transition-all duration-200"
            >
              Log In
            </a>
            <a
             
              href="/vehicles"
              className="px-5 py-2 bg-black text-white text-[11px]  tracking-[0.12em] uppercase rounded-full hover:bg-black/88 transition-colors duration-200"
            >
              Book now
            </a>
          </div>

          {/* Mobile Menu Button */}
             {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-gray-200 overflow-hidden bg-white"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="px-4 pt-4 pb-6 space-y-4"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <Link 
                  href="/" 
                  className={`block transition-colors text-sm font-medium tracking-wide uppercase py-2 hover:text-primary ${
                    isActive("/") ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <a 
                  href="/shop" 
                  className={`block transition-colors text-sm font-medium tracking-wide uppercase py-2 hover:text-primary ${
                    isActive("/shop") ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vehicles
                </a>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <Link 
                  href="/orders" 
                  className={`block transition-colors text-sm font-medium tracking-wide uppercase py-2 hover:text-primary ${
                    isActive("/orders") ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Bookings
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <Link 
                  href="/about" 
                  className={`block transition-colors text-sm font-medium tracking-wide uppercase py-2 hover:text-primary ${
                    isActive("/about") ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <Link 
                  href="/contact" 
                  className={`block transition-colors text-sm font-medium tracking-wide uppercase py-2 hover:text-primary ${
                    isActive("/contact") ? "text-primary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
                className="pt-4 border-t border-gray-200"
              >
                <Link 
                  href="/register" 
                  className="block w-full text-center px-6 py-3 border border-black/40 rounded-full text-black text-sm font-medium tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}