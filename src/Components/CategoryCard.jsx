import { HiArrowRight } from "react-icons/hi2";

const CategoryCard = ({
  title = "Mobile & Tablet",
  items = ["Xiaomi", "Apple", "Google", "Samsung"],
  bgImage,
}) => {
  return (
    <div
      className="w-[300px] h-[470px] bg-cover bg-center bg-no-repeat p-7 flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <p className="text-xl font-bold text-black mb-2">
        {title}
      </p>

      <ul className="space-y-2 text-gray-700 mb-5 cursor-pointer">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button className="flex items-center gap-2 text-lg font-inter cursor-pointer font-semibold ">
        Shop Now
        <HiArrowRight />
      </button>
    </div>
  );
};

export default CategoryCard;