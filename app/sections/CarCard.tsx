// import { useInView,motion } from "framer-motion";
// import { useRef } from "react";

// const IconWhatsApp = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//   </svg>
// );

// const WHATSAPP_NUMBER = "1234567890";

// // ─── ICONS ───────────────────────────────────────────────
// const IconElectric = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" />
//   </svg>
// );

// const IconSeat = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4M5 10l-1 8h16l-1-8M5 10h14" />
//   </svg>
// );

// const IconAC = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" />
//     <circle cx="12" cy="12" r="2.5" />
//   </svg>
// );

// const IconAutomatic = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <circle cx="12" cy="12" r="9" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
//   </svg>
// );

// const IconPetrol = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M5 22V6a2 2 0 012-2h6a2 2 0 012 2v16" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13h10M17 8l2 2v6a1 1 0 01-1 1h-1" />
//   </svg>
// );

// const IconArrow = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// );



// const cars = [
//   {
//     name: "Porsche 911 Carrera",
//     year: "2025",
//     category: "Sports",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
//     specs: [
//       { icon: <IconElectric />, label: "Electric" },
//       { icon: <IconSeat />, label: "2 Seats" },
//       { icon: <IconAC />, label: "Climate" },
//       { icon: <IconAutomatic />, label: "Automatic" },
//     ],
//     whatsappMsg: "Hi, I'm interested in renting the Porsche 911 Carrera 2025. Please share availability.",
//     cta: "Reserve",
//     featured: true,
//     badge: "Most Popular",
//   },
//   {
//     name: "Audi R8 V10",
//     year: "2025",
//     category: "Supercar",
//     image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
//     specs: [
//       { icon: <IconPetrol />, label: "Petrol" },
//       { icon: <IconSeat />, label: "2 Seats" },
//       { icon: <IconAC />, label: "Climate" },
//       { icon: <IconAutomatic />, label: "Automatic" },
//     ],
//     whatsappMsg: "Hi, I'd like to inquire about the Audi R8 V10 2025 rental. Please share rates and availability.",
//     cta: "View Details",
//     featured: false,
//     badge: null,
//   },
//   {
//     name: "Ferrari Portofino M",
//     year: "2025",
//     category: "GT",
//     image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
//     specs: [
//       { icon: <IconPetrol />, label: "Petrol" },
//       { icon: <IconSeat />, label: "2 Seats" },
//       { icon: <IconAC />, label: "Climate" },
//       { icon: <IconAutomatic />, label: "Automatic" },
//     ],
//     whatsappMsg: "Hi, I'm interested in the Ferrari Portofino M 2025. Could you share rental details?",
//     cta: "View Details",
//     featured: false,
//     badge: "New Arrival",
//   },
// ];
//  // ─── CAR CARD ────────────────────────────────────────────
// export function CarCard({ car, index }: { car: (typeof cars)[0]; index: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(car.whatsappMsg)}`;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.75, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
//       className="group relative flex flex-col overflow-hidden"
//       style={{
//         background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
//         border: "1px solid rgba(201,168,76,0.14)",
//       }}
//     >
//       {/* ── BADGE ── */}
//       {car.badge && (
//         <div
//           className="absolute top-3.5 left-3.5 z-20 px-3 py-1 text-[8.5px] font-bold tracking-[0.3em] uppercase"
//           style={{
//             background: car.featured
//               ? "linear-gradient(135deg, #8B7035, #C9A84C)"
//               : "rgba(13,13,13,0.85)",
//             color: car.featured ? "#090909" : "#C9A84C",
//             border: car.featured ? "none" : "1px solid rgba(201,168,76,0.35)",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           {car.badge}
//         </div>
//       )}

//       {/* ── CAR IMAGE ── */}
//       <div className="relative h-52 overflow-hidden" style={{ background: "#0A0A0A" }}>
//         {/* Gradient overlay */}
//         <div
//           className="absolute inset-0 z-10 pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.3) 40%, transparent 100%)",
//           }}
//         />

//         {/* Atmospheric glow */}
//         <div
//           className="absolute inset-0 z-[5] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//           style={{
//             background:
//               "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.1) 0%, transparent 70%)",
//           }}
//         />

