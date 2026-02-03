import React from "react";

import ResponsiveGridLines from "../../utils/ResponsiveGridLines";
import AdsFormSection from "./AdsFormSection";

function AdsBanner() {
  return (
    <section className="w-full bg-[#faf7fb] h-fit relative px-5 md:px-10 slg:px-[60px] lg:px-[90px] pt-10 pb-16 md:py-16 lg:py-20 flex flex-col justify-center items-center">
      <ResponsiveGridLines
        gradientReplacement={[10, 37, 80, 87, 93, 70, 100, 90, 50, 40]}
      />
      <div className="w-full max-w-[100vw] lg:max-w-[1440px] grid lg:grid-cols-[60%_40%] place-items-center relative z-10 gap-10">
        <div className="w-full max-w-[100vw]">
          <h1 className="text-[33px] font-semibold font-lora md:text-5xl leading-tight slg:text-5xl lg:text-[58px] lg:leading-[64px] text-[#2A2564] flex flex-col text-left ">
            Official Launch of the Most Highly Anticipated Book,
            <span
              style={{
                background:
                  "linear-gradient(0deg, #6492EE 21.51%, #637CEB 28.33%, #6276E5 35.69%, #5A5EDA 43.6%, #3D52CA 52.05%, #1820B7 64.6%, #091CAF 78.23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              “The AI-FIRST CHRO”
            </span>
          </h1>
          <p className="text-base font-lora text-primary font-normal mt-5">
            After 2 years of intensive research, real-world deployments, and
            refining the "Agentic AI" model, Amit and Abhijeet are officially
            launching their definitive guide to HR transformation during Nextech
            2026.
          </p>
          <div className="w-full p-5 md:p-10 bg-primary rounded-[12px] mt-6 flex flex-col">
            <h2 className="text-white text-2xl md:text-3xl">Inside the Book:</h2>
            <ul className="flex flex-col gap-4 text-white text-base list-disc pl-5 font-normal mt-6 ">
              <li>
                <strong>The 5×6 Model:</strong> Our proprietary framework for
                scaling HR operations without increasing headcount.
              </li>

              <li>
                <strong>The CFO Conversations:</strong> The exact ROI questions
                your finance team will ask about AI—and how to answer them.
              </li>

              <li>
                <strong>Avoiding the 74% Trap:</strong> Why most AI projects
                stay in "Proof of Concept" and how to move them into production.
              </li>
            </ul>
          </div>
        </div>
       <AdsFormSection/>
      </div>
    </section>
  );
}

export default AdsBanner;
