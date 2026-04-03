import React from 'react'

function PlatformCapabilitiesSection({plateform}) {
  return (
    <div className='h-fit relative mt-16 lg:mt-20 px-5 md:px-10 slg:px-[60px] lg:px-[90px]  py-14 bg-[#F3F3F5] flex flex-col justify-center items-center'>
        <div className="w-full lg:max-w-[1440px] flex flex-col justify-center items-center">
             <div className="flex flex-col max-w-[1022px] justify-center items-center ">
          <p className="text-base text-[#2A2564] font-lora !pb-2">
      Platform capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
          {plateform.title}
          </h2>
       
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[50px] gap-5">
            {plateform.card.map((item,ind)=>(
                <div key={ind} className="w-full  bg-[#FFFFFF] flex flex-col gap-3 border-2 border-[#160E381A] hover:border-primaryText/30 ease-linear duration-150 hover:-translate-y-1 py-[22px] rounded-[12px] px-5 md:px-8">
                <div className="w-full pb-2 flex flex-row justify-start items-center gap-3 border-b border-[#160E381A]">
                    <svg className='w-10 h-10 flex-none' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="url(#paint0_linear_1505_765)"/>
<path d="M14.9997 28.3334C14.5576 28.3334 14.1337 28.1578 13.8212 27.8453C13.5086 27.5327 13.333 27.1088 13.333 26.6668V13.3334C13.333 12.8914 13.5086 12.4675 13.8212 12.1549C14.1337 11.8423 14.5576 11.6668 14.9997 11.6668H21.6663C21.9301 11.6663 22.1914 11.7181 22.4351 11.8191C22.6788 11.92 22.9001 12.0682 23.0863 12.2551L26.0763 15.2451C26.2637 15.4313 26.4123 15.6529 26.5136 15.8969C26.6149 16.1409 26.6668 16.4026 26.6663 16.6668V26.6668C26.6663 27.1088 26.4907 27.5327 26.1782 27.8453C25.8656 28.1578 25.4417 28.3334 24.9997 28.3334H14.9997Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.667 11.6667V15.8334C21.667 16.0544 21.7548 16.2664 21.9111 16.4227C22.0674 16.579 22.2793 16.6667 22.5003 16.6667H26.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3337 17.5H16.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3337 20.8333H16.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3337 24.1667H16.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_1505_765" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#160E38"/>
<stop offset="1" stop-color="#2D1F5C"/>
</linearGradient>
</defs>
</svg>
<h3 className='text-lg font-semibold text-primary leading-[30px]'>{item.title}</h3>
                </div>
                <p className='text-[#677D64] text-sm leading-6'>{item.description}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default PlatformCapabilitiesSection