import React from 'react'
import Container from "../Components/Container"
import Header from '../Components/Header'
import Brands from '../Components/Brands'
import Brand1 from '../assets/Brand1.png'
import Brand2 from '../assets/Brand2.png'
import Brand3 from '../assets/Brand3.png'
import Brand4 from '../assets/Brand4.png'
import Brand5 from '../assets/Brand5.png'
import Brand6 from '../assets/Brand6.png'
import Brand7 from '../assets/Brand7.png'
import Brand8 from '../assets/Brand8.png'
import Brand9 from '../assets/Brand9.png'
import Brand10 from '../assets/Brand10.png'
import Brand11 from '../assets/Brand11.png'
import Brand12 from '../assets/Brand12.png'

const Brand = () => {
  return (
    <section className='pb-15'>
      <Container>
        <Header Text="Shop by Brand" className="pb-5"/>

        <div className='flex justify-between flex-wrap gap-y-2'>
            <Brands src={Brand1}/>
            <Brands src={Brand2}/>
            <Brands src={Brand3}/>
            <Brands src={Brand4}/>
            <Brands src={Brand5}/>
            <Brands src={Brand6}/>
            <Brands src={Brand7}/>
            <Brands src={Brand8}/>
            <Brands src={Brand9}/>
            <Brands src={Brand10}/>
            <Brands src={Brand11}/>
            <Brands src={Brand12}/>
        </div>
      </Container>
    </section>
  )
}

export default Brand
