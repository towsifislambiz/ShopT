import React, { useState } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const faqs = [
  { category: 'Orders & Shipping', items: [
    { q: 'How long does shipping take?', a: 'Standard shipping takes 3–7 business days. Express shipping (1–2 days) is available at checkout. Free shipping on orders over $100.' },
    { q: 'Can I track my order?', a: 'Yes! Once your order ships, you\'ll receive an email with a tracking link. You can also track orders in your account under "My Orders".' },
    { q: 'Do you offer international shipping?', a: 'We currently ship to over 50 countries. International orders typically take 7–21 business days depending on the destination.' },
  ]},
  { category: 'Returns & Refunds', items: [
    { q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy on most items. Products must be in original condition with all accessories and packaging.' },
    { q: 'How do I initiate a return?', a: 'Go to My Account → Orders, select the order, click "Return Item", and follow the instructions. We\'ll email you a prepaid return label.' },
    { q: 'How long does a refund take?', a: 'Refunds are processed within 3–5 business days after we receive the returned item. The amount appears in your account within 5–10 business days.' },
  ]},
  { category: 'Payments & Security', items: [
    { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and bank transfers.' },
    { q: 'Is my payment information secure?', a: 'Absolutely. We use 256-bit SSL encryption and never store your card details. All payments are processed through PCI-DSS certified systems.' },
  ]},
  { category: 'Products & Quality', items: [
    { q: 'Are all products genuine?', a: 'Yes. We only source products from authorized distributors and brand-verified sellers. Every product comes with a warranty.' },
    { q: 'What if I receive a damaged item?', a: 'Contact us within 48 hours of delivery with photos. We\'ll send a replacement or issue a full refund immediately.' },
  ]},
]

const FAQPage = () => {
  const [open, setOpen] = useState({})
  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }))

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Frequently Asked Questions</h1>
        <Breadcrumb items={[{ label: 'FAQ' }]} />
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1D1D1D] to-[#0f3460] rounded-2xl px-12 py-10 mb-8 text-center">
        <h2 className="font-inter font-extrabold text-3xl text-white mb-3">How can we <span className="text-[#FFBB38]">help you?</span></h2>
        <p className="font-inter text-sm text-white/60 mb-6">Find answers to the most common questions below.</p>
        <div className="flex max-w-md mx-auto">
          <input type="text" placeholder="Search your question..." className="flex-1 px-5 py-3.5 rounded-l-xl font-inter text-sm outline-none border-0" />
          <button className="px-6 py-3.5 bg-[#FFBB38] font-inter font-bold text-sm text-[#1D1D1D] rounded-r-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">Search</button>
        </div>
      </div>

      {/* FAQ sections */}
      <div className="space-y-6">
        {faqs.map((section) => (
          <div key={section.category} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-50">
              <h2 className="font-inter font-bold text-base text-[#1D1D1D]">{section.category}</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {section.items.map((item, i) => {
                const key = `${section.category}-${i}`
                const isOpen = open[key]
                return (
                  <div key={key}>
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex justify-between items-center px-8 py-5 font-inter font-semibold text-sm text-[#1D1D1D] hover:text-[#FFBB38] text-left transition-colors duration-200 cursor-pointer"
                    >
                      {item.q}
                      {isOpen ? <MdOutlineKeyboardArrowUp className="text-xl flex-shrink-0 text-[#FFBB38]" /> : <MdOutlineKeyboardArrowDown className="text-xl flex-shrink-0 text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-8 pb-5">
                        <p className="font-inter text-sm text-gray-600 leading-7">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}

export default FAQPage
