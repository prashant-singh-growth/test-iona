import React, { useEffect, useState } from "react";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
 const location = useLocation();
const { scrollY } = useScroll();
const [isHidden, setIsHidden] = useState(false);
 

  const currentPath = location.pathname;

  // Navigation links
  const navLinks = [
    {
      type: "dropdown",
      name: "Product",
      key: "product",
      links: [
        { label: "NovaCount", url: "/solutions/novacount" },
        { label: "NovaAssist", url: "/solutions/novaassist" },
        { label: "NovaTrack", url: "/solutions/novatrack" },
        { label: "NovaStart", url: "/solutions/novastart" },
        { label: "NovaDoc", url: "/solutions/novadoc" },
        { label: "NovaEngage", url: "/solutions/novaengage" },
        { label: "NovaTrain", url: "/solutions/novatrain" },
        { label: "NovaVerify", url: "/solutions/novaverify" },
        { label: "NovaConnect", url: "/solutions/novaconnect" },
      ],
    },
    { type: "link", name: "Case Studies", url: "/case-studies" },
    {
      type: "dropdown",
      name: "Resources",
      key: "resources",
      links: [
        { label: "Blogs", url: "/blog" },
        { label: "Videos", url: "/videos" },
      ],
    },
    { type: "link", name: "About Us", url: "/about" },
    { type: "link", name: "Contact Us", url: "/contact" },
  ];


useEffect(() => {
  // Use the .onChange method available in older versions
  const unsubscribe = scrollY.onChange((latest) => {
    if (latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Clean up the listener when the component unmounts
  return () => unsubscribe();
}, [scrollY]);
  return (
    <header className="w-full font-lora bg-white/80 backdrop-blur-md fixed  top-0 z-50  border-b border-gray-100 shadow-sm">
   <AnimatePresence>
  {location.pathname === "/" && !isHidden && (
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
      className="w-full  bg-gradient-to-r from-[#160E38] via-[#2A2564] to-[#160E38] shadow-lg overflow-hidden relative z-[99]"
    >
      {/* 3. Wrap content in a fixed-height container to avoid text re-flow */}
      <div className="py-2.5 px-6 flex flex-row justify-center items-center gap-4">
        <p className="text-sm font-medium text-blue-50/90 tracking-wide ">
       75 free e-books for Indian HRs to solve the 74% AI failure rate. 
        </p>

        <a
          href="/ai-first-chro"
          className="bg-white/10 flex-none flex flex-row items-center gap-2 hover:bg-white/20 text-white text-xs md:text-sm py-1.5 px-4 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          Claim Yours
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
 



      {/* <div className="max-w-4xl mx-auto mt-2 bg-indigo-50 rounded-full py-2 px-6 flex flex-row justify-between items-center border border-indigo-100">
  <div className="flex items-center gap-2">
    <span className="text-lg">🎉</span>
    <p className="text-sm font-medium text-indigo-900">
      We just raised our seed round! Come join the team.
    </p>
  </div>
  <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">
    We're hiring
  </a>
</div> */}
      <div className="w-full grid place-items-center px-5 md:px-10 slg:px-[60px] lg:px-[90px]">
        <div className="w-full max-w-[1440px] flex justify-between gap-5 items-center py-3">

          {/* Logo */}
          <a href="/" className="w-fit">
            <img
              src={`${process.env.PUBLIC_URL}/assets/iona-ai-logo.png`}
              alt="iona.ai Logo"
              className="h-14"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row items-center gap-8">
            {navLinks.map((item) =>
              item.type === "dropdown" ? (
                <div
                  key={item.key}
                  className="relative flex items-center gap-1 font-lora font-medium text-base text-black cursor-pointer border-b-2 border-transparent hover:border-primary"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}

                  <motion.span
                    animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoChevronDown className="text-lg" />
                  </motion.span>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25 }}
                        className={`absolute top-10 left-0 bg-white shadow-xl border border-gray-100 rounded-xl p-5 ${item.key === "product"
                            ? "grid grid-cols-2 w-[320px] gap-4"
                            : "grid grid-cols-1 w-[220px] gap-3"
                          } z-30`}
                      >
                        {item.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            className={`text-base font-lora font-medium transition-all duration-200 border-l-2 pl-2 hover:text-primary hover:translate-x-1 ${currentPath === link.url
                                ? "text-primary translate-x-1 border-primary"
                                : "text-black border-transparent"
                              }`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.url}
                  href={item.url}
                  className={`text-base font-lora border-b-2 font-medium hover:text-primary hover:border-primary transition-all duration-150 ${currentPath === item.url
                      ? "text-primary border-primary"
                      : "text-black border-transparent"
                    }`}
                >
                  {item.name}
                </a>
              )
            )}
            <a
              href="/agentic-ai-recruiters-sheet"
              className="hidden lg:flex  flex-none  px-5 py-2 font-bold leading-5  font-lora text-[14px] text-primary border border-primary rounded-lg shadow hover:shadow-md hover:scale-95 transition-transform duration-200"
            >
              <span>Agentic AI Recruiter</span>
              <span className="text-[10px] leading-[10px] h-fit  font-lora  font-bold ml-1 rounded-sm -translate-y-[2px]">Beta</span>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden lg:flex flex-none bg-primary px-5 py-3 font-bold leading-5 space-x-2 font-lora text-[14px] text-white rounded-lg shadow hover:shadow-md hover:scale-95 transition-transform duration-200"
          >
            <span>Schedule a Demo</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              {menuOpen ? (
                <IoClose className="text-2xl text-gray-700" />
              ) : (
                <IoMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full bg-white border-t border-gray-100 shadow-md rounded-b-2xl px-5 py-6 space-y-6 mb-10"
            >
              {navLinks.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.key}>
                    <button
                      className="flex justify-between font-medium w-full text-base font-lora text-black border-b border-gray-200 pb-2"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.key ? null : item.key
                        )
                      }
                    >
                      <span>{item.name}</span>
                      <motion.span
                        animate={{
                          rotate: activeDropdown === item.key ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoChevronDown />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2"
                        >
                          {item.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              onClick={() => setMenuOpen(false)}
                              className={`text-[15px] font-medium font-lora transition-all ${currentPath === link.url
                                  ? "text-primary"
                                  : "text-black hover:text-primary"
                                }`}
                            >
                              {link.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.url}
                    href={item.url}
                    className={`block text-base font-lora font-medium transition-all ${currentPath === item.url
                        ? "text-primary"
                        : "text-black hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </a>
                )
              )}
              <a
                href="/agentic-ai-recruiters-sheet"
                className="flex  flex-none  px-5 py-2 font-bold leading-5  font-lora text-[14px] text-primary border border-primary rounded-lg shadow hover:shadow-md hover:scale-95 transition-transform duration-200"
              >
                <span>Agentic AI Recruiter</span>
                <span className="text-[10px] leading-[10px] h-fit  font-lora  font-bold ml-1 rounded-sm -translate-y-[2px]">Beta</span>
              </a>
              {/* CTA in Mobile */}
              <a
                href="/contact"
                className="bg-primary flex font-lora flex-none space-x-2 flex-row px-4 font-bold leading-5 w-fit gap-2 text-white text-center py-3 rounded-lg text-[14px] shadow hover:shadow-md hover:scale-[0.98] transition-all duration-200"
              >
                <span>Schedule a Demo</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
