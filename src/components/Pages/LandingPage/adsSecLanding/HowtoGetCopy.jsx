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
                        <div key={ind} className="flex flex-col p-5 justify-center items-center w-full rounded-xl bg-[linear-gradient(15.8deg,_#6492EE_21.51%,_#637CEB_28.33%,_#6276E5_35.69%,_#5A5EDA_43.6%,_#3D52CA_52.05%,_#1820B7_64.6%,_#091CAF_78.23%)]">
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
                            <div className="flex flex-col pl-5 gap-4 mt-14 border-l-[1.6px] border-[#160E3899]">
                                <p className='text-sm text-[#160E38] italic'>“Enthusiasm got you started. Budget got you vendors. Neither will get you to the boardroom. This is the missing playbook for becoming the AI-First CHRO.”
                                    "</p>
                                <p className='text-xs text-[#7B879D]'>— Amit Srivastava, Author · Founder, iona.ai</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full">
                        <svg className='w-full' viewBox="0 0 619 461" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1407_386)">
                                <rect x="3.70947" width="615.291" height="461" rx="11.7388" fill="#E4E4E4" />
                                <line y1="-1.26885" x2="759.297" y2="-1.26885" transform="matrix(0.805986 0.591935 -0.589329 0.807893 7.01758 5.83716)" stroke="#A6A6A6" stroke-width="2.53771" />
                                <line y1="-1.26885" x2="756.942" y2="-1.26885" transform="matrix(-0.802345 0.596861 -0.594256 -0.804276 615.509 2.33484)" stroke="#A6A6A6" stroke-width="2.53771" />
                                <rect x="277.777" y="185.124" width="79.994" height="78.8099" rx="14.6735" fill="#A6A6A6" />
                                <path d="M292.781 209.752C292.781 207.139 293.834 204.634 295.709 202.786C297.585 200.939 300.128 199.901 302.78 199.901H332.778C335.43 199.901 337.973 200.939 339.848 202.786C341.724 204.634 342.777 207.139 342.777 209.752V239.306C342.777 241.919 341.724 244.424 339.848 246.272C337.973 248.119 335.43 249.157 332.778 249.157H302.78C300.128 249.157 297.585 248.119 295.709 246.272C293.834 244.424 292.781 241.919 292.781 239.306V209.752Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M309.027 222.066C312.479 222.066 315.277 219.31 315.277 215.909C315.277 212.509 312.479 209.752 309.027 209.752C305.576 209.752 302.778 212.509 302.778 215.909C302.778 219.31 305.576 222.066 309.027 222.066Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M324.091 226.058L302.778 249.157H333.108C335.672 249.157 338.131 248.154 339.944 246.368C341.756 244.582 342.775 242.159 342.775 239.633V239.306C342.775 238.158 342.337 237.717 341.55 236.868L331.476 226.044C331.006 225.539 330.435 225.136 329.799 224.861C329.162 224.586 328.475 224.445 327.78 224.447C327.085 224.448 326.398 224.592 325.763 224.87C325.128 225.147 324.559 225.552 324.091 226.058Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1407_386">
                                    <rect width="619" height="461" rx="5.86942" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

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