import React from 'react'

const Header = ({className , Text}) => {
  return (
    <div>
      <h1 className={`font-bold font-inter text-[32px] text-[#1D1D1D] ${className}`}>
        {Text}
      </h1>
    </div>
  )
}

export default Header
