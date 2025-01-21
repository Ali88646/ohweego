import { BiLogoFacebookSquare } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
//
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";

import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-y-10 md:gap-y-0 md:gap-x-[40vw] md:py-16 px-10">
      {/* left section */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-3">
          <Logo className="text-center w-full md:text-start" />
          <p className="w-full md:text-xl text-lg text-center md:text-start md:px-0 px-12">
            Empowering TikTok creators to scale, achieve, and grow with Ohweego.
          </p>
          {/* socials */}
          <div className="flex items-center gap-1 justify-center md:justify-start  w-full">
            <BiLogoFacebookSquare size={36} />
            <ImLinkedin size={28} />
            <FaSquareXTwitter size={32} />
            <BiLogoInstagramAlt size={36} />
            <FaYoutube size={36} />
          </div>
        </div>
        <p className="font-bold text-center md:text-start ">
          &copy; Ohweego.com 2025
        </p>
      </div>
      <hr className="md:hidden border-none mx-16 h-[1px] bg-gradient-bg-color opacity-60" />
      {/* right section */}
      <div className="grid grid-cols-6 gap-5 place-items-center md:place-items-start">
        <div className="flex flex-col gap-5 col-span-2">
          <h2 className="font-bold text-lg">Features</h2>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-sm">
              About Us
            </Link>
            <Link href="#" className="text-sm">
              How it works
            </Link>
            <Link href="#" className="text-sm">
              Benefits
            </Link>
            <Link href="#" className="text-sm">
              FAQ&apos;s
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 col-span-4">
          <h2 className="font-bold text-lg">Company Info</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-4xl" />
              <p>1234 Elm Street, Suite 567, Metropolis, NY 10101, USA</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="text-xl" />
              <p>info@dummycompany.com</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
