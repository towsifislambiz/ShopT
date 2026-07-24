import React, { useState } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { MdOutlineCreditCard, MdOutlineAccountBalance, MdLocalShipping } from 'react-icons/md'
import { FaPaypal } from 'react-icons/fa'

const CheckoutPage = () => {
  const [payment, setPayment] = useState('card')
  const [step, setStep] = useState(1) // 1=shipping 2=payment 3=review

  const InputField = ({ label, placeholder, type = 'text', half = false }) => (
    <div className={half ? 'col-span-1' : 'col-span-2'}>
      <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
      />
    </div>
  )

  const StepIndicator = ({ num, label, active, done }) => (
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-inter font-bold text-sm ${done ? 'bg-[#2DB224] text-white' : active ? 'bg-[#FFBB38] text-[#1D1D1D]' : 'bg-gray-200 text-gray-400'}`}>
        {done ? '✓' : num}
      </div>
      <span className={`font-inter font-semibold text-sm ${active ? 'text-[#1D1D1D]' : 'text-gray-400'}`}>{label}</span>
    </div>
  )

  return (
    <PageWrapper showNewsletter={false}>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Checkout</h1>
        <Breadcrumb items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />
      </div>

      {/* Step indicators */}
      <div className="bg-white rounded-2xl shadow-sm px-8 py-5 mb-6 flex items-center gap-6">
        <StepIndicator num={1} label="Shipping" active={step === 1} done={step > 1} />
        <div className="flex-1 h-px bg-gray-100" />
        <StepIndicator num={2} label="Payment" active={step === 2} done={step > 2} />
        <div className="flex-1 h-px bg-gray-100" />
        <StepIndicator num={3} label="Review" active={step === 3} done={step > 3} />
      </div>

      <div className="flex gap-6">
        {/* ── Form ── */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-8">
          {step === 1 && (
            <>
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-6">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name *" placeholder="John" half />
                <InputField label="Last Name *" placeholder="Doe" half />
                <InputField label="Email Address *" placeholder="john@example.com" type="email" />
                <InputField label="Phone Number *" placeholder="+1 234 567 8900" />
                <InputField label="Street Address *" placeholder="123 Main Street" />
                <InputField label="City *" placeholder="New York" half />
                <InputField label="State / Province" placeholder="NY" half />
                <InputField label="ZIP / Postal Code *" placeholder="10001" half />
                <InputField label="Country *" placeholder="United States" half />
              </div>
              <button onClick={() => setStep(2)} className="mt-6 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
                Continue to Payment →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-6">Payment Method</h2>
              <div className="space-y-3 mb-6">
                {[
                  { id: 'card', icon: <MdOutlineCreditCard className="text-xl" />, label: 'Credit / Debit Card' },
                  { id: 'paypal', icon: <FaPaypal className="text-xl text-[#003087]" />, label: 'PayPal' },
                  { id: 'bank', icon: <MdOutlineAccountBalance className="text-xl" />, label: 'Bank Transfer' },
                  { id: 'cod', icon: <MdLocalShipping className="text-xl" />, label: 'Cash on Delivery' },
                ].map((m) => (
                  <label key={m.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${payment === m.id ? 'border-[#FFBB38] bg-[#FFBB38]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="payment" value={m.id} checked={payment === m.id} onChange={(e) => setPayment(e.target.value)} className="accent-[#FFBB38]" />
                    {m.icon}
                    <span className="font-inter font-semibold text-sm text-[#1D1D1D]">{m.label}</span>
                  </label>
                ))}
              </div>
              {payment === 'card' && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <InputField label="Card Number" placeholder="1234 5678 9012 3456" />
                  <InputField label="Cardholder Name" placeholder="John Doe" />
                  <InputField label="Expiry Date" placeholder="MM/YY" half />
                  <InputField label="CVV" placeholder="123" half />
                </div>
              )}
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="font-inter font-semibold text-sm border-2 border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl hover:border-gray-300 transition-colors duration-200 cursor-pointer">
                  ← Back
                </button>
                <button onClick={() => setStep(3)} className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
                  Review Order →
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-6">Review Your Order</h2>
              <div className="border border-gray-100 rounded-xl p-5 mb-6">
                <p className="font-inter font-semibold text-sm text-[#1D1D1D] mb-2">Shipping to:</p>
                <p className="font-inter text-sm text-gray-500">John Doe · 123 Main Street, New York, NY 10001</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-5 mb-6">
                <p className="font-inter font-semibold text-sm text-[#1D1D1D] mb-2">Payment method:</p>
                <p className="font-inter text-sm text-gray-500 capitalize">{payment}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="font-inter font-semibold text-sm border-2 border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl hover:border-gray-300 transition-colors duration-200 cursor-pointer">
                  ← Back
                </button>
                <button className="font-inter font-bold text-sm bg-[#2DB224] text-white px-8 py-3.5 rounded-xl hover:bg-green-600 transition-colors duration-200 cursor-pointer">
                  ✓ Place Order
                </button>
              </div>
            </>
          )}
        </div>

        {/* ── Summary ── */}
        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-inter font-bold text-base text-[#1D1D1D] mb-4">Order Summary</h2>
            <div className="space-y-2 pb-4 border-b border-gray-100 mb-4 text-sm font-inter">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span className="font-semibold">$469.98</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Shipping</span><span className="font-semibold text-[#2DB224]">FREE</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Tax</span><span className="font-semibold">$37.60</span></div>
            </div>
            <div className="flex justify-between font-inter font-bold text-base text-[#1D1D1D]">
              <span>Total</span><span className="text-[#FF4D4F]">$507.58</span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default CheckoutPage
