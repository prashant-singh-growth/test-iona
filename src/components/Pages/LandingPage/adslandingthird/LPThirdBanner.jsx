import React from 'react'
import LPThirdForm from './LPThirdForm'

function LPThirdBanner() {
  return (
     <section id="form" className="w-full bg-[#faf7fb] overflow-hidden h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-16 md:py-16 lg:py-20 flex flex-col justify-center items-center scroll-m-[200px]">
       <div className='w-[600px] lg:w-[900px] h-[600px] bg-[linear-gradient(135deg,_#5445ED_0%,_#8771FF_100%)] absolute left-1/2 -top-[300px] opacity-20 rounded-full blur-3xl -translate-x-1/2'></div>
          <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10">
          
          <div className="w-full max-w-[100vw]">
           <div className="mt-3 flex border border-[#CACFD866] bg-white shadow-[0px_2px_8px_0px_#6C79930F] backdrop-blur-2xl px-3 py-2 rounded-full w-fit flex-row justify-center items-center gap-2
"><div className="p-1 rounded-full size-1 bg-[linear-gradient(135deg,#0B64F4,#8039C6)]
"></div><p className='text-[12px] text-[#2A2564]'>People Matters TechHR India 2026 · 6–7 August · New Delhi</p></div>
            <h1 className="text-4xl mt-5 font-semibold font-lora lg:text-[48px]  lg:leading-[60px] text-[#0B0D2B]  text-left ">
       Meet <span class="bg-[linear-gradient(135deg,_#5445ED_0%,_#8771FF_100%)] bg-clip-text text-transparent">iona.ai</span> at People Matters TechHR India 2026
            </h1>
          <p className='text-lg text-[#454B69] mt-6 mb-10'>Agentic Intelligence is redefining HR, closing the gap between workforce planning and day-one-ready onboarding. Catch us at TechHR 2026, get the framework behind this shift, and take home a complimentary copy of The <strong>AI-First CHRO</strong>  by Amit Srivastava.</p>
    
          </div>
         
           <LPThirdForm/>
          </div>
        </section>
  )
}

export default LPThirdBanner