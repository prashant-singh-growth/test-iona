import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)} // Close on backdrop click
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent close on modal body click
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-2xl ring-1 ring-black/5"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close modal"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#160E38] focus:outline-none focus:ring-2 focus:ring-[#2A2564]/20"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mx-auto flex flex-col items-center text-center">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2A2564]/10 px-3.5 py-1.5 text-xs font-semibold text-[#2A2564]">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>TechHR 2026 • Booth E31</span>
              </div>

              {/* Headline */}
              <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-[#160E38] sm:text-3xl">
                See how enterprises completed{" "}
                <span className="text-[#2A2564]">150,000+</span> hires using
                Agentic AI.
              </h2>

              {/* Actions */}
              <div className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/people-matters-techhr-india"
                  
                  className="w-full sm:w-auto rounded-xl bg-[#2A2564] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2A2564]/25 transition-all hover:bg-[#160E38] hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2A2564] focus:ring-offset-2"
                >
                  Book My Demo
                </a>
               
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HomePopup;