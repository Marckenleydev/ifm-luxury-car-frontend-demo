"use client";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({ password }: PasswordStrengthProps) {
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