import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { IoSyncOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag } from 'react-icons/md'
import Card1 from '../assets/Card1.png'
import BS1 from '../assets/BS1.png'
import RatingStars from '../Components/RatingStars'

const compareItems = [
  { id: 1, image: Card1, title: 'Sony WH-1000XM5 Headphones', price: '$229.00', rating: 4.8, ratingCount: 508, brand: 'Sony', weight: '250g', battery: '30 hours', bluetooth: '5.2', warranty: '1 Year', inStock: true },
  { id: 2, image: BS1, title: 'Bose QuietComfort 45 Headphones', price: '$249.00', rating: 4.6, ratingCount: 143, brand: 'Bose', weight: '238g', battery: '24 hours', bluetooth: '5.1', warranty: '1 Year', inStock: true },
  { id: 3, image: Card1, title: 'Apple AirPods Max Wireless', price: '$449.00', rating: 4.7, ratingCount: 312, brand: 'Apple', weight: '385g', battery: '20 hours', bluetooth: '5.0', warranty: '1 Year', inStock: false },
]

const attrs = ['Price', 'Brand', 'Weight', 'Battery Life', 'Bluetooth', 'Warranty', 'In Stock']
const getAttr = (item, attr) => {
  if (attr === 'Price') return <span className="font-bold text-[#FF4D4F]">{item.price}</span>
  if (attr === 'Brand') return item.brand
  if (attr === 'Weight') return item.weight
  if (attr === 'Battery Life') return item.battery
  if (attr === 'Bluetooth') return `v${item.bluetooth}`
  if (attr === 'Warranty') return item.warranty
  if (attr === 'In Stock') return item.inStock
    ? <span className="text-[#2DB224] font-semibold">✓ Yes</span>
    : <span className="text-[#FF4D4F] font-semibold">✗ No</span>
  return '—'
}

const CompareProductsPage = () => (
  <PageWrapper>
    <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
      <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Compare Products</h1>
      <Breadcrumb items={[{ label: 'Compare' }]} />
    </div>

    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <td className="w-44 px-6 py-4 font-inter font-bold text-sm text-gray-400">Feature</td>
            {compareItems.map((item) => (
              <td key={item.id} className="px-6 py-6 text-center border-l border-gray-50">
                <div className="relative inline-block">
                  <button className="absolute -top-2 -right-2 w-5 h-5 bg-[#FF4D4F] text-white rounded-full flex items-center justify-center text-[10px] cursor-pointer hover:bg-red-600 transition-colors duration-200">✕</button>
                </div>
                <div className="w-28 h-28 bg-[#F5F5F5] rounded-xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-inter font-semibold text-sm text-[#1D1D1D] line-clamp-2 text-center mb-2">{item.title}</h3>
                <div className="flex justify-center mb-3"><RatingStars rating={item.rating} count={item.ratingCount} size="sm" /></div>
                <button className="flex items-center gap-1.5 mx-auto font-inter font-bold text-xs bg-[#FFBB38] text-[#1D1D1D] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f5aa0a] transition-colors duration-200">
                  <MdOutlineShoppingBag /> Add to Cart
                </button>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {attrs.map((attr, i) => (
            <tr key={attr} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-gray-50/40' : ''}`}>
              <td className="px-6 py-4 font-inter font-semibold text-sm text-[#1D1D1D]">{attr}</td>
              {compareItems.map((item) => (
                <td key={item.id} className="px-6 py-4 text-center font-inter text-sm text-gray-600 border-l border-gray-50">
                  {getAttr(item, attr)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </PageWrapper>
)

export default CompareProductsPage
