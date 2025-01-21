import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[135vh] md:h-[125vh] w-full">
      <div className="w-full h-full relative">
        {/* for setting */}
        <div className="bg-image-url bg-cover  bg-no-repeat bg-center absolute top-0 w-full h-full -z-10 bg-opacity-75 pointer-events-none"></div>
        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-3 md:px-[5vw] md:pt-[6rem] bg-main-bg-color bg-opacity-65">
          <div className="  min-w-full md:min-w-[60%] flex flex-col gap-5 justify-center items-center md:items-start">
            <h1 className="uppercase text-[7vw] leading-[7vw]  md:text-[3.5vw] md:leading-[3.5vw] font-bold text-center md:text-start ">
              Boost Your TikTok & <br /> Earn Rewards – <br /> Challenge
              Yourself
            </h1>
            <p className="md:text-lg text-md md:tracking-wider text-center md:text-start px-[2vw] sm:px-[5vw] md:px-0">
              Relied upon by leading creators to unleash their full potential,
              excel in the creator economy, and elevate their influence to the
              next level!
            </p>
            <Button
              text="Apply Now"
              className="bg-secondary-color text-white w-1/2 md:w-1/3 text-lg font-bold hover:bg-white hover:text-black"
            />
          </div>
          <div className=" min-w-full md:min-w-[40%] flex justify-center  mt-4 md:mt-12 relative">
            <div className="absolute top-0 w-full h-full flex items-center justify-center">
              <Image
                src="/images/hero-polygon-img.png"
                width={480}
                height={480}
                alt="polygon"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 w-full h-full flex items-center justify-center  z-10">
              <Image
                src="/images/hero-image.png"
                width={618.5}
                height={875}
                alt="polygon"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
