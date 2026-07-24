import React from 'react';
import Subnav from '../Layouts/Subnav';
import Navber from '../Layouts/Navber';
import Navber2 from '../Layouts/Navber2';
import HomeThreeHero from '../Layouts/HomeThreeHero';
import HomeThreeCategoryRow from '../Layouts/HomeThreeCategoryRow';
import HomeThreeDeals from '../Layouts/HomeThreeDeals';
import HomeThreeFlash from '../Layouts/HomeThreeFlash';
import HomeThreeBrands from '../Layouts/HomeThreeBrands';
import Information from '../Layouts/Information';
import CouponSection from '../Layouts/Discount';
import Footer from '../Layouts/Footer';

const Home3 = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* ── Header ── */}
      <Subnav />
      <Navber />
      <Navber2 />

      {/* ── Main ── */}
      <main className="max-w-[1320px] mx-auto">
        {/* Full-width slider hero */}
        <HomeThreeHero />

        {/* Info bar */}
        <Information />

        {/* Category icon row */}
        <HomeThreeCategoryRow />

        {/* Deal of the Day + countdown */}
        <HomeThreeDeals />

        {/* Flash banner + New Arrivals */}
        <HomeThreeFlash />

        {/* Top Brands */}
        <HomeThreeBrands />
      </main>

      {/* ── Footer ── */}
      <footer>
        <CouponSection />
        <Footer />
      </footer>
    </div>
  );
};

export default Home3;
