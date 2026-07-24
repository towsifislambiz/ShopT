import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import CategoryCard from "../Components/CategoryCard"
import Category1 from "../assets/Category1.png"
import Card from '../Components/Card'
import Card1 from "../assets/Card1.png"

const Gamer = () => {
  return (
    <section className='pb-15'>
      <Container>
        <div>
           <div className='flex justify-between items-center'>
             <Header Text="Gamer World"/>

             <Button/>
           </div>

           <div className='flex justify-between mt-5'>
            <CategoryCard bgImage={Category1}/>

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
  oldPrice="$50"
  price="$35"
  rating={3}
  ratingStart={2}
/>
            <Card
  image={Card1}
  title="Xoggle aute et pariatur adipisicing nostrud et "
  oldPrice="$50"
  price="$35"
  rating={3}
  ratingStart={2}
/>
           </div>
        </div>
      </Container>
    </section>
  )
}

export default Gamer
