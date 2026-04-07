import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ErrorPage = () => {
  const colors = {
    primary: "#2A2564",
    themeGray: "#f3f3f5",
    darkViolet: "#160E38",
    violet_2: "#5A4E7A",
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 font-sans">
      
      {/* 1. Large Ghosted Text (Static) */}
      <h1 
        className="absolute text-[150px] md:text-[300px] font-black select-none pointer-events-none tracking-tighter opacity-[0.04]"
        style={{ color: colors.primary }}
      >
        404
      </h1>

      <div className="relative z-10 text-center max-w-xl">
        
        {/* 2. Minimal Status Badge */}
        <div 
          className="inline-block px-5 py-2 rounded-full mb-8"
          style={{ backgroundColor: colors.themeGray }}
        >
          <span 
            className="text-xs font-bold uppercase tracking-[0.2em]" 
            style={{ color: colors.violet_2 }}
          >
            Error Code: 404
          </span>
        </div>

        {/* 3. Refined Headline */}
        <h2 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          style={{ color: colors.darkViolet }}
        >
          Something’s missing.
        </h2>

        {/* 4. Balanced Body Text */}
        <p 
          className="text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-md mx-auto"
          style={{ color: colors.violet_2, opacity: 0.8 }}
        >
          The page you are looking for doesn't exist or has been moved to a new URL.
        </p>

        {/* 5. Primary Action Button (CSS Only) */}
        <div className="flex flex-col items-center gap-6">
          <a 
            href="/"
            className="group flex items-center gap-4 px-12 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            style={{ 
              backgroundColor: colors.primary, 
              color: 'white',
              boxShadow: `0 10px 25px -5px ${colors.primary}44` 
            }}
          >
            <span className="font-bold text-sm uppercase tracking-wider">Return to HOME</span>
            <HiOutlineArrowNarrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>

          {/* Secondary Action */}
          <button 
            onClick={() => window.history.back()}
            className="text-sm font-bold uppercase tracking-widest transition-opacity duration-300 hover:opacity-100 opacity-40"
            style={{ color: colors.darkViolet }}
          >
            Go to Previous Page
          </button>
        </div>
      </div>

      {/* 6. Subtle Decorative Element */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${colors.primary}33, transparent)` 
        }}
      />
    </div>
  );
};

export default ErrorPage;