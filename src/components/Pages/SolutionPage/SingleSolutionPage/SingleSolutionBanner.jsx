
import ResponsiveGridLines from '../../../utils/ResponsiveGridLines'

function SingleSolutionBanner({banner}) {
  return (
      <section className="w-full h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] !pt-20 md:py-16 lg:py-20 sm:!pb-0 lg:!pt-10  flex flex-col justify-center items-center ">
   
              <ResponsiveGridLines gradientReplacement={[90, 80, 70, -10, 93, 70, 100, 90, 50, -10]} />
              <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-2 place-items-center  z-10 gap-10 lg:gap-0 relative lg:pb-20">
                <div className="w-full max-w-[100vw]">
                  <h1 className="text-4xl font-bold md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-primary flex flex-col text-left ">
                 {banner.title}
                  </h1>
                  <p className="text-base font-lora text-primary font-normal mt-5">
             {banner.description}
                  </p>
                  <div className="w-full flex flex-col sm:flex-row justify-between md:justify-start gap-5 mt-8 md:mt-12 lg:mt-12 slg:mt-10 ">
                     <a
                      href={banner?.cta?.url1 ? banner.cta.url1 :"/#solution"}
                      className="border-primary font-bold leading-5 border w-fit bg-white px-4 py-2.5 md:px-5 md:py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                    >
                      <span>{banner?.cta?.text1 ? banner.cta.text1:"Explore Products"}</span>{" "}
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
                    <a
                      href={banner?.cta?.url2 ? banner.cta.url2 :"/contact"}
                      className="bg-primary px-4 py-2.5 font-bold leading-5 md:px-5 md:py-3 w-fit text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
                    >
                      <span>{banner?.cta?.text2 ? banner.cta.text2:"Book a Demo"}</span>{" "}
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                   
                  </div>
                </div>
                <img
                  src={banner.bannerImage.imgurl}
                  alt={banner.bannerImage.altText}
                  className="object-contain w-full "
                  loading='lazy'
                />
              </div>
            </section>
  )
}

export default SingleSolutionBanner