import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import BestSellingCard from '../Components/BestSellingCard'
import BS1 from "../assets/BS1.png"

const TopSelling = () => {
  return (
    <section className='pb-15'>
      <Container>
        <div className='flex justify-between pb-5'>
            <Header Text="Top Selling Products"/>
            <Button/>
        </div>


        <div className='flex justify-between flex-wrap gap-6'>
            <BestSellingCard image1={BS1} title="Senmei ipsum dolore eiusmod dolor officia do nisi" price="27.61" oldPrice="20.64"/>
            <BestSellingCard image1={BS1} title="Senmei ipsum dolore eiusmod dolor officia do nisi" price="27.61" oldPrice="20.64"/>
            <BestSellingCard image1={BS1} title="Senmei ipsum dolore eiusmod dolor officia do nisi" price="27.61" oldPrice="20.64"/>
            <BestSellingCard image1={BS1} title="Senmei ipsum dolore eiusmod dolor officia do nisi" price="27.61" oldPrice="20.64"/>
        </div>
      </Container>
    </section>
  )
}

export default TopSelling
