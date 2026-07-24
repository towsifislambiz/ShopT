import React, { useState, useEffect } from 'react';
import Container from '../Components/Container';
import SectionHeader from '../Components/SectionHeader';
import ProductCard from '../Components/ProductCard';
import Card1 from '../assets/Card1.png';
import BS1 from '../assets/BS1.png';

const products = [
  { id: 101, image: Card1, title: 'Wireless Noise Cancelling Headphones Pro Max', price: '$89.99',  oldPrice: '$129.99', rating: 5, ratingCount: 284, badge: '31% OFF', badgeColor: 'bg-[#FF4D4F]' },
  { id: 102, image: BS1,   title: 'Smart Watch Ultra Series 5 with GPS Tracker', price: '$199.99', oldPrice: '$299.99', rating: 4, ratingCount: 156, badge: 'NEW',    badgeColor: 'bg-[#2DB224]' },
  { id: 103, image: Card1, title: 'Gaming Mechanical Keyboard RGB Backlit 87 Keys', price: '$109.00', oldPrice: '$159.00', rating: 5, ratingCount: 98, badge: 'HOT', badgeColor: 'bg-[#FF6B35]' },
  { id: 104, image: BS1,   title: 'Portable Bluetooth Speaker 360° Surround Sound', price: '$49.99', oldPrice: '$69.99', rating: 4, ratingCount: 203, badge: 'SALE', badgeColor: 'bg-[#FF4D4F]' },
];

const useCountdown = (targetSeconds) => {
  const [seconds, setSeconds] = useState(targetSeconds);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s <= 0 ? targetSeconds : s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return { h, m, s };
};

const TimerBox = ({ val, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 bg-[#1D1D1D] text-white rounded-xl flex items-center justify-center shadow-lg">
      <span className="font-inter font-extrabold text-2xl">{String(val).padStart(2, '0')}</span>
    </div>
    <span className="font-inter text-[11px] text-gray-500 mt-1.5 font-medium uppercase tracking-wide">{label}</span>
  </div>
);

const HomeThreeDeals = () => {
  const endOfDay = Math.floor(
    (new Date(new Date().setHours(23, 59, 59, 0)) - new Date()) / 1000
  );
  const { h, m, s } = useCountdown(endOfDay);

  return (
    <section className="pb-14">
      <Container>
        {/* Header with countdown */}
        <div className="flex justify-between items-end mb-7">
          <SectionHeader
            title="Deal Of The Day"
            subtitle="Today's Deals"
            viewMoreLink="/flash-sale"
            className="pb-0 flex-1"
          />
          <div className="flex items-center gap-2 mb-1">
            <span className="font-inter text-sm font-semibold text-gray-500 mr-1">Ends in:</span>
            <TimerBox val={h} label="Hrs" />
            <span className="font-inter font-bold text-xl text-[#FFBB38] -mt-5">:</span>
            <TimerBox val={m} label="Min" />
            <span className="font-inter font-bold text-xl text-[#FFBB38] -mt-5">:</span>
            <TimerBox val={s} label="Sec" />
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeThreeDeals;
