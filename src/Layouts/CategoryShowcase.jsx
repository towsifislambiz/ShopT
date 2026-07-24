import React from 'react'
import Container from '../Components/Container'
import {
  FaLaptop,
  FaGamepad,
  FaCamera,
  FaCar,
  FaCouch,
  FaFootballBall,
  FaCoffee,
  FaTshirt,
  FaBaby,
} from 'react-icons/fa'
import { GiLipstick } from 'react-icons/gi'
import { MdPhoneAndroid, MdHeadphones } from 'react-icons/md'

const categories = [
  { icon: <FaLaptop />, label: 'Laptops', color: 'bg-blue-50 text-blue-500', hoverBg: 'hover:bg-blue-500' },
  { icon: <MdPhoneAndroid />, label: 'Phones', color: 'bg-green-50 text-green-500', hoverBg: 'hover:bg-green-500' },
  { icon: <FaGamepad />, label: 'Gaming', color: 'bg-purple-50 text-purple-500', hoverBg: 'hover:bg-purple-500' },
  { icon: <FaCamera />, label: 'Camera', color: 'bg-pink-50 text-pink-500', hoverBg: 'hover:bg-pink-500' },
  { icon: <MdHeadphones />, label: 'Audio', color: 'bg-orange-50 text-orange-500', hoverBg: 'hover:bg-orange-500' },
  { icon: <FaCar />, label: 'Vehicles', color: 'bg-red-50 text-red-500', hoverBg: 'hover:bg-red-500' },
  { icon: <FaCouch />, label: 'Furniture', color: 'bg-amber-50 text-amber-600', hoverBg: 'hover:bg-amber-500' },
  { icon: <FaTshirt />, label: 'Fashion', color: 'bg-teal-50 text-teal-500', hoverBg: 'hover:bg-teal-500' },
  { icon: <GiLipstick />, label: 'Beauty', color: 'bg-rose-50 text-rose-500', hoverBg: 'hover:bg-rose-500' },
  { icon: <FaBaby />, label: 'Baby', color: 'bg-sky-50 text-sky-500', hoverBg: 'hover:bg-sky-500' },
  { icon: <FaFootballBall />, label: 'Sports', color: 'bg-lime-50 text-lime-600', hoverBg: 'hover:bg-lime-500' },
  { icon: <FaCoffee />, label: 'Food', color: 'bg-yellow-50 text-yellow-600', hoverBg: 'hover:bg-yellow-500' },
]

const CategoryShowcase = () => {
  return (
    <section className='pb-15'>
      <Container>
        {/* Section header */}
        <div className='flex justify-between items-center pb-6'>
          <div>
            <h1 className='font-bold font-inter text-[32px] text-[#1D1D1D]'>Shop by Category</h1>
            <p className='font-inter text-sm text-gray-500 mt-1'>Browse products by category</p>
          </div>
          <button className='group flex items-center gap-2 text-black font-semibold text-lg cursor-pointer'>
            <span>View All</span>
            <span className='arrow text-xl mt-1'>→</span>
          </button>
        </div>

        {/* Category grid */}
        <div className='grid grid-cols-6 gap-4'>
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-3 p-5 rounded-2xl ${cat.color} cursor-pointer transition-all duration-300 hover:text-white ${cat.hoverBg} hover:shadow-lg hover:-translate-y-1`}
            >
              <span className='text-3xl transition-transform duration-300 group-hover:scale-110'>
                {cat.icon}
              </span>
              <span className='font-inter font-semibold text-sm text-center'>
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CategoryShowcase
