import React from 'react';
import Container from '../Components/Container';
import { HiArrowRight } from 'react-icons/hi';
import { MdOutlineShoppingBag, MdLocalOffer } from 'react-icons/md';
import Bimg from '../assets/Bimg.png';
import Bimg2 from '../assets/Bimg2.png';
import Bimg3 from '../assets/Bimg3.png';
import BSS1 from '../assets/BSS1.png';

const HomeFourHero = () => {
  return (
    <section className="mt-8 mb-12">
      <Container>
        <div className="flex gap-5">

          {/* ── Left main hero ── */}
          <div className="relative flex-1 h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] flex items-center">
            {/* BG decoration */}
            <div className="absolute -right-12 -top-12 w-72 h-72 rounded-full bg-[#FFBB38]/10 pointer-events-none" />
            <div className="absolute -left-8 -bottom-12 w-56 h-56 rounded-full bg-[#FFBB38]/5 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 pl-12 pr-4 w-[55%]">
              <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] font-inter font-bold text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                🔥 Mega Sale
              </span>
              <h1 className="font-inter font-extrabold text-[42px] leading-[1.2] text-white mb-3">
                Upgrade Your <br />
                <span className="text-[#FFBB38]">Tech Life</span>
              </h1>
              <p className="font-inter text-sm text-white/60 leading-7 mb-7 max-w-[280px]">
                Explore thousands of products from top brands at the best prices — all in one place.
              </p>
              <div className="flex gap-3">
                <a
                  href="/shop"
                  className="flex items-center gap-2 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <MdOutlineShoppingBag className="text-lg" /> Shop Now
                </a>
                <a
                  href="/flash-sale"
                  className="flex items-center gap-2 font-inter font-semibold text-sm border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  <MdLocalOffer className="text-lg" /> Flash Sale
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="absolute right-0 bottom-0 w-[45%] h-full flex items-end justify-center pr-4">
              <img
                src={Bimg}
                alt="Hero Product"
                className="w-full h-[90%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* ── Right column: two stacked banners ── */}
          <div className="flex flex-col gap-5 w-[360px]">
            {/* Banner 1 */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#FCF1E2] cursor-pointer group">
              <img
                src={Bimg2}
                alt="Banner 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center pl-7">
                <span className="font-inter text-xs text-white/80 uppercase tracking-widest mb-2">New Arrivals</span>
                <h3 className="font-inter font-bold text-xl text-white mb-3 leading-tight">
                  Fresh Styles <br /> For You
                </h3>
                <a href="/shop" className="flex items-center gap-1.5 font-inter font-semibold text-sm text-[#FFBB38] hover:gap-3 transition-all duration-200">
                  Shop Now <HiArrowRight />
                </a>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative flex-1 rounded-2xl overflow-hidden bg-[#E8F5E9] cursor-pointer group">
              <img
                src={Bimg3}
                alt="Banner 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center pl-7">
                <span className="font-inter text-xs text-white/80 uppercase tracking-widest mb-2">Special Offer</span>
                <h3 className="font-inter font-bold text-xl text-white mb-3 leading-tight">
                  Best Deals <br /> This Week
                </h3>
                <a href="/flash-sale" className="flex items-center gap-1.5 font-inter font-semibold text-sm text-[#FFBB38] hover:gap-3 transition-all duration-200">
                  View Deals <HiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFourHero;
