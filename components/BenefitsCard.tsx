import Image from "next/image";
import React from "react";

interface Props {
  cardData: { title: string; desc: string; image: string; bgColor: string };
  index: number;
}

const BenefitsCard = ({ cardData, index }: Props) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row gap-3 mt-10 ${
        index % 2 !== 0 && "md:flex-row-reverse "
      }`}
    >
      <div className="flex flex-col gap-2 justify-center md:w-1/2 px-10 md:px-16 w-full mt-16 md:mt-0 ">
        <h2 className=" text-xl md:text-2xl font-bold text-center md:text-start">
          {cardData.title}
        </h2>
        <p className=" text-md md:text-lg tracking-wider leading-6 text-center md:text-start ">
          {cardData.desc}
        </p>
      </div>
      <div className="md:w-1/2 w-full md:p-4 px-10 md:px-16 mt-16 md:mt-0">
        <div className="w-full h-[400px] rounded-2xl relative">
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-2xl rotate-[15deg] scale-95 ${cardData.bgColor}`}
          ></div>
          <Image
            src={cardData.image}
            alt={cardData.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
