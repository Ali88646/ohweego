import React from "react";
import Container from "./Container";
import Questions from "./Questions";

const Faq = () => {
  return (
    <Container className="mt-16 md:px-0 px-[5vw] sm:px-[10vw] ">
      <div className="w-full flex flex-col justify-center gap-3">
        <h2 className="text-4xl font-semibold text-center">{"FAQ's"}</h2>
        <p className="text-lg text-center md:px-[25%]">
          Boost your TikTok with Ohweego’s LIVE & Agency Program: Real time
          growth, rewards, and challenges!
        </p>
      </div>
      <Questions />
    </Container>
  );
};

export default Faq;
