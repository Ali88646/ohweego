import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

const GradientText = ({ text, className }: Props) => {
  return (
    <span
      className={twMerge(
        "bg-gradient-text-color bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  );
};

export default GradientText;
