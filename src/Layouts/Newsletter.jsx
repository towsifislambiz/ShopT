import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { MdSend } from 'react-icons/md'
import Container from '../Components/Container'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className='mb-15'>
      <Container>
        <div className='relative bg-gradient-to-r from-[#1D1D1D] to-[#333333] rounded-3xl overflow-hidden px-16 py-16'>
          {/* Decorative circles */}
          <div className='absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#FFBB38]/10' />
          <div className='absolute -bottom-20 -left-12 w-56 h-56 rounded-full bg-[#FFBB38]/5' />

          <div className='relative z-10 flex flex-col items-center text-center'>
            {/* Tag */}
            <span className='bg-[#FFBB38] text-[#1D1D1D] text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6'>
              Newsletter
            </span>

            <h2 className='font-inter font-extrabold text-4xl text-white mb-3'>
              Get <span className='text-[#FFBB38]'>20% Off</span> Your First Order
            </h2>
            <p className='font-inter font-normal text-base text-gray-400 mb-10 max-w-[480px] leading-7'>
              Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and special promotions.
            </p>

            {submitted ? (
              <div className='bg-[#FFBB38]/15 border border-[#FFBB38]/40 text-[#FFBB38] font-inter font-semibold px-8 py-4 rounded-xl'>
                🎉 Thank you! Your coupon code has been sent to your email.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex items-stretch w-full max-w-[560px] rounded-xl overflow-hidden shadow-2xl'>
                <div className='flex items-center bg-white flex-1 pl-4'>
                  <CiMail className='text-2xl text-gray-400 flex-shrink-0' />
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    required
                    className='w-full h-full px-3 py-4 text-sm outline-none text-gray-700 placeholder-gray-400 font-inter'
                  />
                </div>
                <button
                  type='submit'
                  className='flex items-center gap-2 px-7 py-4 bg-[#FFBB38] font-inter font-bold text-sm text-[#1D1D1D] hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer whitespace-nowrap'
                >
                  <MdSend className='text-lg' />
                  Get Coupon
                </button>
              </form>
            )}

            {/* Trust badges */}
            <div className='flex gap-8 mt-10'>
              {['No Spam', 'Unsubscribe Anytime', '100% Free'].map((badge) => (
                <div key={badge} className='flex items-center gap-2 text-gray-400 font-inter text-xs'>
                  <span className='w-4 h-4 rounded-full bg-[#FFBB38] flex items-center justify-center text-[#1D1D1D] text-[10px] font-bold flex-shrink-0'>✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Newsletter
