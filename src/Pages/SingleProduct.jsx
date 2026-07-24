import React, { useState } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import RatingStars from '../Components/RatingStars'
import ProductCard from '../Components/ProductCard'
import SectionHeader from '../Components/SectionHeader'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { addToWishlist } from '../store/wishlistSlice'
import Card1 from '../assets/Card1.png'
import BS1 from '../assets/BS1.png'
import { FaRegHeart, FaHeart, FaExpand, FaShippingFast, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa'
import { IoSyncOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag, MdOutlineKeyboardArrowRight, MdStar } from 'react-icons/md'

const product = {
  id: 1,
  title: 'Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones',
  price: 229.00,
  oldPrice: 349.00,
  rating: 4.8,
  ratingCount: 508,
  sku: 'SNY-XM5-BLK',
  category: 'Electronics',
  brand: 'Sony',
  inStock: true,
  images: [Card1, BS1, Card1, BS1],
  description: "Industry-leading noise cancellation technology lets you focus on what you're listening to. The WH-1000XM5 comes equipped with two processors and eight microphones for unrivaled noise canceling, and exceptional call quality.",
  features: ['30 hours battery life', '8 mic for call quality', 'Touch Sensor controls', 'Multi-point connection', 'Precise Voice Pickup'],
}

const relatedProducts = [
  { id: 2, image: Card1, title: 'Sony WF-1000XM5 Truly Wireless Earbuds', price: '$249.00', oldPrice: '$299.00', rating: 5, ratingCount: 196 },
  { id: 3, image: BS1, title: 'Bose QuietComfort 45 Bluetooth Headphones', price: '$249.00', oldPrice: '$329.00', rating: 4, ratingCount: 143 },
  { id: 4, image: Card1, title: 'Apple AirPods Pro 3rd Gen Spatial Audio', price: '$179.00', oldPrice: '$249.00', rating: 5, ratingCount: 412 },
  { id: 5, image: BS1, title: 'JBL Tune 770NC Wireless Headphones 70hr', price: '$119.00', oldPrice: '$149.00', rating: 4, ratingCount: 88 },
]

const SingleProduct = () => {
  const dispatch = useDispatch()
  const [mainImg, setMainImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.images[0] }))
  }

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <div className="bg-white rounded-2xl px-8 py-5 mb-6 shadow-sm">
        <Breadcrumb items={[{ label: 'Shop', href: '/shop' }, { label: product.title.slice(0, 40) + '...' }]} />
      </div>

      {/* Product detail card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
        <div className="flex gap-10">
          {/* ── Image gallery ── */}
          <div className="w-[480px] flex-shrink-0">
            {/* Main image */}
            <div className="relative bg-[#F5F5F5] rounded-2xl overflow-hidden h-[420px] flex items-center justify-center mb-4 group">
              <img src={product.images[mainImg]} alt={product.title} className="w-full h-full object-contain" />
              <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#FFBB38] hover:text-white transition-colors duration-200 cursor-pointer text-gray-600 opacity-0 group-hover:opacity-100">
                <FaExpand className="text-sm" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`w-[90px] h-[90px] rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    mainImg === i ? 'border-[#FFBB38]' : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain bg-[#F5F5F5]" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product info ── */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <span className="font-inter text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {product.brand}
              </span>
              <span className={`font-inter font-bold text-xs px-3 py-1 rounded-full ${product.inStock ? 'bg-green-50 text-[#2DB224]' : 'bg-red-50 text-[#FF4D4F]'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>

            <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] leading-tight mb-4">
              {product.title}
            </h1>

            {/* Rating row */}
            <div className="flex items-center gap-3 mb-5">
              <RatingStars rating={product.rating} count={product.ratingCount} size="md" />
              <span className="font-inter text-sm font-semibold text-[#FFBB38]">{product.rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-inter font-extrabold text-3xl text-[#FF4D4F]">${product.price.toFixed(2)}</span>
              <del className="font-inter text-lg text-gray-400">${product.oldPrice.toFixed(2)}</del>
              <span className="bg-[#FF4D4F] text-white text-xs font-bold px-2 py-0.5 rounded">
                {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
              </span>
            </div>

            <p className="font-inter text-sm text-gray-500 leading-7 mb-6 border-b border-gray-100 pb-6">
              {product.description}
            </p>

            {/* SKU / Category */}
            <div className="flex gap-8 mb-6">
              <div><span className="font-inter text-xs text-gray-400">SKU: </span><span className="font-inter text-sm font-medium text-[#1D1D1D]">{product.sku}</span></div>
              <div><span className="font-inter text-xs text-gray-400">Category: </span><span className="font-inter text-sm font-medium text-[#1D1D1D]">{product.category}</span></div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-inter font-semibold text-sm text-[#1D1D1D]">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">−</button>
                <span className="w-12 text-center font-inter font-semibold text-sm text-[#1D1D1D]">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">+</button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-7">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 flex-1 justify-center font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer"
              >
                <MdOutlineShoppingBag className="text-lg" /> Add To Cart
              </button>
              <button
                onClick={() => { setWishlisted(!wishlisted); dispatch(addToWishlist({ id: product.id, title: product.title, price: `$${product.price}`, image: product.images[0] })) }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${wishlisted ? 'bg-[#FFBB38] border-[#FFBB38] text-white' : 'border-gray-200 text-gray-500 hover:border-[#FFBB38] hover:text-[#FFBB38]'}`}
              >
                {wishlisted ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-gray-200 text-gray-500 hover:border-[#FFBB38] hover:text-[#FFBB38] transition-all duration-200 cursor-pointer">
                <IoSyncOutline className="text-lg" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
              {[
                { icon: <FaShippingFast />, title: 'Free Shipping', sub: 'On orders over $100' },
                { icon: <FaShieldAlt />, title: 'Secure Payment', sub: '100% protected' },
                { icon: <FaExchangeAlt />, title: 'Easy Returns', sub: '30-day policy' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl">
                  <span className="text-[#FFBB38] text-xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="font-inter font-semibold text-xs text-[#1D1D1D]">{b.title}</p>
                    <p className="font-inter text-[11px] text-gray-400">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs: Description / Reviews / Specs ── */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex gap-1 border-b border-gray-100 mb-6">
          {['description', 'reviews', 'specifications'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`font-inter font-semibold text-sm px-6 py-3 capitalize transition-all duration-200 cursor-pointer border-b-2 -mb-px ${
                activeTab === t ? 'border-[#FFBB38] text-[#FFBB38]' : 'border-transparent text-gray-500 hover:text-[#1D1D1D]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
          <div>
            <p className="font-inter text-sm text-gray-600 leading-8 mb-4">{product.description} The headphones feature Auto Noise Canceling Optimizer which automatically optimizes noise canceling based on your wearing conditions and environment.</p>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-inter text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#FFBB38]/20 flex items-center justify-center text-[#FFBB38] text-xs font-bold flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <div className="flex items-center gap-8 mb-6">
              <div className="text-center">
                <p className="font-inter font-extrabold text-5xl text-[#FFBB38]">{product.rating}</p>
                <RatingStars rating={product.rating} size="lg" />
                <p className="font-inter text-xs text-gray-400 mt-1">{product.ratingCount} reviews</p>
              </div>
              <div className="flex-1 space-y-2">
                {[5,4,3,2,1].map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <span className="font-inter text-xs text-gray-500 w-4">{r}</span>
                    <MdStar className="text-[#FFBB38]" />
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFBB38] rounded-full" style={{ width: `${r * 17}%` }} />
                    </div>
                    <span className="font-inter text-xs text-gray-400 w-8">{r * 17}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'specifications' && (
          <table className="w-full">
            <tbody className="divide-y divide-gray-50">
              {[
                ['Brand', 'Sony'], ['Model', 'WH-1000XM5'], ['Type', 'Over-Ear'], ['Connectivity', 'Bluetooth 5.2'],
                ['Battery Life', '30 Hours'], ['Weight', '250g'], ['Color', 'Black'], ['Warranty', '1 Year'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="py-3 pr-6 font-inter font-semibold text-sm text-[#1D1D1D] w-48">{k}</td>
                  <td className="py-3 font-inter text-sm text-gray-600">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Related Products ── */}
      <div>
        <SectionHeader title="Related Products" subtitle="You May Also Like" viewMoreLink="/shop" />
        <div className="grid grid-cols-4 gap-5">
          {relatedProducts.map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </div>
    </PageWrapper>
  )
}

export default SingleProduct
