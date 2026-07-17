import React from 'react'

function Stage() {
    return (
        <section className="w-full bg-[#1B1967] border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10  py-24 relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[#8771FF] blur-3xl rounded-full -bottom-[200px] -right-[200px] opacity-30"></div>
            <div className="w-full max-w-[1280px] flex flex-col gap-10 relative z-10">
                <div className="w-full flex flex-col gap-5 lg:flex-row lg:items-end justify-between">
                    <div className="flex flex-col gap-2 max-w-[672px]">
                        <p className="text-3 leading-4 text-[#FFFFFF99] uppercase">Six stages. One agentic engine.</p>
                        <h2 className="text-[40px] md:text-[48px] leading-[55px] mt-4 md:leading-[60px] text-[#FCFCFC] font-lora font-medium">
                            How Agentic Intelligence Changes Hiring
                        </h2>
                        {/* <p className='text-sm text-[#5445ED] font-medium'>Founder, iona.ai</p> */}

                    </div>
                    <p className='text-base text-[#FFFFFFB2]  max-w-[448px]'>Experience live demonstrations of how iona.ai automates every stage of the hiring lifecycle, from headcount planning to employee productivity. </p>
                </div>

                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        {
                            title: "NovaCount",
                            desc: "Agentic headcount planning that connects your ATS & HRIS and surfaces bottlenecks before they cost you a quarter."

                        },
                        {
                            title: "NovaTrack + NovaConnect",
                            desc: "Centralize every candidate across channels, auto-rank applicants, and keep pipelines moving with personalized updates."

                        },
                        {
                            title: "NovaVerify",
                            desc: "Smart AI-assisted candidate verification, credentials, and background checks that move in minutes, not weeks."

                        },
                        {
                            title: "NovaDoc",
                            desc: "AI-powered onboarding documentation at scale, so new hires clear paperwork without the back-and-forth."

                        },
                        {
                            title: "NovaTrain",
                            desc: "Pre-day training and compliance content that gets employees productive from the moment they walk in."

                        },
                        {
                            title: "NovaEngage",
                            desc: "AI-driven engagement automating personalized updates from offer acceptance through onboarding."

                        },
                    ].map((item, i) => (<div key={i} className="w-full bg-[#FFFFFF08] border border-[#FFFFFF1A] p-6 flex flex-col gap-3 rounded-[20px]">
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <div className="size-2 rounded-full bg-[#8771FF]"></div>

                            <h3 className='text-xl font-lora text-[#FCFCFC] font-semibold'>{item.title}</h3>
                        </div>
                        <p className='text-sm leading-[22px] text-[#FFFFFFB2]'>{item.desc}</p>
                    </div>))}
                </div>
                <a class="bg-white mx-auto px-4 mt-3 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-darkBlue flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150" href="#form"><span>See Agentic AI in Action </span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>

            </div>
        </section>
    )
}

export default Stage