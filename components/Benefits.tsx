import React from "react";
import GradientText from "./GradientText";
// import { benefitsData } from "@/data";
import BenefitsCard from "./BenefitsCard";

const benefitsData = [
  {
    title: "Account Growth Opportunities",
    desc: "Gain access to tailored strategies and tools designed to help you grow your TikTok account and achieve greater visibility.",
    image: "/images/image-1.png",
    bgColor: "bg-secondary-color",
  },
  {
    title: "Earning Potential",
    desc: "Unlock the ability to turn your creativity and hard work into real monetary rewards, boosting both your income and motivation.",
    image: "/images/image-2.png",
    bgColor: "bg-primary-color",
  },
  {
    title: "Easy Challenge System",
    desc: "Experience a straightforward and engaging challenge system that makes completing tasks fun, simple, and highly rewarding.",
    image: "/images/image-3.png",
    bgColor: "bg-accent-color",
  },
];

const Benefits = () => {
  return (
    <section className="md:mt-56 mt-32 rounded-3xl">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-3">
          <p className="text-md font-semibold">Benefits</p>
          <h2 className="text-4xl font-bold">
            Why <GradientText text="Choose Us?" />
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:mt-16">
          {benefitsData.map((item, i) => {
            return <BenefitsCard key={i} cardData={item} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
