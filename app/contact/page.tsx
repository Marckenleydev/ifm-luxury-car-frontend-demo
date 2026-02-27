"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
  IconLocation,
  IconChevron,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconArrow,
  IconPhone,
  IconMail,
  IconClock,
} from "../Icons";
import { useCreateMessage } from "../hooks/useMessage";
import FormComponent from "../components/MessageForm";
import {  offices } from "../data";
import { toast } from "sonner";
import { useUser } from "../hooks/useUser";
import TestimonialForm from "../components/TestimonialForm";
import { useCreateTestimonial } from "../hooks/useTestimonial";
import { useOfficeContact } from "../hooks/useContact";

// Gold ornament component
const GoldOrnament = () => (
  <div className="flex items-center gap-2">
    <div
      className="h-px w-6"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(201,168,76,0.5))",
      }}
    />
    <div
      className="w-1 h-1 rotate-45"
      style={{ background: "#C9A84C", opacity: 0.7 }}
    />
  </div>
);

export default function ContactPage() {
  const { useGetOfficeContacts } = useOfficeContact();
  const { mutate, isPending } = useCreateMessage();
  const { mutate: createTestimonialMutate, isPending: isTestimonialPending } =
    useCreateTestimonial();

  const [openTestimonial, setOpenTestimonial] = useState(false);
 
const { data, isLoading, error } = useGetOfficeContacts();

const office = data?.[0];

const contactInfo = office
  ? [
      {
        icon: <IconPhone />,
        label: "Phone",
        value: office.phone,
        sub: "Mon – Fri, 9am to 6pm",
      },
      {
        icon: <IconMail />,
        label: "Email",
        value: office.email,
        sub: "We reply within 2 hours",
      },
      {
        icon: <IconLocation />,
        label: "Headquarters",
        value: office.HeadquartersFullAddress,
        sub: `${office.city}, ${office.country}`,
      },
      {
          icon: <IconClock />,
          label: "Working Hours",
          value: "24/7 Concierge",
          sub: "Always here for you",
        },
    ]
  : [];


console.log(data);


  const { user } = useUser();
  const subjects = [
    "General Inquiry",
    "Car Availability",
    "Pricing Information",
    "Booking Support",
    "Other",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to send a message.");
      return;
    }

    mutate(formData, {
      onSuccess: () => {
        toast.success("Message sent successfully!");
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      },
      onError: () => {
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  return (
    <main className="min-h-screen" style={{ background: "#090909" }}>
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24">
        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-5 mb-16"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-px h-6"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
              }}
            />
            <span
              className="text-[9px] font-semibold tracking-[0.45em] uppercase"
              style={{ color: "#C9A84C" }}
            >
              Get In Touch
            </span>
            <GoldOrnament />
          </div>

          <h1
            className="leading-[0.9] max-w-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 300,
              color: "#F5F0E8",
            }}
          >
            We'd Love to{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #8B7035 0%, #C9A84C 55%, #E8C97A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hear From You
            </span>
          </h1>

          <p
            className="text-[13px] leading-[1.85] max-w-md"
            style={{ color: "rgba(245,240,232,0.45)" }}
          >
            Whether you have a question about our fleet, need help with a
            booking, or just want to say hello — our team is always ready to
            help.
          </p>
        </motion.div>

        {/* ── Contact Info Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div className="flex flex-col gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ color: "#C9A84C" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "rgba(245,240,232,0.3)" }}
                  >
                    {info.label}
                  </p>
                  <p
                    className="text-[15px] font-medium mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#F5F0E8",
                    }}
                  >
                    {info.value}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(245,240,232,0.3)" }}
                  >
                    {info.sub}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: "1px solid rgba(201,168,76,0.28)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Form + Sidebar ── */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 p-8"
            style={{
              background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
              border: "1px solid rgba(201,168,76,0.14)",
            }}
          >
            <h2
              className="text-xl mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#F5F0E8",
              }}
            >
              Send Us a Message
            </h2>
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-7"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              We reply within 2 hours
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-5 py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "#C9A84C" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#F5F0E8",
                  }}
                >
                  Message Sent
                </h3>
                <p
                  className="text-sm max-w-xs"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  Thanks for reaching out. Our team will get back to you within
                  2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-4 px-8 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <FormComponent
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isPending={isPending}
                subjects={subjects}
              />
            )}
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-80 flex-shrink-0 flex flex-col gap-6"
          >
            {/* Office Locations */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3
                className="text-sm mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5F0E8",
                }}
              >
                Our Offices
              </h3>
              <div className="flex flex-col gap-5">
                {data?.map((office, i) => (
                  <div
                    key={office.city}
                    className="flex flex-col gap-2 pb-4"
                    style={{
                      borderBottom:
                        i < data.length - 1
                          ? "1px solid rgba(201,168,76,0.12)"
                          : "none",
                    }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#C9A84C" }}
                    >
                      {office.city}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(245,240,232,0.45)" }}
                    >
                      {office.OfficeFullAddress?.[0]}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(245,240,232,0.3)" }}
                    >
                      {office.phone}
                    </p>
                    <button
                      className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider mt-1 hover:underline w-fit"
                      style={{ color: "#C9A84C" }}
                    >
                      Get Directions <IconChevron />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="p-6"
              style={{
                background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <h3
                className="text-sm mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5F0E8",
                }}
              >
                Follow Us
              </h3>
              <p
                className="text-[11px] mb-5"
                style={{ color: "rgba(245,240,232,0.45)" }}
              >
                Stay connected for the latest updates and exclusive offers.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <IconFacebook />, label: "Facebook" },
                  { icon: <IconInstagram />, label: "Instagram" },
                  { icon: <IconTwitter />, label: "Twitter" },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "rgba(245,240,232,0.45)",
                    }}
                    whileHover={{
                      borderColor: "#C9A84C",
                      color: "#C9A84C",
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Chat CTA */}
            <div
              className="p-6 relative overflow-hidden group"
              style={{
                background: "linear-gradient(160deg, #0A0A0A, #000000)",
                border: "1px solid rgba(201,168,76,0.14)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#C9A84C" }}
                  />
                  <span
                    className="text-[9px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "#C9A84C" }}
                  >
                    Share Your Experience
                  </span>
                </div>

                <h3
                  className="text-base"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#F5F0E8",
                  }}
                >
                  Leave a Testimonial
                </h3>

                <p
                  className="text-[11px]"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  Tell us about your experience with our service.
                </p>

                <button
                  onClick={() => setOpenTestimonial(true)}
                  className="w-full py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all mt-2"
                  style={{
                    background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                    color: "#090909",
                  }}
                >
                  Add Testimonial
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 relative overflow-hidden h-80"
          style={{
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <img
            src="/dubai3.jpg"
            alt="Map location"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
            }}
          />

          {/* Location card */}
          <div
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 p-4"
            style={{
              background: "linear-gradient(160deg, #111111 0%, #0D0D0D 100%)",
              border: "1px solid rgba(201,168,76,0.14)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{ color: "#C9A84C" }}
              >
                <IconLocation />
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#F5F0E8",
                  }}
                >
                  Dream Drive Headquarters
                </p>
                <p
                  className="text-[10px] mt-1"
                  style={{ color: "rgba(245,240,232,0.45)" }}
                >
                  Dubai Deira - Riggat Al Buteen
                  <br />
                  4th St - Deira Suites Business Tower
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(160deg, #0A0A0A, #000000)",
            border: "1px solid rgba(201,168,76,0.14)",
          }}
        >
          <div>
            <h2
              className="text-2xl md:text-3xl mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#F5F0E8",
              }}
            >
              Ready to Drive Your Dream Car?
            </h2>
            <p
              className="text-[12px]"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              Skip the wait and book your luxury vehicle directly from our fleet
              page.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/fleet"
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                background: "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              Browse Fleet <IconArrow />
            </a>
            <a
              href="/faq"
              className="px-6 py-3 text-[9px] font-bold tracking-[0.25em] uppercase transition-all"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
              }}
            >
              View FAQs
            </a>
          </div>
        </motion.div>
      </div>
      {openTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-xl mx-4">
            {/* Close Button */}
            <button
              onClick={() => setOpenTestimonial(false)}
              className="absolute -top-10 right-0 text-sm tracking-widest text-[#C9A84C]"
            >
              CLOSE
            </button>

            {/* Form Container */}
            <TestimonialForm
              user={user}
              isPending={isTestimonialPending}
              createTestimonial={createTestimonialMutate}
              onSuccess={() => setOpenTestimonial(false)}
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
