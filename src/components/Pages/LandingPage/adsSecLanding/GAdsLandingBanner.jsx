import React from 'react'
import ResponsiveGridLines from '../../../utils/ResponsiveGridLines'
import GFormCopy from './GFormCopy'

function GAdsLandingBanner() {
  return (
    <section className="w-full font-lora bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
               <ResponsiveGridLines
                   gradientReplacement={[10, 37, 80, 87, 93, 70, 100, 90, 90, 0]}
               />
               <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-[60%_40%] place-items-center relative z-10 gap-10">
                   <div className="w-full max-w-[100vw]">
                       <p className='text-lg text-[#160E38] lg:max-w-[492px]'>74% of AI Initiatives Fail. We wrote this book on how to be
                           the 26% that succeed.</p>
                       <div className="mt-3 flex border border-[#CACFD866] bg-[#CACFD866] shadow-[0px_2px_8px_0px_#6C79930F] backdrop-blur-2xl px-3 py-2 rounded-full w-fit flex-row justify-center items-center gap-2
   "><div className="p-1 rounded-full size-1 bg-[linear-gradient(135deg,#0B64F4,#8039C6)]
   "></div><p className='text-[12px] text-[#2A2564]'>A book by Amit Srivastava · Founder ·  iona.ai</p></div>
                       <h1 className="text-4xl mt-8 md:mt-12 mb-5 font-semibold font-lora md:text-5xl leading-tight slg:text-5xl lg:text-[68px] lg:leading-[64px] bg-[linear-gradient(243.69deg,_#6492EE_44.94%,_#637CEB_48.46%,_#6276E5_52.26%,_#5A5EDA_56.34%,_#3D52CA_60.7%,_#1820B7_67.17%,_#091CAF_74.2%)] bg-clip-text text-transparent  flex flex-col text-left lg:max-w-[450px]">
   
   
                           “The AI-FIRST CHRO”
   
                       </h1>
                       <p className='text-[#2A2564] text-sm'>(The Missing Playbook – From AI Promise to Boardroom Results)</p>
                       <p className="text-lg font-lora text-primary font-normal mt-5">
                           75 senior HR leaders in India will receive signed author copies before anyone else. No purchase. No strings. Just the book — because the content earns its own advocacy.
                       </p>
                       <div className="flex flex-col pl-5 gap-4 mt-8 mf:mt-14 border-l-[1.6px] border-[#160E3899]">
                           <p className='text-sm font-lora text-[#160E38] italic'>A narrative-driven playbook for HR leaders navigating AI transformation. Built from
                               Indian ground realities. Frameworks forged through operational experience, not borrowed
                               from textbooks.</p>
                           <p className='text-xs font-lora text-[#7B879D]'>— Amit Srivastava, Author · Founder, iona.ai</p>
                       </div>
                   </div>
                   {/* <AdsFormEventCopy /> */}
                   <GFormCopy/>
               </div>
           </section>
  )
}

export default GAdsLandingBanner