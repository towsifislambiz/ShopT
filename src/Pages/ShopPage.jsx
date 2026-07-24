import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import SectionHeader from '../Components/SectionHeader'
import ProductCard from '../Components/ProductCard'
import Pagination from '../Components/Pagination'
import { useState } from 'react'
import Card1 from '../assets/Card1.png'
import BS1 from '../assets/BS1.png'
import { BsGrid3X3Gap, BsList } from 'react-icons/bs'
import { IoFilterOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const products = [
  { id: 1, image: Card1, title: 'Wireless Noise Cancelling Headphones Pro', price: '$89.99', oldPrice: '$129.99', rating: 5, ratingCount: 284, badge: 'SALE', badgeColor: 'bg-[#FF4D4F]' },
  { id: 2, image: BS1, title: 'Smart Watch Ultra Series GPS Tracker', price: '$199.99', oldPrice: '$299.99', rating: 4, ratingCount: 156, badge: 'NEW', badgeColor: 'bg-[#2DB224]' },
  { id: 3, image: Card1, title: 'Gaming Mechanical Keyboard RGB Backlit 87', price: '$109.00', oldPrice: '$159.00', rating: 5, ratingCount: 98, badge: 'HOT', badgeColor: 'bg-[#FF6B35]' },
  { id: 4, image: BS1, title: 'Portable Bluetooth Speaker 360° Surround', price: '$49.99', oldPrice: '$69.99', rating: 4, ratingCount: 203 },
  { id: 5, image: Card1, title: 'Sony WH-1000XM5 Wireless Headphones', price: '$229.00', oldPrice: '$349.00', rating: 5, ratingCount: 508, badge: 'SALE', badgeColor: 'bg-[#FF4D4F]' },
  { id: 6, image: BS1, title: 'Apple AirPods Pro 3rd Gen Spatial Audio', price: '$179.00', oldPrice: '$249.00', rating: 5, ratingCount: 412, badge: 'NEW', badgeColor: 'bg-[#2DB224]' },
  { id: 7, image: Card1, title: 'Razer DeathAdder V3 Gaming Mouse 30K DPI', price: '$109.00', oldPrice: '$149.00', rating: 5, ratingCount: 271, badge: 'HOT', badgeColor: 'bg-[#FF6B35]' },
  { id: 8, image: BS1, title: 'LG 27" 4K UHD IPS Monitor USB-C 144Hz', price: '$399.00', oldPrice: '$599.00', rating: 4, ratingCount: 88, badge: 'SALE', badgeColor: 'bg-[#FF4D4F]' },
  { id: 9, image: Card1, title: 'Logitech MX Master 3S Wireless Mouse', price: '$89.00', oldPrice: '$109.00', rating: 4, ratingCount: 334 },
  { id: 10, image: BS1, title: 'iPad Pro 12.9" M2 Chip 256GB Wi-Fi', price: '$899.00', oldPrice: '$1099.00', rating: 5, ratingCount: 196, badge: 'TOP', badgeColor: 'bg-[#0284C7]' },
  { id: 11, image: Card1, title: 'Samsung Galaxy S24 Ultra 5G 256GB', price: '$949.00', oldPrice: '$1199.00', rating: 4, ratingCount: 145 },
  { id: 12, image: BS1, title: 'Bose QuietComfort 45 Bluetooth Headphones', price: '$249.00', oldPrice: '$329.00', rating: 4, ratingCount: 143 },
]

const categories = ['All Categories', 'Electronics', 'Fashion', 'Gaming', 'Home & Living', 'Beauty', 'Sports', 'Books']
const brands = ['Apple', 'Samsung', 'Sony', 'Logitech', 'Bose', 'LG', 'Dell', 'Razer']
const sortOptions = ['Default', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest']

const ShopPage = () => {
  const [page, setPage] = useState(1)
  const [view, setView] = useState('grid')
  const [sort, setSort] = useState('Default')
  const [selectedCat, setSelectedCat] = useState('All Categories')
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(2000)

  return (
    <PageWrapper>
      {/* Page header */}
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Shop</h1>
        <Breadcrumb items={[{ label: 'Shop' }]} />
      </div>

      <div className="flex gap-6">
        {/* ── Sidebar ── */}
        <aside className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <h3 className="font-inter font-bold text-[15px] text-[#1D1D1D] mb-4 flex items-center gap-2">
              <IoFilterOutline /> Filters
            </h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-inter font-semibold text-sm text-[#1D1D1D] mb-3">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCat(cat)}
                      className={`w-full text-left font-inter text-sm px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                        selectedCat === cat ? 'bg-[#FFBB38] text-[#1D1D1D] font-semibold' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-inter font-semibold text-sm text-[#1D1D1D] mb-3">Price Range</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="font-inter text-xs text-gray-500">${priceMin}</span>
                <span className="font-inter text-xs text-gray-500">${priceMax}</span>
              </div>
              <input type="range" min={0} max={2000} value={priceMax} onChange={(e) => setPriceMax(Number(e.target.value))} className="w-full" />
              <p className="font-inter text-xs text-gray-500 mt-2">Range: ${priceMin} — ${priceMax}</p>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-inter font-semibold text-sm text-[#1D1D1D] mb-3">Brands</h4>
              <ul className="space-y-2">
                {brands.map((b) => (
                  <li key={b} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" id={`brand-${b}`} className="accent-[#FFBB38] cursor-pointer" />
                    <label htmlFor={`brand-${b}`} className="font-inter text-sm text-gray-600 cursor-pointer group-hover:text-[#1D1D1D]">{b}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rating */}
            <div>
              <h4 className="font-inter font-semibold text-sm text-[#1D1D1D] mb-3">Rating</h4>
              {[5, 4, 3, 2, 1].map((r) => (
                <label key={r} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="radio" name="rating" className="accent-[#FFBB38]" />
                  <span className="flex gap-0.5 text-[#FFBB38] text-xs">
                    {[...Array(r)].map((_, i) => <span key={i}>★</span>)}
                    {[...Array(5 - r)].map((_, i) => <span key={i} className="text-gray-300">★</span>)}
                  </span>
                  <span className="font-inter text-xs text-gray-500">& up</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Product Grid ── */}
        <div className="flex-1">
          {/* Sort / View bar */}
          <div className="bg-white rounded-2xl shadow-sm px-5 py-3.5 mb-5 flex justify-between items-center">
            <p className="font-inter text-sm text-gray-500">Showing <span className="font-semibold text-[#1D1D1D]">{products.length}</span> results</p>
            <div className="flex items-center gap-3">
              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="font-inter text-sm text-gray-500">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-inter text-sm text-[#1D1D1D] font-semibold bg-transparent border-none outline-none cursor-pointer appearance-none pr-5"
                >
                  {sortOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
                <MdOutlineKeyboardArrowDown className="absolute right-0 text-gray-400 pointer-events-none" />
              </div>
              {/* View toggle */}
              <div className="flex gap-1 border border-gray-100 rounded-lg overflow-hidden">
                <button onClick={() => setView('grid')} className={`p-2 cursor-pointer transition-colors duration-200 ${view === 'grid' ? 'bg-[#FFBB38] text-[#1D1D1D]' : 'text-gray-400 hover:bg-gray-50'}`}>
                  <BsGrid3X3Gap className="text-base" />
                </button>
                <button onClick={() => setView('list')} className={`p-2 cursor-pointer transition-colors duration-200 ${view === 'list' ? 'bg-[#FFBB38] text-[#1D1D1D]' : 'text-gray-400 hover:bg-gray-50'}`}>
                  <BsList className="text-base" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={view === 'grid' ? 'grid grid-cols-3 gap-5' : 'flex flex-col gap-4'}>
            {products.map((p) =>
              view === 'grid' ? (
                <ProductCard key={p.id} {...p} />
              ) : (
                /* List view card */
                <div key={p.id} className="group bg-white rounded-xl shadow-sm overflow-hidden flex hover:shadow-lg transition-shadow duration-300">
                  <div className="w-44 h-44 bg-[#F5F5F5] flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400" />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {p.badge && <span className={`${p.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block`}>{p.badge}</span>}
                      <h3 className="font-inter font-semibold text-sm text-[#2B3445] mb-2 line-clamp-2 hover:text-[#FFBB38] cursor-pointer">{p.title}</h3>
                      <div className="flex gap-0.5 text-[#FFBB38] text-xs mb-2">{'★'.repeat(p.rating)}{'☆'.repeat(5 - p.rating)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        {p.oldPrice && <del className="text-sm text-gray-400">{p.oldPrice}</del>}
                        <span className="font-bold text-[#FF4D4F] text-base">{p.price}</span>
                      </div>
                      <button className="font-inter font-bold text-xs bg-[#FFBB38] text-[#1D1D1D] px-4 py-2 rounded-lg hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ShopPage
