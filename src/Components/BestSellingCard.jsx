import { FaExpand, FaRegHeart, FaStar } from "react-icons/fa";
import { IoSyncOutline } from "react-icons/io5";

const BestSellingCard = ({
  image1,
  title,
  oldPrice,
  price,
}) => {
  return (
    <div className="group relative flex items-center gap-8 overflow-hidden  bg-white p-6 w-[620px]">

      {/* Product Image */}
      <div className="relative h-[180px] w-[220px] overflow-hidden">
        <img
          src={image1}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-3 flex gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <h3 className="w-[280px] text-xl font-semibold leading-8">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <del className="text-2xl text-gray-400">${oldPrice}</del>

          <span className="text-2xl font-bold text-red-500">
            ${price}
          </span>
        </div>

        <button className="mt-6 bg-[#FFBB38] px-8 py-3 font-semibold transition hover:bg-yellow-500 cursor-pointer">
          Add To Cart
        </button>
      </div>

      {/* Hover Icons */}
      <div className="absolute right-4 top-8 flex translate-x-16 flex-col gap-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        <button className="flex h-11 w-11 items-center justify-center rounded bg-gray-100 transition hover:bg-yellow-400">
          <FaExpand />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded bg-gray-100 transition hover:bg-yellow-400">
          <FaRegHeart />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded bg-gray-100 transition hover:bg-yellow-400">
          <IoSyncOutline />
        </button>
      </div>
    </div>
  );
};

export default BestSellingCard;