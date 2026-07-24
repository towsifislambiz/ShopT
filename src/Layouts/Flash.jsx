import React from "react";
import Container from "../Components/Container";
import FlashSaleBanner from "../Components/FlashSaleBanner";
import Flash2 from "../assets/Flash2.png";

const Flash = () => {
  return (
    <section className="pb-15">
      <Container>

        <div className="flex justify-between">

          <FlashSaleBanner />


          <section
            className="relative w-[640px] h-[500px]  overflow-hidden rounded-xl cursor-pointer"
            style={{
              backgroundImage: `url(${Flash2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              backgroundSize: "contain",
            }}
          >
            
          </section>


        </div>

      </Container>
    </section>
  );
};

export default Flash;