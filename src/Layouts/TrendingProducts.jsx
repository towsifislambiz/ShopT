import React from 'react'
import Container from '../Components/Container'
import SmallProductCard from '../Components/SmallProductCard'
import PSimg from '../assets/PSimg.png'
import Button from '../Components/Button'

const trendingCategories = [
  {
    label: 'Top Electronics',
    products: [
      { title: 'Portable Charger 20000mAh', oldPrice: '39.99', price: '27.50' },
      { title: 'USB-C Hub 7-in-1 Adapter', oldPrice: '49.99', price: '34.00' },
      { title: 'Smart Plug WiFi Enabled', oldPrice: '29.99', price: '18.00' },
      { title: 'Wireless Charging Pad Fast', oldPrice: '35.00', price: '22.00' },
    ],
  },
  {
    label: 'Top Fashion',
    products: [
      { title: 'Classic Leather Oxford Shoes', oldPrice: '89.00', price: '62.00' },
      { title: 'Slim Fit Chino Trousers', oldPrice: '55.00', price: '39.00' },
      { title: 'Canvas Tote Bag Minimalist', oldPrice: '30.00', price: '19.00' },
      { title: 'Aviator Sunglasses UV400', oldPrice: '45.00', price: '28.00' },
    ],
  },
  {
    label: 'Top Gaming',
    products: [
      { title: 'Gaming Chair Ergonomic RGB', oldPrice: '299.00', price: '199.00' },
      { title: 'Console Controller Wireless', oldPrice: '69.00', price: '49.00' },
      { title: 'Gaming Headset 7.1 Surround', oldPrice: '89.00', price: '64.00' },
      { title: 'LED Strip Light Gaming Setup', oldPrice: '25.00', price: '16.00' },
    ],
  },
]

const TrendingProducts = () => {
  return (
    <section className='pb-15'>
      <Container>
        {/* Header */}
        <div className='flex justify-between items-center pb-7'>
          <h1 className='font-bold font-inter text-[32px] text-[#1D1D1D]'>Trending Products</h1>
          <Button />
        </div>

        {/* Three-column layout */}
        <div className='flex justify-between gap-6'>
          {trendingCategories.map((cat, idx) => (
            <div key={idx} className='flex-1'>
              {/* Column header */}
              <div className='bg-[#FFBB38] px-5 py-3 rounded-t-xl mb-0'>
                <h3 className='font-inter font-bold text-[15px] text-[#1D1D1D]'>{cat.label}</h3>
              </div>

              {/* Product list */}
              <div className='flex flex-col bg-white rounded-b-xl overflow-hidden shadow-sm'>
                {cat.products.map((product, pIdx) => (
                  <div
                    key={pIdx}
                    className={pIdx < cat.products.length - 1 ? 'border-b border-gray-100' : ''}
                  >
                    <SmallProductCard
                      image={PSimg}
                      title={product.title}
                      oldPrice={product.oldPrice}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrendingProducts
