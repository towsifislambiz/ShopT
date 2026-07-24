import React from 'react';
import Container from '../Components/Container';
import SectionHeader from '../Components/SectionHeader';
import Brands from '../Components/Brands';
import Brand1 from '../assets/Brand1.png';
import Brand2 from '../assets/Brand2.png';
import Brand3 from '../assets/Brand3.png';
import Brand4 from '../assets/Brand4.png';
import Brand5 from '../assets/Brand5.png';
import Brand6 from '../assets/Brand6.png';
import Brand7 from '../assets/Brand7.png';
import Brand8 from '../assets/Brand8.png';
import Brand9 from '../assets/Brand9.png';
import Brand10 from '../assets/Brand10.png';

const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10];

const HomeThreeBrands = () => {
  return (
    <section className="pb-14">
      <Container>
        <SectionHeader title="Top Brands" subtitle="Shop by Brand" viewMoreLink="/shop" />
        <div className="bg-white rounded-2xl shadow-sm px-8 py-7">
          <div className="flex justify-between items-center flex-wrap gap-6">
            {brands.map((b, i) => (
              <div
                key={i}
                className="cursor-pointer grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <Brands src={b} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeThreeBrands;
