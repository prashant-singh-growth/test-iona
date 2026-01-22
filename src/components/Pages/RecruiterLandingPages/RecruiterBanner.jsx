import React from 'react'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'

function RecruiterBanner() {
  return (
   <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
          <ResponsiveGridLines gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, 50, 40]} />
          <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10">
            <div className="w-full max-w-[100vw]">
              <h1 className="text-4xl font-bold md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-primary  text-left ">
               Excel with the Power of <span  style={{
    background: "linear-gradient(0deg, #6492EE 21.51%, #637CEB 28.33%, #6276E5 35.69%, #5A5EDA 43.6%, #3D52CA 52.05%, #1820B7 64.6%, #091CAF 78.23%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block"
  }}>Agentic AI</span> - Stop Wasting Hours on Manual Tracking.
              </h1>
              <p className="text-base font-lora text-primary font-normal mt-5">
            From CV parsing to candidate matching, get the best AI-powered Candidate Tracker that works just like your favorite spreadsheet—only 10x faster.
              </p>
              <div className="w-full flex flex-col sm:flex-row justify-between md:justify-start gap-5 mt-8 md:mt-12 lg:mt-12 slg:mt-10 ">
                <a
                  href="/signup"
                  className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                >
                  <span>Get Started - it's Free</span>{" "}
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
            </div>
            <img
              src="/assets/pages/landingpage/recruit.webp"
              alt="applicant tracking system"
              className=" w-full object-contain "
              loading='lazy'
            />
          </div>
        </section>
  )
}

export default RecruiterBanner