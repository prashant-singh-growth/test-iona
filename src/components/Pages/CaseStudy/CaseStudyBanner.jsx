import React from 'react'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'

function CaseStudyBanner() {
  return (
   <section className="w-full bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
            <ResponsiveGridLines gradientReplacement={[10, 37, 5, 97, 93, 70, 100, 90, 50, 40]} />
            <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-1 place-items-center relative z-10 gap-10">
              <div className="w-full max-w-[1283px] gap-5">
                <p className='font-lora text-[#2A2564] text-base text-center'>Customer Success Stories That Inspire</p>
                <h1 className="text-4xl font-semibold font-lora md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-[#2A2564] flex flex-col text-center">
                 Read case studies of real transformation and measurable ROI with iona.ai.
                </h1>
              
             
              </div>
            
            </div>
          </section>
  )
}

export default CaseStudyBanner