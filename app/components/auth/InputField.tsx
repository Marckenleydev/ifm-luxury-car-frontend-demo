"use client";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  rightElement
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-medium tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
        {label}
      </label>
      <div className="relative flex items-center">
        <span className="absolute left-3" style={{ color: "rgba(201,168,76,0.6)" }}>{icon}</span>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full pl-10 pr-10 py-3 text-[12px] bg-transparent focus:outline-none transition-all duration-300"
          style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#F5F0E8" }}
        />
        {rightElement && <span className="absolute right-3">{rightElement}</span>}
      </div>
    </div>
  );
}