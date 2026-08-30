import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  passwordToggle?: boolean;
}

function Input({
  label,
  error,
  className = "",
  passwordToggle = false,
  type,
  name,
  value,
  onChange,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = passwordToggle && showPassword ? "text" : type;

  return (
    <div className="flex w-full flex-col gap-2">
      <label className=" text-left text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border border-slate-400 px-4 py-3 pr-12 outline-none transition focus:border-indigo focus:ring-2 focus:ring-indigo-200 ${className}`}
          {...props}
        />

        {passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
