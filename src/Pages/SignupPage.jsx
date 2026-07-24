import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineEmail, MdOutlineLock, MdOutlinePerson, MdOutlinePhone, MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import Logo from '../assets/Logo.png'

const SignupPage = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  const Field = ({ icon, name, type = 'text', placeholder }) => (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        required
        className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center py-12">
      <div className="w-full max-w-[480px]">
        <div className="flex justify-center mb-8">
          <Link to="/"><img src={Logo} alt="ShopT" className="h-10" /></Link>
        </div>
        <div className="bg-white rounded-2xl shadow-sm px-10 py-10">
          <div className="text-center mb-8">
            <h1 className="font-inter font-extrabold text-2xl text-[#1D1D1D] mb-2">Create Account</h1>
            <p className="font-inter text-sm text-gray-500">Join ShopT and start shopping today</p>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-inter font-semibold text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-all duration-200">
              <FaGoogle className="text-[#EA4335]" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-inter font-semibold text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-all duration-200">
              <FaFacebookF className="text-[#1877F2]" /> Facebook
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="font-inter text-xs text-gray-400">or sign up with email</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Field icon={<MdOutlinePerson />} name="firstName" placeholder="First Name" />
              <Field icon={<MdOutlinePerson />} name="lastName" placeholder="Last Name" />
            </div>
            <Field icon={<MdOutlineEmail />} name="email" type="email" placeholder="Email Address" />
            <Field icon={<MdOutlinePhone />} name="phone" type="tel" placeholder="Phone Number" />
            <div className="relative">
              <MdOutlineLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Create Password (min 8 chars)"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1D1D1D] cursor-pointer">
                {showPass ? <MdOutlineVisibilityOff className="text-lg" /> : <MdOutlineVisibility className="text-lg" />}
              </button>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="accent-[#FFBB38] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="font-inter text-sm text-gray-500">
                I agree to the{' '}
                <Link to="/terms-condition" className="text-[#FFBB38] hover:text-[#f5aa0a]">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy-policy" className="text-[#FFBB38] hover:text-[#f5aa0a]">Privacy Policy</Link>
              </span>
            </label>

            <button type="submit" className="w-full py-4 bg-[#FFBB38] font-inter font-bold text-sm text-[#1D1D1D] rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
              Create Account
            </button>
          </form>

          <p className="text-center font-inter text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#FFBB38] hover:text-[#f5aa0a] transition-colors duration-200">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
