"use client";


import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useUser } from "../hooks/useUser";



export default function LuxuryNavbar() {
  const { user } = useUser();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// useEffect(() => {
//   if (user) {
//     console.log(user);
//   }
// }, [user]);

 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Fleet", href: "/fleet" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Faq", href: "/faq" },
    ...(user ? [{ label: "My Bookings", href: "/my-bookings" }] : []),
  ];

  // Mobile menu variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    })
  };

  // Menu button variants
  const menuButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90, transition: { duration: 0.3 } }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-2"
        style={{ 
          background: scrolled 
            ? "linear-gradient(to bottom, rgba(9,9,9,0.98), rgba(9,9,9,0.95))" 
            : "linear-gradient(to bottom, rgba(9,9,9,0.97), transparent)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        
        {/* Logo */}
        <a href="/" className="flex flex-col gap-0.5 no-underline group z-50">
          <span
            className="text-[#C9A84C] tracking-[0.42em] flex justify-center items-center gap-2 leading-none font-light group-hover:tracking-[0.48em] transition-all duration-500"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}
          >
           <img src="/ifm_logo.svg" alt="IFM Luxury" className="w-14 h-auto" /> <span className="flex flex-col">IFM Luxury  <span className="text-[7.5px] tracking-[0.45em] text-white/25 uppercase font-medium">
            car rentals
          </span></span>
          </span>
         
        </a>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[9.5px] tracking-[0.28em] uppercase text-white/45 hover:text-[#C9A84C] transition-colors duration-300 no-underline relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Reserve CTA */}
        <div className="hidden md:flex items-center gap-2">

          {user ? (
            <a
              href="/auth"
              className="relative overflow-hidden px-6 py-2.5 bg-transparent text-[#C9A84C] border border-[#C9A84C] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300  hidden md:inline-block"
            >
              <span className="relative z-10">{user.firstName}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
          ) : (
             <a
          href="/auth"
          className="relative overflow-hidden px-6 py-2.5 bg-transparent text-[#C9A84C] border border-[#C9A84C] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300  hidden md:inline-block"
        >
          <span className="relative z-10">Log In</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
          )}

        
        <a
          href="/fleet"
          className="relative overflow-hidden px-6 py-2.5 bg-[#C9A84C] text-[#090909] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300 hover:bg-[#E8C97A] hidden md:inline-block"
        >
          <span className="relative z-10">Reserve Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          style={{ color: "#C9A84C" }}
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={menuButtonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-[88px] left-0 right-0 z-40 md:hidden overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                borderBottom: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {/* Mobile Nav Links */}
                <ul className="flex flex-col gap-4 list-none">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[11px] tracking-[0.3em] uppercase py-2 transition-colors duration-300 no-underline"
                        style={{ 
                          color: pathname === link.href ? "#C9A84C" : "rgba(245,240,232,0.5)",
                          borderBottom: "1px solid rgba(201,168,76,0.1)"
                        }}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Reserve CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex flex-col gap-2"
                >

                  {user ?(
                   <a
          href="/auth"
          className="relative overflow-hidden block w-full text-center px-6 py-4 bg-transparent text-[#C9A84C] border border-[#C9A84C] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300"
        >
          <span className="relative z-10">{user.firstName}</span>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>):(           <a
          href="/auth"
          className="relative overflow-hidden block w-full text-center px-6 py-4 bg-transparent text-[#C9A84C] border border-[#C9A84C] text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300"
        >
          <span className="relative z-10">Log In</span>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </a>)}

        
                  
                  <a
                    href="/fleet"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative overflow-hidden block w-full text-center px-6 py-4 bg-[#C9A84C] text-[#090909] text-[10px] font-bold tracking-[0.3em] uppercase no-underline group transition-all duration-300 hover:bg-[#E8C97A]"
                  >
                    <span className="relative z-10">Reserve Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                  </a>
                </motion.div>

                {/* Mobile Social/Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="flex flex-col gap-3 mt-4"
                >
                  <p className="text-[8px] tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.2)" }}>
                    Contact
                  </p>
                  <a 
                    href="tel:+971551234567"
                    className="text-[11px] no-underline"
                    style={{ color: "rgba(245,240,232,0.7)" }}
                  >
                    +971 55 123 4567
                  </a>
                  <a 
                    href="mailto:info@ifmluxury.com"
                    className="text-[11px] no-underline"
                    style={{ color: "rgba(245,240,232,0.7)" }}
                  >
                    info@ifmluxury.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}