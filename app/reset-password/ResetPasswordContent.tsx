'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { IconLock, IconEye, IconShield } from '../Icons';

// ─── PASSWORD STRENGTH ───────────────────────────────────
function PasswordStrength({ password }: { password: string }) {
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

  if (password.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5 mt-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex-1 h-1 transition-all duration-300"
            style={{
              background: i <= strength
                ? strength <= 1 ? "#E74C3C"
                : strength === 2 ? "#F39C12"
                : strength === 3 ? "#3498DB"
                : "#27AE60"
                : "rgba(201,168,76,0.1)"
            }}
          />
        ))}
      </div>
      <p className="text-[9px] font-medium" style={{
        color: strength <= 1 ? "#E74C3C" : strength === 2 ? "#F39C12" : strength === 3 ? "#3498DB" : "#27AE60"
      }}>
        {labels[strength]} password
      </p>
    </div>
  );
}

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { useResetPasswordMutation } = useAuth();
  const resetMutation = useResetPasswordMutation();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const validate = () => {
    let valid = true;
    const newErrors = { newPassword: '', confirmPassword: '' };

    if (!newPassword) {
      newErrors.newPassword = 'Password is required';
      valid = false;
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
      valid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.error('Invalid or missing reset token');
      return;
    }

    if (!validate()) return;

    try {
      await resetMutation.mutateAsync({
        token,
        newPassword,
      });

      toast.success('Password reset successfully!');
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.response?.data?.message || 'Failed to reset password'
      );
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-12" style={{ background: "#090909" }}>
      
      {/* Noise grain */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl flex overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>

        {/* ── LEFT PANEL (Image/Content) ── */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 overflow-hidden" style={{ background: "#0A0A0A" }}>
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/porshe_hero.jpg" 
              alt="Luxury Car" 
              className="w-full h-full object-cover" 
              style={{ filter: "brightness(0.35)" }} 
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.9) 100%)" }} />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#C9A84C" }}>
              IFM Luxury
            </span>
            <div className="text-[7.5px] tracking-[0.45em] uppercase font-medium mt-1" style={{ color: "rgba(245,240,232,0.25)" }}>
              Elite Motor Collection
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 flex flex-col gap-6">
            
            {/* Icon */}
            <div className="inline-flex" style={{ color: "rgba(201,168,76,0.6)" }}>
              <IconShield />
            </div>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.2 }}>
                Create Your New Password
              </h2>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
                Choose a strong, unique password to secure your AURUM account. Your security is our priority.
              </p>
            </div>

            {/* Security Tips */}
            <div className="flex flex-col gap-2 p-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#C9A84C" }}>
                Security Tips
              </p>
              <ul className="text-[10px] leading-relaxed space-y-1" style={{ color: "rgba(245,240,232,0.5)" }}>
                <li>• Use at least 8 characters</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Add numbers and special characters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL (Form) ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 md:px-12" style={{ background: "#111" }}>

          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <span className="tracking-[0.42em] leading-none font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#C9A84C" }}>
              IFM Luxury
            </span>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 mb-8"
          >
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, color: "#F5F0E8" }}>
              Reset Password
            </h2>
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,240,232,0.35)" }}>
              Create a new secure password for your account.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            
            {/* New Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                New Password
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3" style={{ color: "rgba(201,168,76,0.6)" }}>
                  <IconLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setErrors({ ...errors, newPassword: '' });
                  }}
                  className="w-full pl-10 pr-10 py-3 text-[12px] bg-transparent focus:outline-none transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#F5F0E8" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 transition-colors"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  <IconEye show={showPassword} />
                </button>
              </div>
              {errors.newPassword && (
                <span className="text-[10px]" style={{ color: "#E74C3C" }}>
                  {errors.newPassword}
                </span>
              )}
              <PasswordStrength password={newPassword} />
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3" style={{ color: "rgba(201,168,76,0.6)" }}>
                  <IconLock />
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors({ ...errors, confirmPassword: '' });
                  }}
                  className="w-full pl-10 pr-10 py-3 text-[12px] bg-transparent focus:outline-none transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#F5F0E8" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 transition-colors"
                  style={{ color: "rgba(201,168,76,0.6)" }}
                >
                  <IconEye show={showConfirmPassword} />
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-[10px]" style={{ color: "#E74C3C" }}>
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={resetMutation.isPending}
              className="w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#E8C97A] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              style={{
                background: resetMutation.isPending ? "rgba(201,168,76,0.5)" : "linear-gradient(135deg, #8B7035, #C9A84C)",
                color: "#090909",
              }}
            >
              {resetMutation.isPending ? (
                <span className="inline-flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#090909] border-t-transparent rounded-full animate-spin" />
                  Resetting...
                </span>
              ) : (
                'Reset Password'
              )}
            </button>

          </motion.form>

          {/* Footer Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-[11px] mt-8"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Remember your password?{" "}
            <a
              href="/login"
              className="font-semibold no-underline transition-colors"
              style={{ color: "#C9A84C" }}
            >
              Sign in
            </a>
          </motion.p>

        </div>
      </div>

      <style jsx>{`
        input::placeholder {
          color: rgba(245, 240, 232, 0.25);
        }
      `}</style>
    </div>
  );
}