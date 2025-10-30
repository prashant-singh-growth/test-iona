import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Preload ScheduleDemo component
const preloadScheduleDemo = () => {
  return import("../pages/ScheduleDemo");
};

const Navbar = () => {
  const location = useLocation();
  const [showSolutions, setShowSolutions] = useState(false);
  const solutionsRef = useRef(null);
  const [showKnowledgeHub, setShowKnowledgeHub] = useState(false);
  const knowledgeRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add timer refs for delayed closing
  const solutionsTimerRef = useRef(null);
  const knowledgeTimerRef = useRef(null);

  // Handle hover events for Solutions dropdown
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimerRef.current) {
      clearTimeout(solutionsTimerRef.current);
      solutionsTimerRef.current = null;
    }
    setShowSolutions(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimerRef.current = setTimeout(() => {
      setShowSolutions(false);
    }, 300); // Small delay to prevent accidental closing
  };

  // Handle hover events for Knowledge Hub dropdown
  const handleKnowledgeMouseEnter = () => {
    if (knowledgeTimerRef.current) {
      clearTimeout(knowledgeTimerRef.current);
      knowledgeTimerRef.current = null;
    }
    setShowKnowledgeHub(true);
  };

  const handleKnowledgeMouseLeave = () => {
    knowledgeTimerRef.current = setTimeout(() => {
      setShowKnowledgeHub(false);
    }, 300); // Small delay to prevent accidental closing
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setShowSolutions(false);
      }
      if (
        knowledgeRef.current &&
        !knowledgeRef.current.contains(event.target)
      ) {
        setShowKnowledgeHub(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clear any lingering timers
      if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
      if (knowledgeTimerRef.current) clearTimeout(knowledgeTimerRef.current);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Variants for animations
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        mass: 1
      }
    }
  };

  const logoVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05, 
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { 
        delay: i * 0.1,
        type: "spring", 
        stiffness: 300, 
        damping: 20
      }
    }),
    hover: { 
      y: -4, 
      color: "#4F46E5",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20
      }
    }
  };
  
  const buttonVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 8px 30px rgba(79, 70, 229, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
        scrolled ? 'bg-glass/90 shadow-glass py-2' : 'bg-glass/70 py-3'
      } transition-all duration-300 border-b border-gray-100/30`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div 
            className="h-16"
            variants={logoVariants}
            initial="normal"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/assets/iona-ai-logo.png`}
              alt="ionai Logo" 
              className="h-full" 
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <motion.ul 
            className="flex gap-6 items-center"
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <NavItem label="HOME" path="/" custom={1} />
            <NavItem label="ABOUT US" path="/about" custom={2} />
            
            <motion.li 
              className="relative" 
              ref={solutionsRef}
              custom={3}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button
                className="font-medium text-sm text-primaryText hover:text-accent focus:outline-none transition-colors px-1 py-2 uppercase flex items-center"
                onClick={() => setShowSolutions((prev) => !prev)}
              >
                SOLUTIONS
                <motion.span 
                  className="ml-1"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: showSolutions ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {showSolutions && (
                  <motion.div 
                    className="absolute bg-glass/90 backdrop-blur-lg mt-2 rounded-xl shadow-glass border border-gray-100/30 w-72 z-50 text-sm py-2"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <DropdownLink 
                      title="NovaCount" 
                      description="Headcount Planning and Monitoring"
                      path="/find"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaAssist" 
                      description="Recruiter Co-Pilot"
                      path="/novaassist"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaTrack" 
                      description="NextGen Application Tracking System"
                      path="/speedboard"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaStart" 
                      description="Pre-Boarding of New Hires"
                      path="/novastart"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaDoc" 
                      description="Documentation of New Hires"
                      path="/novadoc"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaEngage" 
                      description="Engagement of New Hires"
                      path="/novaengage"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaTrain" 
                      description="Mandatory Trainings and Induction of New Hires"
                      path="/trainplus"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaVerify" 
                      description="Background Verifications of New Hires"
                      path="/novaverify"
                      onClick={() => setShowSolutions(false)}
                    />
                    <DropdownLink 
                      title="NovaConnect" 
                      description="Premium WhatsApp based support"
                      path="/novaconnect"
                      onClick={() => setShowSolutions(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li 
              className="relative" 
              ref={knowledgeRef}
              custom={4}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onMouseEnter={handleKnowledgeMouseEnter}
              onMouseLeave={handleKnowledgeMouseLeave}
            >
              <button
                className="font-medium text-sm text-primaryText hover:text-accent focus:outline-none transition-colors px-1 py-2 uppercase flex items-center"
                onClick={() => setShowKnowledgeHub((prev) => !prev)}
              >
                KNOWLEDGE HUB
                <motion.span 
                  className="ml-1"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: showKnowledgeHub ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▾
                </motion.span>
              </button>
              
              <AnimatePresence>
                {showKnowledgeHub && (
                  <motion.div 
                    className="absolute bg-glass/90 backdrop-blur-lg mt-2 rounded-xl shadow-glass border border-gray-100/30 w-72 z-50 text-sm py-2"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onMouseEnter={handleKnowledgeMouseEnter}
                    onMouseLeave={handleKnowledgeMouseLeave}
                  >
                    <DropdownLink 
                      title="Blogs" 
                      description="Latest insights and articles"
                      path="/blogs"
                      onClick={() => setShowKnowledgeHub(false)}
                    />
                    <DropdownLink 
                      title="Case Studies" 
                      description="Success stories and implementations"
                      path="/casestudies"
                      onClick={() => setShowKnowledgeHub(false)}
                    />
                    <DropdownLink 
                      title="Videos" 
                      description="Tutorials and presentations"
                      path="/videos"
                      onClick={() => setShowKnowledgeHub(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            
            <NavItem label="CONTACT US" path="/contact" highlight={true} custom={5} />
          </motion.ul>
        </div>

        <motion.div 
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <motion.div
            variants={buttonVariants}
            initial="normal"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/scheduledemo"
              className="bg-purple-gradient text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 group"
            >
              <span>SCHEDULE A DEMO</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button 
          className="lg:hidden text-primaryText focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-8 h-6 flex flex-col justify-between relative navbar-hamburger-gradient">
            <motion.span 
              className="w-full h-0.5 bg-white rounded-full block shadow-sm"
              animate={{ 
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-white rounded-full block shadow-sm"
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-white rounded-full block shadow-sm"
              animate={{ 
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-primaryText bg-opacity-20 backdrop-blur-md z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute right-0 top-0 h-screen w-3/4 max-w-sm bg-glass/90 backdrop-blur-lg shadow-glass p-4 pt-20 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <ul className="flex flex-col gap-4">
                  <MobileNavItem label="HOME" path="/" />
                  <MobileNavItem label="ABOUT US" path="/about" />
                  
                  <li>
                    <button 
                      className="font-medium text-lg w-full text-primaryText hover:text-accent focus:outline-none py-2 flex justify-between items-center"
                      onClick={() => setShowSolutions((prev) => !prev)}
                    >
                      SOLUTIONS
                      <motion.span 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: showSolutions ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▾
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {showSolutions && (
                        <motion.ul
                          className="pl-4 mt-2 space-y-2"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MobileNavItem label="NovaCount" path="/find" isSubmenu />
                          <MobileNavItem label="NovaAssist" path="/novaassist" isSubmenu />
                          <MobileNavItem label="NovaTrack" path="/speedboard" isSubmenu />
                          <MobileNavItem label="NovaStart" path="/novastart" isSubmenu />
                          <MobileNavItem label="NovaDoc" path="/novadoc" isSubmenu />
                          <MobileNavItem label="NovaEngage" path="/novaengage" isSubmenu />
                          <MobileNavItem label="NovaTrain" path="/trainplus" isSubmenu />
                          <MobileNavItem label="NovaVerify" path="/novaverify" isSubmenu />
                          <MobileNavItem label="NovaConnect" path="/novaconnect" isSubmenu />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  
                  <li>
                    <button 
                      className="font-medium text-lg w-full text-primaryText hover:text-accent focus:outline-none py-2 flex justify-between items-center"
                      onClick={() => setShowKnowledgeHub((prev) => !prev)}
                    >
                      KNOWLEDGE HUB
                      <motion.span 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: showKnowledgeHub ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▾
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {showKnowledgeHub && (
                        <motion.ul
                          className="pl-4 mt-2 space-y-2"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MobileNavItem label="BLOGS" path="/blogs" isSubmenu />
                          <MobileNavItem label="CASE STUDIES" path="/casestudies" isSubmenu />
                          <MobileNavItem label="VIDEOS" path="/videos" isSubmenu />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                  
                  <MobileNavItem label="CONTACT US" path="/contact" />
                  
                  <li className="mt-4">
                    <motion.div
                      variants={buttonVariants}
                      initial="normal"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Link
                        to="/scheduledemo"
                        className="bg-purple-gradient text-white px-4 py-3 rounded-xl text-sm font-medium hover:shadow-hover transition-all w-full flex items-center justify-center gap-2"
                        onMouseEnter={preloadScheduleDemo}
                      >
                        <span>SCHEDULE A DEMO</span>
                        <span>→</span>
                      </Link>
                    </motion.div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ label, path, highlight, custom }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        delay: custom * 0.1,
        type: "spring", 
        stiffness: 300, 
        damping: 20
      }
    },
    hover: { 
      y: -4, 
      color: "#4F46E5",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={custom}
    >
      <Link
        to={path}
        className={`font-medium text-sm px-1 py-2 relative ${
          isActive ? 'text-accent' : 'text-primaryText hover:text-accent'
        } uppercase transition-colors`}
      >
        {label}
        {isActive && (
          <motion.span
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
            layoutId="navbar-active-indicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </motion.li>
  );
};

const MobileNavItem = ({ label, path, isSubmenu = false }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={path}
        className={`block py-2 transition-colors ${
          isSubmenu ? 'text-base' : 'text-lg'
        } ${
          isActive ? 'text-accent font-bold' : 'text-primaryText hover:text-accent'
        }`}
      >
        {label}
      </Link>
    </motion.li>
  );
};

const DropdownLink = ({ title, description, path, onClick }) => {
  return (
    <Link
      to={path}
      className="block px-4 py-3 hover:bg-white/30 transition-colors"
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-medium text-accent mb-1">{title}</p>
        <p className="text-secondaryText text-xs">{description}</p>
      </motion.div>
    </Link>
  );
};

export default Navbar;
