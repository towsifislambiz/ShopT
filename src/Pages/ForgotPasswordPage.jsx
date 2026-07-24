import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import Logo from '../assets/Logo.png'

const ForgotPasswordPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center">
      <div className="w-full max-w-[440px]">
        <div className="flex justify-center mb-8">
          <Link to="/"><img src={Logo} alt="ShopT" className="h-10" /></Link>
        </div>
        <div className="bg-white rounded-2xl shadow-sm px-10 py-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#FFBB38]/15 flex items-center justify-center">
              <MdOutlineLock className="text-3xl text-[#FFBB38]" />
            </div>
          </div>
          <div className="text-center mb-8">
            <h1 className="font-inter font-extrabold text-2xl text-[#1D1D1D] mb-2">Forgot Password?</h1>
            <p className="font-inter text-sm text-gray-500 leading-6">Enter your email and we'll send you a link to reset your password.</p>
          </div>

          {submitted ? (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2DB224] text-2xl">✓</span>
              </div>
              <h3 className="font-inter font-bold text-base text-[#1D1D1D] mb-2">Email Sent!</h3>
              <p className="font-inter text-sm text-gray-500 mb-6">Check your inbox for the password reset link.</p>
              <Link to="/login" className="font-inter font-bold text-sm text-[#FFBB38] hover:text-[#f5aa0a] transition-colors duration-200">← Back to Login</Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
              <div>
                <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">Email Address</label>
                <div className="relative">
                  <MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
                  />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-[#FFBB38] font-inter font-bold text-sm text-[#1D1D1D] rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
                Send Reset Link
              </button>
              <div className="text-center">
                <Link to="/login" className="font-inter text-sm text-[#FFBB38] hover:text-[#f5aa0a] transition-colors duration-200 font-semibold">← Back to Login</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
