import React from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">Contact Us</h1>
        <Breadcrumb items={[{ label: 'Contact' }]} />
      </div>

      <div className="flex gap-6">
        {/* ── Info ── */}
        <div className="w-80 flex-shrink-0 space-y-4">
          {[
            { icon: <MdLocationOn className="text-2xl text-[#FFBB38]" />, title: 'Our Location', lines: ['123 Commerce Street', 'New York, NY 10001, USA'] },
            { icon: <MdPhone className="text-2xl text-[#FFBB38]" />, title: 'Phone Number', lines: ['+1 (800) 123-4567', '+1 (800) 987-6543'] },
            { icon: <MdEmail className="text-2xl text-[#FFBB38]" />, title: 'Email Address', lines: ['support@shopt.com', 'hello@shopt.com'] },
            { icon: <MdAccessTime className="text-2xl text-[#FFBB38]" />, title: 'Working Hours', lines: ['Mon–Fri: 9am – 6pm', 'Sat–Sun: 10am – 4pm'] },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFBB38]/10 flex items-center justify-center flex-shrink-0">{c.icon}</div>
              <div>
                <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-1">{c.title}</h3>
                {c.lines.map((l, j) => <p key={j} className="font-inter text-sm text-gray-500">{l}</p>)}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-inter font-bold text-sm text-[#1D1D1D] mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, bg: '#1877F2' },
                { icon: <FaTwitter />, bg: '#1DA1F2' },
                { icon: <FaInstagram />, bg: '#E1306C' },
                { icon: <FaLinkedinIn />, bg: '#0A66C2' },
              ].map((s, i) => (
                <button key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm cursor-pointer hover:scale-110 transition-transform duration-200" style={{ backgroundColor: s.bg }}>
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="font-inter font-bold text-xl text-[#1D1D1D] mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {['Full Name', 'Email Address', 'Phone Number', 'Subject'].map((label, i) => (
                <div key={label} className={i >= 2 ? 'col-span-1' : 'col-span-1'}>
                  <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">{label} *</label>
                  <input type={label === 'Email Address' ? 'email' : 'text'} placeholder={label} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400" />
                </div>
              ))}
            </div>
            <div>
              <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">Message *</label>
              <textarea rows={6} placeholder="Write your message here..." className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200 placeholder-gray-400 resize-none" />
            </div>
            <button type="submit" className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-10 py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ContactPage
