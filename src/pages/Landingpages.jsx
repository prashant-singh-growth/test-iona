import {  FaLinkedinIn } from "react-icons/fa";
import ResponsiveGridLines from "../components/utils/ResponsiveGridLines";
import ChangingGradientText from "../components/LandingPage/ChangingGradientText";
import LogoSlider from "../components/LandingPage/LogoSlider";
import FormLandingPage from "../components/LandingPage/FormLandingPage";
import TestimonialSlider from "../components/utils/TestimonialSlider";
import WhyUsSection from "../components/LandingPage/WhyUsSection";
import SeoHeader from "../components/utils/SeoHeader";

import ResultSection from "../components/LandingPage/ResultSection";
import CertificationSection from "../components/HomePage/CertificationSection";
import CTASection from "../components/HomePage/CTASection";
import { NavLink } from "react-router-dom";
import SolutionSection from "../components/HomePage/SolutionSection";
function Landingpages() {
  return (
    <div className="w-full font-lora theme-lora-font" id="form">
      <SeoHeader
        title={"iona.ai: AI-Powered End-to-End Hiring & Onboarding Solution"}
        description={
          "Streamline your hiring with iona.ai. Automate recruitment, ensure compliance, and onboard at scale. Request a demo today!"
        }
        canonical={"/end-to-end-hiring-solution-for-enterprises"}
      />

      <header className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] grid place-items-center fixed top-0 h-[100px] bg-white z-50">
        <div className="w-full max-w-[1440px] flex flex-row justify-between items-center">
          <img
            src="/assets/pages/landingpage/iona-logo.png"
            className="w-28"
            alt="iona-logo"
          />
          <a
            href="#form"
            className="bg-primary font-bold leading-5 font-lora px-5 py-3 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
          >
            <span>Schedule a Demo</span>{" "}
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
      </header>
      <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] py-16 lg:py-20 flex flex-col justify-center items-center">
        <ResponsiveGridLines gradientReplacement={[10, 97, 30, 47, 93, 70, 100, 90, 20, 40]} />
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
     <SolutionSection bgcolor={'bg-[#f3f3f5]'} ctatext={'Schedule a Demo'} ctaurl={'#form'}/>
    
      {/* why us Section */}
      <WhyUsSection />
      {/* result section */}
      <ResultSection />
      {/* certification section */}
      <CertificationSection />
      {/* testimonial section */}
      <TestimonialSlider />
      {/* cta section */}
      <CTASection />
      {/* footer */}
      <footer className="w-full flex flex-col justify-center items-center bg-themeGray py-10 ">
        <div className="w-full  px-5  md:px-10 lg:px-[90px] justify-center items-center  ">
          <div className="w-full max-w-[1440px] gap-5 md:gap-0  flex flex-col md:flex-row justify-between pb-3 mx-auto">
            <div className="flex flex-col w-full max-w-[400px] space-y-5">
              <img
                src="/assets/pages/landingpage/iona-logo.png"
                className="w-28"
                alt="iona-logo"
              />
              <p className="text-base text-primary font-lora">
                "Trusted by enterprises for scalable, high-volume hiring.<br></br>iona.ai is a full-service AI-powered recruitment platform that automates the entire hiring process—saving time, reducing costs, and ensuring 100% data accuracy."
              </p>
            </div>
            <div className="w-fit flex flex-row justify-center items-center space-x-5 mt-auto">
             
             
              <a
                href="https://www.linkedin.com/company/iona-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-2xl text-xl bg-white w-10 h-10 md:w-14 md:h-14 ease-in-out duration-150 rounded-full grid place-items-center text-primary hover:bg-primary hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[#C9C9C9] my-4"></div>
        <div className="w-full px-5 md:px-10 slg:px-[60px] lg:px-[90px] flex  justify-center items-center">
          <div className="w-full max-w-[1440px]  flex flex-col gap-4 md:flex-row justify-between ">
            <p className="text-xs text-black">
              Copyright © {new Date().getFullYear()} | All right reserved.
            </p>
            <p className="text-xs text-black">
              <NavLink to="/privacy">Privacy policy</NavLink> |{" "}
              <NavLink to="/terms">Terms & conditions</NavLink> |{" "}
              <NavLink to="/cookies">Cookie Policy</NavLink>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landingpages;
