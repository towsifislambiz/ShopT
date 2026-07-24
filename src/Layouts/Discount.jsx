import React from 'react'
import { CiMail } from 'react-icons/ci'
import Container from '../Components/Container'

const Discount = () => {
  return (
    <section className='bg-sky-100 mb-15'>
      
<Container>
<div className='flex justify-center flex-col items-center'>
    <h1 className='text-4xl font-inter font-bold text-[#222222] pt-20'>Get <span className='text-[#FFBB38]'>
        20% </span> Off Discount Coupon</h1>

        <p className='font-inter font-normal text-lg text-black pt-2'>by Subscribe our Newsletter</p>

           <div className="mt-3 flex items-stretch  rounded shadow-sm overflow-hidden mt-8 mb-20">
          <div className="flex items-center bg-white">
            <span className="pl-3 text-slate-400">
              <CiMail size={20} />
            </span>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-100 border-none outline-none px-3 py-4 text-xs text-slate-700 placeholder-slate-400 placeholder:text-base"
            />
          </div>
          <button
            type="button"
            className="whitespace-nowrap px-4 py-2 text-sm font-bold text-slate-800 bg-amber-400 hover:bg-amber-500 transition-colors w-40"
          >
            Get the Coupon
          </button>
        </div>
</div>


</Container>
         
    </section>
  )
}

export default Discount

