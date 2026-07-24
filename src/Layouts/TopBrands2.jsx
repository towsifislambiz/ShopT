import React from 'react'
import Container from '../Components/Container'
import Brands from '../Components/Brands'
import Brand1 from '../assets/Brand1.png'
import Brand2 from '../assets/Brand2.png'
import Brand3 from '../assets/Brand3.png'
import Brand4 from '../assets/Brand4.png'
import Brand5 from '../assets/Brand5.png'
import Brand6 from '../assets/Brand6.png'
import Brand7 from '../assets/Brand7.png'
import Brand8 from '../assets/Brand8.png'

const TopBrands2 = () => {
  const brandList = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8]

  return (
    <section className='pb-15'>
      <Container>
        {/* Section header */}
        <div className='flex justify-between items-center pb-8'>
          <h1 className='font-bold font-inter text-[32px] text-[#1D1D1D]'>Top Brands</h1>
          <p className='font-inter text-sm text-gray-500'>Trusted by millions worldwide</p>
        </div>

        {/* Brand row with subtle divider style */}
        <div className='bg-white rounded-2xl shadow-sm px-8 py-6'>
          <div className='flex justify-between items-center flex-wrap gap-y-4'>
            {brandList.map((brand, idx) => (
              <div
                key={idx}
                className='group cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-100 opacity-60 grayscale hover:grayscale-0'
              >
                <Brands src={brand} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopBrands2
