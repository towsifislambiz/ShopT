import React from 'react'




const SmallProductCard = ({
  image,
  title,
  oldPrice,
  price,
}) => {
  return (
    <div className="group flex w-[410px] items-center gap-5  border-gray-200 bg-white p-5 ">

      {/* Product Image */}
      <div className="w-[90px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[80px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="cursor-pointer text-lg font-semibold text-[#222] transition-colors duration-300 hover:text-[#ff6b00]">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <del className="text-[18px] font-semibold text-gray-400">
            ${oldPrice}
          </del>

          <span className="text-[18px] font-bold text-red-500">
            ${price}
          </span>
        </div>
      </div>

    </div>
  );
};

export default SmallProductCard;
