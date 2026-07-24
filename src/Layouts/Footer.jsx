import React from 'react'
import Container from "../Components/Container"
import Image from "../Components/Image"
import Logo from "../assets/Logo.png" 
import Fimg from "../assets/Fimg.png" 
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='pb-5'>
      <Container>
<div className='pb-12'>
    <div className='flex justify-center pb-10  border-b-2 border-[#9A9A9A]/20 mb-12'>
   <Image className="w-70 h-24" src={Logo}/>
</div>
</div>


<div className='pb-5'>
    <div className='flex justify-between w-full pb-15 border-b-4 border-[#9A9A9A]/20  '>
   <div className='w-4/12'>
     <ul>
        <p className='font-inter font-medium text-xl text-[#2F2F2F]'>About Us</p>
        <p className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
    </ul>
   </div>

    <div className='flex justify-between w-8/12'>
  <ul>
        <p className='font-inter font-medium text-xl text-[#2F2F2F]'>Feature</p>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>About Us</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Terms Condition</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Best Products</li>
    </ul>
    <ul>
        <p className='font-inter font-medium text-xl text-[#2F2F2F]'>General Links</p>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Blog</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Tracking Order</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Become Seller</li>
    </ul>
    <ul>
        <p className='font-inter font-medium text-xl text-[#2F2F2F]'>Helpful</p>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Flash Sale</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>FAQ</li>
        <li className='font-inter font-normal text-base text-[#9A9A9A] w-[247px] leading-[28px] pt-5 cursor-pointer'>Support</li>
    </ul>
    </div>
  
</div>
</div>

<div className='flex justify-between'>
   <div className='flex '>
     <div className='gap-x-5 flex'>
        <span >
            <FaInstagram className='text-2xl text-[#797979]' />
        </span>
        <span><FaFacebookF  className='text-2xl text-[#797979]'/></span>
        <span><FaYoutube className='text-2xl text-[#797979]'/></span>
    </div>
    <p className='font-inter font-light text-base text-[#797979] pl-5'>©2022 <span className='font-medium text-[#222222]'>Quomodosoft</span> All rights reserved</p>
   </div>

   <div className='cursor-pointer'>
<Image src={Fimg}/>
   </div>
</div>
      </Container>
    </section>
  )
}

export default Footer
