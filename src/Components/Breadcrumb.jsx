import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';

/**
 * Breadcrumb — shopo style with yellow separator
 * Props: items = [{ label, href }]  (last item has no href = current)
 */
const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-1.5 font-inter text-sm">
      <Link to="/" className="flex items-center text-gray-500 hover:text-[#FFBB38] transition-colors duration-200">
        <IoHomeOutline className="text-base" />
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <MdOutlineKeyboardArrowRight className="text-gray-400 text-lg flex-shrink-0" />
          {item.href ? (
            <Link
              to={item.href}
              className="text-gray-500 hover:text-[#FFBB38] transition-colors duration-200 capitalize"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1D1D1D] font-medium capitalize">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
