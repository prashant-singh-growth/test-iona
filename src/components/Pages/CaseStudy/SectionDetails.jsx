

function SectionDetails({detail}) {
if(!detail) return
  return (
    <section className="w-full bg-white flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[1022px] justify-center items-center ">
          <p className="text-base text-[#2A2564] font-lora !pb-2">
          {detail?.headshot}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
           {detail.title}
          </h2>
          <p className="text-base text-[#2A2564] text-center pt-4" dangerouslySetInnerHTML={{__html:detail.description}}/>
        </div>
        <div className="w-full bg-primary max-w-[1269px] rounded-xl px-5 md:px-10 p-10 flex flex-col justify-center items-center gap-6">
          <h3 className="text-3xl lg:text-[40px] font-bold font-lora text-white text-center">
          {detail.cta.title}
          </h3>
          <p className="text-base text-white font-lora text-center" dangerouslySetInnerHTML={{__html:detail.cta.description}}/>
          <h4 className="font-lora font-bold text-white text-base text-center">
           {detail.cta.sub_title}
          </h4>
          <p className="text-base text-white font-lora text-center"dangerouslySetInnerHTML={{__html:detail.cta.sub_description}}/>
          <div className="w-fit flex flex-col sm:flex-row gap-5 pt-8 lg:pt-14">
             <a
              href={"#form"}
              className="bg-white px-5 py-3 flex-none  font-bold leading-5 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
            >
              <span>Schedule a Demo</span>
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
              href={"#form"}
              className="bg-primary px-5 py-3 flex-none border-2 border-white font-bold leading-5 text-[14px] text-white flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
            >
              <span>Schedule a Demo</span>
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
      </div>
    </section>
  );
}

export default SectionDetails;
