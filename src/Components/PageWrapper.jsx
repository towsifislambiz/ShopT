import React from 'react';
import Subnav from '../Layouts/Subnav';
import Navber from '../Layouts/Navber';
import Navber2 from '../Layouts/Navber2';
import Footer from '../Layouts/Footer';
import CouponSection from '../Layouts/Discount';

/**
 * PageWrapper — consistent shell for all inner pages.
 * Renders: Subnav → Navbar → Nav2 → {children} → CouponSection → Footer
 *
 * Props:
 *   children       — page content
 *   bgColor        — background class (default 'bg-[#f3f4f6]')
 *   showNewsletter — whether to show the coupon/newsletter section (default true)
 */
const PageWrapper = ({
  children,
  bgColor = 'bg-[#f3f4f6]',
  showNewsletter = true,
}) => {
  return (
    <div className={`min-h-screen ${bgColor}`}>
      <Subnav />
      <Navber />
      <Navber2 />

      <main className="max-w-[1320px] mx-auto px-4 py-8">
        {children}
      </main>

      <footer>
        {showNewsletter && <CouponSection />}
        <Footer />
      </footer>
    </div>
  );
};

export default PageWrapper;
