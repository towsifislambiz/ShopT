import React from 'react'
import Subnav from '../Layouts/Subnav'
import Navber from '../Layouts/Navber'
import Navber2 from '../Layouts/Navber2'
import HeroBanner2 from '../Layouts/HeroBanner2'
import CategoryShowcase from '../Layouts/CategoryShowcase'
import FeaturedProducts from '../Layouts/FeaturedProducts'
import DealOfTheDay from '../Layouts/DealOfTheDay'
import SpecialOffer from '../Layouts/SpecialOffer'
import TrendingProducts from '../Layouts/TrendingProducts'
import TopBrands2 from '../Layouts/TopBrands2'
import Newsletter from '../Layouts/Newsletter'
import Footer from '../Layouts/Footer'

const Home2 = () => {
  return (
    <div className='min-h-screen bg-[#f3f4f6]'>

      {/* Header */}
      <Subnav />
      <Navber />
      <Navber2 />

      {/* Main content */}
      <main className='max-w-[1320px] mx-auto'>
        {/* Hero slider */}
        <HeroBanner2 />

        {/* Shop by category */}
        <CategoryShowcase />

        {/* Featured products with tab filter */}
        <FeaturedProducts />

        {/* Deal of the day with countdown */}
        <DealOfTheDay />

        {/* Two-column special offer banners */}
        <SpecialOffer />

        {/* Trending products — 3 columns */}
        <TrendingProducts />

        {/* Top brands */}
        <TopBrands2 />
      </main>

      {/* Footer */}
      <footer>
        <Newsletter />
        <Footer />
      </footer>

    </div>
  )
}

export default Home2
