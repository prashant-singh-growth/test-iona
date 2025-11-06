import { memo } from "react";

// Import the extracted components
// import HeroCarousel from "../components/HeroCarousel";
// import PartnerSection from "../components/PartnerSection";
// import SolutionsSection from "../components/SolutionsSection";
// import BenefitsSection from "../components/BenefitsSection";
// import StatsSection from "../components/StatsSection";
// import CaseStudiesSection from "../components/CaseStudiesSection";
// import TestimonialsSection from "../components/TestimonialsSection";
// import FAQSection from "../components/FAQSection";
// import CTASection from "../components/CTASection";
import HomeBanner from "../components/HomePage/HomeBanner";
import SeoHeader from "../components/utils/SeoHeader";
import HowWeWork from "../components/HomePage/HowWeWork";
import WorkingWay from "../components/HomePage/WorkingWay";
import SolutionSection from "../components/HomePage/SolutionSection";
import WhyUsSection from "../components/LandingPage/WhyUsSection";
import ResultSection from "../components/LandingPage/ResultSection";
import CertificationSection from "../components/HomePage/CertificationSection";
import TestimonialSlider from "../components/utils/TestimonialSlider";
import CTASection from "../components/HomePage/CTASection";
import FAQSection from "../components/HomePage/FAQSection";
import CaseStudySection from "../components/HomePage/CaseStudySection";

// Main component optimized with React.memo
const Home = memo(() => {
  const logos = [
    "/assets/pages/landingpage/metropolis.png",
    "/assets/pages/landingpage/fab.png",
    "/assets/pages/landingpage/ness.png",
    "/assets/pages/landingpage/hdfc.png",
    "/assets/pages/landingpage/birla-sun.png",
    "/assets/pages/landingpage/aditya.png",
  ];

  return (
    <div className="bg-white text-primaryText">
      <SeoHeader
        title={" iona.ai: AI-Powered End-to-End Hiring & Onboarding Solution"}
        description={"ionai - Elevating Experiences with AI"}
        canonical={"/"}
      />
      {/* banner */}
      <HomeBanner />
      {/* client badge */}
      <section className="w-full flex flex-col mt-[60px] overflow-hidden gap-5 justify-center items-center px-5 md:px-10">
        <p className="text-sm font-normal font-sora text-center text-[#808080] font-lora">
          Trusted by leading brands and customers
        </p>
        <div className="flex  gap-5 whitespace-nowrap max-w-[80vw] md:max-w-full flex-wrap justify-start">
          {[...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="  transition-all w-fit h-10 px-5 py-2 md:h-16 md:px-[34px] md:py-[14px] border-[#D6D6D6] border rounded md:rounded-[20px]"
            />
          ))}
        </div>
      </section>
      {/* how we work */}
      <HowWeWork />
      {/* working way */}
      <WorkingWay />
      {/* complate solution section */}
      <SolutionSection/>

      {/* cta */}
      <section className="w-full bg-[#150D37] overflow-hidden">
        <div className="w-full relative py-16 grid place-items-center px-5 md:px-8">
          <img
            src="/assets/pages/landingpage/bg-cta-1.png"
            alt=""
            className="absolute inset-0 min-w-[1200px] lg:min-w-full lg:max-w-full"
          />
          <div className="w-full flex flex-col gap-7 lg:flex-row justify-between items-center relative z-10 max-w-[1440px] ">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-lora font-bold md:font-semibold text-center lg:text-left max-w-[912px]">
              Unlock the Power of Precision-based Automated Hiring
            </h2>

            <a
              href="#form"
              className="bg-white px-5 py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
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
                  stroke="#2A2564"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* why us section */}
      <WhyUsSection ctaText="Book a Demo" ctaUrl="/"/>
      {/* result Section */}
      <ResultSection/>
      {/* certification section */}
      <CertificationSection/>
      {/* testimonial section */}
      <TestimonialSlider/>
      {/* cta section */}
      <CTASection ctaUrl={"/"}/>
      {/* case-study section */}
      <CaseStudySection/>
      {/* faq section */}
      <FAQSection/>
      {/* <section className="relative overflow-hidden">
        <HeroCarousel /> */}

      {/* Trusted by section */}
      {/* <PartnerSection />
      </section> */}

      {/* Solutions Section */}
      {/* <SolutionsSection /> */}

      {/* Why clients trust us */}
      {/* <BenefitsSection /> */}

      {/* Statistics Section */}
      {/* <StatsSection /> */}

      {/* Case Studies */}
      {/* <CaseStudiesSection /> */}

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* FAQ Section */}
      {/* <FAQSection /> */}

      {/* CTA Section */}
      {/* <CTASection /> */}
    </div>
  );
});

export default Home;
