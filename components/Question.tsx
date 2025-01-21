import React from "react";

interface Props {
  data: {
    question: string;
    answer: string;
  };
  isActive: boolean;
  onClick: (idx: number) => void;
  idx: number;
}

const Question = ({ data, isActive, onClick, idx }: Props) => {
  return (
    <div
      className={` p-[1px] rounded-xl bg-gradient-bg-color w-full md:w-[45%]`}
    >
      <div className="w-full h-full bg-main-bg-color md:px-5 md:py-4 px-3 py-2 rounded-xl">
        <div className="flex flex-col gap-2">
          <div
            onClick={() => onClick(idx)}
            className="flex justify-between gap-1 md:gap-0 cursor-pointer"
          >
            <h2 className="text-md md:text-xl font-semibold">
              {data.question}
            </h2>
            <div>
              <span className="text-2xl font-semibold ">
                {isActive ? "-" : "+"}
              </span>
            </div>
          </div>

          {isActive && <p className="text-md">{data.answer}</p>}
        </div>
      </div>
    </div>
  );
};

export default Question;
