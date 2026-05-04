import React from 'react'

function CertificationSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-24 lg:py-36 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-4 px-4 py-1.5 rounded-full bg-primaryText/5 border border-primaryText/10 mb-10">
          <div className="w-2 h-2 rounded-full bg-primaryText animate-pulse" />
          <span className="text-[12px] font-bold tracking-[0.25em]  text-primaryText">Certification</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl  text-primaryText font-bold mb-10 tracking-tight">
       Certified for Your Trust and Security
        </h2>
        
        {/* Description Container */}
        <div className="flex flex-col gap-6 mb-10 max-w-[850px]">
          <p className="text-lg  text-primary font-lora leading-relaxed">
           At iona.ai, we prioritize your data security and compliance.
          </p>
          {/* <p className="text-base md:text-lg  font-lora italic">
            Our status on the HM Government G-Cloud Supplier list reflects our dedication to delivering reliable, secure services.
          </p> */}
        </div>

        {/* Certificate Grid - Large Scale */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center gap-10 md:gap-4 p-10 bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-primaryText/20">
          <div className="flex justify-center px-4">
            <img
              src="/assets/pages/landingpage/iso.png"
              alt="ISO"
              className="h-24 md:h-32 lg:h-36 w-auto object-contain transition-all duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-center px-4">
            <img
              src="/assets/pages/landingpage/gdpr.png"
              alt="GDPR"
              className="h-24 md:h-32 lg:h-36 w-auto object-contain transition-all duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-center px-4">
            <img
              src="/assets/pages/landingpage/iso1.png"
              alt="ISO 9001"
              className="h-24 md:h-32 lg:h-36 w-auto object-contain transition-all duration-500 hover:scale-110"
            />
          </div>
          <div className="flex justify-center px-4">
            <img
              src="/assets/pages/landingpage/hmgov.png"
              alt="HM Government"
              className="h-32 md:h-44 lg:h-52 w-auto object-contain transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
        
      
      </div>
    </section>
  )
}

export default CertificationSection