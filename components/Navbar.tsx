"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import NavbarItems from "./NavbarITemes";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    function handleIsScrolled() {
      const currentScroll = window.scrollY;
      if (currentScroll > isScrolled) {
        setTimeout(() => setIsVisible(false), 300);
      } else {
        setTimeout(() => setIsVisible(true), 300);
      }
      setIsScrolled(currentScroll);
    }

    window.addEventListener("scroll", handleIsScrolled);
    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, [isScrolled, window.scrollY]);

  return (
    <nav
      className={`w-full h-[4rem] md:h-[6rem] px-[5vw] flex items-center justify-between text-white fixed ${
        isVisible ? "top-0" : "md:-top-[8rem]"
      } left-0  backdrop-blur-sm z-50 hover-effect`}
    >
      <Logo />
      <NavbarItems />
      <Button
        text="Start Your Journey!"
        className="flex-1 sm:mx-[18vw] mx-[12vw] md:mx-0 md:flex-none"
      />
      <div className="md:hidden">
        <MobileNavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
