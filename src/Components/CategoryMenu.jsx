import React, { useState } from "react";
import {
  FaLaptop,
  FaGamepad,
  FaCamera,
  FaCar,
  FaCouch,
  FaFootballBall,
  FaCoffee,
  FaTshirt,
  FaBaby,
} from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { HiChevronDown, HiChevronRight, HiMenu } from "react-icons/hi";

const categories = [
  { title: "Mobile & Laptops", icon: <FaLaptop /> },
  { title: "Gaming Entertainment", icon: <FaGamepad /> },
  { title: "Image & Video", icon: <FaCamera /> },
  { title: "Vehicles", icon: <FaCar /> },
  { title: "Furniture", icon: <FaCouch /> },
  { title: "Sport", icon: <FaFootballBall /> },
  { title: "Food & Drinks", icon: <FaCoffee /> },
  { title: "Fashion Accessories", icon: <FaTshirt /> },
  { title: "Makeup Corner", icon: <GiLipstick /> },
  { title: "Baby Items", icon: <FaBaby /> },
];

const CategoryMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-[320px] z-50">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between rounded-t-xl border border-gray-200 bg-white px-5 py-4 shadow cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <HiMenu className="text-xl" />
          <h2 className="font-semibold">All Categories</h2>
        </div>

        <HiChevronDown
          className={`text-xl transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-white border-x border-b border-gray-200 shadow-xl transition-all duration-[1000ms] ease-in-out ${
          open
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between border-b border-gray-100 px-5 py-4 last:border-b-0 hover:bg-orange-50 cursor-pointer duration-300"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-500 group-hover:text-orange-500">
                {item.icon}
              </span>

              <span className="text-[15px] text-gray-700 group-hover:text-orange-500">
                {item.title}
              </span>
            </div>

            <HiChevronRight className="text-gray-400 group-hover:text-orange-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;