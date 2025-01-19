import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CardBackground = ({ children, className }: Props) => {
  return (
    <div className=" relative z-10 rounded-3xl bg-gradient-bg-color bg-opacity-75">
      <div
        className={twMerge(
          "absolute -z-10  w-full h-full bottom-[1px] right-[1px] rounded-3xl bg-card-bg-color",
          className
        )}
      ></div>
      {children}
    </div>
  );
};

export default CardBackground;
