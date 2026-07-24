import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import Card from "../Components/Card"
import Card1 from "../assets/Card1.png"
import NA1 from "../assets/NA1.png"
import Image from "../Components/Image"

const NewArrivals = () => {
  return (
    <section className='pb-15'> 
      <Container>
<div className='flex justify-between pb-5'>
    <Header Text="New Arrivals"/>
<Button/>
</div>

<div className='flex justify-between flex-wrap gap-y-8 pb-15'>
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


<div className='w-full  h-[180px] cursor-pointer'>
<Image className="w-full h-[180px]" src={NA1}/>
</div>
      </Container>
    </section>
  )
}

export default NewArrivals
