import React, { useState } from 'react'
import Container from '../Components/Container'
import FeaturedCard from '../Components/FeaturedCard'
import Card1 from '../assets/Card1.png'
import Button from '../Components/Button'

const tabs = ['All', 'Electronics', 'Fashion', 'Gaming', 'Home & Living']

const products = [
  { id: 1, image: Card1, title: 'Wireless Noise Cancelling Headphones Pro', oldPrice: '$129.99', price: '$89.99', rating: 5, badge: 'SALE', badgeColor: 'bg-red-500', category: 'Electronics' },
  { id: 2, image: Card1, title: 'Smart Watch Ultra Series 5 with GPS', oldPrice: '$299.99', price: '$199.99', rating: 4, badge: 'NEW', badgeColor: 'bg-green-500', category: 'Electronics' },
  { id: 3, image: Card1, title: 'Gaming Mechanical Keyboard RGB Backlit', oldPrice: '$159.00', price: '$109.00', rating: 5, badge: 'HOT', badgeColor: 'bg-orange-500', category: 'Gaming' },
  { id: 4, image: Card1, title: 'Minimalist Leather Crossbody Bag', oldPrice: '$79.00', price: '$54.00', rating: 4, badge: null, category: 'Fashion' },
  { id: 5, image: Card1, title: 'Portable Bluetooth Speaker 360° Sound', oldPrice: '$69.99', price: '$49.99', rating: 4, badge: 'SALE', badgeColor: 'bg-red-500', category: 'Electronics' },
  { id: 6, image: Card1, title: 'Pro Gaming Mouse 16000 DPI', oldPrice: '$89.00', price: '$64.00', rating: 5, badge: null, category: 'Gaming' },
  { id: 7, image: Card1, title: 'Cotton Linen Casual Summer Shirt', oldPrice: '$45.00', price: '$28.00', rating: 3, badge: 'NEW', badgeColor: 'bg-green-500', category: 'Fashion' },
  { id: 8, image: Card1, title: 'Ergonomic Office Chair Lumbar Support', oldPrice: '$349.00', price: '$229.00', rating: 4, badge: 'SALE', badgeColor: 'bg-red-500', category: 'Home & Living' },
]

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => p.category === activeTab)

  return (
    <section className='pb-15'>
      <Container>
        {/* Header */}
        <div className='flex justify-between items-center pb-7'>
          <h1 className='font-bold font-inter text-[32px] text-[#1D1D1D]'>Featured Products</h1>
          <Button />
        </div>

        {/* Category tabs */}
        <div className='flex gap-2 mb-8 flex-wrap'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-inter font-semibold text-sm px-5 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#FFBB38] text-[#1D1D1D] shadow-md'
                  : 'bg-white text-gray-600 hover:bg-[#FFBB38]/20 hover:text-[#1D1D1D] shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className='grid grid-cols-4 gap-6'>
          {filtered.map((product) => (
            <FeaturedCard
              key={product.id}
              image={product.image}
              title={product.title}
              oldPrice={product.oldPrice}
              price={product.price}
              rating={product.rating}
              badge={product.badge}
              badgeColor={product.badgeColor}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts
