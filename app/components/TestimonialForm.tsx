"use client";

import { useState } from "react";
import { toast } from "sonner";

interface Props {
  user: any; // pass logged-in user
  onSuccess?: () => void;
  createTestimonial: (data: { rating: number; comment: string }) => void;
  isPending: boolean;
}

// Star Icon Component with outline and fill states
const StarIcon = ({ filled, hover }: { filled: boolean; hover: boolean }) => {
  const fillColor = filled || hover ? "#C9A84C" : "none";
  const strokeColor = filled || hover ? "#C9A84C" : "rgba(201,168,76,0.4)";

  return (
     <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="miter"
      className="transition-all duration-200"
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  );
};

export default function TestimonialForm({
  user,
  onSuccess,
  createTestimonial,
  isPending,
}: Props) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to leave a testimonial.");
      return;
    }

    if (!rating) {
      toast.error("Please select a rating.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Comment cannot be empty.");
      return;
    }

    createTestimonial({ rating, comment });

    toast.success("Testimonial submitted! Pending approval.");

    setRating(0);
    setComment("");
    onSuccess?.();
  };

  return (
    <div className="p-8" style={{ background: "#111", border: "1px solid rgba(201,168,76,0.2)" }}>
      <h3
        className="text-[13px] font-semibold tracking-[0.3em] uppercase mb-6"
        style={{ color: "#C9A84C" }}
      >
        Leave Your Experience
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Rating Stars */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.5)" }}>
            Your Rating
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110 focus:outline-none"
              >
                <StarIcon 
                  filled={star <= rating} 
                  hover={star <= hoveredRating}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="ml-2 text-[11px]" style={{ color: "rgba(245,240,232,0.5)" }}>
                {rating} {rating === 1 ? "star" : "stars"}
              </span>
            )}
          </div>
        </div>

        {/* Comment */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(245,240,232,0.5)" }}>
            Your Review
          </label>
          <textarea
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with our service..."
            className="w-full px-4 py-3 bg-transparent resize-none focus:outline-none text-[12px] transition-all duration-300"
            style={{ 
              border: "1px solid rgba(201,168,76,0.2)", 
              color: "#F5F0E8" 
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: isPending ? "rgba(201,168,76,0.5)" : "linear-gradient(135deg, #8B7035, #C9A84C)",
            color: "#090909",
          }}
        >
          {isPending ? "Submitting..." : "Submit Testimonial"}
        </button>
      </form>

      <style jsx>{`
        textarea::placeholder {
          color: rgba(245, 240, 232, 0.25);
        }
      `}</style>
    </div>
  );
}