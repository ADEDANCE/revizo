import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2.5 rounded-x bg-indigo-600 text-white rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
