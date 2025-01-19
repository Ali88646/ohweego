import React from "react";

interface Props {
  text: string;
}

const GradientText = ({ text }: Props) => {
  return (
    <span className="bg-gradient-text-color bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default GradientText;
