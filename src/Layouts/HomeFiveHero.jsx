import React from 'react';
import Container from '../Components/Container';
import { HiArrowRight } from 'react-icons/hi';
import { MdOutlineShoppingBag, MdStar, MdLocalShipping } from 'react-icons/md';
import { FaShieldAlt, FaHeadset } from 'react-icons/fa';
import Bimg from '../assets/Bimg.png';
import Flash2 from '../assets/Flash2.png';

const stats = [
  { icon: <MdLocalShipping />, value: '12k+', label: 'Products Shipped' },
  { icon: <MdStar />,          value: '50k+', label: 'Happy Customers' },
  { icon: <FaShieldAlt />,     value: '100%', label: 'Secure Payments' },
  { icon: <FaHeadset />,       value: '24/7', label: 'Customer Support' },
];

const HomeFiveHero = () => {
  return (
    <section className="mt-8 mb-12">
      <Container>
        <div className="flex gap-5">

          {/* ── Main hero panel ── */}
          <div className="relative flex-1 h-[520px] rounded-2xl overflow-hidden group cursor-pointer">
            {/* background image */}
            <img
              src={Bimg}
              alt="Main Hero"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/85 via-[#1D1D1D]/50 to-transparent" />

            {/* content */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-12 pr-6">
              <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] font-inter font-bold text-xs px-4 py-1.5 rounded-full mb-5 w-fit uppercase tracking-wider">
                🎉 Grand Sale
              </span>
              <h1 className="font-inter font-extrabold text-5xl text-white leading-[1.2] mb-4 max-w-[400px]">
                Shop <span className="text-[#FFBB38]">Smarter,</span><br />
                Save More
              </h1>
              <p className="font-inter text-sm text-white/60 max-w-[320px] leading-7 mb-8">
                Discover thousands of products from top brands with unbeatable prices and free delivery.
              </p>
              <a
                href="/shop"
                className="flex items-center gap-2 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-7 py-3.5 rounded-xl w-fit hover:scale-105 transition-transform duration-200"
              >
                <MdOutlineShoppingBag className="text-lg" />
                Shop Now
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-5 w-[340px]">
            {/* Top banner */}
            <div className="relative h-[248px] rounded-2xl overflow-hidden cursor-pointer group">
              <img
                src={Flash2}
                alt="Flash Sale"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] text-[11px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">Flash Sale</span>
                <h3 className="font-inter font-bold text-xl text-white mb-2">WOO! Hot Deals</h3>
                <a href="/flash-sale" className="flex items-center gap-1 font-inter font-semibold text-sm text-[#FFBB38] hover:gap-3 transition-all duration-200">
                  Shop Now <HiArrowRight />
                </a>
              </div>
            </div>

            {/* Bottom banner */}
            <div className="relative h-[248px] rounded-2xl overflow-hidden cursor-pointer group bg-[#0f3460]">
              {/* Image Placeholder - Replace with ShopT campaign asset later */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <MdOutlineShoppingBag className="text-9xl text-white" />
              </div>
              <div className="relative z-10 p-7 flex flex-col justify-center h-full">
                <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] text-[11px] font-bold px-3 py-1 rounded-full mb-3 w-fit uppercase tracking-wider">New Season</span>
                <h3 className="font-inter font-bold text-xl text-white mb-2 leading-tight">
                  Summer <span className="text-[#FFBB38]">Collection</span><br />Is Here
                </h3>
                <a href="/shop" className="flex items-center gap-1 font-inter font-semibold text-sm text-[#FFBB38] hover:gap-3 transition-all duration-200">
                  Explore <HiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-5 bg-white rounded-2xl shadow-sm px-8 py-5">
          <div className="flex justify-between items-center">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFBB38]/15 flex items-center justify-center text-[#FFBB38] text-xl">
                  {s.icon}
                </div>
                <div>
                  <p className="font-inter font-extrabold text-xl text-[#1D1D1D]">{s.value}</p>
                  <p className="font-inter text-xs text-gray-500">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="w-px h-10 bg-gray-100 ml-4" />}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFiveHero;
