 "use client";

// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import Footer from "@/app/components/Footer";
// import Image from "next/image";
// import { useCar } from "@/app/hook/useCar";

// // ─── DATA ────────────────────────────────────────────────
// const car = {
//   name: "Porsche 911 Carrera S",
//   year: "2025",
//   category: "Sports Coupe",
//   price: 850,
//   rating: 4.9,
//   reviews: 128,
//   tagline: "Born on the Track. Built for the Road.",
  
//   images: [
//     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
//     "https://images.unsplash.com/photo-1611821064430-077a0d96e8f1?auto=format&fit=crop&w=1200&q=85",
//     "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
//     "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1200&q=85",
//   ],

//   description: "The Porsche 911 Carrera S represents the perfect synthesis of everyday usability and uncompromising track performance. With its twin-turbocharged flat-six engine delivering 443 horsepower, this icon of automotive engineering accelerates from 0-60 mph in just 3.5 seconds.",

//   specs: [
//     { label: "Horsepower", value: "443 HP" },
//     { label: "0 – 60 mph", value: "3.5s" },
//     { label: "Top Speed", value: "191 mph" },
//     { label: "Engine", value: "3.0L Twin-Turbo" },
//     { label: "Transmission", value: "8-Speed PDK" },
//     { label: "Drivetrain", value: "Rear-Wheel" },
//     { label: "Fuel Type", value: "Petrol" },
//     { label: "Year", value: "2025" },
//   ],

//   features: [
//     "Sport Chrono Package",
//     "Adaptive Cruise Control",
//     "Premium Bose Sound",
//     "Heated Seats",
//     "Carbon Fiber Interior",
//     "Night Vision Assist",
//     "Ambient Lighting",
//     "Panoramic Sunroof",
//   ],

//   included: [
//     "Comprehensive Insurance",
//     "24/7 Roadside Assistance",
//     "Unlimited Mileage",
//     "Airport Delivery",
//     "Professional Detailing",
//   ],
// };

// const relatedCars = [
//   {
//     name: "Audi R8 V10",
//     price: "$780",
//     category: "Sports",
//     image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Ferrari SF90",
//     price: "$1,200",
//     category: "Supercar",
//     image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Lamborghini Huracán",
//     price: "$950",
//     category: "Sports",
//     image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// const tabs = ["Overview", "Specifications", "Features"];

// // ─── ICONS ───────────────────────────────────────────────
// const StarIcon = ({ filled = true }: { filled?: boolean }) => (
//   <svg width="11" height="11" viewBox="0 0 20 20" fill={filled ? "#C9A84C" : "none"} stroke={filled ? "none" : "rgba(201,168,76,0.3)"} strokeWidth={1}>
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth={2.5}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   </svg>
// );

// const LocationIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// const ShieldIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//   </svg>
// );

// // ─── MAIN PAGE ───────────────────────────────────────────
// export default function SingleCarPage() {
//   const [activeImg, setActiveImg] = useState(0);
//   const [activeTab, setActiveTab] = useState("Overview");
//   const [days, setDays] = useState(1);
  
//   const contentRef = useRef(null);
//   const inView = useInView(contentRef, { once: true, margin: "-60px" });

//   const total = car.price * days;
//    const {
//       data: carData,
//       isLoading,
//       error
//     } = useCar("cmljh1am10001y2s10wqhff1f");

//     console.log(carData);

//   return (
//     <div className="w-full min-h-screen relative " >
      
//        <div
//           className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           opacity: 0.035,
//         }} />

//       {/* ══ BREADCRUMB ══ */}
//       <div className="border-b px-6 md:px-12 lg:px-20 py-4" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
//         <div className="max-w-[1320px] mx-auto flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
//           <a href="/" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Home</a>
//           <span>›</span>
//           <a href="/fleet" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Fleet</a>
//           <span>›</span>
//           <span style={{ color: "#C9A84C" }}>{car.name}</span>
//         </div>
//       </div>

//       {/* ══ MAIN CONTENT ══ */}
//       <section className="px-6 md:px-12 lg:px-20 py-16">
//         <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-12">

