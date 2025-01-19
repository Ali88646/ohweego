"use client";

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "py-2 px-4 bg-white text-black rounded-lg text-sm font-semibold hover:bg-secondary-color hover:text-white hover-effect",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
