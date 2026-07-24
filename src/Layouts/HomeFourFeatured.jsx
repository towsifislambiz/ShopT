import React, { useState } from 'react';
import Container from '../Components/Container';
import SectionHeader from '../Components/SectionHeader';
import ProductCard from '../Components/ProductCard';
import Card1 from '../assets/Card1.png';
import BS1 from '../assets/BS1.png';

const tabs = ['All', 'Electronics', 'Fashion', 'Gaming', 'Home'];

const allProducts = [
  { id: 301, image: Card1, title: 'Pro Noise Cancelling Headphones Studio Quality', price: '$189.00', oldPrice: '$249.00', rating: 5, ratingCount: 382, badge: 'HOT', badgeColor: 'bg-[#FF6B35]', category: 'Electronics' },
  { id: 302, image: BS1,   title: 'Ultra HD 4K Action Camera Waterproof 60fps',    price: '$149.00', oldPrice: '$199.00', rating: 4, ratingCount: 127, badge: 'SALE', badgeColor: 'bg-[#FF4D4F]', category: 'Electronics' },
  { id: 303, image: Card1, title: 'Slim Fit Premium Denim Jacket Men',              price: '$59.00',  oldPrice: '$89.00',  rating: 4, ratingCount: 94,  badge: 'NEW',  badgeColor: 'bg-[#2DB224]', category: 'Fashion' },
  { id: 304, image: BS1,   title: 'RGB Gaming Headset 7.1 Surround Sound USB',     price: '$79.00',  oldPrice: '$109.00', rating: 5, ratingCount: 211, badge: null, category: 'Gaming' },
  { id: 305, image: Card1, title: 'Ergonomic Mesh Office Chair Lumbar Support',     price: '$279.00', oldPrice: '$399.00', rating: 4, ratingCount: 68,  badge: 'SALE', badgeColor: 'bg-[#FF4D4F]', category: 'Home' },
  { id: 306, image: BS1,   title: 'Mechanical Gaming Keyboard Tactile Switches',   price: '$129.00', oldPrice: '$169.00', rating: 5, ratingCount: 156, badge: 'HOT',  badgeColor: 'bg-[#FF6B35]', category: 'Gaming' },
  { id: 307, image: Card1, title: 'Casual Summer Linen Shirt Slim Fit Breathable', price: '$34.00',  oldPrice: '$54.00',  rating: 3, ratingCount: 43,  badge: null, category: 'Fashion' },
  { id: 308, image: BS1,   title: 'Smart LED Desk Lamp Wireless Charging Pad',     price: '$69.00',  oldPrice: '$89.00',  rating: 4, ratingCount: 88,  badge: 'NEW',  badgeColor: 'bg-[#2DB224]', category: 'Home' },
];

const HomeFourFeatured = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <section className="pb-14">
      <Container>
        {/* Header + Tabs */}
        <div className="flex justify-between items-end mb-7">
          <SectionHeader title="Featured Products" subtitle="Our Products" viewMoreLink="/shop" className="pb-0 flex-1" />
          <div className="flex gap-2 flex-wrap mb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`font-inter font-semibold text-xs px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
                  active === tab
                    ? 'bg-[#FFBB38] text-[#1D1D1D] shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#FFBB38]/20 shadow-sm'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeFourFeatured;
