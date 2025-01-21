"use client";

import React, { useState } from "react";
import Question from "./Question";

const faqData = [
  {
    question: "What are the benefits of joining your Agency?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscingore text",
  },
  {
    question: "What are the benefits of joining your Agency?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscingore text",
  },
  {
    question: "What can I expect once I join Ohweego?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscingore text",
  },
  {
    question: "Is the Agency entirely free?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscingore text",
  },
  {
    question: "What are the benefits of joining your Agency?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscingore text",
  },
  {
    question: "What are the benefits of joining your Agency?",
    answer: "Yes, upgrade anytime as your business grows.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIsActive = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    // grid md:grid-cols-2 grid-cols-1
    <div className="w-full mt-10 flex flex-col  md:flex-row flex-wrap lg:px-[2vw] gap-5 items-center md:items-start justify-start md:justify-center">
      {faqData.map((faq, i) => {
        return (
          <Question
            key={i}
            data={faq}
            isActive={i === activeIndex}
            idx={i}
            onClick={() => handleIsActive(i)}
          />
        );
      })}
    </div>
  );
};

export default Questions;
