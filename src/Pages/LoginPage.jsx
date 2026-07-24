import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../store/authSlice'
import { MdOutlineEmail, MdOutlineLock, MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import Logo from '../assets/Logo.png'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginSuccess({ email: form.email, name: 'ShopT User', avatar: null }))
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center py-12">
      <div className="w-full max-w-[480px]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={Logo} alt="ShopT" className="h-10" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm px-10 py-10">
          <div className="text-center mb-8">
            <h1 className="font-inter font-extrabold text-2xl text-[#1D1D1D] mb-2">Welcome Back!</h1>
            <p className="font-inter text-sm text-gray-500">Sign in to your ShopT account</p>
          </div>

          {/* Social login */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-inter font-semibold text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer">
              <FaGoogle className="text-[#EA4335]" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-inter font-semibold text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer">
              <FaFacebookF className="text-[#1877F2]" /> Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="font-inter text-xs text-gray-400">or continue with email</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">Email Address</label>
              <div className="relative">
                <MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="font-inter font-semibold text-xs text-[#1D1D1D]">Password</label>
                <Link to="/forgot-password" className="font-inter text-xs text-[#FFBB38] hover:text-[#f5aa0a] transition-colors duration-200">Forgot password?</Link>
              </div>
              <div className="relative">
                <MdOutlineLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1D1D1D] cursor-pointer">
                  {showPass ? <MdOutlineVisibilityOff className="text-lg" /> : <MdOutlineVisibility className="text-lg" />}
                </button>
              </div>
            </div>

            {/* Remember */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#FFBB38] w-4 h-4" />
              <span className="font-inter text-sm text-gray-500">Remember me</span>
            </label>

            <button type="submit" className="w-full py-4 bg-[#FFBB38] font-inter font-bold text-sm text-[#1D1D1D] rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
              Sign In
            </button>
          </form>

          <p className="text-center font-inter text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-[#FFBB38] hover:text-[#f5aa0a] transition-colors duration-200">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
