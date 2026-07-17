import React from 'react'
import FAQLandingPage from '../../components/sections/FAQLandingPage'
import Trusted from '../../components/Pages/LandingPage/adslandingthird/Trusted'
import OurBooth from '../../components/Pages/LandingPage/adslandingthird/OurBooth'
import MeetFounder from '../../components/Pages/LandingPage/adslandingthird/MeetFounder'
import Stage from '../../components/Pages/LandingPage/adslandingthird/Stage'
import Platform from '../../components/Pages/LandingPage/adslandingthird/Platform'
import LPThirdBanner from '../../components/Pages/LandingPage/adslandingthird/LPThirdBanner'
import LPHeader from '../../components/Pages/LandingPage/LPHeader'
import LPFooter from '../../components/Pages/LandingPage/LPFooter'

function AdsLandingPagesThird() {
  return (
    <div>
      <LPHeader ctaLink={"#form"}/>
      <LPThirdBanner/>
        <Platform/>
        <Stage/>
        <MeetFounder/>
        <OurBooth/>
        <Trusted/>
        <FAQLandingPage/>
        <section className="w-full bg-[#150D37] overflow-hidden">
  <div className="w-full relative py-16 grid place-items-center px-5 md:px-10 slg:px-[60px] lg:px-[90px]">
    <img src="/assets/pages/landingpage/bg-cta-1.png" alt="" className="absolute inset-0 min-w-[1200px] lg:min-w-full lg:max-w-full"/>
    <div className="w-full flex flex-col justify-center items-center relative z-10 max-w-4xl ">
      <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-lora font-bold md:font-semibold text-center ">Ready to reimagine 
enterprise hiring?</h2>
      <p className="text-base text-white font-lora text-center pt-6 pb-12">Meet us at People Matters TechHR India 2026 · 6–7 August 2026 · Yashobhoomi Convention Center, Dwarka, New Delhi.</p>
         <a
          href={"#form"}
          className="bg-white px-5 py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
        >
          <span>Book your slot & claim your copy</span>{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
              stroke="#2A2564"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
         
    </div>
  </div>
</section>
<LPFooter/>
      </div>
  )
}

export default AdsLandingPagesThird