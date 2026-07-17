import React from 'react'

function MeetFounder() {
    return (
        <section className="w-full bg-white border-t border-[#F3F5FC66] grid place-items-center px-5 md:px-10 pt-16 pb-24">
            <div className="w-full max-w-[1280px] grid lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-3 leading-4 text-[#454B69] uppercase">Meet the Founder</p>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-8 mt-4">
                        <img alt='Amit Srivastava - Founder, iona.ai' className='size-[200px] rounded-md' src='/assets/pages/blog/author/amit.webp' />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[36px] md:text-[42px] leading-[55px] md:leading-[60px] text-[#0D0D0D] font-lora font-medium">
                                Meet Amit Srivastava
                            </h2>

                            <p className='text-sm text-[#5445ED] font-medium'>Founder, iona.ai</p>
                        </div>
                    </div>

                    <p className='text-xl text-[#454B69] mt-4'>Amit Srivastava has spent his career helping enterprises turn AI into measurable business outcomes. After advising FTSE 100 companies at IBM UK and building three tech startups (including two successful exits), he founded iona.ai, which has powered 150,000+ AI-driven hires. Drawing on this experience, he wrote The AI-First CHRO, a practical guide that helps HR leaders move beyond AI hype and build AI-first talent operations. </p>
                </div>

                <div className="w-full rounded-[24px] relative p-8 border border-[#E2E4EB] gap-5 grid md:grid-cols-[40%_60%] shadow-[0px_20px_60px_-20px_#5445ED73]">
                    <p className='bg-[#F9D544] absolute -top-3 left-6 py-1 px-3 text-[10px] leading-[15px] text-[#0B0D2B] font-bold uppercase rounded-xl'>The AI-First CHRO Playbook</p>
                    <div className="w-full h-full bg-gradient-to-br from-[#5445ED73] to-[#8771FF73] rounded-[10px] flex justify-center items-center">
                        <img src='/assets/pages/landingpage/free-copy-remove.png' alt='book' className='w-full' />
                    </div>
                    <div className="w-full flex flex-col">
                        <p className='text-[#5445ED] text-[12px] leading-4 uppercase font-semibold'>Inside the book</p>
                        <ul className='w-full py-3 flex flex-col gap-4'>
                            <li className='flex flex-row gap-2'><svg width="16" className='flex-none mt-0.5' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#5445ED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <p className='text-sm text-[#454B69]'><strong>AI Maturity Model</strong> — Assess HR AI readiness with a practical framework.</p>
                            </li>
                            <li className='flex flex-row gap-2'><svg width="16" className='flex-none mt-0.5' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#5445ED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <p className='text-sm text-[#454B69]'><strong>Three Compasses</strong> — Balance performance, cost, and people in every decision.</p>
                            </li>
                            <li className='flex flex-row gap-2'><svg width="16" className='flex-none mt-0.5' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#5445ED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <p className='text-sm text-[#454B69]'><strong>ARISE Framework</strong> — A proven roadmap for AI transformation.</p>
                            </li>
                            <li className='flex flex-row gap-2'><svg width="16" className='flex-none mt-0.5' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#5445ED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> <p className='text-sm text-[#454B69]'><strong>Exclusive Access</strong> — First 75 readers get beta access to the AIFirstCHR platform.</p>
                            </li>
                        </ul>
                        <a class="bg-primary px-4 mt-3 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150" href="#form"><span>Reserve your free copy</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MeetFounder