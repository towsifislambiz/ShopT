import React from "react";
import Container from "../Components/Container";
import Info from "../Components/Info";
import { BsCart3 } from "react-icons/bs";



const Information = () => {
  return (
    <section className="mt-12 mb-15">
      <Container>
        <div className="w-full bg-white">
 <div className="flex justify-between mx-10 py-8">
            <Info
  icon={<BsCart3 className="text-4xl text-[#FFBB38]" />}
  Text="Free Shipping"
  Text2="On all orders over $100"
/>
            <Info
  icon={<BsCart3 className="text-4xl text-[#FFBB38]" />}
  Text="Free Shipping"
  Text2="On all orders over $100"
/>
            <Info
  icon={<BsCart3 className="text-4xl text-[#FFBB38]" />}
  Text="Free Shipping"
  Text2="On all orders over $100"
/>
            <Info
  icon={<BsCart3 className="text-4xl text-[#FFBB38]" />}
  Text="Free Shipping"
  Text2="On all orders over $100"
/>
 </div>
        </div>
      </Container>
    </section>
  );
};

export default Information;