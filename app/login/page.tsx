"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── ICONS ───────────────────────────────────────────────
const IconEye = ({ show }) => show ? (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
) : (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

const IconGoogle = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const IconApple = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.29.06 2.18.73 2.95.75.91-.17 1.78-.86 3.01-.92 1.38-.07 2.52.43 3.32 1.4-2.98 1.83-2.5 5.74.17 6.87-.52 1.37-1.21 2.73-1.45 4.78zM12.03 7.32C11.83 5.05 13.5 3.08 15.69 3c.26 2.53-2.32 4.41-3.66 4.32z" />
  </svg>
);

const IconUser = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const IconMail = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const IconLock = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const IconPhone = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ─── INPUT FIELD ─────────────────────────────────────────
function InputField({ label, name, type = "text", placeholder, value, onChange, icon, rightElement }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      <div className="relative flex items-center border border-gray-200 rounded-xl bg-gray-50 focus-within:border-gray-400 transition">
        <span className="absolute left-3.5">{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-10 py-2.5 text-sm text-gray-800 placeholder-gray-300 bg-transparent focus:outline-none rounded-xl"
        />
        {rightElement && (
          <span className="absolute right-3.5">{rightElement}</span>
        )}
      </div>
    </div>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────
function OrDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="flex-1 h-px bg-gray-100" />
      <span className="text-xs text-gray-400 font-medium">or continue with</span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

// ─── SOCIAL BUTTONS ──────────────────────────────────────
function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition">
        <IconGoogle /> Google
      </button>
      <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition">
        <IconApple /> Apple
      </button>
    </div>
  );
}

// ─── PASSWORD STRENGTH ───────────────────────────────────
function PasswordStrength({ password }) {
  const getStrength = () => {
    if (password.length === 0) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const strength = getStrength();
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "bg-red-400", "bg-yellow-400", "bg-blue-400", "bg-green-400"];

  if (password.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition-all ${i <= strength ? colors[strength] : "bg-gray-200"}`}
          />
        ))}
      </div>
      <p className={`text-[10px] font-medium ${strength <= 1 ? "text-red-400" : strength === 2 ? "text-yellow-500" : strength === 3 ? "text-blue-400" : "text-green-500"}`}>
        {labels[strength]} password
      </p>
    </div>
  );
}

// ─── LOGIN FORM ──────────────────────────────────────────
function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-xs text-gray-400 mt-1">Sign in to your Dream Drive account</p>
      </div>

      <SocialButtons />
      <OrDivider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="marcus@email.com"
          value={form.email}
          onChange={handleChange}
          icon={<IconMail />}
        />
        <InputField
          label="Password"
          name="password"
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          icon={<IconLock />}
          rightElement={
            <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-400 hover:text-gray-600 transition">
              <IconEye show={showPass} />
            </button>
          }
        />

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-2 text-xs text-gray-600"
          >
            <div className={`w-4 h-4 rounded flex items-center justify-center border transition ${remember ? "bg-black border-black text-white" : "border-gray-300"}`}>
              {remember && <IconCheck />}
            </div>
            Remember me
          </button>
          <button type="button" className="text-xs text-gray-500 hover:text-black transition font-medium">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3 rounded-full hover:bg-gray-800 transition mt-1"
        >
          Sign In
        </button>
      </form>

      <p className="text-xs text-center text-gray-400">
        Don't have an account?{" "}
        <button onClick={onSwitch} className="text-black font-semibold hover:underline">
          Create one
        </button>
      </p>
    </motion.div>
  );
}

// ─── REGISTER FORM ───────────────────────────────────────
function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords do not match.");
    if (!agreed) return alert("Please agree to the terms.");
    alert("Account created!");
  };

  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="text-xs text-gray-400 mt-1">Join Dream Drive and start your luxury journey</p>
      </div>

      <SocialButtons />
      <OrDivider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Row */}
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="Marcus"
            value={form.firstName}
            onChange={handleChange}
            icon={<IconUser />}
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Laurent"
            value={form.lastName}
            onChange={handleChange}
            icon={<IconUser />}
          />
        </div>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="marcus@email.com"
          value={form.email}
          onChange={handleChange}
          icon={<IconMail />}
        />

        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (800) 000-0000"
          value={form.phone}
          onChange={handleChange}
          icon={<IconPhone />}
        />

        <div className="flex flex-col gap-1">
          <InputField
            label="Password"
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Create a strong password"
            value={form.password}
            onChange={handleChange}
            icon={<IconLock />}
            rightElement={
              <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-400 hover:text-gray-600 transition">
                <IconEye show={showPass} />
              </button>
            }
          />
          <PasswordStrength password={form.password} />
        </div>

        <InputField
          label="Confirm Password"
          name="confirm"
          type={showConfirm ? "text" : "password"}
          placeholder="Repeat your password"
          value={form.confirm}
          onChange={handleChange}
          icon={<IconLock />}
          rightElement={
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-gray-400 hover:text-gray-600 transition">
              <IconEye show={showConfirm} />
            </button>
          }
        />

        {/* Terms */}
        <button
          type="button"
          onClick={() => setAgreed(!agreed)}
          className="flex items-start gap-2 text-left"
        >
          <div className={`w-4 h-4 mt-0.5 rounded flex-shrink-0 flex items-center justify-center border transition ${agreed ? "bg-black border-black text-white" : "border-gray-300"}`}>
            {agreed && <IconCheck />}
          </div>
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to Dream Drive's{" "}
            <span className="text-black font-semibold hover:underline">Terms of Service</span>{" "}
            and{" "}
            <span className="text-black font-semibold hover:underline">Privacy Policy</span>
          </span>
        </button>

        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3 rounded-full hover:bg-gray-800 transition mt-1"
        >
          Create Account
        </button>
      </form>

      <p className="text-xs text-center text-gray-400">
        Already have an account?{" "}
        <button onClick={onSwitch} className="text-black font-semibold hover:underline">
          Sign in
        </button>
      </p>
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────────
export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <main className="min-h-screen mt-20 flex items-center justify-center px-4 py-12">
        <Navbar/>
      <div className="w-full max-w-5xl flex rounded-3xl overflow-hidden shadow-xl bg-white">

        {/* ── Left Panel (Image) ── */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 bg-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
              alt="Luxury Car"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <span className="text-white text-lg font-bold tracking-tight">Dream Drive</span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <p className="text-white text-sm leading-relaxed font-medium">
                "The entire booking experience was seamless. Definitely the best luxury rental experience I've had."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Marcus Laurent</p>
                  <p className="text-gray-400 text-[10px]">Car Enthusiast</p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              {[["500+", "Luxury Cars"], ["800+", "Happy Clients"], ["60+", "Locations"]].map(([val, label]) => (
                <div key={label}>
                  <p className="text-white text-lg font-bold">{val}</p>
                  <p className="text-gray-400 text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Panel (Form) ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-10 md:px-12 overflow-y-auto max-h-screen">

          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <span className="text-gray-900 text-lg font-bold tracking-tight">Dream Drive</span>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-7 w-fit">
            {["login", "register"].map((tab) => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className={`text-xs font-medium px-5 py-2 rounded-full transition-all capitalize ${
                  mode === tab ? "bg-black text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "login" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Form with AnimatePresence */}
          <AnimatePresence mode="wait">
            {mode === "login" ? (
              <LoginForm key="login" onSwitch={() => setMode("register")} />
            ) : (
              <RegisterForm key="register" onSwitch={() => setMode("login")} />
            )}
          </AnimatePresence>
        </div>
      </div>
     
    </main>
  );
}