import React, { useState } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { MdOutlineLocalShipping, MdOutlineInventory, MdCheckCircle, MdOutlineDeliveryDining } from 'react-icons/md'

const steps = [
  { icon: <MdOutlineInventory className="text-2xl" />, label: 'Order Placed', done: true },
  { icon: <MdOutlineInventory className="text-2xl" />, label: 'Processing', done: true },
  { icon: <MdOutlineLocalShipping className="text-2xl" />, label: 'Shipped', done: true },
  { icon: <MdOutlineDeliveryDining className="text-2xl" />, label: 'Out for Delivery', done: false },
  { icon: <MdCheckCircle className="text-2xl" />, label: 'Delivered', done: false },
]

const TrackingOrderPage = () => {
  const [orderNum, setOrderNum] = useState('')
  const [tracked, setTracked] = useState(false)

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Track Your Order</h1>
        <Breadcrumb items={[{ label: 'Track Order' }]} />
      </div>

      {/* Search form */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
        <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-2">Enter Order Details</h2>
        <p className="font-inter text-sm text-gray-500 mb-6">Enter your order ID and email address to track your shipment.</p>
        <div className="flex gap-4 max-w-2xl">
          <div className="flex-1">
            <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">Order ID</label>
            <input value={orderNum} onChange={(e) => setOrderNum(e.target.value)} placeholder="#ORD-2401" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400" />
          </div>
          <div className="flex-1">
            <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400" />
          </div>
          <div className="flex items-end">
            <button onClick={() => setTracked(true)} className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer whitespace-nowrap">Track Order</button>
          </div>
        </div>
      </div>

      {tracked && (
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-1">Order #ORD-2401</h2>
              <p className="font-inter text-sm text-gray-500">Estimated Delivery: <span className="font-semibold text-[#2DB224]">July 26, 2026</span></p>
            </div>
            <span className="bg-blue-50 text-[#0284C7] font-inter font-bold text-sm px-4 py-2 rounded-full">In Transit</span>
          </div>

          {/* Progress steps */}
          <div className="relative flex justify-between mb-10">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-100">
              <div className="h-full bg-[#FFBB38] transition-all duration-700" style={{ width: '55%' }} />
            </div>
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center gap-3 z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${step.done ? 'bg-[#FFBB38] text-[#1D1D1D]' : 'bg-gray-100 text-gray-400'}`}>
                  {step.icon}
                </div>
                <span className={`font-inter font-semibold text-xs ${step.done ? 'text-[#1D1D1D]' : 'text-gray-400'}`}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Shipment details */}
          <div className="grid grid-cols-3 gap-4">
            {[['Carrier', 'FedEx Express'], ['Tracking #', 'FX98234567890'], ['Current Location', 'Newark, NJ Distribution']].map(([k, v]) => (
              <div key={k} className="bg-gray-50 rounded-xl p-4">
                <p className="font-inter text-xs text-gray-400 mb-1">{k}</p>
                <p className="font-inter font-semibold text-sm text-[#1D1D1D]">{v}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageWrapper>
  )
}

export default TrackingOrderPage