//           {/* ── LEFT: IMAGES + TABS ── */}
//           <div className="flex-1 flex flex-col gap-8">

//             {/* Back button */}
//             <a href="/fleet" className="flex items-center gap-2 w-fit no-underline group">
//               <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:-translate-x-1 transition-transform duration-200" style={{ color: "#C9A84C" }}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//               <span className="text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Back to Fleet</span>
//             </a>

//             {/* Main image */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="relative h-80 overflow-hidden"
//               style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={activeImg}
//                   src={car.images[activeImg]}
//                   alt={car.name}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="w-full h-full object-cover"
//                   style={{ filter: "brightness(0.8)" }}
//                 />
//               </AnimatePresence>

//               {/* Category badge */}
//               <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[8.5px] tracking-[0.28em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>
//                 {car.category}
//               </span>

//               {/* Image navigation arrows */}
//               <button
//                 onClick={() => setActiveImg(i => (i - 1 + car.images.length) % car.images.length)}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
//                 style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
              
//               <button
//                 onClick={() => setActiveImg(i => (i + 1) % car.images.length)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
//                 style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </motion.div>

//             {/* Thumbnails */}
//             <div className="flex gap-3">
//               {car.images.map((img, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImg(i)}
//                   className="flex-1 aspect-video overflow-hidden transition-all duration-300"
//                   style={{ border: i === activeImg ? "2px solid #C9A84C" : "1px solid rgba(201,168,76,0.2)" }}
//                 >
//                   <img src={img} alt="" className="w-full h-full object-cover" style={{ filter: i === activeImg ? "brightness(1)" : "brightness(0.5)" }} />
//                 </button>
//               ))}
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-1 border-b pb-0" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className="text-[10px] font-semibold pb-3 px-3 border-b-2 transition-all tracking-[0.25em] uppercase"
//                   style={{
//                     borderColor: activeTab === tab ? "#C9A84C" : "transparent",
//                     color: activeTab === tab ? "#C9A84C" : "rgba(245,240,232,0.3)",
//                   }}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Tab content */}
//             <AnimatePresence mode="wait">
//               {activeTab === "Overview" && (
//                 <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
//                   <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
//                     {car.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {car.included.map((item) => (
//                       <div key={item} className="flex items-center gap-2 px-3 py-2 text-[11px]" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(245,240,232,0.55)" }}>
//                         <CheckIcon />
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {activeTab === "Specifications" && (
//                 <motion.div key="specs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-2 gap-4">
//                   {car.specs.map((s) => (
//                     <div key={s.label} className="p-4 flex flex-col gap-1" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
//                       <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>{s.label}</span>
//                       <span className="text-[15px] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>{s.value}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}

//               {activeTab === "Features" && (
//                 <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {car.features.map((f) => (
//                     <div key={f} className="flex items-center gap-2.5 px-4 py-3" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
//                       <CheckIcon />
//                       <span className="text-[11.5px]" style={{ color: "rgba(245,240,232,0.55)" }}>{f}</span>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* ── RIGHT: BOOKING CARD ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//             className="lg:w-[360px] flex-shrink-0"
//           >
//             <div className="p-6 flex flex-col gap-5 sticky top-8" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}>

//               {/* Name + rating */}
//               <div className="flex flex-col gap-3">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[8.5px] font-semibold tracking-[0.35em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
//                     {car.category}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.floor(car.rating)} />)}
//                     <span className="text-[10px] ml-1" style={{ color: "rgba(245,240,232,0.3)" }}>({car.reviews})</span>
//                   </div>
//                 </div>
//                 <h1 className="leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "#F5F0E8" }}>
//                   {car.name}
//                 </h1>
//               </div>

//               {/* Price */}
//               <div className="flex items-baseline gap-2">
//                 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
//                   ${car.price}
//                 </span>
//                 <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>/day</span>
//               </div>

//               <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

//               {/* Pickup date */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Pickup Date</label>
//                 <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
//                   <span style={{ color: "rgba(201,168,76,0.6)" }}><CalendarIcon /></span>
//                   <input type="date" className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }} />
//                 </div>
//               </div>

//               {/* Return date */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Return Date</label>
//                 <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
//                   <span style={{ color: "rgba(201,168,76,0.6)" }}><CalendarIcon /></span>
//                   <input type="date" className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }} />
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Pickup Location</label>
//                 <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
//                   <span style={{ color: "rgba(201,168,76,0.6)" }}><LocationIcon /></span>
//                   <select className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }}>
//                     <option>Downtown Office</option>
//                     <option>Airport Terminal</option>
//                     <option>North Branch</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Duration */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Rental Duration</label>
//                 <div className="flex items-center gap-3 px-3 py-2" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
//                   <button onClick={() => setDays(d => Math.max(1, d - 1))} className="w-7 h-7 flex items-center justify-center text-[14px] transition-colors" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>−</button>
//                   <span className="text-[12px] font-semibold flex-1 text-center" style={{ color: "#F5F0E8" }}>{days} {days === 1 ? "Day" : "Days"}</span>
//                   <button onClick={() => setDays(d => d + 1)} className="w-7 h-7 flex items-center justify-center text-[14px] transition-colors" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>+</button>
//                 </div>
//               </div>

//               <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

//               {/* Summary */}
//               <div className="flex flex-col gap-2">
//                 <div className="flex justify-between text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
//                   <span>${car.price} × {days} {days === 1 ? "day" : "days"}</span>
//                   <span>${total}</span>
//                 </div>
//                 <div className="flex justify-between text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
//                   <span>Insurance</span>
//                   <span>Included</span>
//                 </div>
//                 <div className="flex justify-between text-[13px] font-bold mt-1" style={{ color: "#C9A84C" }}>
//                   <span>Total</span>
//                   <span>${total}</span>
//                 </div>
//               </div>

//               {/* Book button */}
//               <button className="w-full py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>
//                 Reserve Now
//               </button>
//                  <a
//               href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi, I'd like to reserve the ${car.name} ${car.year}`)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden md:inline-flex items-center justify-center gap-2.5 px-6 py-3 no-underline transition-all duration-300 hover:bg-[rgba(37,211,102,0.15)]"
//               style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "rgba(37,211,102,0.9)" }}
//             >
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//               </svg>
//               <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase">WhatsApp</span>
//             </a>

//               {/* Trust badge */}
//               <div className="flex items-center justify-center gap-2 text-[9px]" style={{ color: "rgba(245,240,232,0.35)" }}>
//                 <ShieldIcon />
//                 <span>Free Cancellation · Insurance Included</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ══ RELATED CARS ══ */}
//       <section ref={contentRef} className="border-t px-6 md:px-12 lg:px-20 py-16" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
//         <div className="max-w-[1320px] mx-auto">
          
//           <div className="flex items-end justify-between mb-10">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
//               <span className="text-[9px] tracking-[0.4em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Similar Vehicles</span>
//               <h2 className="mt-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "#F5F0E8" }}>
//                 You Might Also Like
//               </h2>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {relatedCars.map((rc, i) => (
//               <motion.div
//                 key={rc.name}
//                 initial={{ opacity: 0, y: 24 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className="overflow-hidden group"
//                 style={{ background: "#111", border: "1px solid rgba(201,168,76,0.13)" }}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img src={rc.image} alt={rc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ filter: "brightness(0.75)" }} />
//                   <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold tracking-[0.2em]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>{rc.price}</span>
//                   <span className="absolute top-3 left-3 px-2.5 py-1 text-[8px] tracking-[0.25em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>{rc.category}</span>
//                 </div>
                
//                 <div className="p-4 flex flex-col gap-3">
//                   <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "#F5F0E8" }}>{rc.name}</h3>
//                   <div className="h-px" style={{ background: "rgba(201,168,76,0.1)" }} />
//                   <div className="flex gap-2">
//                     <a href={`/car/${rc.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1 text-center text-[9.5px] font-semibold tracking-[0.25em] uppercase py-2.5 transition-all no-underline" style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
//                       View
//                     </a>
//                     <a href="/reserve" className="flex-1 text-center text-[9.5px] font-bold tracking-[0.25em] uppercase py-2.5 transition-all hover:bg-[#E8C97A] no-underline" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>
//                       Book
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
      
      

//       <style jsx global>{`
//         input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
//         select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A84C' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; }
//       `}</style>
      
//     </div>
//   );
// }



import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { useCar, useCars } from "@/app/hook/useCar";
import { useParams } from "next/navigation";

// ─── ICONS ───────────────────────────────────────────────
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 20 20" fill={filled ? "#C9A84C" : "none"} stroke={filled ? "none" : "rgba(201,168,76,0.3)"} strokeWidth={1}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── HELPER FUNCTIONS ───────────────────────────────────
const getFuelLabel = (fuelType: string) => {
  switch(fuelType) {
    case 'PETROL': return 'Petrol';
    case 'DIESEL': return 'Diesel';
    case 'ELECTRIC': return 'Electric';
    case 'HYBRID': return 'Hybrid';
    case 'PLUGIN_HYBRID': return 'Plug-in';
    default: return fuelType;
  }
};

const getTransmissionLabel = (transmission: string) => {
  switch(transmission) {
    case 'AUTOMATIC': return 'Automatic';
    case 'MANUAL': return 'Manual';
    case 'SEMI_AUTOMATIC': return 'Semi-Auto';
    case 'CVT': return 'CVT';
    default: return transmission;
  }
};

// ─── MAIN PAGE ───────────────────────────────────────────
export default function SingleCarPage() {
  const params = useParams();
  const carId = params.id as string;
  
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("Overview");
  const [days, setDays] = useState(1);
  
  const contentRef = useRef(null);
  const inView = useInView(contentRef, { once: true, margin: "-60px" });

  const {
    data: carData,
    isLoading,
    error
  } = useCar(carId);
 const {
    data: carsData,
    isLoading: isLoadingCars,
    error: errorCars
  } = useCars();

  const car = carData;
  const cars = carsData;
  console.log('cars', cars);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Error state
  if (error || !car) {
    return (
      <div className="w-full min-h-screen bg-[#090909] flex items-center justify-center">
        <div className="text-red-400">Failed to load car details. Please try again.</div>
      </div>
    );
  }

  const total = car.pricePerDay * days;
  const specs = [
    { label: "Transmission", value: getTransmissionLabel(car.transmission) },
    { label: "Fuel Type", value: getFuelLabel(car.fuelType) },
    { label: "Seats", value: `${car.seats} Seats` },
    { label: "Year", value: car.year.toString() },
    { label: "Color", value: car.color },
    { label: "Plate", value: car.plateNumber },
  ];

  const features = [
    "Climate Control",
    "Bluetooth Connectivity",
    "GPS Navigation",
    "Apple CarPlay",
    "Android Auto",
    "Cruise Control",
    "Parking Sensors",
    "Keyless Entry",
  ];

  const included = [
    "Comprehensive Insurance",
    "24/7 Roadside Assistance",
    "Unlimited Mileage",
    "Airport Delivery",
    "Professional Detailing",
  ];

  const relatedCars = []; // You can fetch related cars later

  return (
    <div className="w-full min-h-screen relative bg-[#090909]">
      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      {/* ══ BREADCRUMB ══ */}
      <div className="border-b px-6 md:px-12 lg:px-20 py-4" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
        <div className="max-w-[1320px] mx-auto flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
          <a href="/" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Home</a>
          <span>›</span>
          <a href="/fleet" className="hover:text-[#C9A84C] transition no-underline" style={{ color: "rgba(245,240,232,0.3)" }}>Fleet</a>
          <span>›</span>
          <span style={{ color: "#C9A84C" }}>{car.brand} {car.model}</span>
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-12">

          {/* ── LEFT: IMAGES + TABS ── */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Back button */}
            <a href="/fleet" className="flex items-center gap-2 w-fit no-underline group">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:-translate-x-1 transition-transform duration-200" style={{ color: "#C9A84C" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Back to Fleet</span>
            </a>

            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-80 overflow-hidden"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={car.images[activeImg]}
                  alt={`${car.brand} ${car.model}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.9)" }}
                />
              </AnimatePresence>

              {/* Category badge - using transmission */}
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[8.5px] tracking-[0.28em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>
                {getTransmissionLabel(car.transmission)}
              </span>

              {/* Availability badge */}
              {car.status === 'AVAILABLE' && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 text-[8.5px] tracking-[0.28em] uppercase font-medium" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}>
                  Available Now
                </span>
              )}

              {/* Image navigation arrows */}
              <button
                onClick={() => setActiveImg(i => (i - 1 + car.images.length) % car.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
                style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setActiveImg(i => (i + 1) % car.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all"
                style={{ background: "rgba(9,9,9,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", backdropFilter: "blur(8px)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {car.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="flex-1 aspect-video overflow-hidden transition-all duration-300"
                  style={{ border: i === activeImg ? "2px solid #C9A84C" : "1px solid rgba(201,168,76,0.2)" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" style={{ filter: i === activeImg ? "brightness(1)" : "brightness(0.5)" }} />
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-1 border-b pb-0" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
              {["Overview", "Specifications", "Features"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="text-[10px] font-semibold pb-3 px-3 border-b-2 transition-all tracking-[0.25em] uppercase"
                  style={{
                    borderColor: activeTab === tab ? "#C9A84C" : "transparent",
                    color: activeTab === tab ? "#C9A84C" : "rgba(245,240,232,0.3)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "Overview" && (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                    Experience the {car.brand} {car.model} — a masterpiece of automotive engineering. 
                    This {car.year} model features a powerful engine, luxurious interior, and cutting-edge technology.
                    Perfect for business trips, special occasions, or weekend getaways.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {included.map((item) => (
                      <div key={item} className="flex items-center gap-2 px-3 py-2 text-[11px]" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", color: "rgba(245,240,232,0.55)" }}>
                        <CheckIcon />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "Specifications" && (
                <motion.div key="specs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-2 gap-4">
                  {specs.map((s) => (
                    <div key={s.label} className="p-4 flex flex-col gap-1" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>{s.label}</span>
                      <span className="text-[15px] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C" }}>{s.value}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "Features" && (
                <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 px-4 py-3" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <CheckIcon />
                      <span className="text-[11.5px]" style={{ color: "rgba(245,240,232,0.55)" }}>{f}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT: BOOKING CARD ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:w-[360px] flex-shrink-0"
          >
            <div className="p-6 flex flex-col gap-5 sticky top-8" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}>

              {/* Name + rating */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8.5px] font-semibold tracking-[0.35em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
                    {getTransmissionLabel(car.transmission)}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < 4} />)}
                    <span className="text-[10px] ml-1" style={{ color: "rgba(245,240,232,0.3)" }}>(128)</span>
                  </div>
                </div>
                <h1 className="leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "#F5F0E8" }}>
                  {car.brand} {car.model}
                </h1>
                <p className="text-[10px]" style={{ color: "rgba(245,240,232,0.3)" }}>{car.year} · {car.color}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
                  ${car.pricePerDay}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>/day</span>
              </div>

              <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

              {/* Pickup date */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Pickup Date</label>
                <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
                  <span style={{ color: "rgba(201,168,76,0.6)" }}><CalendarIcon /></span>
                  <input type="date" className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }} />
                </div>
              </div>

              {/* Return date */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Return Date</label>
                <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
                  <span style={{ color: "rgba(201,168,76,0.6)" }}><CalendarIcon /></span>
                  <input type="date" className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }} />
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Pickup Location</label>
                <div className="flex items-center gap-2 px-3 py-2.5" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
                  <span style={{ color: "rgba(201,168,76,0.6)" }}><LocationIcon /></span>
                  <select className="text-[11px] bg-transparent focus:outline-none w-full" style={{ color: "rgba(245,240,232,0.6)" }}>
                    <option>Downtown Office</option>
                    <option>Airport Terminal</option>
                    <option>North Branch</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>Rental Duration</label>
                <div className="flex items-center gap-3 px-3 py-2" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(9,9,9,0.5)" }}>
                  <button onClick={() => setDays(d => Math.max(1, d - 1))} className="w-7 h-7 flex items-center justify-center text-[14px] transition-colors" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>−</button>
                  <span className="text-[12px] font-semibold flex-1 text-center" style={{ color: "#F5F0E8" }}>{days} {days === 1 ? "Day" : "Days"}</span>
                  <button onClick={() => setDays(d => d + 1)} className="w-7 h-7 flex items-center justify-center text-[14px] transition-colors" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>+</button>
                </div>
              </div>

              <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

              {/* Summary */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
                  <span>${car.pricePerDay} × {days} {days === 1 ? "day" : "days"}</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between text-[11px]" style={{ color: "rgba(245,240,232,0.4)" }}>
                  <span>Insurance</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between text-[13px] font-bold mt-1" style={{ color: "#C9A84C" }}>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Book button */}
              <button className="w-full py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>
                Reserve Now
              </button>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/+971559990003?text=${encodeURIComponent(`Hi, I'd like to reserve the ${car.brand} ${car.model} ${car.year}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3 no-underline transition-all duration-300 hover:bg-[rgba(37,211,102,0.15)] w-full"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "rgba(37,211,102,0.9)" }}
              >
                <IconWhatsApp />
                <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase">WhatsApp</span>
              </a>

              {/* Trust badge */}
              <div className="flex items-center justify-center gap-2 text-[9px]" style={{ color: "rgba(245,240,232,0.35)" }}>
                <ShieldIcon />
                <span>Free Cancellation · Insurance Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ RELATED CARS ══ */}
     <section ref={contentRef} className="border-t px-6 md:px-12 lg:px-20 py-16" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
  <div className="max-w-[1320px] mx-auto">
    
    <div className="flex items-end justify-between mb-10">
      <motion.div >
        <span className="text-[9px] tracking-[0.4em] uppercase font-semibold" style={{ color: "#C9A84C" }}>Similar Vehicles</span>
        <h2 className="mt-2 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300, color: "#F5F0E8" }}>
          You Might Also Like
        </h2>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cars?.filter(c => c.id !== car.id) // Exclude current car
        .slice(0, 3) // Take only first 3
        .map((rc, i) => {
          // Get first image or fallback
          const imageUrl = rc.images?.[0] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80";
          
          return (
            <motion.div
              key={rc.id}
             
              className="overflow-hidden group"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.13)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={`${rc.brand} ${rc.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  style={{ filter: "brightness(0.75)" }} 
                />
                <span className="absolute top-3 right-3 px-3 py-1 text-[10px] font-bold tracking-[0.2em]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}>
                  AED {rc.pricePerDay}/day
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[8px] tracking-[0.25em] uppercase font-medium" style={{ background: "rgba(9,9,9,0.85)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(8px)" }}>
                  {rc.transmission}
                </span>
              </div>
              
              <div className="p-4 flex flex-col gap-3">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "#F5F0E8" }}>
                  {rc.brand} {rc.model}
                </h3>
                <div className="flex items-center justify-between text-[10px]" style={{ color: "rgba(245,240,232,0.3)" }}>
                  <span>{rc.year} · {rc.color}</span>
                  <span>{rc.seats} Seats</span>
                </div>
                <div className="h-px" style={{ background: "rgba(201,168,76,0.1)" }} />
                <div className="flex gap-2">
                  <a 
                    href={`/cars/${rc.id}`} 
                    className="flex-1 text-center text-[9.5px] font-semibold tracking-[0.25em] uppercase py-2.5 transition-all no-underline" 
                    style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                  >
                    View
                  </a>
                  <a 
                    href={`/reserve?car=${rc.id}`} 
                    className="flex-1 text-center text-[9.5px] font-bold tracking-[0.25em] uppercase py-2.5 transition-all hover:bg-[#E8C97A] no-underline" 
                    style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#0a0a0a" }}
                  >
                    Book
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  </div>
</section>
      
      <Footer />

      <style jsx global>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9A84C' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; }
      `}</style>
    </div>
  );
}