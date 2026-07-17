import React from 'react'

function Platform() {
    return (
        <section className="w-full bg-white border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10 pt-16 pb-24 overflow-hidden">
            <div className="w-full max-w-[1280px] grid lg:grid-cols-[40%_60%] gap-5">
                <div className="flex flex-col gap-1">
                    <p className="text-3 leading-4 text-[#454B69] uppercase">The Agentic Intelligence Platform for HR</p>
                    <h2 className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium">
                        One platform.
                        Every stage, covered.
                    </h2>
                    <p className='text-lg text-[#454B69] mt-2'>One AI-powered hiring platform for sourcing, screening, verification, onboarding, and engagement — helping enterprise teams hire faster, smarter, and at scale.</p>
                    <div className="flex w-full mt-8 p-6 bg-[#F3F5FC80] border border-[#E2E4EB] rounded-[20px] gap-4 flex-col">
                        <p className='text-sm text-[#5445ED] font-medium uppercase'>Prospect → Productive</p>
                        <ul className='w-full flex flex-col gap-3'>
                            {["Source across every channel", "Screen against your competency framework", "Verify credentials in minutes", "Onboard with guided, self-serve journeys", "Enable new hires from day one"].map((item, i) => <li key={i} className='flex flex-row items-center gap-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="url(#paint0_linear_1743_1057)" />
                                <path d="M11.3333 5.5L6.74996 10.0833L4.66663 8" stroke="#FCFCFC" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_1743_1057" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#5445ED" />
                                        <stop offset="1" stop-color="#8771FF" />
                                    </linearGradient>
                                </defs>
                            </svg>

                                <p className='text-sm text-[#0B0D2B]'>{item}</p>
                            </li>)}

                        </ul>
                    </div>
                </div>
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        {
                            title: "Sourcing & ATS",
                            desc: "An intuitive, agentic Applicant Tracking System that keeps recruiters working from a curated shortlist."

                        },
                        {
                            title: "Screening",
                            desc: "Applications parsed, scored, and ranked automatically against your competency framework."

                        },
                        {
                            title: "Interviewing",
                            desc: "AI-powered scheduling, panel coordination, and structured evaluations that keep hiring moving."

                        },
                        {
                            title: "Verification",
                            desc: "AI-assisted background verification with automated document checks and real-time status tracking."

                        },
                        {
                            title: "Onboarding",
                            desc: "Automated onboarding, documentation, and pre-Day training so every new hire is ready from day one."

                        },
                        {
                            title: "Engagement",
                            desc: "Automated candidate engagement that boosts offer-to-join rates with personalized communication."

                        }
                    ].map((item, i) => (<div key={i} className="w-full relative bg-white border overflow-hidden border-[#E2E4EB] rounded-[20px] p-6">
                        <p className='text-xs text-[#454B69] font-mono'>0{i + 1}</p>
                        <h3 className='text-[#0B0D2B] text-lg font-lora font-semibold py-1.5'>
                            {item.title}
                        </h3>
                        <p className='text-[#454B69] text-sm leading-[22px]'>{item.desc}</p>

                        <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-gradient-to-br from-[#5445ED] to-[#8771FF]"></div>
                    </div>))}

                </div>

            </div>
        </section>
    )
}

export default Platform