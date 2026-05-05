import React from 'react'

function CertificationSection() {
  return (
    <section className="w-full bg-[#FBFBFC] py-20 lg:py-24 px-6">
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
       <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] border border-slate-100">
  
  {/* Card Item */}
  <div className="group flex flex-col items-center text-center space-y-4">
    <div className="h-24 lg:h-32 flex items-center justify-center">
      <img
        src="/assets/pages/landingpage/iso.png"
        alt="ISO"
        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-primaryText tracking-tight uppercase">
      ISO 9001:2015 <span className="block font-normal normal-case opacity-70 text-sm">Certified</span>
    </p>
  </div>

  {/* Card Item */}
  <div className="group flex flex-col items-center text-center space-y-4">
    <div className="h-24 lg:h-32 flex items-center justify-center">
      <img
        src="/assets/pages/landingpage/gdpr.png"
        alt="GDPR"
        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-primaryText tracking-tight uppercase">
      GDPR <span className="block font-normal normal-case opacity-70 text-sm">Compliance Certified</span>
    </p>
  </div>

  {/* Card Item */}
  <div className="group flex flex-col items-center text-center space-y-4">
    <div className="h-24 lg:h-32 flex items-center justify-center">
      <img
        src="/assets/pages/landingpage/iso1.png"
        alt="ISO 27001"
        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-primaryText tracking-tight uppercase">
      ISO 27001 <span className="block font-normal normal-case opacity-70 text-sm">Certified</span>
    </p>
  </div>

  {/* Card Item */}
  <div className="group flex flex-col items-center text-center space-y-4">
    <div className="h-24 lg:h-32 flex items-center justify-center">
      <img
        src="/assets/pages/landingpage/hmgov.png"
        alt="HM Government"
        className="h-full w-auto max-w-[200px] object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-primaryText tracking-tight uppercase">
      G-Cloud <span className="block font-normal normal-case opacity-70 text-sm">HM Gov Supplier</span>
    </p>
  </div>

</div>
        
      
      </div>
    </section>
  )
}

export default CertificationSection