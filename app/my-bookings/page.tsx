"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookings } from "../hooks/useBooking";
import Image from "next/image";
import LuxuryNavbar from "../components/Navbar";
import { IconArrowLeft } from "../Icons";

// ─── ICONS ───────────────────────────────────────────────
const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const IconDollar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconFilter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

// ─── STATUS BADGE ────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const config = {
    PENDING: { bg: "rgba(243,156,18,0.1)", border: "rgba(243,156,18,0.3)", color: "rgba(243,156,18,0.9)" },
    CONFIRMED: { bg: "rgba(52,152,219,0.1)", border: "rgba(52,152,219,0.3)", color: "rgba(52,152,219,0.9)" },
    COMPLETED: { bg: "rgba(39,174,96,0.1)", border: "rgba(39,174,96,0.3)", color: "rgba(39,174,96,0.9)" },
    CANCELLED: { bg: "rgba(231,76,60,0.1)", border: "rgba(231,76,60,0.3)", color: "rgba(231,76,60,0.9)" },
  };

  const style = config[status as keyof typeof config] || config.PENDING;

  return (
    <span
      className="inline-flex px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-semibold"
      style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
    >
      {status}
    </span>
  );
}

// ─── BOOKING CARD ────────────────────────────────────────
function BookingCard({ booking, index }: { booking: any; index: number }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getDays = () => {
    const start = new Date(booking.startDate);
    const end = new Date(booking.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 flex flex-col md:flex-row gap-5 transition-all duration-300"
      style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
      whileHover={{ borderColor: "rgba(201,168,76,0.3)" }}
    >
      {/* Car Image */}
      <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
        <Image
          src={booking.car.images[0]}
          alt={`${booking.car.brand} ${booking.car.model}`}
          width={192}
          height={128}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Booking Details */}
      <div className="flex-1 flex flex-col gap-4">
        
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, color: "#F5F0E8" }}>
              {booking.car.brand} {booking.car.model}
            </h3>
            <div className="flex items-center gap-2">
              <StatusBadge status={booking.status} />
              <span className="flex items-center gap-1 text-[10px]" style={{ color: "rgba(245,240,232,0.4)" }}>
                <IconClock />
                Booked {formatDate(booking.createdAt)}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-right flex flex-col gap-1">
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 400, color: "#C9A84C", lineHeight: 1 }}>
              AED {booking.totalPrice.toLocaleString()}
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
              Total
            </span>
          </div>
        </div>

        {/* Rental Period */}
        <div className="flex flex-wrap items-center gap-6">
          
          {/* Start Date */}
          <div className="flex items-center gap-2">
            <span style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
                Pick-up
              </span>
              <span className="text-[11px] font-medium" style={{ color: "#F5F0E8" }}>
                {formatDate(booking.startDate)}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-8 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />

          {/* End Date */}
          <div className="flex items-center gap-2">
            <span style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconCalendar />
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
                Drop-off
              </span>
              <span className="text-[11px] font-medium" style={{ color: "#F5F0E8" }}>
                {formatDate(booking.endDate)}
              </span>
            </div>
          </div>

          {/* Duration */}
          <div className="px-3 py-1.5" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <span className="text-[10px] font-medium" style={{ color: "#C9A84C" }}>
              {getDays()} {getDays() === 1 ? "Day" : "Days"}
            </span>
          </div>

        </div>

        {/* Pricing Breakdown */}
        <div className="flex items-center gap-4 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <div className="flex items-center gap-2">
            <span style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconDollar />
            </span>
            <span className="text-[11px]" style={{ color: "rgba(245,240,232,0.5)" }}>
              AED {booking.car.pricePerDay}/day × {getDays()} days
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────
export default function MyBookingsPage() {
  const { bookings, loading, error } = useBookings();
  const [filterStatus, setFilterStatus] = useState<string>("ALL");

  // Filter bookings
  const filteredBookings = useMemo(() => {
    if (filterStatus === "ALL") return bookings;
    return bookings.filter(b => b.status === filterStatus);
  }, [bookings, filterStatus]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalSpent = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
    const upcoming = bookings.filter(b => b.status === "CONFIRMED" || b.status === "PENDING").length;
    const completed = bookings.filter(b => b.status === "COMPLETED").length;
    
    return { totalSpent, upcoming, completed, total: bookings.length };
  }, [bookings]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-12 h-12 rounded-full animate-spin" style={{ border: "3px solid rgba(201,168,76,0.2)", borderTopColor: "#C9A84C" }} />
        <span className="text-[11px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.5)" }}>
          Loading bookings...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 justify-center py-20 flex-col">
        <p className="text-[13px]" style={{ color: "#E74C3C" }}>
          {error }
        
         
        </p>
          <span className="text-[13px]" style={{ color: "#E74C3C" }}> Unable to load your bookings. Please try again later</span>
         <motion.a
            href="/"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] font-semibold tracking-[0.3em] uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              background: "transparent",
            }}
          >
            <IconArrowLeft />
            Go Back
          </motion.a>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-6 py-12 md:px-12 lg:px-24" style={{ background: "#090909" }}>
        <LuxuryNavbar/>
      
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />
            <span className="text-[9px] font-semibold tracking-[0.45em] uppercase" style={{ color: "#C9A84C" }}>
              Rental History
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#F5F0E8" }}>
            My Bookings
          </h1>
          <p className="text-[13px]" style={{ color: "rgba(245,240,232,0.4)" }}>
            View and manage your luxury car rental reservations
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Bookings", value: stats.total },
            { label: "Upcoming", value: stats.upcoming },
            { label: "Completed", value: stats.completed },
            { label: "Total Spent", value: `AED ${stats.totalSpent.toLocaleString()}` },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 flex flex-col gap-2"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                {stat.label}
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#C9A84C", lineHeight: 1 }}>
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 overflow-x-auto pb-2"
        >
          <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase flex-shrink-0" style={{ color: "rgba(245,240,232,0.4)" }}>
            <IconFilter />
            Filter:
          </span>
          {["ALL", "CONFIRMED", "PENDING", "COMPLETED", "CANCELLED"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className="px-4 py-2 text-[9px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex-shrink-0"
              style={
                filterStatus === status
                  ? { background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }
                  : { background: "transparent", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(245,240,232,0.5)" }
              }
            >
              {status}
            </button>
          ))}
        </motion.div>

        {/* Bookings List */}
        <div className="flex flex-col gap-5">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, i) => (
              <BookingCard key={booking._id} booking={booking} index={i} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 flex flex-col items-center gap-4 text-center"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <span style={{ color: "rgba(201,168,76,0.3)" }}>
                <IconCalendar />
              </span>
              <div className="flex flex-col gap-2">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, color: "#F5F0E8" }}>
                  No Bookings Found
                </h3>
                <p className="text-[12px]" style={{ color: "rgba(245,240,232,0.35)" }}>
                  {filterStatus === "ALL" 
                    ? "You haven't made any reservations yet. Browse our luxury fleet to start your journey."
                    : `No ${filterStatus.toLowerCase()} bookings at the moment.`
                  }
                </p>
              </div>
              <a
                href="/fleet"
                className="mt-2 px-6 py-3 text-[10px] font-bold tracking-[0.3em] uppercase no-underline transition-all duration-300 hover:bg-[#E8C97A]"
                style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}
              >
                Browse Fleet
              </a>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}