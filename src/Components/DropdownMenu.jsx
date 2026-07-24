import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = ({ Text, Page1, Page2, Page3, Page4, Page5 }) => {
  return (
    <div className="relative inline-block group">
      {/* Menu Button */}
      <p className="flex items-center text-sm font-inter font-semibold text-[#1D1D1D] cursor-pointer">
        {Text}

        <MdKeyboardArrowDown className="ml-1 mt-1 text-xl duration-300 group-hover:rotate-180" />
      </p>

      {/* Dropdown */}
      <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-lg border border-gray-200 bg-white shadow-xl opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <ul className="py-2">
          <li>
            <a className="block px-4 py-2 text-[#797979] hover:text-[#ffbb38] hover:underline cursor-pointer">
              {Page1}
            </a>
          </li>

          <li>
            <a className="block px-4 py-2 text-[#797979] hover:text-[#ffbb38] hover:underline cursor-pointer">
              {Page2}
            </a>
          </li>

          <li>
            <a className="block px-4 py-2 text-[#797979] hover:text-[#ffbb38] hover:underline cursor-pointer">
              {Page3}
            </a>
          </li>

          <li>
            <a className="block px-4 py-2 text-[#797979] hover:text-[#ffbb38] hover:underline cursor-pointer">
              {Page4}
            </a>
          </li>

          <li>
            <a className="block px-4 py-2 text-[#797979] hover:text-[#ffbb38] hover:underline cursor-pointer">
              {Page5}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;