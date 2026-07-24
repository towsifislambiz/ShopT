import React from 'react'
import Container from "../Components/Container"
import Image from "../Components/Image"
import Bimg from "../assets/Bimg.png"
import Bimg2 from "../assets/Bimg2.png"
import Bimg3 from "../assets/Bimg3.png"

const Banner = () => {
  return (
    <div>
      <Container>
        <div className='flex justify-between mt-12.5'>
            <div className='w-[810px] h-[640px] cursor-pointer'>
                <Image className="w-full h-full " src={Bimg}/>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='w-[450px] h-[300px] cursor-pointer'>
                    <Image className="w-full h-full " src={Bimg2}/>
                </div>
                <div className=' w-[450px] h-[300px] cursor-pointer'>
                       <Image className="w-full h-full " src={Bimg3}/>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
