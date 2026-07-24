import React, { useState, useEffect, useRef } from 'react';
import Container from '../Components/Container';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Bimg from '../assets/Bimg.png';
import Bimg2 from '../assets/Bimg2.png';
import Bimg3 from '../assets/Bimg3.png';

const slides = [
  {
    id: 1,
    eyebrow: 'Best Deals This Week',
    title: 'Discover Premium\nElectronics',
    subtitle: 'Up to 50% Off on Top Brands',
    description: 'Shop the latest gadgets, smartphones, and accessories with unbeatable prices and fast delivery.',
    cta: 'Shop Electronics',
    ctaLink: '/shop',
    bg: 'from-[#0f3460] via-[#16213e] to-[#1a1a2e]',
    accent: '#FFBB38',
    image: Bimg,
  },
  {
    id: 2,
    eyebrow: 'New Season Arrivals',
    title: 'Fresh Fashion\nFor Everyone',
    subtitle: 'Trending Styles at Best Prices',
    description: 'Explore our curated collection of modern fashion pieces for every occasion and lifestyle.',
    cta: 'Shop Fashion',
    ctaLink: '/shop',
    bg: 'from-[#1e1b4b] via-[#312e81] to-[#4338ca]',
    accent: '#FFBB38',
    image: Bimg2,
  },
  {
    id: 3,
    eyebrow: 'Gaming Week Special',
    title: 'Level Up Your\nGaming Setup',
    subtitle: 'Pro Gear. Incredible Prices.',
    description: 'From high-performance peripherals to the latest consoles — everything a gamer needs.',
    cta: 'Shop Gaming',
    ctaLink: '/flash-sale',
    bg: 'from-[#1e1b2e] via-[#2d1b4e] to-[#3b1f6e]',
    accent: '#FFBB38',
    image: Bimg3,
  },
];

const HomeThreeHero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef(null);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 600);
  };

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);

  useEffect(() => {
    autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="mt-8 mb-10">
      <Container>
        <div
          className={`relative w-full h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br ${slide.bg} transition-all duration-700`}
        >
          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/3 pointer-events-none" />

          {/* Content */}
          <div className={`relative z-10 flex h-full items-center transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>

            {/* ── Left: Text ── */}
            <div className="flex flex-col justify-center pl-16 w-1/2">
              <span
                className="inline-block font-inter font-bold text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 w-fit"
                style={{ backgroundColor: slide.accent, color: '#1D1D1D' }}
              >
                {slide.eyebrow}
              </span>

              <h1 className="font-inter font-extrabold text-[46px] leading-[1.15] text-white mb-3 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="font-inter font-semibold text-lg mb-3" style={{ color: slide.accent }}>
                {slide.subtitle}
              </p>
              <p className="font-inter text-sm text-white/60 max-w-[360px] leading-[1.8] mb-9">
                {slide.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={slide.ctaLink}
                  className="flex items-center gap-2 font-inter font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: slide.accent, color: '#1D1D1D' }}
                >
                  <MdOutlineShoppingBag className="text-lg" />
                  {slide.cta}
                </a>
                <a
                  href="/shop"
                  className="flex items-center gap-2 font-inter font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  Explore All
                  <HiArrowRight />
                </a>
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div className="w-1/2 flex items-center justify-center pr-12">
              <div className="relative w-[380px] h-[380px]">
                <div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{ background: `radial-gradient(circle, ${slide.accent} 0%, transparent 70%)` }}
                />
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  /* Image Placeholder - Replace with ShopT asset later */
                  <div className="w-full h-full flex items-center justify-center border border-dashed border-white/20 rounded-full">
                    <MdOutlineShoppingBag className="text-8xl text-white/20" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Navigation arrows ── */}
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-[#FFBB38] hover:text-[#1D1D1D] rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-[#FFBB38] hover:text-[#1D1D1D] rounded-full flex items-center justify-center text-white transition-all duration-200 cursor-pointer"
          >
            <HiArrowRight className="text-xl" />
          </button>

          {/* ── Dot indicators ── */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? 'w-8 h-2.5 bg-[#FFBB38]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeThreeHero;
