import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

/**
 * RatingStars — half-star support
 * Props: rating (0–5), count, size ('sm'|'md'|'lg')
 */
const RatingStars = ({ rating = 0, count, size = 'md' }) => {
  const sizeClass = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' }[size];

  const stars = [...Array(5)].map((_, i) => {
    const full = i + 1 <= Math.floor(rating);
    const half = !full && i < rating && rating - i >= 0.5;
    return full ? (
      <FaStar key={i} className={`text-[#FFBB38] ${sizeClass}`} />
    ) : half ? (
      <FaStarHalfAlt key={i} className={`text-[#FFBB38] ${sizeClass}`} />
    ) : (
      <FaRegStar key={i} className={`text-gray-300 ${sizeClass}`} />
    );
  });

  return (
    <div className="flex items-center gap-0.5">
      {stars}
      {count !== undefined && (
        <span className="font-inter text-xs text-gray-400 ml-1.5">({count})</span>
      )}
    </div>
  );
};

export default RatingStars;
