"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navbarItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How it works", href: "/#" },
  { name: "Benifits", href: "/benifits" },
  { name: "FAQ's", href: "/faqs" },
];

const NavbarItems = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center justify-between gap-7">
      {navbarItems.map((item) => {
        const isSamePath = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-white font-semibold ${
              isSamePath ? " text-white" : "text-white/70"
            } hover:text-white hover-effect`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarItems;
