"use client";

import { IconSend } from "../Icons";

interface FormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  subjects: string[];
}

export default function FormComponent({
  formData,
  handleChange,
  handleSubmit,
  isPending,
  subjects,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
            First Name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
            Last Name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8] focus:outline-none"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8] focus:outline-none"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8] focus:outline-none"
        />
      </div>

      {/* Subject */}
      <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8]"
      >
        <option value="">Select a subject</option>
        {subjects.map((s) => (
          <option key={s} value={s} className="bg-[#111]">
            {s}
          </option>
        ))}
      </select>

      {/* Message */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
        className="w-full px-4 py-3 bg-transparent border border-[#C9A84C]/20 text-[#F5F0E8] resize-none"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 text-[9px] font-bold tracking-[0.25em] uppercase flex items-center justify-center gap-3"
        style={{
          background: "linear-gradient(135deg, #8B7035, #C9A84C)",
          color: "#090909",
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? "Sending..." : (
          <>
            <IconSend />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
