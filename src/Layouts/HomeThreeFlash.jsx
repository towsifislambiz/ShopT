import React from 'react';
import Container from '../Components/Container';
import SectionHeader from '../Components/SectionHeader';
import ProductCard from '../Components/ProductCard';
import Card1 from '../assets/Card1.png';
import Flash2 from '../assets/Flash2.png';

const newArrivals = [
  { id: 201, image: Card1, title: 'Apple AirPods Pro 3rd Generation Spatial Audio', price: '$179.00', oldPrice: '$249.00', rating: 5, ratingCount: 412, badge: 'NEW', badgeColor: 'bg-[#2DB224]' },
  { id: 202, image: Card1, title: 'Samsung Galaxy Tab S9 Ultra 14.6" AMOLED', price: '$799.00', oldPrice: '$999.00', rating: 4, ratingCount: 88,  badge: 'SALE', badgeColor: 'bg-[#FF4D4F]' },
  { id: 203, image: Card1, title: 'Sony WF-1000XM5 Truly Wireless Earbuds', price: '$249.00', oldPrice: '$299.00', rating: 5, ratingCount: 196, badge: null },
  { id: 204, image: Card1, title: 'Logitech MX Master 3S Wireless Mouse', price: '$89.00', oldPrice: '$109.00', rating: 4, ratingCount: 334, badge: 'HOT', badgeColor: 'bg-[#FF6B35]' },
];

const HomeThreeFlash = () => {
  return (
    <section className="pb-14">
      <Container>
        {/* Two-column: banner + products */}
        <div className="flex gap-6">
          {/* Flash sale banner */}
          <div
            className="relative w-[340px] flex-shrink-0 h-auto min-h-[500px] rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              backgroundImage: `url(${Flash2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 z-10">
              <span className="inline-block bg-[#FFBB38] text-[#1D1D1D] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Flash Sale
              </span>
              <h3 className="font-inter font-extrabold text-2xl text-white leading-tight mb-2">
                WOO! Flash Sale
              </h3>
              <p className="font-inter text-sm text-white/70 mb-4">
                Limited time offers on premium products.
              </p>
              <a
                href="/flash-sale"
                className="inline-flex items-center gap-2 font-inter font-bold text-sm bg-[#FFBB38] text-[#1D1D1D] px-5 py-2.5 rounded-lg hover:bg-white transition-all duration-200 cursor-pointer"
              >
                Shop Now →
              </a>
            </div>
          </div>

          {/* New Arrivals grid */}
          <div className="flex-1">
            <SectionHeader title="New Arrivals" subtitle="Fresh Picks" viewMoreLink="/shop" className="pb-5" />
            <div className="grid grid-cols-2 gap-4">
              {newArrivals.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeThreeFlash;
