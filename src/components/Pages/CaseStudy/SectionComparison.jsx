import React from "react";

function SectionComparison({ comparison }) {
  if (!comparison) return;
  return (
    <section className="w-full bg-white flex flex-col py-[60px] px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center space-y-10">
      <div className="w-full max-w-[1440px] flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col max-w-[900px] justify-center items-center ">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold text-center ">
            {comparison.title}
          </h2>
          <p className="text-base text-[#2A2564] text-center pt-4">
            {comparison.description}
          </p>
        </div>
        <div className="w-full min-w-[730px] overflow-x-scroll grid grid-cols-8 lg:grid-cols-3 ">
          <div className="w-full border-b border-[#B9B8B8] h-fit pt-5 pb-6 lg:pb-10 mt-auto px-5 lg:px-12 col-span-2 lg:col-span-1">
            <p className="font-lora text-violet_1 text-xl lg:text-2xl font-medium">
              Feature
            </p>
          </div>
          <div className="w-full bg-[#F9F9F9] rounded-t-xl border-b pb-6 lg:pb-10 border-[#B9B8B8] h-fit py-10 px-6 lg:px-12 items-end mt-auto col-span-3 lg:col-span-1">
            <img
              src={comparison.competitorLogo}
              alt=""
              className="w-[130px] lg:w-[218px]"
            />
          </div>
          <div className="w-full bg-[#2A2564] rounded-t-lg border-b border-[#B9B8B8] pb-6 lg:pb-10  pt-20 shadow-[0_0_40px_0_#00000059] px-6 lg:px-12 items-end col-span-3 lg:col-span-1">
            <img
              src="/assets/pages/casestudy/iona-ai-logo.png"
              alt=""
              className="w-[100px] lg:w-[161px] "
            />
          </div>
          {comparison.rows.map((row, ind) => (
            <React.Fragment key={ind}>
              <div className="w-full border-b border-[#B9B8B8] pt-8 pb-6 lg:pt-12 lg:pb-10 px-5 lg:px-12 col-span-2 lg:col-span-1">
                <p className="text-base text-violet_1 font-lora font-semibold">
                  {row.feature} 
                </p>
              </div>
              <div className="w-full bg-[#F9F9F9]  border-b border-[#B9B8B8] pt-8 pb-6 lg:pt-12 lg:pb-10 px-5 lg:px-12 flex flex-row justify-start gap-1.5 col-span-3 lg:col-span-1">
                <svg
                  className="size-4 flex-none mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7C11.264 7 10.687 7.649 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.314 7.65 12.736 7 12 7ZM12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17Z"
                    fill="#4C4C4C"
                  />
                  <path
                    d="M12 4.05882C9.89387 4.05882 7.874 4.89548 6.38474 6.38474C4.89548 7.874 4.05882 9.89387 4.05882 12C4.05882 14.1061 4.89548 16.126 6.38474 17.6153C7.874 19.1045 9.89387 19.9412 12 19.9412C14.1061 19.9412 16.126 19.1045 17.6153 17.6153C19.1045 16.126 19.9412 14.1061 19.9412 12C19.9412 9.89387 19.1045 7.874 17.6153 6.38474C16.126 4.89548 14.1061 4.05882 12 4.05882ZM3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12Z"
                    fill="#4C4C4C"
                  />
                </svg>
                <p className="text-base font-lora text-[#16181D]">
                  {" "}
                  {row.competitor}
                </p>
              </div>
              <div className="w-full bg-[#2A2564]  border-b border-[#B9B8B8] pt-8 pb-6 lg:pt-12 lg:pb-10 px-5 lg:px-12 flex flex-row justify-start gap-1.5 shadow-[0_0_40px_0_#00000059] col-span-3 lg:col-span-1">
                <svg
                  className="size-4 flex-none mt-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C-1.95685e-08 11.3132 0.258658 12.6136 0.761205 13.8268C1.26375 15.0401 2.00035 16.1425 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C11.3132 20 12.6136 19.7413 13.8268 19.2388C15.0401 18.7362 16.1425 17.9997 17.0711 17.0711C17.9997 16.1425 18.7362 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C2.00035 3.85752 1.26375 4.95991 0.761205 6.17317C0.258658 7.38642 -1.95685e-08 8.68678 0 10Z"
                    fill="#48BB25"
                  />
                  <path
                    d="M4.75 10.5L8.25 14L15.25 7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-lora text-base text-white">{row.iona}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionComparison;
