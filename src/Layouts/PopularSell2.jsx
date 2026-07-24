import React from 'react'
import Container from "../Components/Container"
import Header from "../Components/Header"
import Button from "../Components/Button"
import SmallProductCard from "../Components/SmallProductCard"
import PSimg from "../assets/PSimg.png"


const PopularSell2 = () => {
  return (
    <section className='pb-30'>
      <Container>
<div className='flex justify-between pb-5'>
    <Header Text="Popular Sales"/>
    <Button/>
</div>
<div className='flex justify-between'>

<div className='flex flex-col gap-y-3'>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
</div>
<div className='flex flex-col gap-y-3'>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
</div>
<div className='flex flex-col gap-y-3'>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
    <SmallProductCard 
title="Plasto cillum ad minim elit "
image={PSimg}
oldPrice="$27.27"
price="$26.50"
/>
</div>


</div>

      </Container>
    </section>
  )
}

export default PopularSell2
