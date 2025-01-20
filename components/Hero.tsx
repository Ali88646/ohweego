import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-[135vh] md:h-[125vh] w-full   pt-[6rem]">
      <div className="flex md:flex-row flex-col gap-3 w-full h-full px-[3vw] relative">
        {/* for setting */}
        <div className="bg-image-url bg-cover  bg-no-repeat bg-center absolute top-[5rem]  w-full h-full -z-10 bg-opacity-75 pointer-events-none"></div>
        <div className="col-span-3 mt-14 md:mt-0 min-w-full md:min-w-[60%] flex flex-col gap-5 justify-center items-center md:items-start">
          <h1 className="uppercase text-4xl md:text-6xl font-bold text-center md:text-start">
            Boost Your TikTok & <br /> Earn Rewards – <br /> Challenge Yourself!
          </h1>
          <p className="md:text-xl text-lg md:tracking-wider text-center md:text-start">
            Relied upon by leading creators to unleash their full potential,
            excel in the creator economy, and elevate their influence to the
            next level!
          </p>
          <Button
            text="Apply Now"
            className="bg-secondary-color text-white w-1/2 md:w-1/3 text-lg font-bold hover:bg-white hover:text-black"
          />
        </div>
        <div className="col-span-2 min-w-full md:min-w-[40%] flex justify-center  mt-4 md:mt-12">
          image
        </div>
      </div>
    </section>
  );
};

export default Hero;
