import React from 'react'
import Image from '../Components/Image'

const Others = ({src , className , Text} ) => {
  return (
    <div>
   <div className='flex w-50 flex-wrap justify-center'>
       <div className={`w-50 h-50 bg-white rounded-full flex justify-center items-center ${className}`}>
<Image src={src}/>
      </div>
      <p className='font-bold font-inter text-xl text-black mt-4 cursor-pointer'>{Text}</p>
   </div>
    </div>
  )
}

export default Others
