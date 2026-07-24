import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../store/wishlistSlice'
import { addToCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import { MdDeleteOutline, MdOutlineShoppingBag, MdFavoriteBorder } from 'react-icons/md'
import Card1 from '../assets/Card1.png'

const WishlistPage = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((s) => s.wishlist)

  const handleMoveToCart = (item) => {
    dispatch(addToCart({ id: item.id, title: item.title, price: parseFloat(item.price?.replace(/[^0-9.]/g, '') || 0), image: item.image }))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">My Wishlist</h1>
        <Breadcrumb items={[{ label: 'Wishlist' }]} />
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-20">
          <MdFavoriteBorder className="text-7xl text-gray-200 mb-4" />
          <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-2">Your wishlist is empty</h2>
          <p className="font-inter text-sm text-gray-400 mb-6">Save your favorite items here.</p>
          <Link to="/shop" className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100">
            <div className="col-span-5 font-inter font-semibold text-sm text-gray-500">Product</div>
            <div className="col-span-2 font-inter font-semibold text-sm text-gray-500 text-center">Price</div>
            <div className="col-span-2 font-inter font-semibold text-sm text-gray-500 text-center">Status</div>
            <div className="col-span-3 font-inter font-semibold text-sm text-gray-500 text-right">Actions</div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-50 items-center hover:bg-gray-50/50 transition-colors duration-200">
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src={item.image || Card1} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-inter font-semibold text-sm text-[#1D1D1D] line-clamp-2 hover:text-[#FFBB38] cursor-pointer">{item.title}</h3>
              </div>
              <div className="col-span-2 text-center font-inter font-bold text-sm text-[#FF4D4F]">{item.price}</div>
              <div className="col-span-2 flex justify-center">
                <span className="bg-green-50 text-[#2DB224] text-xs font-bold px-3 py-1 rounded-full">In Stock</span>
              </div>
              <div className="col-span-3 flex items-center justify-end gap-2">
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="flex items-center gap-1.5 font-inter font-bold text-xs bg-[#FFBB38] text-[#1D1D1D] px-4 py-2 rounded-lg hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer"
                >
                  <MdOutlineShoppingBag className="text-sm" /> Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-[#FF4D4F] hover:bg-[#FF4D4F] hover:text-white hover:border-[#FF4D4F] transition-all duration-200 cursor-pointer"
                >
                  <MdDeleteOutline className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  )
}

export default WishlistPage
