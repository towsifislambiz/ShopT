import React from 'react'
import Container from "../Components/Container"
import Image from "../Components/Image"
import Logo from "../assets/Logo.png"
import SearchBar from '../Components/SearchBar'
import { Link } from 'react-router-dom'
import { LuRefreshCw } from "react-icons/lu"
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { useSelector } from 'react-redux'

const Navber = () => {
  const cartCount = useSelector((s) => s.cart.totalQuantity)
  const wishlistCount = useSelector((s) => s.wishlist.items.length)

  return (
    <section className='bg-white mt-2'>
      <Container>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link to="/">
            <Image className="w-70 h-24" src={Logo} />
          </Link>

          {/* Search */}
          <div>
            <SearchBar />
          </div>

          {/* Action icons */}
          <div className='flex gap-6 items-center'>
            {/* Compare */}
            <Link to="/products-compaire" className="relative cursor-pointer">
              <LuRefreshCw className='text-2xl font-normal text-[#222222] hover:text-[#FFBB38] transition-colors duration-200' />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative cursor-pointer">
              <FaRegHeart className='text-2xl font-normal text-[#222222] hover:text-[#FFBB38] transition-colors duration-200' />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4.5 h-4.5 bg-[#FFBB38] text-[#1D1D1D] text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative cursor-pointer">
              <MdOutlineShoppingBag className='text-2xl font-normal text-[#222222] hover:text-[#FFBB38] transition-colors duration-200' />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4.5 h-4.5 bg-[#FFBB38] text-[#1D1D1D] text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link to="/profile" className="cursor-pointer">
              <VscAccount className='text-2xl font-normal text-[#222222] hover:text-[#FFBB38] transition-colors duration-200' />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Navber
