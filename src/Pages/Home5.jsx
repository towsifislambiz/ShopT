import React from 'react';
import Subnav from '../Layouts/Subnav';
import Navber from '../Layouts/Navber';
import Navber2 from '../Layouts/Navber2';
import HomeFiveHero from '../Layouts/HomeFiveHero';
import Information from '../Layouts/Information';
import Brand from '../Layouts/Brand';
import Flash from '../Layouts/Flash';
import HomeFiveProducts from '../Layouts/HomeFiveProducts';
import TopSelling from '../Layouts/TopSelling';
import CouponSection from '../Layouts/Discount';
import Footer from '../Layouts/Footer';

const Home5 = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* ── Header ── */}
      <Subnav />
      <Navber />
      <Navber2 />

      {/* ── Main ── */}
      <main className="max-w-[1320px] mx-auto">
        {/* Image overlay hero + stats bar */}
        <HomeFiveHero />

        {/* Info bar (4 features) */}
        <Information />

        {/* Tab-filtered product grid */}
        <HomeFiveProducts />

        {/* Flash sale banner */}
        <Flash />

        {/* Top selling products */}
        <TopSelling />

        {/* Shop by brand */}
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

export default Home5;
