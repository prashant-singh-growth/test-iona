import React from "react";
import ResponsiveGridLines from "../../utils/ResponsiveGridLines";
import CaseStudyForm from "./CaseStudyForm";

function CaseStudyDynamicBanner({banner}) {
  console.log(banner.PDFurl)
  return (
    <section className="w-full bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
      <ResponsiveGridLines
        lineShow={false}
        gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, 50, 96]}
      />
      <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-[60%_40%] place-items-center relative z-10 gap-10">
        <div className="w-full max-w-[100vw]">
          <p className="text-lg font-lora text-primary font-normal mt-5">
            {banner?.headshot}
          </p>
          <h1 className="text-4xl font-semibold font-lora   lg:leading-[50px] text-[#2A2564] flex flex-col text-left ">
           {banner?.title}
          </h1>
          <div className="w-full bg-darkVoilet rounded-xl py-5 px-10 flex flex-col justify-center items-center mt-10 gap-4">
            <p className="text-lg font-lora text-white font-normal ">Outcome</p>
            <div className="w-full grid gap-5 gap-y-8 grid-cols-1 sm:grid-cols-3 ">
              {banner?.outcome.map((item) => (
                <div
                  key={item.count}
                  className="flex flex-col w-full justify-center items-center"
                >
                  <p className="font-lora text-3xl md:text-4xl text-white">{item.count}</p>
                  <p className="font-lora text-base text-white text-center">{item.text}</p>
                </div>
              ))}
            </div>
           
          </div>
        </div>
        <CaseStudyForm pdfurl={banner.PDFurl}/>
      </div>
    </section>
  );
}

export default CaseStudyDynamicBanner;
