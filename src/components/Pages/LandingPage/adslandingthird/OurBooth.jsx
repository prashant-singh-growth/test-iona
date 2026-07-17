import React from 'react'

function OurBooth() {
  return (
   <section className="w-full bg-[#F3F5FC66] border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10 pt-16 pb-24">
            <div className="w-full max-w-[1280px] flex flex-col gap-10">
                <div className="flex flex-col gap-1">

                    <h2 className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium">
                      At Our Booth
                    </h2>
                  
                </div>

                <div className="w-full grid lg:grid-cols-3 gap-5">
                    {[
                        {
                        title : "Live Demos",
                        para: "See iona.ai's Agentic Intelligence across sourcing, screening, verification, and onboarding.",
                     
                    },
                        {
                        title : "Personalized Workflow Consultations",
                      para: "1:1 sessions with our team to map iona.ai to your hiring challenges.",
                      
                    },
                        {
                        title : "Complimentary Book Pickup",
                         para: "Collect your copy of The AI-First CHRO after booth registration.",
                   
                    }
                    ].map((item,i)=>(<div key={i} className="w-full bg-white border border-[#E2E4EB] rounded-[20px] p-5 lg:p-7 gap-2">
                        <p className="bg-gradient-to-br from-[#5445ED] to-[#8771FF] bg-clip-text text-transparent text-[48px] font-lora leading-[48px]">0{i+1}</p>
                        <h3 className='text-[#0B0D2B] text-xl font-lora font-semibold mt-2'>
                            {item.title}
                        </h3>
                        <p className='text-sm text-[#454B69]  '>
                            {item.para}
                        </p>
                       
                    </div>))}
                    
                </div>
                <div className="w-full p-5 gap-3 border border-dashed border-[#5445ED66] bg-[#5445ED0D] rounded-[20px] flex flex-row justify-start">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5009 18.1658C12.0509 16.8275 16.6667 12.4942 16.6667 8.33332C16.6667 6.56521 15.9643 4.86952 14.7141 3.61928C13.4638 2.36904 11.7682 1.66666 10 1.66666C8.23193 1.66666 6.53624 2.36904 5.286 3.61928C4.03575 4.86952 3.33337 6.56521 3.33337 8.33332C3.33337 12.4942 7.94921 16.8275 9.49921 18.1658C9.6436 18.2744 9.81938 18.3331 10 18.3331C10.1807 18.3331 10.3565 18.2744 10.5009 18.1658Z" stroke="#5445ED" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z" stroke="#5445ED" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className='text-sm text-[#0B0D2B]'><strong>Booth location:</strong> Let's meet on 6-7 August in New Delhi, walk-ins welcome, but registered meetings get priority slots.</p>
                </div>
            </div>
        </section>
  )
}

export default OurBooth