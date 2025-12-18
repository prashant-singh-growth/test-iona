import React from "react";
import { CaseStudyJson } from "../../Data/CaseStudyDynamic";

function CaseStudyCard() {
  return (
    <section className="w-full bg-white flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 ">
          {Object.values(CaseStudyJson).map((item, index) => (
            <div
              key={index}
              className={`w-full ${item.grid ? "sm:col-span-2 " : "sm:col-span-1 "} flex flex-col gap-8`}
            >
             <div className="w-full relative">
               <img
                src={item.image}
                alt={item.title}
                className="w-full object-contain"
              />
               <div className="absolute top-2 lg:top-4 right-2 lg:right-4 p-2 rounded-md bg-darkVoilet">
                  <img src={`${item.customer.logo}`} alt="logo" className="h-6 lg:h-8 rounded-md  object-contain " />
              </div>
             </div>

              <p className="text-black text-xl font-lora font-normal line-clamp-3">
                {item?.cardTitle}
              </p>

              <a
                href={`/case-studies/${item.slug}`}
                className="bg-primary w-fit px-5 py-3 flex-none border-2 border-white font-bold leading-5 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
              >
                <span>Read More</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                    stroke="#FCFCFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCard;
