import React from 'react';
import Container from '../Components/Container';
import {
  FaLaptop, FaGamepad, FaCamera, FaCar, FaCouch,
  FaFootballBall, FaCoffee, FaTshirt, FaBaby,
} from 'react-icons/fa';
import { GiLipstick } from 'react-icons/gi';
import { MdPhoneAndroid, MdHeadphones, MdWatch } from 'react-icons/md';

const categories = [
  { icon: <FaLaptop />,     label: 'Laptops',    bg: '#EEF2FF', color: '#4F46E5' },
  { icon: <MdPhoneAndroid />,label: 'Phones',    bg: '#F0FDF4', color: '#16A34A' },
  { icon: <FaGamepad />,    label: 'Gaming',      bg: '#FDF4FF', color: '#9333EA' },
  { icon: <FaCamera />,     label: 'Camera',      bg: '#FFF1F2', color: '#E11D48' },
  { icon: <MdHeadphones />, label: 'Audio',       bg: '#FFF7ED', color: '#EA580C' },
  { icon: <MdWatch />,      label: 'Watches',     bg: '#F0F9FF', color: '#0284C7' },
  { icon: <FaCouch />,      label: 'Furniture',   bg: '#FEFCE8', color: '#CA8A04' },
  { icon: <FaTshirt />,     label: 'Fashion',     bg: '#F0FDFA', color: '#0D9488' },
  { icon: <GiLipstick />,   label: 'Beauty',      bg: '#FFF1F2', color: '#BE185D' },
  { icon: <FaBaby />,       label: 'Baby',        bg: '#F0F9FF', color: '#0369A1' },
  { icon: <FaFootballBall />,label: 'Sports',     bg: '#F7FEE7', color: '#65A30D' },
  { icon: <FaCoffee />,     label: 'Food',        bg: '#FFFBEB', color: '#D97706' },
];

const HomeThreeCategoryRow = () => {
  return (
    <section className="pb-14">
      <Container>
        <div className="grid grid-cols-6 lg:grid-cols-6 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: cat.bg }}
            >
              <span
                className="text-3xl transition-transform duration-300 group-hover:scale-125"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </span>
              <span
                className="font-inter font-semibold text-[13px] text-center"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeThreeCategoryRow;
