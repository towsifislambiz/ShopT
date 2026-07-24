import React, { useState } from 'react'
import PageWrapper from '../Components/PageWrapper'
import Breadcrumb from '../Components/Breadcrumb'
import { useSelector } from 'react-redux'
import { MdOutlinePerson, MdOutlineShoppingBag, MdOutlineLocationOn, MdOutlineFavorite, MdOutlineSettings, MdOutlineLogout, MdEdit } from 'react-icons/md'

const sideNav = [
  { id: 'dashboard', label: 'Dashboard', icon: <MdOutlinePerson /> },
  { id: 'orders', label: 'My Orders', icon: <MdOutlineShoppingBag /> },
  { id: 'wishlist', label: 'Wishlist', icon: <MdOutlineFavorite /> },
  { id: 'address', label: 'Addresses', icon: <MdOutlineLocationOn /> },
  { id: 'settings', label: 'Settings', icon: <MdOutlineSettings /> },
]

const orders = [
  { id: '#ORD-2401', date: 'Jul 20, 2026', status: 'Delivered', total: '$229.00', items: 1 },
  { id: '#ORD-2398', date: 'Jul 15, 2026', status: 'Processing', total: '$549.00', items: 3 },
  { id: '#ORD-2391', date: 'Jul 10, 2026', status: 'Shipped', total: '$89.99', items: 2 },
  { id: '#ORD-2385', date: 'Jul 02, 2026', status: 'Delivered', total: '$179.00', items: 1 },
]

const statusColor = {
  Delivered: 'bg-green-50 text-[#2DB224]',
  Processing: 'bg-yellow-50 text-[#D97706]',
  Shipped: 'bg-blue-50 text-[#0284C7]',
  Cancelled: 'bg-red-50 text-[#FF4D4F]',
}

const ProfilePage = () => {
  const { user } = useSelector((s) => s.auth)
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <PageWrapper>
      <div className="bg-white rounded-2xl px-8 py-6 mb-6 shadow-sm">
        <h1 className="font-inter font-bold text-2xl text-[#1D1D1D] mb-2">My Account</h1>
        <Breadcrumb items={[{ label: 'Account' }]} />
      </div>

      <div className="flex gap-6">
        {/* ── Sidebar ── */}
        <aside className="w-64 flex-shrink-0">
          {/* Profile card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4 text-center">
            <div className="relative inline-block mb-3">
              <div className="w-20 h-20 rounded-full bg-[#FFBB38]/15 flex items-center justify-center mx-auto">
                <MdOutlinePerson className="text-4xl text-[#FFBB38]" />
              </div>
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#FFBB38] rounded-full flex items-center justify-center cursor-pointer">
                <MdEdit className="text-[10px] text-[#1D1D1D]" />
              </button>
            </div>
            <h3 className="font-inter font-bold text-sm text-[#1D1D1D]">{user?.name || 'ShopT User'}</h3>
            <p className="font-inter text-xs text-gray-400 mt-0.5">{user?.email || 'user@shopt.com'}</p>
          </div>

          {/* Nav items */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {sideNav.map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id)}
                className={`w-full flex items-center gap-3 px-5 py-3.5 font-inter font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === nav.id
                    ? 'bg-[#FFBB38]/10 text-[#FFBB38] border-r-3 border-[#FFBB38]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#1D1D1D]'
                }`}
              >
                <span className="text-lg">{nav.icon}</span> {nav.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-5 py-3.5 font-inter font-semibold text-sm text-[#FF4D4F] hover:bg-red-50 cursor-pointer transition-all duration-200">
              <MdOutlineLogout className="text-lg" /> Logout
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="flex-1">
          {activeTab === 'dashboard' && (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Total Orders', value: '24', color: '#FFBB38' },
                  { label: 'Wishlist Items', value: '8', color: '#4F46E5' },
                  { label: 'Total Spent', value: '$1,248', color: '#2DB224' },
                  { label: 'Saved Addresses', value: '3', color: '#0284C7' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm p-5">
                    <p className="font-inter font-extrabold text-2xl" style={{ color: s.color }}>{s.value}</p>
                    <p className="font-inter text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              {/* Recent orders table */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50">
                  <h2 className="font-inter font-bold text-base text-[#1D1D1D]">Recent Orders</h2>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Order ID', 'Date', 'Items', 'Total', 'Status'].map((h) => (
                        <th key={h} className="px-6 py-3 text-left font-inter font-semibold text-xs text-gray-500">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orders.map((o) => (
                      <tr key={o.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                        <td className="px-6 py-4 font-inter font-semibold text-sm text-[#FFBB38] cursor-pointer hover:underline">{o.id}</td>
                        <td className="px-6 py-4 font-inter text-sm text-gray-500">{o.date}</td>
                        <td className="px-6 py-4 font-inter text-sm text-gray-600">{o.items} item{o.items > 1 ? 's' : ''}</td>
                        <td className="px-6 py-4 font-inter font-bold text-sm text-[#1D1D1D]">{o.total}</td>
                        <td className="px-6 py-4">
                          <span className={`font-inter font-semibold text-xs px-3 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50">
                <h2 className="font-inter font-bold text-base text-[#1D1D1D]">All Orders</h2>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    {['Order ID', 'Date', 'Items', 'Total', 'Status', 'Action'].map((h) => (
                      <th key={h} className="px-6 py-3 text-left font-inter font-semibold text-xs text-gray-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 font-inter font-semibold text-sm text-[#FFBB38]">{o.id}</td>
                      <td className="px-6 py-4 font-inter text-sm text-gray-500">{o.date}</td>
                      <td className="px-6 py-4 font-inter text-sm text-gray-600">{o.items}</td>
                      <td className="px-6 py-4 font-inter font-bold text-sm text-[#1D1D1D]">{o.total}</td>
                      <td className="px-6 py-4"><span className={`font-inter font-semibold text-xs px-3 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span></td>
                      <td className="px-6 py-4"><button className="font-inter text-xs text-[#FFBB38] font-semibold hover:underline cursor-pointer">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="font-inter font-bold text-lg text-[#1D1D1D] mb-6">Account Settings</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[['First Name', 'John'], ['Last Name', 'Doe'], ['Email', 'john@example.com'], ['Phone', '+1 234 567 8900']].map(([label, val]) => (
                  <div key={label}>
                    <label className="font-inter font-semibold text-xs text-[#1D1D1D] mb-1.5 block">{label}</label>
                    <input defaultValue={val} className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm outline-none focus:border-[#FFBB38] transition-colors duration-200" />
                  </div>
                ))}
              </div>
              <button className="font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-8 py-3.5 rounded-xl hover:bg-[#f5aa0a] transition-colors duration-200 cursor-pointer">
                Save Changes
              </button>
            </div>
          )}

          {(activeTab === 'wishlist' || activeTab === 'address') && (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center py-16">
              <p className="font-inter text-gray-400 text-sm">
                {activeTab === 'wishlist' ? 'View your saved items in the Wishlist page.' : 'No saved addresses yet.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

export default ProfilePage
