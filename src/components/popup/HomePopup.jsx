import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
     <AnimatePresence>
      {open && (
        <motion.div
          // 1. Initial/Exit state uses -100% Y to prevent layout flickering
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: "auto", 
            opacity: 1,
            transition: {
              height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Custom bezier for smoothness
              opacity: { duration: 0.25, delay: 0.1 }
            }
          }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: {
              height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.2 }
            }
          }}
          // 2. Added overflow-hidden to clip content during height change
          className="w-full  bg-gradient-to-r from-[#160E38] via-[#2A2564] to-[#160E38] shadow-lg overflow-hidden fixed bottom-0 left-0 right-0 z-[99]"
        >
          {/* 3. Wrap content in a fixed-height container to avoid text re-flow */}
          <div className="py-4 px-5 flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4">
            <p className="text-sm capitalize md:text-base font-medium text-blue-50/90 tracking-wide ">
        See how enterprises completed 150,000+ hires using Agentic AI at Booth E31, TechHR 2026.
            </p>
    <div className=" flex flex-row gap-2 justify-center items-center">
       <a
              href="/people-matters-techhr-india"
              className="bg-white/10 flex-none flex flex-row items-center gap-2 hover:bg-white/20 text-white text-xs md:text-sm py-1.5 px-2 sm:px-4 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
                   Book My Demo
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
        <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400  hover:text-white transition"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
    </div>
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    // <AnimatePresence>
    //   {open && (
    //     <motion.div
    //       initial={{ opacity: 0, y: 50, scale: 0.95 }}
    //       animate={{ opacity: 1, y: 0, scale: 1 }}
    //       exit={{ opacity: 0, y: 30, scale: 0.95 }}
    //       transition={{ type: "spring", damping: 25, stiffness: 300 }}
    //       className="fixed bottom-6 left-1/2  z-[9999] w-[calc(100%-2rem)] max-w-[1150px] !-translate-x-1/2"
    //     >
        

    //       {/* Glassmorphic Capsule Body */}
    //       <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4  rounded-lg  border !border-darkVoilet/20 !bg-white/50 p-3 pl-6 pr-4 shadow-xl !backdrop-blur-[4px]">
          

    //         {/* Content Text */}
    //         <p className="z-10 text-center sm:text-left !text-xl sm:text-lg font-bold text-[#160E38] pr-6 sm:pr-0 popup-font-inter">
    //           See how enterprises completed 150,000+ hires using Agentic AI at Booth E31, TechHR 2026.
    //         </p>

    //         {/* CTA Button & Dismiss */}
    //         <div className="z-10 flex items-center gap-2 shrink-0">
    //           <a
    //             href="/people-matters-techhr-india"
    //             className="whitespace-nowrap rounded-full bg-[#2A2564] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#160E38] hover:scale-105 active:scale-95"
    //           >
    //             Book My Demo
    //           </a>

    //           <button
    //             onClick={() => setOpen(false)}
    //             aria-label="Close"
    //             className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-black/5 hover:text-[#160E38] transition"
    //           >
    //             <svg
    //               className="h-3.5 w-3.5"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               viewBox="0 0 24 24"
    //             >
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </motion.div>
    //   )}
    // </AnimatePresence>
  );
}

export default HomePopup;