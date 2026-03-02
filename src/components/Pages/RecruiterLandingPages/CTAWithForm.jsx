import RecruiterForm from "./RecruiterForm"


function CTAWithForm() {
  return (
    <section className="w-full bg-[#150D37] overflow-hidden">
     <div className="w-full relative py-16 grid place-items-center px-5 md:px-10 slg:px-[60px] lg:px-[90px]">
       <img  loading='lazy' src="/assets/pages/cta.webp" alt="" className="absolute inset-0 object-contain min-h-[400px] !top-0 hidden lg:block"/>
         <img  loading='lazy' src="/assets/pages/landingpage/bg-cta-1.png" alt="" className="absolute inset-0 min-w-[1200px] lg:min-w-full lg:max-w-full lg:hidden"/>
      <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center relative z-10 gap-10">
                <div className="w-full max-w-[100vw]">
                  <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-bold md:font-semibold ">
                   {/* Ready to Fill Reqs Faster? Do it in Less than 60 Seconds */}
                   Are You an Enterprise
Looking to Automate
End-to-End HR
Processes?
                  </h2>
                  <p className="text-base font-lora text-white font-normal mt-5">
                  {/* Get your free account, see the difference immediately, and begin elevating your recruiting experiences with Agentic AI-powered candidate tracking. */}
                  Enable high-volume hiring without compromise – accuracy and control built in. Schedule a demo to learn more.
                  </p>
                  {/* <div className="w-full flex flex-col sm:flex-row justify-between md:justify-start gap-5 mt-8 md:mt-12 lg:mt-12 slg:mt-10 ">
                  
                    <a
                      href="#form"
                      className="border-primary font-bold leading-5 border w-fit bg-white px-4 py-2.5 md:px-5 md:py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                    >
                      <span>Get Started - it's Free</span>{" "}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                          stroke="#2a2564"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div> */}
                </div>
              <RecruiterForm/>
              </div>
     </div>
   </section>
  )
}

export default CTAWithForm