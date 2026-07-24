import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { FaCheckCircle, FaStore, FaChartLine, FaHandshake } from 'react-icons/fa'
import { MdOutlineArrowForward } from 'react-icons/md'
import Logo from '../assets/Logo.png'

const benefits = [
  { icon: <FaStore className="text-3xl text-[#FFBB38]" />, title: 'Your Own Storefront', desc: 'Get a personalized store page with your branding and custom product listings.' },
  { icon: <FaChartLine className="text-3xl text-[#FFBB38]" />, title: 'Powerful Analytics', desc: 'Track sales, visitor data, and performance with our easy-to-use dashboard.' },
  { icon: <FaHandshake className="text-3xl text-[#FFBB38]" />, title: 'Dedicated Support', desc: 'Our seller success team is available 24/7 to help you grow your business.' },
  { icon: <FaCheckCircle className="text-3xl text-[#FFBB38]" />, title: 'Secure Payments', desc: 'Get paid on time, every time, with our reliable and secure payment system.' },
]

const BecomeSellerPage = () => (
  <PageWrapper>
    <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
      <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Become a Seller</h1>
      <Breadcrumb items={[{ label: 'Become a Seller' }]} />
    </div>

    {/* Hero */}
    <div className="bg-gradient-to-r from-[#1D1D1D] to-[#0f3460] rounded-2xl p-12 mb-8 text-center">
      <h2 className="font-inter font-extrabold text-4xl text-white mb-4">Start Selling on <span className="text-[#FFBB38]">ShopT</span> Today</h2>
      <p className="font-inter text-sm text-white/60 max-w-xl mx-auto leading-7 mb-6">Join thousands of successful sellers and reach millions of customers. Set up your store in minutes and start making money online.</p>
      <div className="flex gap-3 justify-center">
        <button className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3.5 rounded-xl hover:bg-white transition-all duration-200 cursor-pointer">Get Started — It's Free</button>
        <button className="font-inter font-semibold text-sm border border-white/30 text-white px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer">Learn More</button>
      </div>
    </div>

    {/* Benefits */}
    <div className="grid grid-cols-4 gap-4 mb-8">
      {benefits.map((b, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <div className="flex justify-center mb-4">{b.icon}</div>
          <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-2">{b.title}</h3>
          <p className="font-inter text-xs text-gray-500 leading-6">{b.desc}</p>
        </div>
      ))}
    </div>

    {/* Registration form */}
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-6">Create Seller Account</h2>
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        {['Full Name', 'Email Address', 'Phone Number', 'Business Name', 'Business Type', 'Monthly Sales Volume'].map((label) => (
          <div key={label}>
            <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">{label} *</label>
            <input placeholder={label} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400" />
          </div>
        ))}
      </div>
      <button className="mt-6 flex items-center gap-2 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
        Submit Application <MdOutlineArrowForward />
      </button>
    </div>
  </PageWrapper>
)

export default BecomeSellerPage
