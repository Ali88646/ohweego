import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import NavbarItems from "./NavbarITemes";

const Navbar = () => {
  return (
    <nav className="w-full h-[6rem] flex items-center justify-between text-white px-[5vw] sticky top-0 left-0">
      <Logo />
      <NavbarItems />
      <Button text="Start Yout Journey!" />
    </nav>
  );
};

export default Navbar;
