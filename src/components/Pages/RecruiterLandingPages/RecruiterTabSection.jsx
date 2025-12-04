import React, { useState } from "react";


const solutionButtonList = [
  "Instant CV Parsing",
  "Your Tracker, Your Way",
  "One-Click Candidate Export"
];

const solutionCardData = [
  {
    tabName: "Instant CV Parsing",
    title: "Instant CV Parsing: Goodbye Manual Data Entry",
    description:
      "Drop any resume directly into your tracker, and our AI instantly extracts and populates names, contact info, experience, and skills—zero manual work required.",
    list: [
      "<b>Automatic Data Extraction</b> : Instantly pull all key candidate details. ",
      "<b>Smart Accuracy</b> :  Enjoy support for multiple file formats and built-in smart duplicate detection."
    ],
    btnURL: "/novacount",
    image: "3.webp",
  },
  {
    tabName: "Your Tracker, Your Way",
    title: "Your Tracker, Your Way: Total Customization",
    description:
      "Every recruiter works differently. Customize your pipeline views, columns, and organization exactly how you want them, ensuring iona.ai adapts perfectly to your unique workflow.",
    list: [
      "<b>Intuitive Setup:</b> Drag-and-drop column customization.",
      "<b>Powerful Organization:</b> Save unlimited custom views and use advanced filtering and sorting. ",
    
    ],
    btnURL: "/novaassist",
    image: "1.webp",
  },
  {
    tabName: "One-Click Candidate Export",
    title: "One-Click Candidate Export: Instant Shortlists",
    description:
      "Move candidates from your tracker to the hiring manager's desk instantly. Generate and share complete, professional shortlists with all supporting details in a single click.",
    list: [
      "<b>Flexible Output:</b> Export to Excel, CSV, or PDF instantly.",
      "<b>Custom Templates:</b> Use customizable templates and automatically include notes and attachments. ",
    ],
    btnURL: "/novatrack",
    image: "2.webp",
  },
 


];

function RecruiterTabSection() {
   const [activeTab, setActiveTab] = useState("Instant CV Parsing");
 
   const setActiveTabFunc = (btn) => {
     setActiveTab(btn);
   };
 
   return (
     <section id="solution" className="w-full bg-white flex flex-col py-10 lg:py-16 px-5 md:px-10 slg:px-[60px] lg:px-[90px] justify-center items-center">
       <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-[50px]">
         <div className="flex flex-col max-w-[662px] justify-center items-center space-y-4 text-center">
           <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[50px] text-[#2A2564] font-bold md:font-semibold ">
           Why Shift to Agentic AI?
           </h2>
           <p className="text-base text-[#2A2564] text-center font-lora">
            You're already a pro with spreadsheets. Now imagine that power multiplied by AI, automation, and real-time collaboration.
           </p>
         </div>
 
         <div className="w-full  sm:px-5 sm:py-10 flex flex-col gap-5">
           <div className="w-full hidden sm:grid grid-cols-3  overflow-hidden ">
             {solutionButtonList.map((btn, ind) => (
               <button
                 key={ind}
                 onClick={() => setActiveTabFunc(btn)}
                 className={`w-full font-lora  text-base slg:text-sm lg:text-sm xl:text-base py-3 hover:text-primary  text-center slg:px-1 px-2 transition-all duration-200 ${
                   activeTab === btn
                     ? "text-primary border-t-4 border-[#351451] font-semibold "
                     : " text-[#B0B0B0] border-t-2 border-[#C2BEFF] font-normal "
                 }`}
               >
                 {btn}
               </button>
             ))}
           </div>
           <div className="w-full hidden sm:flex flex-row">
             <div className="w-full bg-[#160E38] rounded-[14px] px-5 py-10 sm:px-10  lg:px-[60px] lg:pt-[60px] flex flex-col gap-5 lg:gap-10">
              
               {solutionCardData.map((item, val) => (
                 <div
                   key={val}
                   className={`w-full ${item.tabName === activeTab ? "flex" : "hidden"} flex-col lg:flex-row justify-between`}
                 >
                   <div className="w-full flex flex-col lg:max-w-[500px]">
                     <h3 className=" text-xl sm:text-3xl lg:text-4xl font-lora text-[#FBFBFB]">
                       {item.title}
                     </h3>
                     <img
                     
                       src={`/assets/pages/landingpage/${item.image}`}
                       alt={item.tabName}
                       className="w-full max-w-[400px]  block lg:hidden pt-6"
                     />
                     <p className="font-lora text-[#FBFBFB] text-base pt-5 pb-4">
                       {item.description}
                     </p>
 
                     <ul className="font-lora font-normal gap-2 flex flex-col list-disc pl-5 text-[#FBFBFB] text-base">
                       {item.list.map((list, ind) => (
                         <li key={ind} dangerouslySetInnerHTML={{__html:list}}/>
                       ))}
                     </ul>
                     <a
                      href="#form"
                       className="bg-transparent w-fit border-white border px-5 py-3 text-[14px] text-white  flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150 mt-10"
                     >
                       <span>Get Started - it's Free</span>{" "}
                       <svg
                         width="20"
                         height="20"
                         viewBox="0 0 20 20"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                           stroke="white"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         />
                       </svg>
                     </a>
                   </div>
                   <img
                     src={`/assets/pages/landingpage/${item.image}`}
                     alt={item.tabName}
                     className="w-full max-w-[471px] object-contain hidden lg:block"
                   />
                 </div>
               ))}
             </div>{" "}
           </div>
           <div className="w-full flex sm:hidden flex-col gap-5 ">
             {solutionCardData.map((item, ind) => (
               <div key={ind} className="w-full flex flex-col rounded overflow-hidden ">
                 <button
                   onClick={() => setActiveTabFunc(item.tabName)}
                   className={`w-full font-lora font-bold text-lg py-3 text-left pl-5 transition-all hover:text-white hover:bg-[#160E38] duration-200 ${
                     activeTab === item.tabName
                       ? "!text-white bg-[#160E38] border-b border-white"
                       : "bg-[#160E381A] text-[#636262]"
                   }`}
                 >
                   {item.tabName}
                 </button>
                 <div
                   className={`w-full bg-[#160E38]  px-5   py-[20px] ${item.tabName === activeTab ? "flex" : "hidden"} flex-col  gap-1`}
                 >
                 
 
                   <div
                     className={`w-full flex flex-col lg:flex-row justify-between`}
                   >
                     <div className="w-full flex flex-col lg:max-w-[460px]">
                       <h4 className=" text-2xl font-lora text-[#FBFBFB]">
                         {item.title}
                       </h4>
                       <img
                          src={`/assets/pages/landingpage/${item.image}`}
                         alt={item.tabName}
                         className="w-full max-w-[400px] object-contain block lg:hidden pt-4"
                       />
                       <p className="font-lora text-[#FBFBFB] text-base pt-3 pb-2">
                         {item.description}
                       </p>
 
                       <ul className="font-lora font-normal gap-2 flex flex-col list-disc pl-5 text-[#FBFBFB] text-base">
                         {item.list.map((list, ind) => (
                           <li>{list}</li>
                         ))}
                       </ul>
                       <a
                         href="#form"
                         className="bg-transparent w-fit border-white border px-5 py-3 text-[14px] text-white  flex flex-row space-x-2 rounded hover:scale-95 ease-in-out duration-150 mt-6"
                       >
                         <span>Get Started - it's Free</span>{" "}
                         <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                             stroke="white"
                             strokeWidth="2"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                           />
                         </svg>
                       </a>
                     </div>
                   
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 }

export default RecruiterTabSection