import React from 'react'
import Container from '../Components/Container'
import { HiArrowRight } from 'react-icons/hi'
import BSS1 from '../assets/BSS1.png'
import BSS2 from '../assets/BSS2.png'
import Image from '../Components/Image'

const offerCards = [
  {
    id: 1,
    tag: 'Special Offer',
    title: 'Up to 50% Off',
    subtitle: 'Gaming Zone',
    description: 'Exclusive deals on top gaming gear, consoles & accessories.',
    cta: 'Shop Gaming',
    bgColor: '#0f3460',
    accentColor: '#FFBB38',
    img: BSS1,
  },
  {
    id: 2,
    tag: 'New Collection',
    title: 'Summer Fashion',
    subtitle: 'Trending Styles',
    description: 'Fresh arrivals for every season — curated just for you.',
    cta: 'Shop Fashion',
    bgColor: '#1e1b4b',
    accentColor: '#FFBB38',
    img: BSS2,
  },
]

const SpecialOffer = () => {
  return (
    <section className='pb-15'>
      <Container>
        <div className='flex justify-between gap-6'>
          {offerCards.map((card) => (
            <div
              key={card.id}
              className='relative flex-1 h-[280px] rounded-2xl overflow-hidden cursor-pointer group'
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Background image */}
              <div className='absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300'>
                <Image className='w-full h-full object-cover' src={card.img} />
              </div>

              {/* Content */}
              <div className='relative z-10 p-10 flex flex-col justify-center h-full'>
                <span
                  className='inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full w-fit'
                  style={{ backgroundColor: card.accentColor, color: '#1D1D1D' }}
                >
                  {card.tag}
                </span>
                <h2 className='font-inter font-extrabold text-3xl text-white mb-1'>{card.title}</h2>
                <h3 className='font-inter font-bold text-xl mb-2' style={{ color: card.accentColor }}>
                  {card.subtitle}
                </h3>
                <p className='font-inter text-sm text-white/70 max-w-[260px] leading-6 mb-5'>
                  {card.description}
                </p>
                <button className='flex items-center gap-2 font-inter font-bold text-sm w-fit px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer'
                  style={{ backgroundColor: card.accentColor, color: '#1D1D1D' }}
                >
                  {card.cta}
                  <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SpecialOffer
