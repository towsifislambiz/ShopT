import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

/**
 * SectionHeader — matches shopo reference pattern:
 *   Left: yellow left-border accent + bold title + optional subtitle
 *   Right: "View More →" link
 *
 * Props: title, subtitle, viewMoreLink, viewMoreText, className
 */
const SectionHeader = ({
  title,
  subtitle,
  viewMoreLink = '/shop',
  viewMoreText = 'View More',
  className = '',
  center = false,
}) => {
  return (
    <div className={`flex justify-between items-end pb-6 ${className}`}>
      {/* Left: title block */}
      <div className={`${center ? 'flex flex-col items-center w-full' : ''}`}>
        {/* Yellow left border accent */}
        {!center && (
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1 h-8 bg-[#FFBB38] rounded-full block" />
            <span className="font-inter font-semibold text-sm text-[#FFBB38] uppercase tracking-wider">
              {subtitle || title}
            </span>
          </div>
        )}

        <h2 className={`font-inter font-bold text-[28px] text-[#1D1D1D] ${center ? 'text-center mt-2' : ''}`}>
          {title}
        </h2>

        {center && subtitle && (
          <p className="font-inter text-sm text-gray-500 mt-2 text-center">{subtitle}</p>
        )}
      </div>

      {/* Right: View More */}
      {!center && viewMoreLink && (
        <Link
          to={viewMoreLink}
          className="group flex items-center gap-1.5 font-inter font-semibold text-sm text-[#1D1D1D] hover:text-[#FFBB38] transition-colors duration-200 cursor-pointer whitespace-nowrap mb-1"
        >
          {viewMoreText}
          <HiArrowRight className="arrow text-base" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
