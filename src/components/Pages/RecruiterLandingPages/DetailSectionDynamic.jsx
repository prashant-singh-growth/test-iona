import React from 'react'

function DetailSectionDynamic({title,description,imageURL,altText}) {
  return (
     <section  className="w-full bg-white flex flex-col py-10 lg:py-16 px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center">
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-[50px]">
            <div className="flex flex-col max-w-[752px] justify-center items-center space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold">
               {title}
              </h2>
              <p className="text-base text-[#2A2564] text-center font-lora">
               {description}
              </p>
            </div>
    {imageURL && <img   src={imageURL} alt={altText ? altText : 'Agentic AI Recruiter’s Sheet'} className='w-full object-contain ' loading='lazy'/>}
            
          </div>
        </section>
  )
}

export default DetailSectionDynamic