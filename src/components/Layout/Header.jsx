import React, { useState } from "react";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import {  useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect current route for active class
  const location = useLocation();
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
        { label: "NovaTrack", url: "/solutions/speedboard" },
        { label: "NovaStart", url: "/solutions/novastart" },
        { label: "NovaDoc", url: "/solutions/novadoc" },
        { label: "NovaEngage", url: "/solutions/novaengage" },
        { label: "NovaTrain", url: "/solutions/trainplus" },
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
        { label: "Blogs", url: "/blogs" },
        { label: "Videos", url: "/videos" },
      ],
    },
    { type: "link", name: "About Us", url: "/about" },
    { type: "link", name: "Contact Us", url: "/contact" },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 grid place-items-center px-5 md:px-10 slg:px-[60px] lg:px-[90px] border-b border-gray-100 shadow-sm">
      <div className="w-full max-w-[1440px] flex justify-between items-center py-3">

        {/* Logo */}
        <a href="/" className="w-fit">
          <img
            src={`${process.env.PUBLIC_URL}/assets/iona-ai-logo.png`}
            alt="Iona AI Logo"
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
                      className={`absolute top-10 left-0 bg-white shadow-xl border border-gray-100 rounded-xl p-5 ${
                        item.key === "product"
                          ? "grid grid-cols-2 w-[320px] gap-4"
                          : "grid grid-cols-1 w-[220px] gap-3"
                      } z-30`}
                    >
                      {item.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          className={`text-base font-lora font-medium transition-all duration-200 border-l-2 pl-2 hover:text-primary hover:translate-x-1 ${
                            currentPath === link.url
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
                className={`text-base font-lora border-b-2 font-medium hover:text-primary hover:border-primary transition-all duration-150 ${
                  currentPath === item.url
                    ? "text-primary border-primary"
                    : "text-black border-transparent"
                }`}
              >
                {item.name}
              </a>
            )
          )}
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
                            className={`text-[15px] font-medium font-lora transition-all ${
                              currentPath === link.url
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
                  className={`block text-base font-lora font-medium transition-all ${
                    currentPath === item.url
                      ? "text-primary"
                      : "text-black hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              )
            )}

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
    </header>
  );
}

export default Header;
