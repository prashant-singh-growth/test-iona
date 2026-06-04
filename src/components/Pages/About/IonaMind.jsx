import React from 'react'

function IonaMind() {
    return (
        <div className='h-fit bg-white relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-14 md:py-16 lg:py-[90px]  flex flex-col justify-center items-center'>
            <div className="w-full lg:max-w-[1440px] flex flex-col justify-center items-center gap-10">

                <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center  ">
                        The Minds Behind iona.ai
                    </h2>
                    <p className="text-base text-[#2A2564] text-center font-lora">
                        A team of passionate innovators, dedicated to transforming hiring with purpose and impact.
                    </p>
                </div>
                <div className="w-full grid md:grid-cols-2 max-w-[1100px] gap-8">
                    {[{
                        name: "Amit Srivastava",
                        position: "Business & Technology",
                        url: "https://www.linkedin.com/in/amitsriva/",
                        img: "/assets/pages/about/amit.png",
                    },
                    {
                        name: "Ooj Amit Srivastava",
                        position: "Engineering & Technology",
                        url: "https://www.linkedin.com/in/ooj/",
                        img: "/assets/pages/about/ooj.png",
                    }].map((item, val) => (
                        <div key={val} className="w-full rounded-[14px] bg-[#F3F3F5] p-5 py-8 lg:p-10">
                            <div className="w-full overflow-hidden bg-[linear-gradient(19.48deg,_#004BD4_6.09%,_#3C55ED_43.59%,_#9A45FA_88.81%)] rounded-[12px]">
                                <img src={item.img} alt={item.name} className='w-full bg-black/20' />
                            </div>
                            <div className="flex flex-row justify-between items-center mt-7 lg:mt-10">
                                <div className="flex flex-col">
                                    <h3 className='text-2xl font-medium text-[#0D0D0D] '>{item.name} </h3>
                                    <p className='text-lg lg:text-xl text-[#0D0D0D]'>{item.position}</p>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href={item.url} className='size-10 lg:size-14 grid place-items-center rounded-full shadow-sm ease-in-out duration-150 hover:scale-95 bg-white'>
                                    <svg className='size-4 lg:size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.93219 19.1276V9.50901H4.73796V19.1276H7.93219ZM6.33574 8.19599C7.4494 8.19599 8.14273 7.45739 8.14273 6.53436C8.12188 5.59029 7.4494 4.87231 6.35692 4.87231C5.26369 4.87231 4.54968 5.59029 4.54968 6.53428C4.54968 7.45731 5.24276 8.1959 6.31481 8.1959L6.33574 8.19599ZM9.70024 19.1276H12.8942V13.7567C12.8942 13.4696 12.9151 13.1818 12.9994 12.9767C13.2302 12.4021 13.7558 11.8073 14.6384 11.8073C15.7939 11.8073 16.2565 12.6893 16.2565 13.9825V19.1276H19.4504V13.6126C19.4504 10.6583 17.8748 9.28351 15.7733 9.28351C14.0503 9.28351 13.2936 10.2474 12.8732 10.9038H12.8945V9.50935H9.7004C9.7421 10.4117 9.70024 19.1276 9.70024 19.1276Z" fill="#2A2564" />
                                    </svg>


                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mt-10">
                    <h3 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center  ">
                        The iona.ai Difference
                    </h3>
                    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-16 gap-10 lg:gap-16">
                        {[{

                            title: "Rapid Deployment",
                            descrption: "Operational within days, not months. iona.ai integrates seamlessly with your existing systems so your teams start seeing measurable value from day one — without disruption to current workflows."
                        },
                        {

                            title: "Agentic AI Intelligence",
                            descrption: "Our AI agents do not just automate — they reason, adapt, and act with contextual intelligence at every step of the hiring journey. Smarter decisions, faster outcomes, and a process that improves as your enterprise scales."
                        },
                        {

                            title: "Seamless Onboarding",
                            descrption: "Every new hire arrives prepared, welcomed, and ready to contribute. Our  <a href='/solutions/novadoc'>end-to-end onboarding</a>  workflows ensure 100% data accuracy and a structured path to Day 1 productivity — regardless of hiring volume."
                        },
                        ].map((item, val) => (
                            <div className="w-full flex flex-col">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 30V33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18 3V6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.5 30V33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.5 3V6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 18H6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 25.5H6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 10.5H6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30 18H33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30 25.5H33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30 10.5H33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5 30V33" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5 3V6" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27 6H9C7.34315 6 6 7.34315 6 9V27C6 28.6569 7.34315 30 9 30H27C28.6569 30 30 28.6569 30 27V9C30 7.34315 28.6569 6 27 6Z" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5 12H13.5C12.6716 12 12 12.6716 12 13.5V22.5C12 23.3284 12.6716 24 13.5 24H22.5C23.3284 24 24 23.3284 24 22.5V13.5C24 12.6716 23.3284 12 22.5 12Z" stroke="#2A2564" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h4 className='text-[22px] leading-[30px] text-primary font-semibold mt-5 mb-3 lg:mt-8 lg:mb-5'>{item.title}</h4>
                                <p className='text-base text-[#677D64] linking'  dangerouslySetInnerHTML={{__html:item.descrption}} ></p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IonaMind