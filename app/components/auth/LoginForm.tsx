"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";
import { IconMail, IconLock, IconEye, IconCheck } from "../../Icons";

interface LoginFormProps {
  onSwitch: () => void;
}

export default function LoginForm({ onSwitch }: LoginFormProps) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <h2 className="leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, color: "#F5F0E8" }}>
          Welcome Back
        </h2>
        <p className="text-[12px]" style={{ color: "rgba(245,240,232,0.35)" }}>
          Sign in to your AURUM account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
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
            <button type="button" onClick={() => setShowPass(!showPass)} className="transition-colors duration-300" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconEye show={showPass} />
            </button>
          }
        />

        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setRemember(!remember)} className="flex items-center gap-2 text-[11px]" style={{ color: "rgba(245,240,232,0.5)" }}>
            <div className="w-4 h-4 flex items-center justify-center transition-all duration-300" style={{ border: "1px solid rgba(201,168,76,0.3)", background: remember ? "#C9A84C" : "transparent", color: remember ? "#090909" : "transparent" }}>
              {remember && <IconCheck />}
            </div>
            Remember me
          </button>
          <button type="button" className="text-[11px] transition-colors duration-300" style={{ color: "#C9A84C" }}>
            Forgot password?
          </button>
        </div>

        <button type="submit" className="w-full py-3.5 text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-300 hover:bg-[#E8C97A]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}>
          Sign In
        </button>
      </form>

      <p className="text-center text-[11px]" style={{ color: "rgba(245,240,232,0.35)" }}>
        Don't have an account?{" "}
        <button onClick={onSwitch} className="font-semibold transition-colors duration-300" style={{ color: "#C9A84C" }}>
          Create one
        </button>
      </p>
    </motion.div>
  );
}