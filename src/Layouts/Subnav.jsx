import React from 'react'
import Container from "../Components/Container"
import Image from "../Components/Image"
import USA from "../assets/USA.png"
import { Link } from 'react-router-dom'

const Subnav = () => {
  return (
    <section className='bg-white border-b border-gray-100'>
      <Container>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-6 py-3'>
            <li>
              <Link to="/profile" className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>
                Account
              </Link>
            </li>
            <li>
              <Link to="/tracking-order" className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>
                Track Order
              </Link>
            </li>
            <li>
              <Link to="/contact" className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>
                Support
              </Link>
            </li>
          </ul>
          <div className='flex justify-center items-center gap-1'>
            <span className="w-5 h-5 rounded-full block mr-1">
              <Image className="w-5 h-5" src={USA} />
            </span>
            <ul className='flex justify-between gap-6'>
              <li className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>United States</li>
              <li className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>USD</li>
              <li className='font-inter font-medium text-sm text-[#222222] cursor-pointer hover:text-[#FFBB38] transition-colors duration-200'>EN</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Subnav
