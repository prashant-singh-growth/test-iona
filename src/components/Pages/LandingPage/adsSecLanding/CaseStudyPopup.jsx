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
  { 
    name: "Vikash", 
    city: "Axis Bank",
    casestudy: "Aditya Birla",
    // bgColor: "bg-gradient-to-tr from-[#AD1D23] via-[#F58220] to-[#FFD200]",
    img: "/assets/pages/casestudy/aditya.webp" 
  },
  { 
    name: "Hemant", 
    city: "Barclays",
    casestudy: "HDFC EGRO",
    // bgColor: "bg-[#D81F27]",
    img: "/assets/pages/casestudy/hdfc.webp" 
  },
  { 
    name: "Ranabir", 
    city: "TATA Power",
    casestudy: "Metropolis HealthCare",
    // bgColor: "bg-[#139849]",
    img: "/assets/pages/casestudy/client-3.webp" 
  }
];

/* DELAY LOGIC */
const INITIAL_DELAYS = [5,10,15]; // 5s, 30s, 90s
const POPUP_DURATION = 3500;

export const  CaseStudyPopup = () => {
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
            className={`pointer-events-auto bg-gradient-to-r from-[#160E38] via-[#2A2564] to-[#160E38] relative flex items-center gap-4 px-6 py-4 rounded-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.55)]`}
            style={{
             
              backdropFilter: "blur(18px)",
            }}
          >
          


            {/* Text */}
            <img src={user.img} alt="" className="w-10 rounded-[2px]"/>
            <div>
              <p className="text-sm text-white">
                <span
                  className="font-bold "
                  
                >
                  {user.name} </span> from <span  className="font-bold ">{user.city}</span>
                {" "}
                just downloaded <span  className="font-bold ">{user.casestudy} casestudy</span>!
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

