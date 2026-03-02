import React from 'react'


function CustomerTestimonialSection({testimony}) {
  return (
   <section className="w-full bg-white flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[822px] justify-center items-center ">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
            Customer Testimonial
          </h2>
        </div>
       <div className="w-full max-w-[937px]">
        <div className="w-full flex flex-col bg-[#FAF9FC] border-l-4 border-darkVoilet rounded-xl p-9 gap-6">
            <p className='text-base text-black font-lora'>“{testimony?.testimony}"</p>
            <div className="flex items-start gap-4 ">
             {
              testimony.logo === "/assets/pages/casestudy/hdfc.webp" ? (
                <div className="w-10 h-10 rounded-full grid place-items-center bg-[#D91E29]"><img
                    src={testimony?.logo}
                    alt= {testimony?.company}
                     loading='lazy'
                    className={`w-8 h-fit  object-contain  `}
                  /></div>
              ): <img
                    src={testimony?.logo}
                    alt= {testimony?.company}
                     loading='lazy'
                    className={`w-10 h-10 rounded-full object-cover  `}
                  />
             }
                  
                  <div className="text-left">
                    <p className="text-base font-bold text-black/80 font-lora">
                    {testimony?.position},

                    </p>
                    <p className="text-sm text-left text-[#7F7F7F] font-lora">
                    {testimony?.company}
                    </p>
                  </div>
                </div>
        </div>
       </div>
      </div>
   
    </section>
  )
}

export default CustomerTestimonialSection