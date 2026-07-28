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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2  z-[9999] w-[calc(100%-2rem)] max-w-3xl !-translate-x-1/2"
        >
        

          {/* Glassmorphic Capsule Body */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg  border border-darkVoilet/20 bg-white/50 p-3 pl-6 pr-4 shadow-xl backdrop-blur-sm">
          

            {/* Content Text */}
            <p className="z-10 text-center sm:text-left !text-xl sm:text-lg font-bold text-[#160E38] pr-6 sm:pr-0">
              See how enterprises completed 150,000+ hires using Agentic AI at Booth E31, TechHR 2026.
            </p>

            {/* CTA Button & Dismiss */}
            <div className="z-10 flex items-center gap-2 shrink-0">
              <a
                href="/"
                className="whitespace-nowrap rounded-full bg-[#2A2564] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#160E38] hover:scale-105 active:scale-95"
              >
                Book My Demo
              </a>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-black/5 hover:text-[#160E38] transition"
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
  );
}

export default HomePopup;