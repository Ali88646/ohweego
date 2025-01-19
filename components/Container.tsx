import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <main className={twMerge("w-full md:px-[5vw]", className)}>{children}</main>
  );
};

export default Container;
