import { IoEye } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import Container from "./Container";
import ProgressCard from "./ProgressCard";
import React from "react";

const data = [
  {
    icon: <IoEye className="text-3xl md:text-4xl" />,
    progress: 50,
    text: "Views Reached",
  },
  {
    icon: <BiSolidLike className="text-3xl md:text-4xl" />,
    progress: 800,
    text: "Likes Given",
  },
  {
    icon: <HiUsers className="text-3xl md:text-4xl" />,
    progress: 15,
    text: "Followers Gain",
  },
];

const Progress = () => {
  return (
    <Container className="mt-36">
      <div className="w-full flex flex-col md:flex-row md:gap-5  justify-around items-center">
        {data.map((item, index) => {
          return (
            <ProgressCard
              key={index}
              data={item}
              index={index}
              length={data.length}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Progress;
