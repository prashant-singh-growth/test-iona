import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function HowtoGetCopy() {
    return (
        <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] bg-white flex flex-col justify-center items-center">
            <div className="w-full max-w-[1440px] flex flex-col justify-center items-center">
                <div className="w-full max-w-[913px] py-12 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 lg:gap-14">
                    {[
                        {
                            count: 6,
                            text: "Frameworks"
                        },
                        {
                            count: 12,
                            text: "Chapters"
                        },
                        {
                            count: 84,
                            text: "KRAs"
                        },
                        {
                            count: 5,
                            text: "Cheat Sheets"
                        },

                    ].map((item, ind) => (
                        <div key={ind} className="flex flex-col p-5 justify-center items-center w-full rounded-xl bg-[linear-gradient(15.8deg,_#6492EE_21.51%,_#637CEB_28.33%,_#6276E5_35.69%,_#5A5EDA_43.6%,_#3D52CA_52.05%,_#1820B7_64.6%,_#091CAF_78.23%)] hover:scale-95 ease-in-out duration-200 hover:shadow-lg hover:-translate-y-1">
                            <h3 className='text-white text-5xl w-full text-center pb-2 font-bold border-b border-white'>{item.count}</h3>
                            <p className='text-base text-white text-center font-medium mt-3'>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full grid lg:grid-cols-2 py-12 gap-10 lg:gap-20">
                    <div className="w-full flex flex-col">
                        <div className="flex w-fit max-w-[778px] flex-col">
                            <h2 className=' text-3xl md:text-[40px] text-[#2A2564] '>How to get your copy</h2>
                            <div className="bg-[linear-gradient(63deg,_#1820B7_40.61%,_#3D52CA_45.07%,_#5A5EDA_48.08%,_#BCD2FF_55.93%)] mt-4 w-full max-w-[400px] h-[1px]"></div>
                            <ul className='text-lg text-[#2A2564] font-semibold flex flex-col gap3 list-disc pl-5 mt-7'>
                                <li>The first 75 people who sign up will receive a complimentary hardcopy of "The AI-FIRST CHRO" delivered directly to their door.

                                </li><li>General Release: Retail at ₹1,599.</li>
                            </ul>
                            <a href='#form'
                                className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit mt-14"
                            >
                                Reserve Your Free Copy
                                <FaArrowRight />
                            </a>
                            <div className="flex flex-col pl-5 font-lora gap-4 mt-14 border-l-[1.6px] border-[#160E3899]">
                                <p className='text-sm font-lora text-[#160E38] italic'>“Enthusiasm got you started. Budget got you vendors. Neither will get you to the boardroom. This is the missing playbook for becoming the AI-First CHRO.”
                                    "</p>
                                <p className='text-xs font-lora text-[#7B879D]'>— Amit Srivastava, Author · Founder, iona.ai</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full">
                       
                        <img src="/assets/pages/landingpage/ads-landing.webp" alt="" className='w-full h-fit rounded-xl shadow-xl'/>

                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row mb-24 justify-center items-center gap-10 lg:gap-24 max-w-[1235px] mt-12">
                    <img src="/assets/pages/blog/author/amit.webp" alt="Amit Srivastava, Author · Founder, iona.ai" className='size-[278px] hidden md:flex rounded-full' />
                    <div className="w-full flex flex-col">
                        <p className=' text-lg text-[#2A2564] '>Meet the Author</p>
                        <div className="bg-[linear-gradient(63deg,_#1820B7_40.61%,_#3D52CA_45.07%,_#5A5EDA_48.08%,_#BCD2FF_55.93%)] mt-2 w-full max-w-[200px] h-[1px]"></div>

                        <h2 className='bg-[linear-gradient(1deg,_#6492EE_2.91%,_#637CEB_8.74%,_#6276E5_15.03%,_#5A5EDA_21.79%,_#3D52CA_29.01%,_#1820B7_39.73%,_#091CAF_51.38%)] bg-clip-text text-transparent text-4xl py-2 md:text-[40px]'>Amit Srivastava</h2>

                        <p className='text-base text-[#2A2564]'>Founder, iona.ai</p>
                            <img src="/assets/pages/blog/author/amit.webp" alt="Amit Srivastava, Author · Founder, iona.ai" className='size-full max-w-[300px] flex md:hidden rounded-md mt-3' />
                        <p className='text-base text-[#818898] mt-5 lg:mt-8'>Amit Srivastava has lived on both sides of the AI promise gap. After advising FTSE 100 firms at IBM UK, he built three tech startups, two of which were acquired. His third,  iona.ai, has powered 150,000+ AI-driven hires. He also shaped Digital India's capacity framework, mentors at LSE Generate, and brings deep enterprise and startup insight to this first book.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowtoGetCopy