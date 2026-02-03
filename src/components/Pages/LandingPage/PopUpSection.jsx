import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  primary: "#2A2564",
  themeGray: "#f3f3f5",
  darkVoilet: "#160E38",
  violet_1: "#02193B",
  violet_2: "#5A4E7A",
  accent: "#00F2FF", // Electric Cyan for the "Gloss" pop
};

const popupData = [
  { name: "Amit from Bengaluru", timeAgo: "1 min ago" },
  { name: "Sneha from Delhi", timeAgo: "3 mins ago" },
  { name: "Rahul from Mumbai", timeAgo: "5 mins ago" },
];

function PopUpSection() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const timers = popupData.map((item, index) =>
  //     setTimeout(() => {
  //       setCurrentIndex(index);
  //       setVisible(true);
  //       setTimeout(() => setVisible(false), 8000); // Show for 8 seconds
  //     }, (index + 1) * 12000) 
  //   );
  //   return () => timers.forEach(clearTimeout);
  // }, []);
  useEffect(() => {
  let index = 0;

  const showPopup = () => {
    setCurrentIndex(index);
    setVisible(true);

    // hide after 8s
    setTimeout(() => {
      setVisible(false);
    }, 8000);

    // move to next
    index = (index + 1) % popupData.length;
  };

  // initial delay
  const interval = setInterval(showPopup, 12000);

  // start first popup
  showPopup();

  return () => clearInterval(interval);
}, []);


  return (
    <div className="fixed inset-x-0 bottom-10 z-[9999] flex justify-center px-6 pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && currentIndex !== null && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto relative flex items-center gap-4 px-6 py-4 rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{
              background: `linear-gradient(135deg, ${COLORS.violet_1}CC 0%, ${COLORS.darkVoilet}EE 100%)`,
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)", // Safari support
            }}
          >
            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            {/* Inner Shine (Top Border) */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Pulsing Status Icon */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <div 
                className="h-2 w-2 rounded-full animate-pulse bg-white" 
                style={{ boxShadow: `0 0 10px ${COLORS.accent}` }}
              />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border border-white/20"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col z-10">
              <p className="text-sm font-medium tracking-tight text-white/90">
                <span className="font-extrabold" style={{ color: COLORS.accent }}>
                  {popupData[currentIndex].name}
                </span>
                {" "}just reserved their free copy!
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60" style={{ color: COLORS.themeGray }}>
                  {popupData[currentIndex].timeAgo}
                </span>
                <div className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-[10px] font-medium text-white/40">Live updates</span>
              </div>
            </div>

            {/* Subtle light sweep animation */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 3, repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
            />
          </motion.div>
         )} 
      </AnimatePresence>
    </div>
  );
}

export default PopUpSection;