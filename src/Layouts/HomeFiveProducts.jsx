import React, { useState } from "react";
import Container from "../Components/Container";
import SectionHeader from "../Components/SectionHeader";
import ProductCard from "../Components/ProductCard";
import Card1 from "../assets/Card1.png";
import BS1 from "../assets/BS1.png";

const tabs = ["Best Sellers", "On Sale", "New Arrivals", "Top Rated"];

const allProducts = [
  {
    id: 401,
    image: Card1,
    title: "Sony XM5 Wireless Headphones Noise Cancelling",
    price: "$229.00",
    oldPrice: "$349.00",
    rating: 5,
    ratingCount: 508,
    badge: "34% OFF",
    badgeColor: "bg-[#FF4D4F]",
    tab: "On Sale",
  },
  {
    id: 402,
    image: BS1,
    title: "Apple Watch Series 9 GPS + Cellular 45mm",
    price: "$449.00",
    oldPrice: "$499.00",
    rating: 5,
    ratingCount: 312,
    badge: "NEW",
    badgeColor: "bg-[#2DB224]",
    tab: "New Arrivals",
  },
  {
    id: 403,
    image: Card1,
    title: "Razer DeathAdder V3 HyperSpeed Gaming Mouse",
    price: "$109.00",
    oldPrice: "$149.00",
    rating: 5,
    ratingCount: 271,
    badge: "HOT",
    badgeColor: "bg-[#FF6B35]",
    tab: "Best Sellers",
  },
  {
    id: 404,
    image: BS1,
    title: 'Samsung 65" QLED 4K Smart TV QN65Q80C',
    price: "$999.00",
    oldPrice: "$1499.00",
    rating: 4,
    ratingCount: 89,
    badge: "SALE",
    badgeColor: "bg-[#FF4D4F]",
    tab: "On Sale",
  },
  {
    id: 405,
    image: Card1,
    title: 'iPad Pro 12.9" M2 Chip 256GB Wi-Fi Space Gray',
    price: "$899.00",
    oldPrice: "$1099.00",
    rating: 5,
    ratingCount: 196,
    badge: "TOP",
    badgeColor: "bg-[#0284C7]",
    tab: "Top Rated",
  },
  {
    id: 406,
    image: BS1,
    title: "Bose QuietComfort 45 Bluetooth Headphones",
    price: "$249.00",
    oldPrice: "$329.00",
    rating: 4,
    ratingCount: 143,
    badge: null,
    tab: "Best Sellers",
  },
  {
    id: 407,
    image: Card1,
    title: "DJI Mini 4 Pro Drone 4K HDR Video 34min",
    price: "$759.00",
    oldPrice: "$959.00",
    rating: 5,
    ratingCount: 64,
    badge: "NEW",
    badgeColor: "bg-[#2DB224]",
    tab: "New Arrivals",
  },
  {
    id: 408,
    image: BS1,
    title: 'LG OLED 55" C3 4K Smart TV Dolby Vision',
    price: "$1199.00",
    oldPrice: "$1799.00",
    rating: 5,
    ratingCount: 231,
    badge: "TOP",
    badgeColor: "bg-[#0284C7]",
    tab: "Top Rated",
  },
];

const HomeFiveProducts = () => {
  const [active, setActive] = useState("Best Sellers");

  const filtered = allProducts.filter((item) => item.tab === active);

  return (
    <section className="pb-14">
      <Container>
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <SectionHeader
            title="Our Products"
            subtitle="Products"
            viewMoreLink="/shop"
            className="pb-0 flex-1"
          />

          <div className="flex items-center gap-2 ml-4 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === tab
                    ? "bg-[#FFBB38] text-[#1D1D1D] shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-[#FFBB38]/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeFiveProducts;