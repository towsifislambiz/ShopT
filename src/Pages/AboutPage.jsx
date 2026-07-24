import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import DS from '../assets/DS.jpg'
import { FaCheckCircle, FaShippingFast, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const AboutPage = () => (
  <PageWrapper>
    <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
      <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">About Us</h1>
      <Breadcrumb items={[{ label: 'About' }]} />
    </div>

    {/* Hero */}
    <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
      <img src={DS} alt="About ShopT" className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/80 to-transparent flex items-center">
        <div className="pl-12">
          <h2 className="font-inter font-extrabold text-4xl text-white mb-3">Your #1 Shopping<br /><span className="text-[#FFBB38]">Destination</span></h2>
          <p className="font-inter text-sm text-white/70 max-w-md leading-7">ShopT is a premium eCommerce platform offering thousands of products from top brands at unbeatable prices.</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Story */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-4">Our Story</h2>
        <p className="font-inter text-sm text-gray-600 leading-8">Founded in 2020, ShopT was built with a single mission: to make premium shopping accessible to everyone. We started as a small team of passionate developers and designers, and today we serve over 50,000 happy customers worldwide.</p>
        <ul className="mt-4 space-y-2">
          {['Founded in 2020', '50,000+ Customers', '10,000+ Products', '100+ Brands'].map((i) => (
            <li key={i} className="flex items-center gap-2 font-inter text-sm text-gray-600">
              <FaCheckCircle className="text-[#FFBB38] flex-shrink-0" /> {i}
            </li>
          ))}
        </ul>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-4">Our Mission</h2>
        <p className="font-inter text-sm text-gray-600 leading-8">We believe that great shopping experiences should be effortless. That's why we've built a platform that combines the widest product selection with the fastest delivery and the best customer service in the industry.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[['12k+', 'Products'], ['50k+', 'Customers'], ['100+', 'Brands'], ['24/7', 'Support']].map(([v, l]) => (
            <div key={l} className="bg-[#FFBB38]/10 rounded-xl p-4 text-center">
              <p className="font-inter font-extrabold text-2xl text-[#FFBB38]">{v}</p>
              <p className="font-inter text-xs text-gray-600 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="grid grid-cols-4 gap-4">
      {[
        { icon: <FaShippingFast className="text-3xl text-[#FFBB38]" />, title: 'Fast Delivery', desc: 'Free shipping on orders above $100. Delivered in 2–5 business days.' },
        { icon: <FaShieldAlt className="text-3xl text-[#FFBB38]" />, title: 'Secure Payments', desc: '100% secure payment processing with bank-level encryption.' },
        { icon: <FaHeadset className="text-3xl text-[#FFBB38]" />, title: '24/7 Support', desc: 'Our dedicated team is always here to help you.' },
        { icon: <FaCheckCircle className="text-3xl text-[#FFBB38]" />, title: 'Quality Products', desc: 'Every product is vetted for quality and authenticity.' },
      ].map((v, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <div className="flex justify-center mb-3">{v.icon}</div>
          <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-2">{v.title}</h3>
          <p className="font-inter text-xs text-gray-500 leading-6">{v.desc}</p>
        </div>
      ))}
    </div>
  </PageWrapper>
)

export default AboutPage
