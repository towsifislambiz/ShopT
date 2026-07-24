import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import Others from '../Components/Others'
import Oimg1 from "../assets/Oimg1.png"
import Oimg2 from "../assets/Oimg2.png"
import Oimg3 from "../assets/Oimg3.png"
import Oimg4 from "../assets/Oimg4.png"
import Oimg5 from "../assets/Oimg5.png"
import Oimg6 from "../assets/Oimg6.png"
import BSS1 from "../assets/BSS1.png"
import BSS2 from "../assets/BSS2.png"
import Image from '../Components/Image'

const BestSelller = () => {
  return (
    <section className='pb-15'>
      <Container>
       <div className='flex justify-between pb-5'>
<Header Text="Best Saller"/>
<Button/>
       </div>

       <div className='flex justify-between pb-15'>
<Others src={Oimg1} Text="Shopno BD"/>
<Others src={Oimg2} Text="Eecoms Shop"/>
<Others src={Oimg3} Text="Fusion X"/>
<Others src={Oimg4} Text="Rikayi Rox"/>
<Others src={Oimg5} Text="Habbriyi"/>
<Others src={Oimg6} Text="Rayhans"/>

       </div>


       <div className='flex justify-between'>
<div className='w-[645px] h-[330px] cursor-pointer '>
  <Image className="w-full h-[344px] bg-contain" src={BSS1}/>
</div>
<div className='w-[645px] h-[330px] cursor-pointer '>
    <Image className="w-full h-full bg-contain" src={BSS2}/>
</div>
       </div>
      </Container>
    </section>
  )
}

export default BestSelller
