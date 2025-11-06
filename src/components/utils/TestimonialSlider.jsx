import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialJson = [
    {
      headshoturl: "client.jpg",
      position: "HR Talent Acquisition",
      company: "Leading Life Insurance Company",
      testimony:
        "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team brings a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
    },
    {
      headshoturl: "client.jpg",
      position: "Senior Officer",
      company: "Leading UAE Bank",
      testimony:
        "Partnering with IONA.AI has elevated our background verification process end-to-end. Their approach is detailed, reliable, and consistently precise—every check, from criminal records to employment history, is handled with care and clarity. With seamless workflows and quick turnaround times, we've been able to onboard top talent faster and with greater confidence. IONA.AI's focus on accuracy and trust makes them a valued partner in maintaining the integrity of our workforce.",
    },
    {
      headshoturl: "client.jpg",
      position: "Chief Human Resources Officer",
      company: "A fast-growing consumer brand in India",
      testimony:
        "What impressed us most was how the system handled the complex regulatory requirements specific to healthcare hiring. We've not only accelerated our hiring timeline but dramatically improved compliance, which is absolutely critical in our industry. The system has been a game-changer for our expansion plans.",
    },
    {
      headshoturl: "client.jpg",
      position: "HR Director",
      company: "Leading Insurance Provider",
      testimony:
        "iona.ai has significantly improved the Onboarding process and has been able to deliver with 0% down time. Considering this success, we are looking forward to implement iona.ai for other entities as well.",
    },
  ];

  const handleRadioClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideToLoop) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="w-full bg-white flex flex-col py-10 justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10 px-5 md:px-10 lg:px-[90px]">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-3xl px-5 md:px-10 lg:px-[90px] md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
            Listen to Our Customer Experiences
          </h2>

          <div className="w-[90%] lg:w-full max-w-[100vw] lg:max-w-[1440px] !mt-10 overflow-hidden pb-3">
            <Swiper
              key={testimonialJson.length}
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                window.addEventListener("resize", () => swiper.update());
              }}
              loop={true}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="!m-0 !p-0 w-full flex items-stretch"
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonialJson.map((slide, i) => (
                <SwiperSlide
                  key={i}
                  className="flex flex-col justify-between border-[0.8px] border-[#869085] lg:px-14 lg:pt-8 lg:pb-4 bg-white h-full min-h-[430px] md:min-h-[250px] lg:min-h-[350px]  rounded-lg shadow-sm"
                >
                  <div>
                    <div className="flex flex-row justify-start gap-4 items-start p-6">
                      <img
                        src={`/assets/pages/landingpage/${slide.headshoturl}`}
                        alt="client"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-base text-black/80 font-bold font-lora">
                          {slide.position}
                        </p>
                        <p className="text-sm text-[#7F7F7F] font-lora">
                          {slide.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-black/80 font-lora font-medium px-6 pb-6">
                      “{slide.testimony}”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex gap-3 mt-6 justify-center">
              {testimonialJson.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleRadioClick(i)}
                  className={` h-2.5  transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-[#2A2564] w-6 rounded-md"
                      : "bg-[#B5B5B5] w-2.5 rounded-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
