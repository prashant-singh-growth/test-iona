import React from 'react'
import ResponsiveGridLines from '../../utils/ResponsiveGridLines'
import ContactForm from './ContactForm'

function ContactBanner() {
  return (
  <section className="w-full bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px]  pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center pt-24">
        <ResponsiveGridLines
          lineShow={false}
          gradientReplacement={[10, 37, 50, 47, 93, 70, 100, 90, 50, 96]}
        />
        <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10">
          <div className="w-full max-w-[100vw]">
           <div className="mt-3 flex border border-[#CACFD866] bg-white shadow-[0px_2px_8px_0px_#6C79930F] backdrop-blur-2xl px-3 py-2 rounded-full w-fit flex-row justify-center items-center gap-2
"><div className="p-1 rounded-full size-1 bg-[linear-gradient(135deg,#0B64F4,#8039C6)]
"></div><p className='text-[12px] text-[#2A2564]'>Talk to us</p></div>
            <h1 className="text-4xl mt-5 font-semibold font-lora lg:text-[48px]  lg:leading-[64px] text-[#2A2564] flex flex-col text-left ">
         Your hiring Pipeline,
Run by an Agent, not a Spreadsheet
            </h1>
          <p className='text-base text-primary mt-6 mb-10'>iona.ai deploys a conversational AI agent that autonomously manages every step from offer letter to day one , without a single manual handoff. Tell us your volume, and we'll show you the agent in action.</p>
          <p>We reply within 1 business day       <span className='mx-5'>  | </span>       No sales pressure    <span className='mx-5'>  | </span>        Free demo included</p>
          </div>
         <ContactForm/>
        </div>
      </section>
  )
}

export default ContactBanner