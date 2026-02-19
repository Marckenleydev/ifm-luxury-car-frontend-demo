"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryNavbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── ICONS ───────────────────────────────────────────────
const IconCar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h1m8 0H9m4 0h5m0 0h1a1 1 0 001-1v-3.65a1 1 0 00-.222-.624l-3.48-4.35A1 1 0 0015.52 6H13" />
  </svg>
);
const IconCalendar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconCreditCard = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);
const IconLocation = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconHeadset = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const IconSearch = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────
const categories = [
  { label: "All", icon: null },
  { label: "Booking", icon: <IconCalendar /> },
  { label: "Fleet", icon: <IconCar /> },
  { label: "Insurance", icon: <IconShield /> },
  { label: "Payment", icon: <IconCreditCard /> },
  { label: "Delivery", icon: <IconLocation /> },
  { label: "Support", icon: <IconHeadset /> },
];

const faqs = [
  {
    category: "Booking",
    question: "How do I book a car?",
    answer: "Simply browse our fleet, select your preferred vehicle, choose your pickup date and duration, add any preferences, and confirm your booking. The entire process takes just a few minutes.",
  },
  {
    category: "Booking",
    question: "Can I modify or cancel my booking?",
    answer: "Yes, you can modify or cancel your booking up to 24 hours before the scheduled pickup time at no charge. Cancellations within 24 hours may incur a fee depending on the vehicle tier.",
  },
  {
    category: "Booking",
    question: "What is the minimum rental period?",
    answer: "Our minimum rental period is 24 hours. We also offer weekly and monthly rental plans at discounted rates for longer stays.",
  },
  {
    category: "Booking",
    question: "Can I book a car for someone else?",
    answer: "Yes, you can book on behalf of another person. However, the primary driver must present their own valid driver's license and ID at the time of pickup.",
  },
  {
    category: "Fleet",
    question: "What types of cars are available?",
    answer: "Our fleet includes sports cars, SUVs, sedans, convertibles, and electric vehicles from brands like Porsche, Ferrari, Lamborghini, BMW, Audi, and more.",
  },
  {
    category: "Fleet",
    question: "Are the cars well maintained?",
    answer: "Absolutely. Every vehicle undergoes a rigorous inspection and full service before each rental. We maintain the highest standards of cleanliness, safety, and performance.",
  },
  {
    category: "Fleet",
    question: "Can I request a specific color or trim?",
    answer: "While we cannot guarantee specific colors or trim levels, you can note your preference at booking and our team will do their best to accommodate your request.",
  },
  {
    category: "Insurance",
    question: "Is insurance included in my rental?",
    answer: "Basic insurance coverage is included with every rental. You can also opt for premium coverage during the booking process for extra peace of mind and higher coverage limits.",
  },
  {
    category: "Insurance",
    question: "What happens if the car is damaged?",
    answer: "In the event of damage, please contact our support team immediately. Depending on your coverage level, you may be responsible for a deductible. We handle all claims directly with our insurer.",
  },
  {
    category: "Insurance",
    question: "Does my personal auto insurance cover rentals?",
    answer: "Some personal auto insurance policies and credit cards extend coverage to rental vehicles. We recommend checking with your provider, though our included coverage is always active.",
  },
  {
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We do not currently accept cash payments for security deposit purposes.",
  },
  {
    category: "Payment",
    question: "Is there a security deposit required?",
    answer: "Yes, a refundable security deposit is held at the time of pickup. The amount varies by vehicle tier and is fully refunded within 3–5 business days after a successful return.",
  },
  {
    category: "Payment",
    question: "Are there any hidden fees?",
    answer: "Never. Our pricing is fully transparent. Any applicable fees such as delivery, additional drivers, or optional upgrades are clearly shown before you confirm your booking.",
  },
  {
    category: "Delivery",
    question: "Can the car be delivered to my location?",
    answer: "Yes, we offer delivery and pickup to your preferred location within our service areas. Delivery fees may apply depending on the distance from our nearest branch.",
  },
  {
    category: "Delivery",
    question: "Do you offer airport pickup and drop-off?",
    answer: "Yes, we offer convenient airport delivery and collection services at all major airports in our network. Simply select the airport option during booking.",
  },
  {
    category: "Support",
    question: "What if I have an issue during my rental?",
    answer: "Our support team is available 24/7. You can reach us via phone, email, or live chat. In case of a breakdown or emergency, we provide roadside assistance at no extra charge.",
  },
  {
    category: "Support",
    question: "What documents do I need to rent a car?",
    answer: "You will need a valid driver's license, a government-issued ID or passport, and a credit card in your name for the security deposit. International renters may need an IDP.",
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-xl border transition-all overflow-hidden ${
        isOpen ? "border-gray-900 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className={`text-sm font-medium ${isOpen ? "text-white" : "text-gray-900"}`}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`text-xl font-light flex-shrink-0 ml-4 ${isOpen ? "text-white" : "text-gray-400"}`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-xs text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────────
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Group by category for display
  const grouped = filtered.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <main className="min-h-screen mt-20">
        <LuxuryNavbar/>

      {/* ── Hero ── */}
      <section className="w-full bg-white px-6 md:px-16 lg:px-24 pt-16 pb-14">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Help Center</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Got Questions?<br />We've Got Answers.
            </h1>
            <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
              Find answers to the most common questions about renting with Dream Drive. Can't find what you're looking for? Our support team is here 24/7.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-md"
          >
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <IconSearch />
            </span>
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:border-gray-400 transition"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className="w-full bg-white border-t border-gray-100 px-6 md:px-16 lg:px-24 py-5 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.label
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat.icon && (
                <span className={`[&>svg]:w-3.5 [&>svg]:h-3.5 ${activeCategory === cat.label ? "text-white" : "text-gray-400"}`}>
                  {cat.icon}
                </span>
              )}
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── FAQ Content ── */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* FAQ List */}
          <div className="flex-1 flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {Object.keys(grouped).length > 0 ? (
                Object.entries(grouped).map(([category, items]) => (
                  <motion.div
                    key={category}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center [&>svg]:w-3 [&>svg]:h-3">
                        {categories.find((c) => c.label === category)?.icon}
                      </span>
                      <h2 className="text-sm font-bold text-gray-900">{category}</h2>
                      <span className="text-xs text-gray-400">({items.length})</span>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-2">
                      {items.map((faq, i) => (
                        <FAQItem key={faq.question} faq={faq} index={i} />
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <p className="text-2xl font-bold text-gray-200">No results found</p>
                  <p className="text-sm text-gray-400 mt-2">Try a different search term or category.</p>
                  <button
                    onClick={() => { setActiveCategory("All"); setSearch(""); }}
                    className="mt-5 bg-black text-white text-xs px-5 py-2.5 rounded-full hover:bg-gray-800 transition"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-72 flex-shrink-0 flex flex-col gap-4"
          >
            {/* Still need help */}
            <div className="bg-black rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <IconHeadset />
              </div>
              <h3 className="text-sm font-bold text-white">Still need help?</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our support team is available 24/7 to answer your questions and resolve any issues.
              </p>
              <div className="flex flex-col gap-2 mt-1">
                <button className="w-full bg-white text-black text-xs font-medium py-2.5 rounded-full hover:bg-gray-100 transition">
                  Chat with Us
                </button>
                <button className="w-full border border-white/20 text-white text-xs font-medium py-2.5 rounded-full hover:bg-white/10 transition">
                  Send an Email
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900">Quick Stats</h3>
              {[
                { label: "Questions Answered", value: `${faqs.length}+` },
                { label: "Avg. Response Time", value: "< 2 min" },
                { label: "Customer Satisfaction", value: "98%" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900">Popular Topics</h3>
              {["How to book a car", "Cancel my reservation", "Insurance coverage", "Security deposit", "Airport delivery"].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSearch(topic)}
                  className="text-left text-xs text-gray-500 hover:text-black transition flex items-center gap-2 group"
                >
                  <span className="text-gray-300 group-hover:text-black transition">›</span>
                  {topic}
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-black px-6 md:px-16 lg:px-24 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              Ready to Hit the Road?
            </h2>
            <p className="text-sm text-gray-400 mt-3 max-w-md">
              Now that your questions are answered, book your dream car today and experience the Drive difference.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3 flex-shrink-0"
          >
            <button className="bg-white text-black text-xs px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
              Browse Fleet →
            </button>
            <button className="border border-white/20 text-white text-xs px-6 py-2.5 rounded-full font-medium hover:bg-white/10 transition">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer/>
    </main>
  );
}