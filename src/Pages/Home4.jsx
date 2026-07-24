import React from 'react';
import Subnav from '../Layouts/Subnav';
import Navber from '../Layouts/Navber';
import Navber2 from '../Layouts/Navber2';
import HomeFourHero from '../Layouts/HomeFourHero';
import Information from '../Layouts/Information';
import HomeFourFeatured from '../Layouts/HomeFourFeatured';
import HomeFourTrending from '../Layouts/HomeFourTrending';
import Brand from '../Layouts/Brand';
import CouponSection from '../Layouts/Discount';
import Footer from '../Layouts/Footer';

const Home4 = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* ── Header ── */}
      <Subnav />
      <Navber />
      <Navber2 />

      {/* ── Main ── */}
      <main className="max-w-[1320px] mx-auto">
        {/* Split hero: large card + two stacked banners */}
        <HomeFourHero />

        {/* Info bar */}
        <Information />

        {/* Featured products with tab filter */}
        <HomeFourFeatured />

        {/* Trending 3-columns + promo banners */}
        <HomeFourTrending />

        {/* Shop by Brand */}
        <Brand />
      </main>

      {/* ── Footer ── */}
      <footer>
        <CouponSection />
        <Footer />
      </footer>
    </div>
  );
};

export default Home4;
