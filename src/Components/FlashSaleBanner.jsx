import React from "react";
import { HiChevronRight } from "react-icons/hi";
import Flash from "../assets/Flash.png";

const CountdownCircle = ({ value, label, colorClass }) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white shadow-sm">
        <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${colorClass}`}>
          {value}
        </span>
      </div>

      <span className="text-sm sm:text-base text-gray-800 font-medium">
        {label}
      </span>
    </div>
  );
};


const FlashSaleBanner = () => {

  const countdownItems = [
    { value: "0", label: "Days", colorClass: "text-red-500" },
    { value: "0", label: "Hours", colorClass: "text-blue-500" },
    { value: "0", label: "Minutes", colorClass: "text-green-600" },
    { value: "0", label: "Seconds", colorClass: "text-pink-500" },
  ];


  return (
    <section
      className="relative w-[640px] h-[505px] bg-[#FCF1E2] overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${Flash})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "contain",
      }}
    >

      <div className="relative z-10 px-8 py-10">

        {/* Countdown */}
        <div className="flex gap-6 mb-8 mt-10">

          {countdownItems.map((item) => (
            <CountdownCircle
              key={item.label}
              value={item.value}
              label={item.label}
              colorClass={item.colorClass}
            />
          ))}

        </div>


        {/* Text */}
        <div className="max-w-md">

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mt-10 mb-5">
            WOO! Flash Sale
          </h1>


          <a
            href="#"
            className="inline-flex items-center gap-1 text-lg font-semibold text-gray-900 border-b-2 border-amber-500 pb-1 mt-10"
          >
            Shop Now
            <HiChevronRight />
          </a>

        </div>


      </div>

    </section>
  );
};


export default FlashSaleBanner;