import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

/**
 * Pagination — shopo style
 * Props: currentPage, totalPages, onPageChange
 */
const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      pages.push(i);
    }
  }

  // Insert ellipsis
  const pagesWithEllipsis = [];
  let prev = null;
  for (const page of pages) {
    if (prev && page - prev > 1) pagesWithEllipsis.push('...');
    pagesWithEllipsis.push(page);
    prev = page;
  }

  const btnBase =
    'w-10 h-10 flex items-center justify-center rounded-lg font-inter font-semibold text-sm transition-all duration-200 cursor-pointer';

  return (
    <div className="flex items-center gap-2">
      {/* Prev */}
      <button
        onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`${btnBase} ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed bg-gray-50'
            : 'text-[#1D1D1D] bg-white shadow-sm hover:bg-[#FFBB38] hover:text-white'
        }`}
      >
        <MdOutlineKeyboardArrowLeft className="text-xl" />
      </button>

      {pagesWithEllipsis.map((page, idx) =>
        page === '...' ? (
          <span key={`e-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange && onPageChange(page)}
            className={`${btnBase} ${
              page === currentPage
                ? 'bg-[#FFBB38] text-[#1D1D1D] shadow-md'
                : 'bg-white text-[#1D1D1D] shadow-sm hover:bg-[#FFBB38] hover:text-white'
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`${btnBase} ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed bg-gray-50'
            : 'text-[#1D1D1D] bg-white shadow-sm hover:bg-[#FFBB38] hover:text-white'
        }`}
      >
        <MdOutlineKeyboardArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default Pagination;
