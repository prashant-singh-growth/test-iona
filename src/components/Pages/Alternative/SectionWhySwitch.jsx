

function SectionWhySwitch({switchData}) {
  if(!switchData) return
  return (
    <section className="w-full bg-primary flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col  justify-center items-center ">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-bold md:font-semibold text-center ">
            {switchData.title}
          </h2>
        </div>
        <div className="w-full max-w-[1199px] grid grid-cols-1 lg:grid-cols-2 gap-10  lg:gap-28 mt-14">
         {switchData.card.map((card,ind)=>(
             <div key={ind} className="w-full flex flex-col ">
            <h3 className="text-2xl font-bold font-lora text-white">
             {card.heading}
            </h3>
            <p className="text-base text-[#EAEAEA] font-lora pt-5 pb-7" dangerouslySetInnerHTML={{__html:card.description}}/>
            <div className="w-full flex flex-col bg-white rounded-[12px] p-5 sm:p-8 justify-start items-start gap-5 sm:gap-10 mb-9 relative">
              <div className="absolute w-0.5 hidden sm:block bg-primary top-10 left-[55px] h-[30%]"></div>
              <svg
                className="w-0.5 h-[180px] hidden sm:block absolute bottom-14 left-[55px]"
                viewBox="0 0 2 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L1 162"
                  stroke="#E7DEFE"
                  stroke-width="2"
                  stroke-dasharray="8 8"
                />
              </svg>

           {card.bullets.map((list,ind)=>(
               <div className="w-full flex flex-row justify-start items-start sm:items-center gap-3 sm:gap-4 relative z-10">
                <p className={`size-6 sm:size-12  flex-none text-xs  sm:text-lg font-semibold font-lora ${ind > 1 ? "bg-[#E7DEFE] text-[#1A202C]" : "bg-[#160E38] text-white "}   grid place-items-center rounded-full`}>
                  {ind + 1}
                </p>
                <p className="text-base sm:text-lg font-lora text-primary" dangerouslySetInnerHTML={{__html:list}}/>
              </div>
           ))}
             
             

             
            </div>
            <p className="text-base text-[#EAEAEA] font-lora " dangerouslySetInnerHTML={{__html:card.bottomNote}} />
          </div>
         ))}
         
        </div>
         <a
          href={"#form"}
          className="bg-white px-5 py-3 text-[14px] text-primary flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150"
        >
          <span> See How iona.ai Works</span>{" "}
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
    </section>
  );
}

export default SectionWhySwitch;
