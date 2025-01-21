import React from "react";

interface Props {
  data: {
    icon: React.ReactElement;
    progress: number;
    text: string;
  };
  index: number;
  length: number;
}

const ProgressCard = ({ data, index, length }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center p-4  relative">
        <div className="w-full flex justify-center">{data.icon}</div>
        <h2 className="md:text-6xl text-4xl font-bold">+{data.progress}M</h2>
        <p className="md:text-xl text-lg md:font-semibold text-gray-200">
          {data.text}
        </p>
      </div>
      {index < length - 1 && (
        <div className="bg-devisor-bg w-0.5 h-[100px] hidden md:block"></div>
      )}
    </>
  );
};

export default ProgressCard;
