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
      position: "HR Talent Acquisition",
      company: "Leading Life Insurance Company",
      testimony:
        "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team brings a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
    },
    {
      headshoturl: "client.jpg",
      position: "HR Talent Acquisition",
      company: "Leading Life Insurance Company",
      testimony:
        "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team brings a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
    },
    {
      headshoturl: "client.jpg",
      position: "HR Talent Acquisition",
      company: "Leading Life Insurance Company",
      testimony:
        "Following iona.ai's technology has streamlined our onboarding process, even in a high-volume hiring setup. The system handles scale effortlessly and has significantly reduced our offer letter turnaround time. iona.ai's support team brings a rare blend of speed, precision, and reliability. Their partnership goes beyond tech—they work closely with our HR team to drive adoption through hands-on training and support. This collaboration has been key to our success.",
    },
  ];

  //   const handleRadioClick = (index) => {
  //     if (swiperRef.current && swiperRef.current.slideToLoop) {
  //       swiperRef.current.slideToLoop(index);
  //     }
  //   };

  return (
    <section className="w-full bg-white flex flex-col py-10  justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col  justify-center items-center space-y-4">
          <h2 className="text-3xl px-5 md:px-10 lg:px-[90px] md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center">
            Listen to Our Customer Experiences
          </h2>

          <div className="w-[90%] lg:w-full max-w-[100vw] lg:max-w-[1440px]  !mt-10 overflow-hidden">
            <Swiper
              key={testimonialJson.length}
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              centeredSlides={false}
              loop={true}
              initialSlide={1}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="!m-0 !p-0 w-full"
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: false }, // 📱 mobile
                640: { slidesPerView: 1, centeredSlides: true }, // small tablet
                768: { slidesPerView: 1, centeredSlides: true }, // tablet
                1024: { slidesPerView: 2, centeredSlides: true }, // laptop
              }}
            >
              {testimonialJson.map((slide, i) => (
                <SwiperSlide
                  key={i}
                  className="flex w-full flex-col border-[0.8px] border-[#869085] lg:px-14 lg:pt-8 lg:pb-4 bg-white "
                >
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* --- Radio Buttons --- */}
            <div className="flex gap-3 mt-6 justify-center">
              {testimonialJson.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex ? "bg-[#2A2564]" : "bg-[#B5B5B5]"
                  }`}
                  //   onClick={() => handleRadioClick(i)}
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
