import React from 'react';
import Container from '../Components/Container';
import SectionHeader from '../Components/SectionHeader';
import SmallProductCard from '../Components/SmallProductCard';
import PSimg from '../assets/PSimg.png';
import BSS1 from '../assets/BSS1.png';
import BSS2 from '../assets/BSS2.png';
import { HiArrowRight } from 'react-icons/hi';

const columns = [
  {
    label: 'Best Sellers',
    color: '#0f3460',
    products: [
      { title: 'Premium Wireless Earbuds Clear Sound',  oldPrice: '79.00', price: '54.00' },
      { title: 'Fast Charging USB-C Cable 2M Braided',  oldPrice: '19.99', price: '12.00' },
      { title: 'Portable LED Projector 1080P Mini',     oldPrice: '149.00', price: '99.00' },
      { title: 'Anti-Blue Light Gaming Glasses UV',     oldPrice: '35.00', price: '22.00' },
    ],
  },
  {
    label: 'Top Rated',
    color: '#1e1b4b',
    products: [
      { title: 'Stainless Steel Insulated Bottle 1L',   oldPrice: '34.99', price: '24.00' },
      { title: 'Memory Foam Travel Pillow Ergonomic',   oldPrice: '29.99', price: '18.00' },
      { title: 'Wireless Keyboard & Mouse Combo Set',   oldPrice: '59.00', price: '39.00' },
      { title: 'Smart Bulb RGB Color LED Wi-Fi 9W',     oldPrice: '22.00', price: '14.00' },
    ],
  },
  {
    label: 'New Arrivals',
    color: '#134e4a',
    products: [
      { title: 'Folding Portable Laptop Stand Aluminum', oldPrice: '44.99', price: '29.00' },
      { title: 'USB Webcam 1080P Built-in Mic HD',      oldPrice: '55.00', price: '37.00' },
      { title: 'Silicone Case iPhone 15 Pro MagSafe',    oldPrice: '25.00', price: '16.00' },
      { title: 'Car Wireless Charger Vent Mount 15W',    oldPrice: '38.00', price: '25.00' },
    ],
  },
];

const HomeFourTrending = () => {
  return (
    <section className="pb-14">
      <Container>
        <SectionHeader title="Trending Now" subtitle="Trending" viewMoreLink="/shop" />
        <div className="flex gap-5">
          {columns.map((col, i) => (
            <div key={i} className="flex-1">
              <div
                className="px-5 py-3 rounded-t-xl"
                style={{ backgroundColor: col.color }}
              >
                <h3 className="font-inter font-bold text-sm text-white">{col.label}</h3>
              </div>
              <div className="bg-white rounded-b-xl shadow-sm overflow-hidden divide-y divide-gray-50">
                {col.products.map((p, j) => (
                  <SmallProductCard
                    key={j}
                    image={PSimg}
                    title={p.title}
                    oldPrice={p.oldPrice}
                    price={p.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Promo banners */}
        <div className="flex gap-5 mt-8">
          {[
            { img: BSS1, tag: 'Gaming Zone', title: 'Up to 50% Off\nGaming Gear', href: '/flash-sale', bg: '#0f3460' },
            { img: BSS2, tag: 'Fashion Week', title: 'Summer Collection\nNow Live', href: '/shop', bg: '#1e1b4b' },
          ].map((b, i) => (
            <div
              key={i}
              className="relative flex-1 h-[220px] rounded-2xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: b.bg }}
            >
              <img
                src={b.img}
                alt={b.tag}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] text-[11px] font-bold px-3 py-1 rounded-full mb-3 w-fit uppercase tracking-wider">
                  {b.tag}
                </span>
                <h3 className="font-inter font-extrabold text-2xl text-white mb-4 whitespace-pre-line leading-tight">
                  {b.title}
                </h3>
                <a
                  href={b.href}
                  className="flex items-center gap-2 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-5 py-2 rounded-lg w-fit hover:scale-105 transition-transform duration-200"
                >
                  Shop Now <HiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeFourTrending;
