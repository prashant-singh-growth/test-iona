import React from 'react'

function CertificationSection() {
  return (
<section className="w-full bg-themeGray flex flex-col py-12 lg:py-20 px-5 md:px-10 lg:px-[90px] justify-center items-center ">
        <div className="w-full  max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] place-content-between ">
          <div className="w-full flex flex-col space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-left ">
              Certified for Your Trust and Security
            </h2>
            <p className="text-base text-primary font-lora">
              At iona.ai, we prioritize your data security and compliance. With
              certifications like ISO 27001, GDPR compliance, and ISO 9001:2015,
              we guarantee secure recruitment processes. 
              <br></br> <br /> Our status on the HM Government G-Cloud Supplier
              list reflects our dedication to delivering reliable, secure
              services.
            </p>
          </div>
          <div className="w-full flex flex-row flex-wrap md:gap-5">
            <img
              src="/assets/pages/landingpage/iso.png"
              alt="iso"
              className="w-24 md:w-36 h-fit"
            />
            <img
              src="/assets/pages/landingpage/gdpr.png"
              alt="gdpr"
              className="w-32 md:w-52 h-fit"
            />
            <img
              src="/assets/pages/landingpage/iso1.png"
              alt="iso"
              className="w-24 md:w-36 h-fit"
            />
            <img
              src="/assets/pages/landingpage/hmgov.png"
              alt="hmgov"
              className="w-48 mt-4 md:mt-0 md:w-64 h-fit"
            />
          </div>
        </div>
      </section>
  )
}

export default CertificationSection