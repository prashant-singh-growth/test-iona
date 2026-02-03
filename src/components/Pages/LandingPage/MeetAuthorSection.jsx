import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function MeetAuthorSection() {
  return (
   <div className="w-full font-lora bg-white">
    <div className="w-full bg-[#160E38]/5 py-10 px-5 md:px-10 slg:px-[60px] lg:px-[90px] ">
        <div className="w-full flex-col flex justify-center items-center">
            <p className='text-2xl md:text-3xl max-w-[830px] text-primary font-semibold text-center '>74% of AI Initiatives Fail. 
We wrote the book on how to be the 26% that succeed.</p>
<p className='text-lg text-primary mt-5 md:mt-7 mb-3'>Introducing</p>
<h2 className='text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px]  font-bold md:font-semibold text-center mb-3'><span
              style={{
                background:
                  "linear-gradient(0deg, #6492EE 21.51%, #637CEB 28.33%, #6276E5 35.69%, #5A5EDA 43.6%, #3D52CA 52.05%, #1820B7 64.6%, #091CAF 78.23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
            The AI-FIRST CHRO
            </span></h2>
            <p className='text-lg text-primary text-center'>(The Missing Playbook – From AI Promise to Boardroom Results)<br/>
<strong>By Amit Srivastava & Abhijeet Chakravarty, co-founders of iona.ai</strong></p>


<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 mt-[50px] gap-10 lg:gap-36">
  <div className="w-full flex flex-col">
<h3 className='text-3xl text-primary font-semibold'>How to get your copy</h3>
<ul className='flex flex-col gap-4 text-primary text-base list-disc pl-5 font-normal mt-6'>
  <li><strong>At Nextech 2026:</strong> FREE for attendees who sign up on this page (Collect at the venue).</li>
  <li><strong>Not Attending? The first 50 non-attendees</strong> who sign up will have the book couriered to them for free.</li>

<li><strong>General Release:</strong> Available post-event for ₹1,599.</li>
</ul>
 <a href='#reserve-copy'
          
          className="bg-primary px-5 mt-5 py-3 font-bold leading-5 text-[14px] text-white flex items-center justify-center space-x-2 rounded hover:scale-95 transition duration-150 w-fit"
        >
          Reserve Your Free Copy <FaArrowRight className="ml-2"/>
        </a>
  </div>
  <div className="w-full h-fit rounded-md overflow-hidden bg-white">
    <svg className='w-full' viewBox="0 0 555 310" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-1.26885" x2="633.833" y2="-1.26885" transform="matrix(0.875625 0.482992 -0.696718 0.717345 0 2.3855)" stroke="#A6A6A6" stroke-width="2.53771"/>
<line y1="-1.26885" x2="630.915" y2="-1.26885" transform="matrix(-0.872986 0.487746 -0.701299 -0.712868 551.834 0)" stroke="#A6A6A6" stroke-width="2.53771"/>
<rect x="250.386" y="120.372" width="62.8708" height="61.9402" rx="14.6735" fill="#A6A6A6"/>
<path d="M262.178 139.729C262.178 137.676 263.006 135.706 264.48 134.254C265.954 132.802 267.953 131.986 270.037 131.986H293.613C295.698 131.986 297.697 132.802 299.171 134.254C300.644 135.706 301.472 137.676 301.472 139.729V162.957C301.472 165.01 300.644 166.979 299.171 168.431C297.697 169.883 295.698 170.699 293.613 170.699H270.037C267.953 170.699 265.954 169.883 264.48 168.431C263.006 166.979 262.178 165.01 262.178 162.957V139.729Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M274.947 149.407C277.66 149.407 279.859 147.241 279.859 144.568C279.859 141.896 277.66 139.729 274.947 139.729C272.234 139.729 270.035 141.896 270.035 144.568C270.035 147.241 272.234 149.407 274.947 149.407Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M286.787 152.545L270.035 170.699H293.873C295.888 170.699 297.821 169.91 299.246 168.507C300.67 167.103 301.471 165.199 301.471 163.214V162.957C301.471 162.055 301.127 161.708 300.508 161.04L292.59 152.533C292.221 152.137 291.772 151.82 291.272 151.604C290.772 151.388 290.232 151.277 289.686 151.278C289.14 151.279 288.6 151.392 288.101 151.61C287.601 151.829 287.154 152.147 286.787 152.545Z" stroke="white" stroke-width="2.93471" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
</div>
<p className='text-lg text-primary italic text-center max-w-[550px] mt-10'>"Most HR leaders are sold 'tools.' What they need is a 'Framework.' 
This book is our attempt to bridge that gap."</p>
        </div>
    </div>
    <div className="w-full bg-white px-5 md:px-10 slg:px-[60px] lg:px-[90px]  py-16 flex flex-col justify-center items-center">

      <h2 className='text-4xl mb-8'>Meet the Authors </h2>
      <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-[76px]">
        {
          [
            {
              logoImg:"/assets/pages/landingpage/amit.webp",
              name:"Amit Srivastava",
              position:"Co-Founder, iona.ai",
              description:"A founder and architect of Agentic AI, Amit leverages two decades of global consulting expertise and a proven track record to transform intractable HR challenges into autonomous, result-driven systems."
            },
            {
             logoImg:"/assets/pages/landingpage/abhijeet.webp",
              name:"Abhijeet Chakravarty",
              position:"Co-Founder, iona.ai",
              description:"As a visionary and a leader with two decades of experience, Abhijeet orchestrates Agentic AI to transform fragmented enterprise hiring into a unified, audit-ready powerhouse that delivers 90% faster onboarding and guaranteed ROI."
            },
          ].map((item,ind) => (
<div key={ind} className="w-full bg-[#F3F3F5] rounded-[14px] p-6 flex flex-col ">
  <img src={item.logoImg} alt={`${item.name},${item.position}`} loading='lazy' className="w-full object-contain rounded-[12px]"/>
          <h3 className='text-[#0D0D0D] font-medium text-2xl mt-4'>{item.name}</h3>
          <p className='text-xl font-medium text-[#0D0D0D] mb-[14px] mt-1'>{item.position}</p>
          <p className='text-base'>{item.description}</p>
        </div>
          ))
        }
      </div>
    </div>
   </div>
  )
}

export default MeetAuthorSection