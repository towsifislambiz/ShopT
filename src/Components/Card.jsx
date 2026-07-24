import React from "react";
import {
  FaExpand,
  FaRegHeart,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { IoSyncOutline } from "react-icons/io5";

const Card = ({
  image,
  title,
  oldPrice,
  price,
  rating = 3,
  ratingStart = 1,
}) => {
  return (
    <div className="group w-[300px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-[270px] object-contain duration-300 group-hover:scale-105"
        />

        {/* Right Side Icons */}
        <div className="absolute top-5 right-4 flex flex-col gap-3 translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300">

          <button className="w-10 h-10 rounded bg-white shadow flex items-center justify-center hover:bg-[#FFB321] hover:text-white duration-300 cursor-pointer">
            <FaExpand />
          </button>

          <button className="w-10 h-10 rounded bg-white shadow flex items-center justify-center hover:bg-[#FFB321] hover:text-white duration-300 cursor-pointer">
            <FaRegHeart />
          </button>

          <button className="w-10 h-10 rounded bg-white shadow flex items-center justify-center hover:bg-[#FFB321] hover:text-white duration-300 cursor-pointer">
            <IoSyncOutline />
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="p-5">

      {/* Rating */}
<div className="flex gap-1 text-[#FFB321] mb-3">
  {[...Array(rating)].map((_, index) => (
    <FaStar key={index} />
  ))}
</div>

        {/* Title */}
        <h3 className="text-[20px] font-bold leading-7 text-[#2B3445] line-clamp-2 hover:text-[#2563eb] cursor-pointer duration-300">
          {title}
        </h3>

        {/* Price / Button */}
        <div className="relative mt-4 h-12 overflow-hidden">

          {/* Price */}
          <div className="absolute inset-0 flex items-center gap-3 duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
            <del className="text-lg text-gray-400">
              {oldPrice}
            </del>

            <span className="text-xl font-bold text-[#FF4D4F]">
              {price}
            </span>
          </div>

          {/* Add To Cart */}
          <button className="absolute inset-0 flex items-center justify-center gap-2 bg-[#FFB321] font-semibold text-black translate-y-12 group-hover:translate-y-0 duration-300 hover:bg-[#f5aa0a] cursor-pointer">

            <FaShoppingBag />

            Add To Cart

          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;