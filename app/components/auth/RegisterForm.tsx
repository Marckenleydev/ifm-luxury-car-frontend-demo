"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "./InputField";
import PasswordStrength from "./PasswordStrength";
import { IconUser, IconMail, IconPhone, IconLock, IconEye, IconCheck } from "../../Icons";
import { useAuth } from "../../hooks/useAuth"; // <-- your hook
import { useRouter } from "next/navigation";

interface RegisterFormProps {
  onSwitch: () => void;
}

export default function RegisterForm({ onSwitch }: RegisterFormProps) {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const { register, registerLoading } = useAuth(); // <-- useAuth register mutation
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirm) return alert("Passwords do not match.");
    if (!agreed) return alert("Please agree to the terms.");

    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      alert("Account created successfully!");
      router.push("/"); // <-- navigate to home page after register
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to create account.");
    }
  };

  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <h2 className="leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, color: "#F5F0E8" }}>
          Create Account
        </h2>
        <p className="text-[12px]" style={{ color: "rgba(245,240,232,0.35)" }}>
          Join IFM Luxury and start your luxury journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First Name" name="firstName" placeholder="Marcus" value={form.firstName} onChange={handleChange} icon={<IconUser />} />
          <InputField label="Last Name" name="lastName" placeholder="Laurent" value={form.lastName} onChange={handleChange} icon={<IconUser />} />
        </div>

        <InputField label="Email Address" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} icon={<IconMail />} />
        <InputField label="Phone Number" name="phone" type="tel" placeholder="+971 50 000 0000" value={form.phone} onChange={handleChange} icon={<IconPhone />} />

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
              <button type="button" onClick={() => setShowPass(!showPass)} className="transition-colors duration-300" style={{ color: "rgba(201,168,76,0.6)" }}>
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
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="transition-colors duration-300" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconEye show={showConfirm} />
            </button>
          }
        />

        <button type="button" onClick={() => setAgreed(!agreed)} className="flex items-start gap-2 text-left">
          <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center transition-all duration-300" style={{ border: "1px solid rgba(201,168,76,0.3)", background: agreed ? "#C9A84C" : "transparent", color: agreed ? "#090909" : "transparent" }}>
            {agreed && <IconCheck />}
          </div>
          <span className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
            I agree to IFM Luxury&apos;s{" "}
            <span style={{ color: "#C9A84C" }}>Terms of Service</span>{" "}
            and{" "}
            <span style={{ color: "#C9A84C" }}>Privacy Policy</span>
          </span>
        </button>

        <button type="submit" disabled={registerLoading} className="w-full py-3.5 text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-300 hover:bg-[#E8C97A]" style={{ background: "linear-gradient(135deg, #8B7035, #C9A84C)", color: "#090909" }}>
          {registerLoading ? "Creating..." : "Create Account"}
        </button>
      </form>

      <p className="text-center text-[11px]" style={{ color: "rgba(245,240,232,0.35)" }}>
        Already have an account?{" "}
        <button onClick={onSwitch} className="font-semibold transition-colors duration-300" style={{ color: "#C9A84C" }}>
          Sign in
        </button>
      </p>
    </motion.div>
  );
}
