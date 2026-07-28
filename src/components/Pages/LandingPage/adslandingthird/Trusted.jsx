import React from 'react'

function Trusted() {
    return (
        <section className="w-full bg-white border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10 pt-16 pb-24">
            <div className="w-full max-w-[1280px] grid grid-cols-1  lg:grid-cols-[40%_60%] gap-5">
                <div className="flex flex-col gap-1">

                    <h2 className="text-[40px] md:text-[48px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium">
                        Trusted By Leading Enterprises
                    </h2>
                    <p className='text-xl text-[#454B69] mt-2'>Leading enterprises like <strong>Aditya Birla</strong>, <strong>HDFC Ergo</strong>, and <strong>Metropolis</strong> transformed high-volume hiring with AI-powered recruitment, onboarding, and verification using iona.ai.</p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            title: "Aditya Birla Sun Life Insurance",
                            list: ["90% Faster Onboarding", "90% AI Document Accuracy", "89% Lower Operational Costs"],
                            url: "/case-studies/aditya-birla"
                        },
                        {
                            title: "HDFC Ergo General Insurance",
                            list: ["4× Faster JD Turnaround", "70% Less Manual Screening", "3× Higher Interview Efficiency"],
                            url: "/case-studies/hdfc-ergo"
                        },
                        {
                            title: "Metropolis Healthcare",
                            list: ["83% Faster Onboarding", "95% Documentation Accuracy", "$2.1M Annual Savings"],
                            url: "/case-studies/metropolis-healthcare"
                        }
                    ].map((item, i) => (<div key={i} className="w-full bg-[#FCFCFC] border border-[#0B0D2B] rounded-[20px] flex flex-col h-full  p-6">
                        <h3 className='text-[#0B0D2B] text-lg font-lora font-semibold'>
                            {item.title}
                        </h3>
                        <ul className='text-sm text-[#0B0D2B] flex flex-col gap-3 py-3 font-normal list-disc pl-4 pb-3 '>
                            {item.list.map((itemlist, num) => <li key={num}>{itemlist}</li>)}
                        </ul>
                        <a target="_blank"
  rel="noopener noreferrer" href={item.url} className='text-sm gap-2 mt-auto flex flex-row items-center border-t pt-3  border-[#B5B5B5] font-medium text-[#0B0D2B]'>Read case study <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.91663 7H11.0833" stroke="#0B0D2B" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 2.91669L11.0833 7.00002L7 11.0834" stroke="#0B0D2B" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </a>
                    </div>))}

                </div>
            </div>
        </section>
    )
}

export default Trusted