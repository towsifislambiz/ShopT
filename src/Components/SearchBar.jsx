import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-[700px] h-[52px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search Product..."
          className="h-full w-full px-5 text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-200"></div>

      {/* Category */}
      <button className="flex w-[220px] items-center justify-between px-5 text-sm text-gray-700 hover:bg-gray-50 transition">
        <span>All Categories</span>
        <HiChevronDown className="text-lg text-gray-500" />
      </button>

      {/* Search Button */}
      <button className="flex w-[130px] items-center justify-center gap-2 bg-[#F5B321] font-semibold text-black transition hover:bg-[#e9a400]">
        <IoSearch className="text-lg" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;