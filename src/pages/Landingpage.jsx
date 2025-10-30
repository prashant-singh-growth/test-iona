import React, { useState, useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ResponsiveGridLines from "../components/LandingPage/ResponsiveGridLines";
import ChangingGradientText from "../components/LandingPage/ChangingGradientText";
import LogoSlider from "../components/LandingPage/LogoSlider";
import FormLandingPage from "../components/LandingPage/FormLandingPage";
import TestimonialSlider from "../components/LandingPage/TestimonialSlider";

function Landingpage() {
  const solutionListJson = [
    {
      imgurl: "NovaCount",
      title: "NovaCount – <br/> Headcount Planning and Monitoring",
      description:
        "Plan and track your workforce effortlessly, with real-time visibility into headcount, budgets, and forecasts.",
    },
    {
      imgurl: "NovaAssist",
      title: "NovaAssist – <br/> Recruiter Co-Pilot",
      description:
        "Automates candidate sourcing, screening, and shortlisting, which saves time and ensures you never miss top talent.",
    },
    {
      imgurl: "NovaTrack",
      title: "NovaTrack –<br/> NextGen Application <br/> Tracking System",
      description:
        "Seamlessly track and manage candidates through their journey with a state-of-the-art ATS from application to hire.",
    },
    {
      imgurl: "NovaStart",
      title: "NovaStart –<br/> Pre-Boarding of New Hires",
      description:
        "Streamlines the pre-boarding process for new hires, preparing them for Day 1 with all essential onboarding tasks.",
    },
    {
      imgurl: "NovaDoc",
      title: "NovaDoc –<br/> Documentation of New Hires",
      description:
        "Automates all documentation needs for new hires, eliminating manual chasing of documents and enhancing compliance.",
    },
    {
      imgurl: "NovaEngage",
      title: "NovaEngage –<br/> Engagement of New Hires",
      description:
        "Engages new hires even before Day 1, setting the tone for a positive and engaging employee journey.",
    },
    {
      imgurl: "NovaTrain",
      title: "NovaTrain –<br/> Mandatory Trainings and Induction of New Hires",
      description:
        "Automates mandatory training assignments and induction processes, which reduces manual effort and ensures compliance with training requirements.",
    },
    {
      imgurl: "NovaVerify",
      title: "NovaVerify –<br/> Background Verifications of New Hires",
      description:
        "Streamlines and automates background checks, speeding up the verification process for a quicker hiring experience.",
    },
    {
      imgurl: "NovaConnect",
      title: "NovaConnect –<br/> Premium WhatsApp-Based Support",
      description:
        "Provides real-time, premium support via WhatsApp, answering questions, resolving issues, and keeping the hiring process moving smoothly.",
    },
  ];
  const WhyChooseJson = [
    {
      image: "chip",
      title: "AI-Powered Smart <br/> Document Verification",
      description:
        "Automate ID and background checks with 99% accuracy, ensuring error-free documentation and faster hiring.",
    },
    {
      image: "db",
      title: "Seamless <br/> Integrations",
      description:
        "Connect effortlessly with your HRMS, ATS, payroll, and other HR tools for unified onboarding.",
    },
    {
      image: "paperless",
      title: "Paperless <br/> Compliance",
      description:
        "Automatically fill statutory forms with zero manual errors, keeping you compliant without the hassle.",
    },
    {
      image: "dashboard",
      title: "Dashboard <br/> Insights",
      description:
        "Gain real-time visibility into onboarding progress and track key metrics to optimize the experience.",
    },
    {
      image: "paperless",
      title: "Speed at <br/> Scale",
      description:
        "Onboard hundreds of hires at once, reducing HR overhead while maintaining quality and speed.",
    },
    {
      image: "paperless",
      title: "Enhanced Employee <br/> Engagement",
      description:
        "Deliver a smooth, interactive, and guided onboarding experience that delights new hires from Day 1.",
    },
    {
      image: "paperless",
      title: "Intelligent <br/> Automation",
      description:
        "Automate offers, documents, and approvals so HR can focus on building relationships, not paperwork.",
    },
    {
      image: "paperless",
      title: "Faster <br/> ROI",
      description:
        "Cut HR overhead and get employees productive faster with automated workflows and smarter processes.",
    },
  ];

  return (
    <div className="w-full font-lora">
      {/* <header className="w-full px-5 md:px-10 lg:px-[90px] grid place-items-center fixed top-0 h-[100px] bg-white z-50">
        <div className="w-full max-w-[1440px] flex flex-row justify-between items-center">
           <img
              src="/assets/pages/landingpage/iona-logo.png"
              className="w-28"
              alt=""
            />
            <a
          href="/"
          className="bg-primary px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
        >
          <span>Schedule  a Demo</span>{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
              stroke="#FCFCFC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        </div>

      </header> */}
      <section className="w-full h-fit relative px-5 md:px-10 lg:px-[90px] py-16 lg:py-20 flex flex-col justify-center items-center">
        <ResponsiveGridLines />
        <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 relative z-10 gap-10">
          <div className="w-full max-w-[100vw]">
            <ChangingGradientText />
            <p className="text-base font-lora text-primary font-normal mt-2">
              Empower your HR with AI Agents that onboard talent with background
              verifications, 90% faster and error-free.
            </p>
            <LogoSlider />
          </div>
          <FormLandingPage />
        </div>
      </section>
      {/* <section className="w-full bg-[#f3f3f5] flex flex-col py-[60px] px-5 md:px-10 lg:px-[90px] justify-center items-center space-y-10">
       <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
         <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
            iona.ai - The Complete Solution for Precision Hiring at Scale
          </h2>
          <p className="text-base text-[#2A2564] text-center">
            From recruitment to employee engagement — helping you streamline
            your entire hiring journey with a 100% automated process while
            maintaining 100% data accuracy guarantee and zero compliance issues.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutionListJson.map((item) => {
            return (
              <div className="w-full flex flex-col space-y-4 md:space-y-5 lg:space-y-[30px]">
                <div className="w-full bg-black relative z-0 py-10 px-3 ">
                  <p
                    className="w-[70%] absolute left-5 bottom-5 text-xl font-semibold text-white text-left font-lora"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <img
                    src={`/assets/pages/landingpage/${item.imgurl}.svg`}
                    alt=""
                    className="h-28  ml-auto"
                  />
                </div>
                <p className="text-base text-black">{item.description}</p>
              </div>
            );
          })}
        </div>
        <a
          href="/"
          className="bg-primary px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
        >
          <span>Explore Products</span>{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
              stroke="#FCFCFC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
       </div>
      </section> */}
      {/* <section className="w-full bg-white flex flex-col py-16 md:py-[100px] px-5 md:px-10 lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
            Why Enterprises Choose iona.ai?
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
            Automating onboarding and verifications saves up to 90% of time and
            costs on recurring (admin-heavy) HR operations, enabling efficient
            hiring and scalable growth without increasing budget.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {WhyChooseJson.map((item) => {
            return (
              <div className="w-full flex flex-col ">
                <div className="w-12 h-12 bg-[#F3F3F5] rounded-md grid place-items-center">
                  <img
                    src={`/assets/pages/landingpage/${item.image}.svg`}
                    alt=""
                    className="w-8"
                  />
                </div>
                <p
                  className=" text-[22px] leading-[30px] font-semibold  text-left font-lora mt-3 md:mt-4 lg:mt-[26px]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <p className="text-base text-[#677D64] mt-2 md:mt-4 lg:mt-[24px] font-lora">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      </section> */}
      {/* <section className="w-full bg-white flex flex-col py-10 lg:py-20 px-5 md:px-10 lg:px-[90px] justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center  ">
            Results that Empower Businesses
          </h2>
          <p className="text-base text-[#2A2564] text-center font-lora">
            100,000+ Elevated Experiences Delivered & 1.5 MIL+ Accurate
            Automated Documentation
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 max-w-[1440px]">
          {[
            {
              counter: "20x",
              title: "Faster Hiring Process",
            },
            {
              counter: "90%",
              title: "Improved Hiring Efficiency",
            },
            {
              counter: "95%",
              title: "Candidate Satisfaction Rate",
            },
            {
              counter: "500+",
              title: "New Hire Onboarding Monthly",
            },
            {
              counter: "100%",
              title: "Accuracy in Document Verification",
            },
            {
              counter: "100%",
              title: "Compliance in HR & Employment Regulations",
            },
          ].map((item) => {
            return (
              <div className="w-full flex flex-col">
                <p className="text-5xl text-primary font-medium border-b border-[#D6D6D6] pb-2 mb-3 font-lora">
                  {item.counter}
                </p>
                <p className="text-base text-[#808080] font-lora">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}
      {/* <section className="w-full bg-themeGray flex flex-col py-12 lg:py-20 px-5 md:px-10 lg:px-[90px] justify-center items-center ">
        <div className="w-full  max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] place-content-between ">
          <div className="w-full flex flex-col space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-left ">
              Certified for Your Trust and Security
            </h2>
            <p className="text-base text-primary font-lora">
              At iona.ai, we prioritize your data security and compliance. With
              certifications like ISO 27001, GDPR compliance, and ISO 9001:2015,
              we guarantee secure recruitment processes. 
              <br></br> <br /> Our status on the HM Government G-Cloud Supplier
              list reflects our dedication to delivering reliable, secure
              services.
            </p>
          </div>
          <div className="w-full flex flex-row flex-wrap md:gap-5">
            <img
              src="/assets/pages/landingpage/iso.png"
              alt="iso"
              className="w-24 md:w-36 h-fit"
            />
            <img
              src="/assets/pages/landingpage/gdpr.png"
              alt="gdpr"
              className="w-32 md:w-52 h-fit"
            />
            <img
              src="/assets/pages/landingpage/iso1.png"
              alt="iso"
              className="w-24 md:w-36 h-fit"
            />
            <img
              src="/assets/pages/landingpage/hmgov.png"
              alt="hmgov"
              className="w-48 mt-4 md:mt-0 md:w-64 h-fit"
            />
          </div>
        </div>
      </section> */}
      {/* <TestimonialSlider/> */}

      {/* <footer className="w-full flex flex-col justify-center items-center bg-themeGray py-10 ">
        <div className="w-full  px-5  md:px-10 lg:px-[90px] justify-center items-center  ">
          <div className="w-full max-w-[1440px] gap-5 md:gap-0  flex flex-col md:flex-row justify-between pb-3 mx-auto">
          <div className="flex flex-col w-full max-w-[400px] space-y-5">
            <img
              src="/assets/pages/landingpage/iona-logo.png"
              className="w-28"
              alt=""
            />
            <p className="text-base text-primary font-lora">
              "iona.ai is a full-service AI-powered recruitment platform that
              automates the entire hiring process—saving time, reducing costs,
              and ensuring 100% data accuracy. Trusted by enterprises for
              scalable, high-volume hiring."
            </p>
          </div>
          <div className="w-fit flex flex-row justify-center items-center space-x-5 mt-auto">
            <a
              href="/"
              className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        </div>
        <div className="w-full border-t border-[#C9C9C9] my-4"></div>
      <div className="w-full px-5 md:px-10 lg:px-[90px] justify-center items-center">
         <div className="w-full max-w-[1440px]  flex flex-col gap-4 md:flex-row justify-between ">
          <p className="text-xs text-black">
            Copyright © {new Date().getFullYear()} | All right reserved.
          </p>
          <p className="text-xs text-black">
            <a href="/">Privacy policy</a> | <a href="/">Terms & conditions</a>{" "}
            | <a href="/">Cookie Policy</a>
          </p>
        </div>
      </div>
      </footer> */}
    </div>
  );
}

export default Landingpage;
