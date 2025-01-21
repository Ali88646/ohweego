import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import NavbarItems from "./NavbarITemes";

const Navbar = () => {
  return (
    <nav className="w-full h-[4rem] md:h-[6rem] px-[5vw] flex items-center justify-between text-white fixed top-0 left-0  backdrop-blur-sm z-50">
      <Logo />
      <NavbarItems />
      <Button text="Start Your Journey!" />
    </nav>
  );
};

export default Navbar;
