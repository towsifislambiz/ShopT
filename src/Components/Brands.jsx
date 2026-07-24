import React from 'react'
import Image from './Image'
const Brands = ({className , src}) => {
  return (
    <div>
      <div className='w-53 h-32.5 bg-white  flex justify-center items-center'>
<div className={ `w-36 h-16  flex justify-center items-center  ${className}`}>
<Image className="w-36" src={src}/>
</div>
      </div>
    </div>
  )
}

export default Brands
