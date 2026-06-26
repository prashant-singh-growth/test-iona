import React from "react";
import "./css/HowWeWork.css";


function HowWeWork() {
  return (
    <section className="w-full bg-transparent flex flex-col py-10 md:py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10 fade-in-section">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10">
        {/* Heading */}
        <div className="flex flex-col max-w-[850px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
           See How We Transform Your HR Operations
          </h2>
        </div>

        {/* Image */}
        <img
          src="/assets/pages/homepage/home-design.webp"
          alt="how iona work"
          title="how iona work"
          className="w-full hidden md:block mx-auto max-w-[1440px] pt-10 pb-8 object-contain fade-in-delay"
          loading="lazy"
        />
        <img
          src="/assets/pages/homepage/home-design-3.webp"
          alt="how iona work"
          title="how iona work"
          className="w-full md:hidden mx-auto max-w-[1440px] pt-10 pb-8 object-contain fade-in-delay"
          loading="lazy"
        />

        
      </div>
    </section>
  );
}

export default HowWeWork;
