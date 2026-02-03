import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  primary: "#2A2564",
  themeGray: "#f3f3f5",
  darkVoilet: "#160E38",
  violet_1: "#02193B",
  violet_2: "#5A4E7A",
  accent: "#00F2FF",
};

/**
 * delay    → when popup appears (ms)
 * duration → how long popup stays visible (ms)
 */
const popupData = [
  {
    name: "Amit from Bengaluru",
    timeAgo: "1 min ago",
    delay: 2000,
    duration: 3000,
  },
  {
    name: "Sneha from Delhi",
    timeAgo: "3 mins ago",
    delay: 17000,
    duration: 4000,
  },
  {
    name: "Rahul from Mumbai",
    timeAgo: "5 mins ago",
    delay: 30000,
    duration: 3000,
  },
];

function PopUpSection() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timers = [];

    popupData.forEach((item, index) => {
      // show popup
      const showTimer = setTimeout(() => {
        setCurrentIndex(index);
        setVisible(true);

        // hide popup
        const hideTimer = setTimeout(() => {
          setVisible(false);
        }, item.duration);

        timers.push(hideTimer);
      }, item.delay);

      timers.push(showTimer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-10 z-[9999] flex justify-center px-6 pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && currentIndex !== null && (
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.9,
              rotateX: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transition: { duration: 0.25 },
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
            className="pointer-events-auto relative flex items-center gap-4 px-6 py-4 rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
            style={{
              background: `linear-gradient(135deg, ${COLORS.violet_1}CC 0%, ${COLORS.darkVoilet}F2 100%)`,
              backdropFilter: "blur(18px) saturate(180%)",
              WebkitBackdropFilter: "blur(18px) saturate(180%)",
            }}
          >
            {/* Glass Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent pointer-events-none" />

            {/* Top shine */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Status Dot */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <div
                className="h-2 w-2 rounded-full animate-pulse bg-white"
                style={{ boxShadow: `0 0 12px ${COLORS.accent}` }}
              />
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                className="absolute inset-0 rounded-full border border-white/20"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col z-10">
              <p className="text-sm font-medium text-white/90">
                <span
                  className="font-extrabold"
                  style={{ color: COLORS.accent }}
                >
                  {popupData[currentIndex].name}
                </span>{" "}
                just reserved their free copy!
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] uppercase tracking-widest text-white/50">
                  {popupData[currentIndex].timeAgo}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-[10px] text-white/40">
                  Live activity
                </span>
              </div>
            </div>

            {/* Light sweep */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "220%" }}
              transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent skew-x-12"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PopUpSection;
