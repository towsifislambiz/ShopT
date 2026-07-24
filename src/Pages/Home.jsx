import React from "react";
import Subnav from "../Layouts/Subnav";
import Navber from "../Layouts/Navber";
import Navber2 from "../Layouts/Navber2";
import Banner from "../Layouts/Banner";
import Information from "../Layouts/Information";
import Gamer from "../Layouts/Gamer";
import Brand from "../Layouts/Brand";
import Flash from "../Layouts/Flash";
import TopSelling from "../Layouts/TopSelling";
import BestSelller from "../Layouts/BestSelller";
import PopularSell from "../Layouts/PopularSell";
import NewArrivals from "../Layouts/NewArrivals";
import PopularSell2 from "../Layouts/PopularSell2";
import CouponSection from "../Layouts/Discount";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">

      <Subnav />
      <Navber />
      <Navber2 />

      <main className="max-w-[1320px] mx-auto ">
        <Banner />
        <Information />
        <Gamer/>
        <Brand/>
        <Flash/>
        <TopSelling/>
        <BestSelller/>
        <PopularSell/>
        <NewArrivals/>
        <PopularSell2/>
      </main>

      <footer>
 <CouponSection/>
 <Footer/>
      </footer>
       

    </div>
  );
};

export default Home;