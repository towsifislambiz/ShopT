import React, { useState, useEffect } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import SectionHeader from '../Components/SectionHeader'
import ProductCard from '../Components/ProductCard'
import Card1 from '../assets/Card1.png'
import BS1 from '../assets/BS1.png'
import Flash from '../assets/Flash.png'
import Flash2 from '../assets/Flash2.png'
import { MdLocalOffer, MdOutlineShoppingBag } from 'react-icons/md'

const products = [
  { id: 1, image: Card1, title: 'Sony WH-1000XM5 Noise Cancelling Headphones', price: '$179.00', oldPrice: '$349.00', rating: 5, ratingCount: 508, badge: '49% OFF', badgeColor: 'bg-[#FF4D4F]' },
  { id: 2, image: BS1, title: 'Apple AirPods Pro 3rd Gen Spatial Audio USB-C', price: '$169.00', oldPrice: '$249.00', rating: 5, ratingCount: 412, badge: '32% OFF', badgeColor: 'bg-[#FF4D4F]' },
  { id: 3, image: Card1, title: 'Razer DeathAdder V3 Gaming Mouse 30K DPI', price: '$79.00', oldPrice: '$149.00', rating: 5, ratingCount: 271, badge: '47% OFF', badgeColor: 'bg-[#FF4D4F]' },
  { id: 4, image: BS1, title: 'Samsung Galaxy S24 Ultra 5G 256GB Titanium', price: '$799.00', oldPrice: '$1199.00', rating: 4, ratingCount: 145, badge: '33% OFF', badgeColor: 'bg-[#FF4D4F]' },
]

const getSecondsToMidnight = () => {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(23, 59, 59, 0)
  return Math.floor((midnight - now) / 1000)
}

const FlashSalePage = () => {
  const [secs, setSecs] = useState(getSecondsToMidnight())
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s <= 0 ? getSecondsToMidnight() : s - 1)), 1000)
    return () => clearInterval(t)
  }, [])
  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = secs % 60

  const pad = (n) => String(n).padStart(2, '0')
  const Box = ({ val, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <span className="font-inter font-extrabold text-3xl text-white">{pad(val)}</span>
      </div>
      <span className="font-inter text-xs text-white/70 mt-1.5 uppercase tracking-wide">{label}</span>
    </div>
  )

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <div className="bg-white rounded-2xl px-8 py-5 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Flash Sale</h1>
        <Breadcrumb items={[{ label: 'Flash Sale' }]} />
      </div>

      {/* Hero banner */}
      <div
        className="relative rounded-2xl overflow-hidden mb-8 h-64 flex items-center"
        style={{ background: 'linear-gradient(135deg, #1D1D1D 0%, #0f3460 100%)' }}
      >
        {/* BG image */}
        <img src={Flash2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 pl-12 flex items-center gap-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MdLocalOffer className="text-[#FFBB38] text-2xl" />
              <span className="font-inter font-bold text-sm text-[#FFBB38] uppercase tracking-widest">Flash Sale — Limited Time</span>
            </div>
            <h2 className="font-inter font-extrabold text-4xl text-white mb-2">
              WOO! <span className="text-[#FFBB38]">Up to 50% Off</span>
            </h2>
            <p className="font-inter text-sm text-white/60">Grab these deals before they're gone!</p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <Box val={h} label="Hours" />
            <span className="font-inter font-bold text-2xl text-[#FFBB38] -mt-5">:</span>
            <Box val={m} label="Mins" />
            <span className="font-inter font-bold text-2xl text-[#FFBB38] -mt-5">:</span>
            <Box val={s} label="Secs" />
          </div>
        </div>
      </div>

      {/* Products */}
      <SectionHeader title="Flash Deals" subtitle="Deals" viewMoreLink="/shop" />
      <div className="grid grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </PageWrapper>
  )
}

export default FlashSalePage
