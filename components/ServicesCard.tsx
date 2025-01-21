import React from "react";
import CardBackground from "./CardBackground";
import { IoCheckmarkOutline } from "react-icons/io5";
import Button from "./Button";

interface Props {
  heading: string;
  description: string;
  text: string;
}

const ServicesCard = ({ heading, description, text }: Props) => {
  return (
    <CardBackground className="md:w-[90%] w-full py-10 md:px-5">
      <div className="flex flex-col gap-2  items-center  w-full md:px-5">
        <h2 className=" text-xl md:text-3xl font-bold text-center md:text-start ">
          {heading}
        </h2>
        <p className="tracking-wider text-center text-md">{description}</p>
      </div>
      <div className="mt-5 flex flex-col gap-5 md:px-10 px-3 ">
        {Array.from({ length: 7 }).map((_, i) => {
          return (
            <div key={i} className="flex  items-center gap-5">
              <div className="p-2 bg-check-icon-bg rounded-full text-xl font-bold">
                <IoCheckmarkOutline />
              </div>
              <h2 className="text-md leading-5">{text}</h2>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-10 px-10">
        <Button
          text="Apply Now"
          className="w-full bg-secondary-color text-white hover:bg-white hover:text-black"
        />
      </div>
    </CardBackground>
  );
};

export default ServicesCard;
