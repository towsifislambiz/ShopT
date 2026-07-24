import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Button = () => {
  return (
    <button className="group flex items-center gap-2 text-black font-semibold text-lg cursor-pointer">
      <span>View More</span>

      <HiArrowRight className="arrow text-xl mt-1" />
    </button>
  );
};

export default Button;