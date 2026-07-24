import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import CategoryCard from "../Components/CategoryCard"
import Card from "../Components/Card"
import Category2 from "../assets/Category2.png"
import Card1 from "../assets/Card1.png"
import PS1 from "../assets/PS1.png"
import Image from '../Components/Image'
const PopularSell = () => {
  return (
    <section className='pb-15'>
      <Container>
        <div className='flex justify-between pb-5'>
            <Header Text="Popular Sales"/>
            <Button/>
        </div>

        <div className='flex justify-between pb-15'>
<CategoryCard bgImage={Category2}/>
     <Card
  image={Card1}
  title="Xoggle aute et pariatur adipisicing nostrud et "
  oldPrice="$27.27"
  price="$18.73"
  rating={3}
  ratingStart={2}
/>
     <Card
  image={Card1}
  title="Xoggle aute et pariatur adipisicing nostrud et "
  oldPrice="$27.27"
  price="$18.73"
  rating={3}
  ratingStart={2}
/>
     <Card
  image={Card1}
  title="Xoggle aute et pariatur adipisicing nostrud et "
  oldPrice="$27.27"
  price="$18.73"
  rating={3}
  ratingStart={2}
/>
        </div>


        <div className='w-full h-[330px] cursor-pointer'>
<Image className="w-full h-[330px] bg-contain" src={PS1}/>
        </div>
      </Container>
    </section>
  )
}

export default PopularSell
