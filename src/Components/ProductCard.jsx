import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaRegStar, FaExpand, FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoSyncOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { addToCart } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';

/**
 * Unified ProductCard — matches shopo.quomodothemes.website card design.
 *
 * Props:
 *  id, image, title, price, oldPrice, rating, ratingCount, badge, badgeColor, category
 *  size: 'sm' | 'md' (default 'md')
 */
const ProductCard = ({
  id = 1,
  image,
  title = 'Product Title',
  price = '$0.00',
  oldPrice,
  rating = 4,
  ratingCount = 0,
  badge,
  badgeColor = 'bg-[#FF4D4F]',
  category,
  size = 'md',
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ id, title, price: parseFloat(price.replace(/[^0-9.]/g, '')), image }));
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist({ id, title, price, image }));
    }
  };

  const cardWidth = size === 'sm' ? 'w-[220px]' : 'w-full';

  return (
    <div className={`group relative ${cardWidth} bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300`}>

      {/* ── Badge ── */}
      {badge && (
        <span className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-[11px] font-bold px-2 py-0.5 rounded`}>
          {badge}
        </span>
      )}

      {/* ── Image area ── */}
      <Link to={`/single-product?id=${id}`}>
        <div className="relative h-[230px] bg-[#F5F5F5] overflow-hidden flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            /* Image Placeholder - Replace with ShopT asset later */
            <div className="w-full h-full flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
              <MdOutlineShoppingBag className="text-5xl text-gray-300" />
            </div>
          )}

          {/* ── Hover action icons ── */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button
              title="Quick View"
              className="w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer text-gray-600"
            >
              <FaExpand className="text-xs" />
            </button>
            <button
              onClick={handleWishlist}
              title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              className={`w-9 h-9 rounded-lg shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer ${
                isWishlisted ? 'bg-[#FFBB38] text-white' : 'bg-white text-gray-600'
              }`}
            >
              {isWishlisted ? <FaHeart className="text-xs" /> : <FaRegHeart className="text-xs" />}
            </button>
            <button
              title="Compare"
              className="w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer text-gray-600"
            >
              <IoSyncOutline className="text-sm" />
            </button>
          </div>
        </div>
      </Link>

      {/* ── Content ── */}
      <div className="p-4">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            i < Math.floor(rating)
              ? <FaStar key={i} className="text-[#FFBB38] text-xs" />
              : <FaRegStar key={i} className="text-gray-300 text-xs" />
          ))}
          {ratingCount > 0 && (
            <span className="text-[11px] text-gray-400 ml-1">({ratingCount})</span>
          )}
        </div>

        {/* Title */}
        <Link to={`/single-product?id=${id}`}>
          <h3 className="font-inter font-semibold text-[14px] leading-5 text-[#2B3445] line-clamp-2 hover:text-[#FFBB38] transition-colors duration-200 cursor-pointer mb-3">
            {title}
          </h3>
        </Link>

        {/* Price / Add-to-cart slide */}
        <div className="relative h-10 overflow-hidden">
          {/* Price row */}
          <div className="absolute inset-0 flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
            {oldPrice && (
              <del className="text-sm text-gray-400 font-medium">{oldPrice}</del>
            )}
            <span className="text-base font-bold text-[#FF4D4F]">{price}</span>
          </div>
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="absolute inset-0 flex items-center justify-center gap-1.5 bg-[#FFBB38] text-[#1D1D1D] font-inter font-bold text-xs translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#f5aa0a] cursor-pointer rounded-lg"
          >
            <MdOutlineShoppingBag className="text-base" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
