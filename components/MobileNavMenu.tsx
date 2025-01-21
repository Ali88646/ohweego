"use client";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How it works", href: "/#" },
  { name: "Benifits", href: "/#" },
  { name: "FAQ's", href: "/#" },
];

const MobileNavMenu = () => {
  const [isActive, setisActive] = useState(false);

  const pathname = usePathname();
  const handleIsActive = () => {
    setisActive((prev) => !prev);
  };

  return (
    <div className="md:hidden">
      <HiMenuAlt1
        onClick={handleIsActive}
        className="text-4xl cursor-pointer"
      />

      <div
        className={`absolute ${
          isActive ? "top-0" : "-top-[110vh]"
        } left-0 w-screen h-screen bg-main-bg-color bg-opacity-95 hover-effect`}
      >
        <div onClick={handleIsActive} className="relative">
          <IoClose className="absolute top-[5vw] right-[5vw] text-4xl hover:text-red-400 hover-effect cursor-pointer" />
        </div>
        <div className="pt-[15vh] flex flex-col">
          {navbarItems.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.href}
                onClick={handleIsActive}
                className={`text-center text-3xl font-bold  py-5 hover:bg-card-bg-color hover-effect ${
                  pathname === item.href ? "text-white" : "text-gray-400"
                } hover:text-white`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
