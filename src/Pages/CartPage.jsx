import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import { MdDeleteOutline, MdOutlineShoppingBag } from 'react-icons/md'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Card1 from '../assets/Card1.png'

const CartPage = () => {
  const { items, totalAmount } = useSelector((s) => s.cart)
  const dispatch = useDispatch()

  const shipping = totalAmount > 100 ? 0 : 9.99
  const tax = totalAmount * 0.08
  const total = totalAmount + shipping + tax

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Shopping Cart</h1>
        <Breadcrumb items={[{ label: 'Cart' }]} />
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-20">
          <MdOutlineShoppingBag className="text-7xl text-gray-200 mb-4" />
          <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-2">Your cart is empty</h2>
          <p className="font-inter text-sm text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
          <Link to="/shop" className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex gap-6">
          {/* ── Cart items ── */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div className="col-span-6 font-inter font-semibold text-sm text-gray-500">Product</div>
                <div className="col-span-2 font-inter font-semibold text-sm text-gray-500 text-center">Price</div>
                <div className="col-span-2 font-inter font-semibold text-sm text-gray-500 text-center">Qty</div>
                <div className="col-span-2 font-inter font-semibold text-sm text-gray-500 text-right">Total</div>
              </div>

              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-50 items-center hover:bg-gray-50/50 transition-colors duration-200">
                  {/* Product */}
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img src={item.image || Card1} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-sm text-[#1D1D1D] line-clamp-2 hover:text-[#FFBB38] cursor-pointer">{item.title}</h3>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="flex items-center gap-1 font-inter text-xs text-[#FF4D4F] mt-1.5 cursor-pointer hover:opacity-70 transition-opacity">
                        <MdDeleteOutline className="text-sm" /> Remove
                      </button>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="col-span-2 text-center font-inter font-semibold text-sm text-[#1D1D1D]">${item.price.toFixed(2)}</div>
                  {/* Qty */}
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer text-sm"><FiMinus /></button>
                      <span className="w-8 text-center font-inter text-sm font-semibold text-[#1D1D1D]">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer text-sm"><FiPlus /></button>
                    </div>
                  </div>
                  {/* Total */}
                  <div className="col-span-2 text-right font-inter font-bold text-sm text-[#FF4D4F]">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}

              {/* Coupon row */}
              <div className="flex gap-3 px-6 py-5">
                <input type="text" placeholder="Enter coupon code" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200" />
                <button className="font-inter font-bold text-sm bg-[#1D1D1D] text-white px-6 py-3 rounded-xl hover:bg-black transition-colors duration-200 cursor-pointer">Apply Coupon</button>
              </div>
            </div>
          </div>

          {/* ── Order summary ── */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-5">Order Summary</h2>
              <div className="space-y-3 mb-5 pb-5 border-b border-gray-100">
                <div className="flex justify-between font-inter text-sm"><span className="text-gray-500">Subtotal</span><span className="font-semibold text-[#1D1D1D]">${totalAmount.toFixed(2)}</span></div>
                <div className="flex justify-between font-inter text-sm"><span className="text-gray-500">Shipping</span><span className={`font-semibold ${shipping === 0 ? 'text-[#2DB224]' : 'text-[#1D1D1D]'}`}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between font-inter text-sm"><span className="text-gray-500">Tax (8%)</span><span className="font-semibold text-[#1D1D1D]">${tax.toFixed(2)}</span></div>
              </div>
              <div className="flex justify-between font-inter font-bold text-lg text-[#1D1D1D] mb-6">
                <span>Total</span><span className="text-[#FF4D4F]">${total.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="block w-full text-center font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] py-4 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer mb-3">
                Proceed to Checkout
              </Link>
              <Link to="/shop" className="block w-full text-center font-inter font-semibold text-sm border-2 border-gray-200 text-gray-600 py-3.5 rounded-xl hover:border-[#FFBB38] hover:text-[#1D1D1D] transition-all duration-200 cursor-pointer">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}

export default CartPage
