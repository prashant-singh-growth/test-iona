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

/* USERS LIST */
const users = [
  { name: "Vikash", city: "Axis Bank" },
  { name: "Hemant", city: "Barclays" },
  { name: "Ranabir", city: "TATA Power" },
  { name: "Meera", city: "Bajaj Life" },
  { name: "Prabal", city: "Apple" },
 
 
];

/* DELAY LOGIC */
const INITIAL_DELAYS = [5,60,120,240,300]; // 5s, 30s, 90s
const POPUP_DURATION = 3500;

function PopUpSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const showPopup = () => {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);

        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % users.length);
        }, getNextDelay(index));
      }, POPUP_DURATION);
    };

    timeout = setTimeout(showPopup, getNextDelay(index));

    return () => clearTimeout(timeout);
  }, [index]);

  const getNextDelay = (i) => {
    if (i < INITIAL_DELAYS.length) return INITIAL_DELAYS[i] * 1000;
    return Math.floor(Math.random() * 60000) + 60000; // 60–120s
  };

  const user = users[index];

  return (
    <div className="fixed inset-x-0 bottom-10 z-[9999] flex justify-center px-6 pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="pointer-events-auto relative flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
            style={{
              background: `linear-gradient(135deg, ${COLORS.violet_1}CC 0%, ${COLORS.darkVoilet}F2 100%)`,
              backdropFilter: "blur(18px)",
            }}
          >
            {/* Glow dot */}
            {/* <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span
                className="h-2 w-2 rounded-full bg-white animate-pulse"
                style={{ boxShadow: `0 0 10px ${COLORS.accent}` }}
              />
            </div> */}


            {/* Text */}
            <img src="/assets/pages/landingpage/popup-free-copy.png" alt="" className="w-10"/>
            <div>
              <p className="text-sm text-white">
                <span
                  className="font-bold"
                  style={{ color: COLORS.accent }}
                >
                  {user.name} from {user.city}
                </span>{" "}
                just reserved their free copy!
              </p>

              <p className="text-[10px] mt-1 text-white/50 uppercase tracking-wider">
                Live activity • moments ago
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PopUpSection;
