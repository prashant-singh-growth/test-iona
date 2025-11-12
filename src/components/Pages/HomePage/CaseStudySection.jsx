import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

function CaseStudySection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies = [
    {
      image: "/assets/pages/homepage/case-study.webp",
      title: "Learn how iona.ai Simplified Hiring For A Leading Consumer Brand",
      description:
        '"Our manual hiring process couldn\'t keep up with the volume, making it hard to track key metrics like interviews, selection ratios, and offer rejections. We chose iona.ai for its simplicity, cost-effectiveness, and customization options. The analytics fetched from iona.ai allow my team to work quickly and more efficiently."',
      author: "AGM-HR, a fast-growing consumer brand in India",
      link: "/case-studies",
    },
    {
      image: "/assets/pages/homepage/case-study-2.webp",
      title: "How iona.ai Accelerated Onboarding for a Tech Giant",
      description:
        '"iona.ai automated document verification and compliance workflows, cutting onboarding time by 60%. HR teams now focus on engagement instead of paperwork."',
      author: "HR Head, Global SaaS Company",
      link: "/case-studies",
    },
    {
      image: "/assets/pages/homepage/case-study-3.webp",
      title: "Smarter Compliance for a Financial Services Company",
      description:
        '"With iona.ai, our compliance accuracy went from 85% to 99%, ensuring smooth audits and error-free onboarding every single time."',
      author: "VP-HR, Finance Enterprise",
      link: "/case-studies",
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col py-10 lg:py-20 pl-5 md:pl-10 slg:pl-[60px] lg:pl-[90px] md:pr-10 pr-5 lg:pr-0 justify-center items-center space-y-10">
      {/* --- Header --- */}
     <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-10">
       <div className="flex flex-col max-w-[826px] justify-center items-center space-y-4 text-center md:pr-10">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold">
          Case Studies
        </h2>
        <p className="text-base text-[#2A2564] font-lora">
          Our Clients See Real Impact—Fast and Scalable Hiring, Unmatched
          Accuracy, and Cost Savings
        </p>
      </div>

      {/* --- Swiper Slider --- */}
      <div className="w-full flex flex-col gap-10 ">
        
       <div className="w-full relative">
        <div className="w-[15%] lg:w-[20%] right-0 md:-right-1 lg:right-0 xl:-right-2 hidden md:block h-full top-0 absolute bg-gradient-to-r to-white from-transparent z-10 "></div>
         <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          slidesPerView={1.4}
       
          loop={true}
        //   autoplay={{
        //     delay: 4000,
        //     disableOnInteraction: false,
        //   }}
        breakpoints={{
                0: { slidesPerView: 1,spaceBetween:20 },
                640: { slidesPerView: 1.4,spaceBetween:30 },
                1024: { slidesPerView: 1.4 ,spaceBetween:30},
              }}
          className="case-study-swiper h-fit "
        >
          {caseStudies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col bg-[#160E38] p-5 md:p-10 rounded-md  h-full min-h-[450px]   md:min-h-[520px] lg:min-h-[550px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-md object-contain"
                  loading="lazy"
                />
                <h3 className="text-white text-xl md:text-2xl font-medium line-clamp-2 font-lora my-3 md:my-5">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-white font-lora line-clamp-4">
                  {item.description}
                </p>
                <div className="w-full flex flex-row justify-between gap-5 items-center mt-auto pt-7 flex-wrap">
                  <p className="text-base font-normal text-white font-lora">
                    {item.author}
                  </p>
                  <a
                    href={item.link}
                    className="bg-white font-lora px-5 py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                  >
                    <span>View Full Case Study</span>
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>

        {/* --- Custom Controls --- */}
        <div className="w-full flex flex-row justify-between items-center lg:pr-[90px]">
          {/* Radio Buttons */}
          <div className="flex flex-row gap-3">
            {caseStudies.map((_, index) => (
              <div
                key={index}
                // onClick={() => swiperRef.current.slideToLoop(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 h-1 bg-[#160E38]"
                    : "w-4 h-1 bg-[#CFCFCF]"
                } rounded-[50px]`}
              ></div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex flex-row gap-3">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 flex items-center justify-center bg-[#160E38] text-white rounded-full hover:opacity-80 transition"
            >
              <FaLeftLong />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 flex items-center justify-center bg-[#160E38] text-white rounded-full hover:opacity-80 transition"
            >
              <FaRightLong />
            </button>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}

export default CaseStudySection;
