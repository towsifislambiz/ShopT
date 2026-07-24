import React, { useState } from 'react'
import Container from '../Components/Container'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import { MdOutlineShoppingBag } from 'react-icons/md'

const slides = [
  {
    id: 1,
    tag: 'SUMMER SALE 2024',
    title: 'Up to 40% Off',
    subtitle: 'Top Electronics & Gadgets',
    description: 'Discover the latest tech deals with unbeatable prices. Shop now and save big on premium products.',
    ctaText: 'Shop Now',
    bgColor: 'from-[#1a1a2e] to-[#16213e]',
    accentColor: '#FFBB38',
    imageBg: '#2a2a4a',
  },
  {
    id: 2,
    tag: 'NEW ARRIVALS',
    title: 'Fresh Styles for',
    subtitle: 'Every Occasion',
    description: 'Explore our newest collection of fashion-forward pieces designed to elevate your everyday look.',
    ctaText: 'Explore Now',
    bgColor: 'from-[#0f3460] to-[#16213e]',
    accentColor: '#FFBB38',
    imageBg: '#1a4a7a',
  },
  {
    id: 3,
    tag: 'FLASH DEAL',
    title: 'Gaming Gear',
    subtitle: 'Pro Level Performance',
    description: 'Level up your gaming setup with our premium range of accessories, peripherals, and hardware.',
    ctaText: 'View Deals',
    bgColor: 'from-[#1e1b2e] to-[#2d1b4e]',
    accentColor: '#FFBB38',
    imageBg: '#3a2a6a',
  },
]

const HeroBanner2 = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]

  return (
    <div className='mt-8 mb-12'>
      <Container>
        <div className={`relative w-full h-[540px] rounded-2xl overflow-hidden bg-gradient-to-r ${slide.bgColor} transition-all duration-700`}>

          {/* Background decorative circles */}
          <div className='absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-10 bg-white' />
          <div className='absolute -bottom-32 -left-20 w-[320px] h-[320px] rounded-full opacity-5 bg-white' />

          {/* Content */}
          <div className='relative z-10 flex h-full'>

            {/* Left text area */}
            <div className='flex flex-col justify-center pl-16 pr-8 w-1/2'>
              {/* Tag */}
              <span
                className='inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 rounded-full w-fit'
                style={{ backgroundColor: slide.accentColor, color: '#1D1D1D' }}
              >
                {slide.tag}
              </span>

              {/* Headline */}
              <h1 className='font-inter font-extrabold text-5xl leading-[1.15] text-white mb-3'>
                {slide.title}
              </h1>
              <h2 className='font-inter font-bold text-3xl mb-5' style={{ color: slide.accentColor }}>
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p className='font-inter text-gray-300 text-base leading-7 max-w-[380px] mb-8'>
                {slide.description}
              </p>

              {/* CTAs */}
              <div className='flex gap-4'>
                <button
                  className='flex items-center gap-2 px-7 py-3.5 font-inter font-bold text-[#1D1D1D] rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95'
                  style={{ backgroundColor: slide.accentColor }}
                >
                  <MdOutlineShoppingBag className='text-xl' />
                  {slide.ctaText}
                </button>
                <button className='flex items-center gap-2 px-7 py-3.5 font-inter font-semibold text-white border border-white/40 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200'>
                  View All
                  <HiArrowRight className='text-xl' />
                </button>
              </div>
            </div>

            {/* Right image placeholder area */}
            <div className='w-1/2 flex items-center justify-center pr-16'>
              <div
                className='w-[340px] h-[380px] rounded-2xl flex items-center justify-center relative overflow-hidden'
                style={{ backgroundColor: slide.imageBg }}
              >
                {/* Decorative inner glow */}
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent' />
                {/* Image Placeholder - Asset will be added later */}
                <div className='flex flex-col items-center gap-3 text-white/40'>
                  <MdOutlineShoppingBag className='text-7xl' />
                  <p className='text-sm font-inter'>Product Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow navigation */}
          <button
            onClick={prev}
            className='absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 cursor-pointer'
          >
            <HiArrowLeft className='text-xl' />
          </button>
          <button
            onClick={next}
            className='absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 cursor-pointer'
          >
            <HiArrowRight className='text-xl' />
          </button>

          {/* Dot indicators */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20'>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? 'w-8 h-2.5 bg-[#FFBB38]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroBanner2
