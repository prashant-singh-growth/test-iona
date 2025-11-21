

const chooseList = [
  "Unified NovaSuite for hiring, verification, and onboarding",
  "100% compliance guarantee",
  "Faster deployment (2–4 weeks)",
  "Enterprise-grade data security",
  "White-glove support & onboarding"
]
function SectionChoose() {
  return (
    <section className="w-full bg-primary flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col  justify-center items-center ">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-white font-bold md:font-semibold text-center ">
            Nova Verify: The Fully Managed BGV Powerhouse, Eng
          </h2>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="w-full">
            <div className="w-full flex flex-col gap-8">
             {
              chooseList.map((list,ind)=>(
                 <div key={ind} className="w-full flex flex-row items-center gap-2">
                <div className="size-10 grid place-items-center rounded-lg bg-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z"
                      stroke="#160E38"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.0004 3H15.0004C14.4481 3 14.0004 3.44772 14.0004 4V9C14.0004 9.55228 14.4481 10 15.0004 10H20.0004C20.5527 10 21.0004 9.55228 21.0004 9V4C21.0004 3.44772 20.5527 3 20.0004 3Z"
                      stroke="#160E38"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.0004 14H15.0004C14.4481 14 14.0004 14.4477 14.0004 15V20C14.0004 20.5523 14.4481 21 15.0004 21H20.0004C20.5527 21 21.0004 20.5523 21.0004 20V15C21.0004 14.4477 20.5527 14 20.0004 14Z"
                      stroke="#160E38"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z"
                      stroke="#160E38"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg font-white font-medium font-lora text-white">
                  {list}
                </p>
              </div>
              ))
             }
            </div>
            <div className="w-fit flex flex-row gap-5 pt-14">
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
          <img src="/assets/pages/casestudy/peoplestrong-casestudy.webp" alt="" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
}

export default SectionChoose;
