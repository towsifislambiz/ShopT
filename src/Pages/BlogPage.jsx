import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import Pagination from '../Components/Pagination'
import { useState } from 'react'
import { MdOutlineCalendarToday, MdOutlinePerson, MdOutlineArrowForward } from 'react-icons/md'
import DS from '../assets/DS.jpg'
import Bimg2 from '../assets/Bimg2.png'
import Bimg3 from '../assets/Bimg3.png'

const posts = [
  { id: 1, img: DS, category: 'Technology', title: '10 Must-Have Gadgets That Will Change Your Life in 2026', excerpt: 'Discover the most innovative gadgets launching this year that promise to transform your daily routine and boost productivity.', author: 'John Doe', date: 'July 20, 2026', readTime: '5 min read' },
  { id: 2, img: Bimg2, category: 'Fashion', title: 'Summer Collection 2026: Top Trends You Need to Know', excerpt: "From bold colors to sustainable materials, this summer's fashion trends are both stylish and eco-conscious.", author: 'Jane Smith', date: 'July 18, 2026', readTime: '4 min read' },
  { id: 3, img: Bimg3, category: 'Gaming', title: 'Best Gaming Setup Guide: Build Your Dream Station', excerpt: 'Everything you need to create the ultimate gaming experience — from monitors to peripherals and lighting.', author: 'Mike Lee', date: 'July 15, 2026', readTime: '7 min read' },
  { id: 4, img: DS, category: 'Shopping Tips', title: 'How to Find the Best Deals Online Without the Hassle', excerpt: 'Expert tips and tricks for maximizing your savings while shopping online without sacrificing product quality.', author: 'Sara Jones', date: 'July 12, 2026', readTime: '6 min read' },
  { id: 5, img: Bimg2, category: 'Technology', title: 'Wireless Earbuds Comparison: Which Brand Wins in 2026?', excerpt: 'We tested 12 pairs of wireless earbuds so you don\'t have to. Here\'s what we found about sound, comfort, and value.', author: 'Tom Wilson', date: 'July 8, 2026', readTime: '8 min read' },
  { id: 6, img: Bimg3, category: 'Lifestyle', title: 'Home Office Essentials: Create a Productive Workspace', excerpt: 'The right tools and environment can dramatically boost your remote work productivity. Here are our top picks.', author: 'Emily Brown', date: 'July 5, 2026', readTime: '5 min read' },
]

const categories = ['All', 'Technology', 'Fashion', 'Gaming', 'Shopping Tips', 'Lifestyle']

const BlogPage = () => {
  const [page, setPage] = useState(1)
  const [activeCat, setActiveCat] = useState('All')
  const filtered = activeCat === 'All' ? posts : posts.filter((p) => p.category === activeCat)

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Blog & News</h1>
        <Breadcrumb items={[{ label: 'Blog' }]} />
      </div>

      <div className="flex gap-6">
        {/* Posts grid */}
        <div className="flex-1">
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-6">
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCat(c)} className={`font-inter font-semibold text-xs px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${activeCat === c ? 'bg-[#FFBB38] text-[#1D1D1D] shadow' : 'bg-white text-gray-600 hover:bg-[#FFBB38]/15 shadow-sm'}`}>{c}</button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {filtered.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#FFBB38] text-[#1D1D1D] font-inter font-bold text-xs px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 font-inter text-xs text-gray-400"><MdOutlineCalendarToday />{post.date}</span>
                    <span className="flex items-center gap-1 font-inter text-xs text-gray-400"><MdOutlinePerson />{post.author}</span>
                  </div>
                  <h2 className="font-inter font-bold text-base text-[#1D1D1D] leading-6 mb-3 group-hover:text-[#FFBB38] transition-colors duration-200">{post.title}</h2>
                  <p className="font-inter text-xs text-gray-500 line-clamp-2 leading-6 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-gray-400">{post.readTime}</span>
                    <button className="flex items-center gap-1 font-inter font-semibold text-xs text-[#FFBB38] hover:gap-2 transition-all duration-200 cursor-pointer">Read More <MdOutlineArrowForward /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <Pagination currentPage={page} totalPages={4} onPageChange={setPage} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-4">Search Posts</h3>
            <div className="flex">
              <input type="text" placeholder="Search..." className="flex-1 border border-gray-200 rounded-l-xl px-2 py-2.5 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200" />
              <button className="px-4 py-2.5 bg-[#FFBB38] rounded-r-xl font-inter font-bold text-xs text-[#1D1D1D] cursor-pointer hover:bg-[#f5aa0a] transition-colors duration-200">Go</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(1).map((c) => (
                <li key={c} className="flex justify-between items-center font-inter text-sm text-gray-600 hover:text-[#FFBB38] cursor-pointer transition-colors duration-200">
                  <span>{c}</span><span className="text-xs text-gray-400">{posts.filter((p) => p.category === c).length}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </PageWrapper>
  )
}

export default BlogPage
