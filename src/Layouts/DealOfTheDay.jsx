import React, { useState, useEffect } from 'react'
import Container from '../Components/Container'
import Card1 from '../assets/Card1.png'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { FaRegHeart, FaStar } from 'react-icons/fa'

// Countdown to end of day
const getEndOfDay = () => {
  const now = new Date()
  const end = new Date()
  end.setHours(23, 59, 59, 0)
  return Math.floor((end - now) / 1000)
}

const TimeBox = ({ value, label }) => (
  <div className='flex flex-col items-center'>
    <div className='w-16 h-16 bg-[#1D1D1D] text-white rounded-xl flex items-center justify-center'>
      <span className='font-inter font-bold text-2xl'>{String(value).padStart(2, '0')}</span>
    </div>
    <span className='font-inter text-xs text-gray-500 mt-1.5 font-medium'>{label}</span>
  </div>
)

const deals = [
  {
    id: 1,
    image: Card1,
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    oldPrice: '$349.00',
    price: '$229.00',
    rating: 5,
    sold: 68,
    total: 100,
    badge: '34% OFF',
  },
  {
    id: 2,
    image: Card1,
    title: 'Apple AirPods Pro 2nd Generation Active Noise Cancellation',
    oldPrice: '$249.00',
    price: '$179.00',
    rating: 5,
    sold: 82,
    total: 100,
    badge: '28% OFF',
  },
  {
    id: 3,
    image: Card1,
    title: 'Samsung Galaxy S24 Ultra 5G 256GB Smartphone',
    oldPrice: '$1199.00',
    price: '$949.00',
    rating: 4,
    sold: 45,
    total: 100,
    badge: '21% OFF',
  },
  {
    id: 4,
    image: Card1,
    title: 'LG 27" 4K UHD IPS Monitor with USB-C',
    oldPrice: '$599.00',
    price: '$399.00',
    rating: 4,
    sold: 55,
    total: 100,
    badge: '33% OFF',
  },
]

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState(getEndOfDay())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? getEndOfDay() : prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <section className='pb-15'>
      <Container>
        {/* Header row */}
        <div className='flex justify-between items-center pb-7'>
          <div>
            <h1 className='font-bold font-inter text-[32px] text-[#1D1D1D]'>Deal of The Day</h1>
            <p className='font-inter text-sm text-gray-500 mt-1'>Limited time offers. Don't miss out!</p>
          </div>

          {/* Countdown timer */}
          <div className='flex items-center gap-3'>
            <span className='font-inter font-semibold text-sm text-gray-600 mr-1'>Ends in:</span>
            <TimeBox value={hours} label='Hours' />
            <span className='font-inter font-bold text-2xl text-[#FFBB38] -mt-4'>:</span>
            <TimeBox value={minutes} label='Minutes' />
            <span className='font-inter font-bold text-2xl text-[#FFBB38] -mt-4'>:</span>
            <TimeBox value={seconds} label='Seconds' />
          </div>
        </div>

        {/* Deal cards */}
        <div className='grid grid-cols-4 gap-6'>
          {deals.map((deal) => (
            <div key={deal.id} className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300'>
              {/* Badge */}
              <div className='relative bg-[#FFF8ED] h-[200px] flex items-center justify-center'>
                <span className='absolute top-3 left-3 bg-[#FFBB38] text-[#1D1D1D] text-xs font-bold px-2.5 py-1 rounded-full'>
                  {deal.badge}
                </span>
                <button className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer'>
                  <FaRegHeart className='text-sm' />
                </button>
                <img
                  src={deal.image}
                  alt={deal.title}
                  className='w-[140px] h-[150px] object-contain transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              {/* Content */}
              <div className='p-5'>
                {/* Stars */}
                <div className='flex gap-0.5 text-[#FFBB38] mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < deal.rating ? 'text-[#FFBB38]' : 'text-gray-200'} />
                  ))}
                </div>

                <h3 className='font-inter font-semibold text-[14px] leading-[1.5] text-[#2B3445] line-clamp-2 hover:text-[#FFBB38] cursor-pointer transition-colors duration-200 mb-3'>
                  {deal.title}
                </h3>

                {/* Price */}
                <div className='flex items-center gap-2 mb-4'>
                  <span className='font-inter font-bold text-lg text-[#FF4D4F]'>{deal.price}</span>
                  <del className='font-inter text-sm text-gray-400'>{deal.oldPrice}</del>
                </div>

                {/* Progress bar */}
                <div className='mb-4'>
                  <div className='flex justify-between text-xs font-inter text-gray-500 mb-1.5'>
                    <span>Sold: {deal.sold}</span>
                    <span>Available: {deal.total - deal.sold}</span>
                  </div>
                  <div className='w-full h-2 bg-gray-100 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-[#FFBB38] rounded-full transition-all duration-500'
                      style={{ width: `${deal.sold}%` }}
                    />
                  </div>
                </div>

                {/* Add to cart */}
                <button className='w-full flex items-center justify-center gap-2 py-3 bg-[#1D1D1D] text-white font-inter font-semibold text-sm rounded-xl hover:bg-[#FFBB38] hover:text-[#1D1D1D] transition-colors duration-300 cursor-pointer'>
                  <MdOutlineShoppingBag className='text-lg' />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DealOfTheDay
