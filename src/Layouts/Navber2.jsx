import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from "../Components/Container"
import CategoryMenu from "../Components/CategoryMenu"
import DropdownMenu from "../Components/DropdownMenu"
import ShopMegaMenu from "../Components/ShopMegaMenu"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const homePages = [
  { label: 'Home One',  path: '/' },
  { label: 'Home Two',  path: '/home-two' },
  { label: 'Home Three',path: '/home-three' },
  { label: 'Home Four', path: '/home-four' },
  { label: 'Home Five', path: '/home-five' },
]

const Navber2 = () => {
  const location = useLocation()
  const [homeOpen, setHomeOpen] = useState(false)

  const currentHome = homePages.find((h) => h.path === location.pathname)

  return (
    <section className='bg-[#FFBB38]'>
      <Container>
        <div className='flex justify-between items-center'>

          <div className='flex items-center mt-4'>
            {/* Category dropdown */}
            <div>
              <CategoryMenu />
            </div>

            {/* Nav links */}
            <ul className='mt-4 ml-7 flex gap-10 mb-4 items-center'>

              {/* Home dropdown */}
              <li className='relative'>
                <button
                  onClick={() => setHomeOpen(!homeOpen)}
                  className='flex items-center gap-1 font-inter font-semibold text-sm text-[#1D1D1D] cursor-pointer hover:text-black'
                >
                  {currentHome?.label || 'HomePage'}
                  <MdOutlineKeyboardArrowDown className={`text-base transition-transform duration-200 ${homeOpen ? 'rotate-180' : ''}`} />
                </button>

                {homeOpen && (
                  <div className='absolute top-full left-0 mt-2 w-44 bg-white shadow-xl rounded-xl overflow-hidden z-50 border border-gray-100'>
                    {homePages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => setHomeOpen(false)}
                        className={`block px-4 py-3 font-inter text-sm transition-colors duration-200 ${
                          location.pathname === page.path
                            ? 'bg-[#FFBB38] text-[#1D1D1D] font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#1D1D1D]'
                        }`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <ShopMegaMenu />
              </li>

              <DropdownMenu
                Text="Pages"
                Page1="Privacy Policy"
                Page2="Terms and Conditions"
                Page3="FAQ"
                Page4="Shop Category Icon"
                Page5="Shop List View"
              />

              <li>
                <Link to="/about" className='font-inter font-semibold text-sm text-[#1D1D1D] cursor-pointer hover:text-black'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className='font-inter font-semibold text-sm text-[#1D1D1D] cursor-pointer hover:text-black'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className='font-inter font-semibold text-sm text-[#1D1D1D] cursor-pointer hover:text-black'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="/become-seller"
            className='font-inter text-sm font-semibold text-white bg-[#222222] py-4 px-6 flex items-center cursor-pointer hover:bg-black transition-colors duration-200'
          >
            Become a Seller
            <span><MdOutlineKeyboardArrowRight className='text-xl' /></span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Navber2
