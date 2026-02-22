// app/components/BookingCard.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  CheckIcon,
  IconWhatsApp,
  ShieldIcon,
  StarIcon,
} from "@/app/Icons";
import { toast } from "sonner";
import { useCreateBooking } from "../hooks/useBooking";
import { useUser } from "../hooks/useUser";

interface Car {
  _id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  transmission: string;
  fuelType: string;
  seats: number;
  plateNumber: string;
  pricePerDay: number;
  status: string;
}

interface BookingCardProps {
  car: Car;
}

const getTransmissionLabel = (transmission: string) => {
  switch (transmission) {
    case "AUTOMATIC":
      return "Automatic";
    case "MANUAL":
      return "Manual";
    case "SEMI_AUTOMATIC":
      return "Semi-Auto";
    case "CVT":
      return "CVT";
    default:
      return transmission;
  }
};

// Helper to calculate days between two dates
const calculateDaysBetween = (startDate: string, endDate: string): number => {
  if (!startDate || !endDate) return 1;

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Reset time part to compare dates only
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0 ? diffDays : 1;
};

// Get today's date in YYYY-MM-DD format for min attribute
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

// Get tomorrow's date for return date min
const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};

export default function BookingCard({ car }: BookingCardProps) {
  const { createBooking, loading } = useCreateBooking();
  const { user } = useUser();

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [days, setDays] = useState(1);
  const total = car.pricePerDay * days;

  // Update days when dates change
  useEffect(() => {
    if (pickupDate && returnDate) {
      const calculatedDays = calculateDaysBetween(pickupDate, returnDate);
      setDays(calculatedDays);
    }
  }, [pickupDate, returnDate]);

  // Handle pickup date change
  const handlePickupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPickup = e.target.value;
    setPickupDate(newPickup);

    // If return date is before new pickup date, reset return date
    if (returnDate && new Date(returnDate) < new Date(newPickup)) {
      setReturnDate("");
    }
  };

  // Handle reserve button click
 const handleReserve = () => {
  if(!user){
    toast.error('Please login to reserve a car', {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#111',
        border: '1px solid rgba(201,168,76,0.3)',
        color: '#F5F0E8',
      },
    });
    return;
  }

  if (!pickupDate || !returnDate) {
      toast.error('Please select both pickup and return dates', {
     
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#111',
          border: '1px solid rgba(201,168,76,0.3)',
          color: '#F5F0E8',
        },
      });
    return;
  }

  createBooking(
    {
      carId: car._id,
      startDate: pickupDate,
      endDate: returnDate,
    },
    {
      onSuccess: () => {
        toast.success('Booking created successfully!', {
          description: `Reserved ${car.brand} ${car.model} for ${days} days`,
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#111',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#F5F0E8',
          },
        });
      },
      onError: (err: any) => {
        console.log(err?.message)
        toast.error('Booking failed', {
          description: err?.message || 'Something went wrong',
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#111',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#F5F0E8',
          },
        });
      },
    }
  );
};


  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="lg:w-[360px] flex-shrink-0"
    >
      <div
        className="p-6 flex flex-col gap-5 sticky top-8"
        style={{
          background: "#111",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        {/* Name + rating */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span
              className="text-[8.5px] font-semibold tracking-[0.35em] uppercase"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              {getTransmissionLabel(car.transmission)}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < 4} />
              ))}
              <span
                className="text-[10px] ml-1"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                (128)
              </span>
            </div>
          </div>
          <h1
            className="leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
          >
            {car.brand} {car.model}
          </h1>
          <p className="text-[10px]" style={{ color: "rgba(245,240,232,0.3)" }}>
            {car.year} · {car.color}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "36px",
              fontWeight: 300,
              color: "#C9A84C",
              lineHeight: 1,
            }}
          >
            ${car.pricePerDay}
          </span>
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            /day
          </span>
        </div>

        <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* Pickup date */}
        <div className="flex flex-col gap-2">
          <label
            className="text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            Pickup Date <span className="text-[#C9A84C]">*</span>
          </label>
          <div
            className="flex items-center gap-2 px-3 py-2.5"
            style={{
              border: `1px solid ${!pickupDate && returnDate ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
              background: "rgba(9,9,9,0.5)",
            }}
          >
            <span style={{ color: "rgba(201,168,76,0.6)" }}>
              <CalendarIcon />
            </span>
            <input
              type="date"
              value={pickupDate}
              onChange={handlePickupChange}
              min={getTodayDate()}
              className="text-[11px] bg-transparent focus:outline-none w-full"
              style={{
                color: pickupDate ? "#F5F0E8" : "rgba(245,240,232,0.6)",
              }}
            />
          </div>
        </div>

        {/* Return date */}
        <div className="flex flex-col gap-2">
          <label
            className="text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            Return Date <span className="text-[#C9A84C]">*</span>
          </label>
          <div
            className="flex items-center gap-2 px-3 py-2.5"
            style={{
              border: `1px solid ${!returnDate && pickupDate ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
              background: "rgba(9,9,9,0.5)",
            }}
          >
            <span style={{ color: "rgba(201,168,76,0.6)" }}>
              <CalendarIcon />
            </span>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={pickupDate || getTomorrowDate()}
              disabled={!pickupDate}
              className="text-[11px] bg-transparent focus:outline-none w-full disabled:opacity-50"
              style={{
                color: returnDate ? "#F5F0E8" : "rgba(245,240,232,0.6)",
              }}
            />
          </div>
          {!pickupDate && (
            <p className="text-[10px] text-[#C9A84C] mt-1">
              Select pickup date first
            </p>
          )}
        </div>

        {/* Duration - Now read-only as it's calculated from dates */}
        <div className="flex flex-col gap-2">
          <label
            className="text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            Rental Duration
          </label>
          <div
            className="flex items-center gap-3 px-3 py-2"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              background: "rgba(9,9,9,0.5)",
            }}
          >
            <span
              className="text-[12px] font-semibold flex-1 text-center"
              style={{ color: "#F5F0E8" }}
            >
              {pickupDate && returnDate ? days : "-"}{" "}
              {days === 1 ? "Day" : "Days"}
            </span>
          </div>
        </div>

        <div className="h-px" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* Summary - Updates in real-time */}
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-between text-[11px]"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <span>
              ${car.pricePerDay} × {pickupDate && returnDate ? days : "0"}{" "}
              {days === 1 ? "day" : "days"}
            </span>
            <span>${pickupDate && returnDate ? total : "0"}</span>
          </div>
          <div
            className="flex justify-between text-[11px]"
            style={{ color: "rgba(245,240,232,0.4)" }}
          >
            <span>Insurance</span>
            <span>Included</span>
          </div>
          <div
            className="flex justify-between text-[13px] font-bold mt-1"
            style={{ color: "#C9A84C" }}
          >
            <span>Total</span>
            <span>${pickupDate && returnDate ? total : "0"}</span>
          </div>
        </div>

        {/* Book button with validation */}
        <button
          disabled={loading}
          onClick={handleReserve}
          className="w-full py-3 text-[9.5px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background:
              !pickupDate || !returnDate
                ? "rgba(201, 168, 76, 0.2) "
                : "linear-gradient(135deg, #8B7035, #C9A84C)",
            color:
              !pickupDate || !returnDate ? "rgba(245,240,232,0.3)" : "#0a0a0a",
          }}
        >
          Reserve Now
        </button>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/+971559990003?text=${encodeURIComponent(`Hi, I'd like to reserve the ${car.brand} ${car.model} ${car.year}${pickupDate && returnDate ? ` from ${pickupDate} to ${returnDate}` : ""}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-6 py-3 no-underline transition-all duration-300 hover:bg-[rgba(37,211,102,0.15)] w-full"
          style={{
            background: "rgba(37,211,102,0.1)",
            border: "1px solid rgba(37,211,102,0.3)",
            color: "rgba(37,211,102,0.9)",
          }}
        >
          <IconWhatsApp />
          <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase">
            WhatsApp
          </span>
        </a>

        {/* Trust badge */}
        <div
          className="flex items-center justify-center gap-2 text-[9px]"
          style={{ color: "rgba(245,240,232,0.35)" }}
        >
          <ShieldIcon />
          <span>Free Cancellation · Insurance Included</span>
        </div>
      </div>
    </motion.div>
  );
}
