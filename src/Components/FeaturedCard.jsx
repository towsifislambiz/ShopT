import React from 'react'
import { FaExpand, FaRegHeart, FaStar } from 'react-icons/fa'
import { IoSyncOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag } from 'react-icons/md'

const FeaturedCard = ({
  image,
  title,
  oldPrice,
  price,
  rating = 4,
  badge,
  badgeColor = 'bg-red-500',
}) => {
  return (
    <div className='group relative w-[295px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300'>

      {/* Badge */}
      {badge && (
        <span className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded`}>
          {badge}
        </span>
      )}

      {/* Image */}
      <div className='relative overflow-hidden bg-[#F5F5F5] h-[230px]'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
        />

        {/* Hover action icons */}
        <div className='absolute top-4 right-4 flex flex-col gap-2.5 translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300'>
          <button className='w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer'>
            <FaExpand className='text-sm' />
          </button>
          <button className='w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer'>
            <FaRegHeart className='text-sm' />
          </button>
          <button className='w-9 h-9 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer'>
            <IoSyncOutline className='text-sm' />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='p-5'>
        {/* Stars */}
        <div className='flex gap-0.5 text-[#FFBB38] mb-2'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? 'text-[#FFBB38]' : 'text-gray-300'} />
          ))}
        </div>

        {/* Title */}
        <h3 className='font-inter font-semibold text-[16px] leading-6 text-[#2B3445] line-clamp-2 hover:text-[#FFBB38] cursor-pointer transition-colors duration-200'>
          {title}
        </h3>

        {/* Price / Cart row */}
        <div className='relative mt-4 h-11 overflow-hidden'>
          {/* Price */}
          <div className='absolute inset-0 flex items-center gap-3 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0'>
            {oldPrice && (
              <del className='text-base text-gray-400 font-medium'>{oldPrice}</del>
            )}
            <span className='text-lg font-bold text-[#FF4D4F]'>{price}</span>
          </div>

          {/* Add to cart */}
          <button className='absolute inset-0 flex items-center justify-center gap-2 bg-[#FFBB38] font-semibold text-[#1D1D1D] translate-y-12 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#f5aa0a] cursor-pointer rounded'>
            <MdOutlineShoppingBag className='text-lg' />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
