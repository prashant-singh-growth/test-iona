import React from 'react'

function HowWeWork() {
  return (
     <section className="w-full bg-transparent flex flex-col py-[60px] px-5 md:px-10 lg:px-[90px] justify-center items-center space-y-10">
        <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
          <div className="flex flex-col max-w-[650px] justify-center items-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
              See How We Transform Your HR Operations
            </h2>
          </div>
           <img
            src="/assets/pages/homepage/banner-2.avif"
            alt="how iona work"
            title="how iona work"
            className="w-full max-w-[1100px]"
          />
        </div>
      </section>
  )
}

export default HowWeWork