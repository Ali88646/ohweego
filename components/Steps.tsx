import React from "react";
import CardBackground from "./CardBackground";
import GradientText from "./GradientText";
import { stepsCardData } from "@/data";

const Steps = () => {
  return (
    <section className="flex flex-col gap-10 items-center w-full md:px-[5vw] mt-36">
      <div className="flex flex-col gap-3 w-full items-center">
        <p className="text-md font-semibold">3 Easy Steps</p>
        <h2 className="text-4xl font-bold">
          How it <GradientText text="Works" />
        </h2>
        <div className="w-full grid sm:grid-cols-3 grid-cols-1 md:gap-10 gap-5 mt-10 px-10 sm:px-5 md:px-0 ">
          {stepsCardData.map((item, i) => {
            return (
              <CardBackground key={i}>
                <div className="w-full flex flex-col items-center gap-4 py-10 px-12 sm:px-6 md:px-12">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-center">
                    {item.title}
                  </h3>
                  <p className="text-center text-md ">{item.desc}</p>
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
