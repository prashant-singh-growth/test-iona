import React from "react";

function CaseStudyCard() {
  return (
    <section className="w-full bg-darkVoilet flex flex-col py-[80px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8 ">
          <div
            className={`w-full bg-white   rounded-[14px] p-3 gap-8 grid grid-cols-6`}
          >
            <div className="w-full relative col-span-2">
              <img
                src={"/assets/pages/casestudy/aditya.webp"}
                alt="logo"
                className="w-24   object-contain "
              />
            </div>

            <a href="/case-studies/aditya-birla" className="w-full flex flex-col col-span-4 bg-[#B11D1D] relative p-3 rounded-[4px_12px_12px_4px] group">
              <div className="absolute left-3 top-0 h-full w-[3px]  bg-[#00000026] ">
                {" "}
              </div>
              <div  className="ml-auto ease-linear duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.959493 8.59972L10.0162 2.02201M10.0162 2.02201L3.31575 0.959567M10.0162 2.02201L8.95379 8.72248"
                    stroke="#FCFCFC"
                    stroke-width="1.91886"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-bold text-white font-lora pl-2 pt-12">
              How Aditya Birla Sun Life Insurance transformed hiring with iona.ai and achieved 90% faster onboarding.
              </p>
            </a>
          </div>
          <div
            className={`w-full bg-white   rounded-[14px] p-3 gap-8 grid grid-cols-6`}
          >
            <div className="w-full relative col-span-2">
              <img
                src={"/assets/pages/casestudy/metropolis.webp"}
                alt="logo"
                className="w-28   object-contain "
              />
            </div>

            <a href="/case-studies/metropolis-healthcare" className="w-full flex flex-col col-span-4 bg-[#13984A] relative p-3 rounded-[4px_12px_12px_4px] group">
              <div className="absolute left-3 top-0 h-full w-[3px]  bg-[#00000026] ">
                {" "}
              </div>
              <div  className="ml-auto ease-linear duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.959493 8.59972L10.0162 2.02201M10.0162 2.02201L3.31575 0.959567M10.0162 2.02201L8.95379 8.72248"
                    stroke="#FCFCFC"
                    stroke-width="1.91886"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-bold text-white font-lora pl-2 pt-12">
             How Metropolis Healthcare saved millions, expanded its workforce, and accelerated hiring with iona.ai.
              </p>
            </a>
          </div>
          <div
            className={`w-full bg-white   rounded-[14px] p-3 gap-8 grid grid-cols-6`}
          >
            <div className="w-full relative col-span-2">
              <img
                src={"/assets/pages/casestudy/hdfc.webp"}
                alt="logo"
                className="w-14   object-contain "
              />
            </div>

           <a href="/case-studies/hdfc-ergo" className="w-full flex flex-col col-span-4 bg-[#E41F28] relative p-3 rounded-[4px_12px_12px_4px] group">
              <div className="absolute left-3 top-0 h-full w-[3px]  bg-[#00000026] ">
                {" "}
              </div>
              <div  className="ml-auto ease-linear duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.959493 8.59972L10.0162 2.02201M10.0162 2.02201L3.31575 0.959567M10.0162 2.02201L8.95379 8.72248"
                    stroke="#FCFCFC"
                    stroke-width="1.91886"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-bold text-white font-lora pl-2 pt-12">
               Learn how HDFC Ergo - General Insurance achieved 4x faster JD turnaround and 100% automated BGV for field service professionals.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCard;
