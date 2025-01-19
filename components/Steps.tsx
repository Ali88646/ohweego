import React from "react";
import CardBackground from "./CardBackground";
import GradientText from "./GradientText";
import { TbTargetArrow } from "react-icons/tb";
import { TbFlag3Filled } from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";

const cardData = [
  {
    title: "Get Challenges",
    desc: "Discover exciting tasks tailored to boost your growt.",
    icon: <TbTargetArrow className="text-5xl" />,
  },
  {
    title: "Complete Challenges",
    desc: "Show your skills and tick of each task with ease.",
    icon: <TbFlag3Filled className="text-5xl" />,
  },
  {
    title: "Earn Coins & Money",
    desc: "Turn your efforts into real rewards and success.",
    icon: <BiSolidDollarCircle className="text-5xl" />,
  },
];

const Steps = () => {
  return (
    <section className="flex flex-col gap-10 items-center w-full md:px-[5vw]">
      <div className="flex flex-col gap-3 w-full items-center">
        <p className="text-md font-semibold">3 Easy Steps</p>
        <h2 className="text-4xl font-bold">
          How it <GradientText text="Works" />
        </h2>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 mt-10 px-10 md:px-0">
          {cardData.map((item, i) => {
            return (
              <CardBackground key={i}>
                <div className="w-full flex flex-col items-center gap-4 py-10 px-12">
                  {item.icon}
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-center text-md">{item.desc}</p>
                </div>
              </CardBackground>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
