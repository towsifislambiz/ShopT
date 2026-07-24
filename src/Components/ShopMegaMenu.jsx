import { useState, useRef } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import  Image  from "../Components/Image" ;
import DS from '../assets/DS.jpg'
const SHOP_LIST_LINKS = [
  { label: "Shop Sidebar", href: "#" },
  { label: "Shop Fullwidth", href: "#" },
  { label: "Shop Category Icon", href: "#" },
  { label: "Shop Category Icon", href: "#" },
  { label: "Shop List View", href: "#" },
];

const PRODUCT_LAYOUT_LINKS = [
  { label: "Horizonral Thumbnail", href: "#" },
  { label: "Vertical Thumbnail", href: "#" },
  { label: "Gallery Thumbnail", href: "#" },
  { label: "Sticky Summary", href: "#" },
];

const POPULAR_CATEGORY_LINKS = [
  { label: "Phone & Tablet", href: "#" },
  { label: "Gaming & Sports", href: "#" },
  { label: "Home Appliance", href: "#" },
  { label: "Fashion Clothes", href: "#" },
];

const MENU_COLUMNS = [
  { heading: "SHOP LIST", links: SHOP_LIST_LINKS },
  { heading: "PRODUCT LAYOUTS", links: PRODUCT_LAYOUT_LINKS },
  { heading: "POLULAR CATEGORY", links: POPULAR_CATEGORY_LINKS },
];


function MenuColumn({ heading, links }) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-5 text-[13px] font-bold tracking-wide text-gray-900">
        {heading}
      </h3>
      <ul className="flex flex-col gap-4">
        {links.map((link, i) => (
          <li key={`${link.label}-${i}`}>
            <a
              href={link.href}
              className="text-[14px] text-gray-500 transition-colors duration-150 hover:text-[#ffbb38] hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromoBanner() {
  return (

    <div className="relative h-[250px] w-[400px] overflow-hidden ">

    


      {/* Your Image */}
    <div className="relative h-[250px] w-[400px] rounded-xl overflow-hidden">
  <Image
    src={DS}
    alt="Watch"
    className="w-full h-full object-cover"
  />
</div>
    </div>
  );
}



// ---------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------
export default function ShopMegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    // relative + inline-block so the absolutely-positioned panel below
    // anchors to this nav item without affecting navbar height
    <div
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
    <button
  type="button"
  className="group flex items-center gap-1  text-[15px] font-semibold text-gray-800 transition-colors duration-300 hover:text-orange-500"
  aria-haspopup="true"
  aria-expanded={open}
>
  Shop

  <MdKeyboardArrowDown
    className={`text-xl transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  />
</button>

      <div
        className={`absolute left-0 top-full z-50 pt-3 transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {/* orange top accent line, matching the reference screenshot */}
       <div className="w-[1000px] overflow-hidden rounded-b-xl border border-t-0 border-gray-100 bg-white shadow-2xl">
          <div className="h-[3px] w-full bg-orange-400" />

          <div className="flex gap-10 p-8">
            {/* left: link columns */}
            <div className="grid flex-1 grid-cols-3 gap-8">
              {MENU_COLUMNS.map((col) => (
                <MenuColumn key={col.heading} {...col} />
              ))}
            </div>

            {/* right: promo banner */}
            <PromoBanner />
          </div>
        </div>
      </div>
    </div>
  );
}