//         <motion.img
//           src={car.image}
//           alt={car.name}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.06 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           style={{ filter: "brightness(0.82) saturate(0.9)" }}
//         />

//         {/* Category chip — top right */}
//         <div
//           className="absolute top-3.5 right-3.5 z-20 px-2.5 py-1 text-[8px] tracking-[0.28em] uppercase font-medium"
//           style={{
//             background: "rgba(9,9,9,0.75)",
//             color: "rgba(245,240,232,0.45)",
//             border: "1px solid rgba(201,168,76,0.12)",
//             backdropFilter: "blur(6px)",
//           }}
//         >
//           {car.category}
//         </div>
//       </div>

//       {/* ── CARD BODY ── */}
//       <div className="flex flex-col gap-4 p-5 flex-1">

//         {/* Name + Year */}
//         <div className="flex flex-col gap-1">
//           <h3
//             className="leading-tight tracking-[0.02em]"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "20px",
//               fontWeight: 400,
//               color: "#F5F0E8",
//             }}
//           >
//             {car.name}
//           </h3>
//           <span
//             className="text-[9px] tracking-[0.35em] uppercase font-medium"
//             style={{ color: "#C9A84C" }}
//           >
//             {car.year} Model Year
//           </span>
//         </div>

//         {/* Gold hairline */}
//         <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

//         {/* ── SPEC CHIPS ── */}
//         <div className="flex flex-wrap gap-2">
//           {car.specs.map((spec) => (
//             <span
//               key={spec.label}
//               className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9.5px] tracking-[0.18em] uppercase font-medium transition-colors duration-300"
//               style={{
//                 background: "rgba(255,255,255,0.04)",
//                 border: "1px solid rgba(201,168,76,0.12)",
//                 color: "rgba(245,240,232,0.45)",
//               }}
//             >
//               <span style={{ color: "rgba(201,168,76,0.7)" }}>{spec.icon}</span>
//               {spec.label}
//             </span>
//           ))}

//           {/* ── WHATSAPP CHIP ── */}
//           <motion.a
//             href={waLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9.5px] tracking-[0.18em] uppercase font-semibold no-underline transition-all duration-300 group/wa"
//             style={{
//               background: "rgba(37,211,102,0.08)",
//               border: "1px solid rgba(37,211,102,0.28)",
//               color: "rgba(37,211,102,0.85)",
//             }}
//             aria-label="Chat on WhatsApp"
//             title="Enquire on WhatsApp"
//           >
//             <span
//               className="transition-transform duration-200 group-hover/wa:scale-110"
//               style={{ color: "rgba(37,211,102,0.9)" }}
//             >
//               <IconWhatsApp />
//             </span>
//             WhatsApp
//           </motion.a>
//         </div>

//         {/* Spacer */}
//         <div className="flex-1" />

//         {/* Gold hairline */}
//         <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.12)" }} />

//         {/* ── CTA BUTTON ── */}
//         <motion.a
//           href={car.featured ? "/reserve" : `/fleet/${car.name.toLowerCase().replace(/\s+/g, "-")}`}
//           whileHover={{ x: 2 }}
//           whileTap={{ scale: 0.98 }}
//           transition={{ duration: 0.2 }}
//           className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 w-full py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase no-underline transition-all duration-300 group/btn"
//           style={
//             car.featured
//               ? {
//                   background: "linear-gradient(135deg, #8B7035 0%, #C9A84C 100%)",
//                   color: "#090909",
//                 }
//               : {
//                   background: "transparent",
//                   border: "1px solid rgba(201,168,76,0.3)",
//                   color: "#C9A84C",
//                 }
//           }
//         >
//           {/* Shimmer on hover (featured only) */}
//           {car.featured && (
//             <span
//               className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//               style={{
//                 background:
//                   "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
//                 backgroundSize: "200% 100%",
//               }}
//             />
//           )}
//           <span className="relative z-10">{car.cta}</span>
//           <span
//             className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-200"
//             style={{ color: car.featured ? "#090909" : "#C9A84C" }}
//           >
//             <IconArrow />
//           </span>
//         </motion.a>
//       </div>

//       {/* Hover border glow */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//         style={{ border: "1px solid rgba(201,168,76,0.28)" }}
//       />
//     </motion.div>
//   );
// }
