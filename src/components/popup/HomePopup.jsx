import React, { useEffect, useState } from "react";

function HomePopup() {
  const [visible, setVisible] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);

      requestAnimationFrame(() => {
        setVisible(true);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);

    setTimeout(() => {
      setRender(false);
    }, 300);
  };

  if (!render) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-[956px] -translate-x-1/2 transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
    >
      <div className="relative backdrop-blur-[4px] flex w-full flex-col items-center justify-between gap-4 rounded-lg border border-darkVoilet/20 bg-white/50 p-3 pl-6 pr-4 shadow-xl  sm:flex-row">
        <p className="popup-font-inter z-10 pr-6 text-center text-sm font-semibold text-[#160E38] sm:pr-0 sm:text-left md:text-base">
          See how enterprises completed 150,000+ hires using Agentic AI at Booth
          E31, TechHR 2026.
        </p>

        <div className="z-10 flex shrink-0 items-center gap-2">
          <a
            href="/people-matters-techhr-india"
            className="whitespace-nowrap rounded-full bg-[#2A2564] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#160E38] active:scale-95"
          >
           Book your meeting slot
          </a>

          <button
            onClick={closePopup}
            aria-label="Close"
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-black/5 hover:text-[#160E38]"
          >
            <svg
              className="h-3.5 w-3.5"
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
        </div>
      </div>
    </div>
  );
}

export default HomePopup;