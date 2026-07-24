import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import SectionHeader from '../Components/SectionHeader'
import ProductCard from '../Components/ProductCard'
import Pagination from '../Components/Pagination'
import { useState } from 'react'
import Card1 from '../assets/Card1.png'
import BS1 from '../assets/BS1.png'

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: i % 2 === 0 ? Card1 : BS1,
  title: ['Wireless Headphones Pro', 'Smart Watch Ultra', 'Gaming Keyboard RGB', 'Bluetooth Speaker 360', 'Action Camera 4K', 'Laptop Stand Aluminum'][i % 6] + ' — Premium Edition',
  price: `$${(49.99 + i * 20).toFixed(2)}`,
  oldPrice: `$${(79.99 + i * 25).toFixed(2)}`,
  rating: [4, 5, 3, 5, 4, 5][i % 6],
  ratingCount: [88, 241, 56, 312, 77, 198][i % 6],
  badge: i % 3 === 0 ? 'SALE' : i % 3 === 1 ? 'NEW' : null,
  badgeColor: i % 3 === 0 ? 'bg-[#FF4D4F]' : 'bg-[#2DB224]',
}))

const AllProductsPage = () => {
  const [page, setPage] = useState(1)

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">All Products</h1>
        <Breadcrumb items={[{ label: 'All Products' }]} />
      </div>
      <SectionHeader title="All Products" subtitle="Browse Everything" viewMoreLink="/shop" />
      <div className="grid grid-cols-4 gap-5 mb-8">
        {products.map((p) => <ProductCard key={p.id} {...p} />)}
      </div>
      <div className="flex justify-center">
        <Pagination currentPage={page} totalPages={8} onPageChange={setPage} />
      </div>
    </PageWrapper>
  )
}

export default AllProductsPage
