import React from 'react'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'
import { Link } from 'react-router-dom'

function HomeBanner() {
  return (
     <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-24 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
        <ResponsiveGridLines gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, -10, -10]} />
        <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10 xl:gap-28">
          <div className="w-full max-w-[100vw]">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight slg:text-5xl  text-black/80 flex flex-col text-left ">
          Enterprise Agentic AI Recruiting Automation for Hiring at Scale

            </h1>
            <p className="text-base font-lora text-primary font-normal mt-5">
           Complete Enterprise Hiring automation with iona.ai - from background checks, document verification, and digital onboarding. Ensure 100% accuracy and zero compliance issues, guaranteed!
            </p>
          
            <div className="w-full flex flex-col sm:flex-row justify-between md:justify-start gap-5 mt-8 md:mt-10 ">
              <Link
                to="/contact"
                className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
              >
                <span>Book a Demo</span>{" "}
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
              </Link>
              <a
                href="#solution"
                className="border-primary font-bold leading-5 border w-fit bg-white px-4 py-2.5 md:px-5 md:py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
              >
                <span>Explore Modules</span>{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                    stroke="#2a2564"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-6 mt-8 md:mt-10">
  {[
    { title: "500+", counter: "Enterprises onboarded" },
    { title: "100%", counter: "Hiring accuracy" },
    { title: "Zero", counter: "Compliance issues" },
  ].map((item, index) => (
    <div key={index} className="flex flex-col border-l-2 gap-1 border-darkVoilet pl-4">
      <span className="text-xl font-bold text-primaryText leading-tight">
        {item.title}
      </span>
      <span className="text-xs font-medium text-black/50 uppercase tracking-wide">
        {item.counter}
      </span>
    </div>
  ))}
</div>
          </div>
          <img
            src="/assets/pages/homepage/home-banner.webp"
            alt="AI-Powered hiring Solutions"
            className=" w-full object-contain "
            loading='lazy'
          />
        </div>
      </section>
  )
}

export default HomeBanner