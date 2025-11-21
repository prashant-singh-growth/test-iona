import React from 'react'
import SecLandingForm from '../SecLandingPage/SecLandingForm'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'
import LogoSlider from '../LandingPage/LogoSlider'

function CaseStudyBanner({banner}) {
  return (
     <section className="w-full bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
            <ResponsiveGridLines gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, 50, 96]} />
            <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-[60%_40%] place-items-center relative z-10 gap-10">
              <div className="w-full max-w-[100vw]">
                <h1 className="text-4xl font-semibold font-lora md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-[#2A2564] flex flex-col text-left ">
              {banner.title}
                </h1>
                <p className="text-base font-lora text-primary font-normal mt-5">
{banner.description}
                </p>
              <LogoSlider/>
              </div>
             <SecLandingForm/>
            </div>
          </section>
  )
}

export default CaseStudyBanner