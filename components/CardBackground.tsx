import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  absoluteClass?: string;
}

const CardBackground = ({ children, className, absoluteClass }: Props) => {
  return (
    <div
      className={twMerge("relative rounded-3xl bg-card-bg-color", className)}
    >
      <div
        className={twMerge(
          "absolute -z-10  w-full h-full top-[1px] left-[1px] rounded-3xl bg-gradient-bg-color",
          absoluteClass
        )}
      ></div>
      {children}
    </div>
  );
};

export default CardBackground;
