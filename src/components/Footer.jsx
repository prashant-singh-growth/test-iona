import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        type: "spring", 
        stiffness: 300, 
        damping: 20
      }
    }),
    hover: { 
      scale: 1.15, 
      boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Social media icons with hover effects
  const socialIcons = [
    { platform: "facebook", icon: "M20,3H4C3.4,3,3,3.4,3,4v16c0,0.5,0.4,1,1,1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3,1.4-3.6,3.5-3.6c1,0,1.8,0.1,2.1,0.1v2.4h-1.4c-1.1,0-1.3,0.5-1.3,1.3v1.7h2.7L17.8,14h-2.3v7H20c0.5,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z" },
    { platform: "linkedin", icon: "M5,3c-1.1,0-2,0.9-2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5z M7.5,9h2.5v11H7.5V9z M8.8,7.7c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6C10.3,7,9.6,7.7,8.8,7.7z M14,9h2.4v1.2c0.4-0.7,1.5-1.4,3.1-1.4c3.3,0,3.9,2.1,3.9,4.9V20h-2.5v-5.7c0-1.9-0.3-3-1.9-3c-1.9,0-2.1,1.4-2.1,2.9V20H14V9z" },
    { platform: "instagram", icon: "M12,3c-2.5,0-2.8,0-3.8,0.1C7.2,3.1,6.5,3.3,5.9,3.6C5.3,3.9,4.7,4.3,4.2,4.8s-0.9,1.1-1.2,1.7c-0.3,0.6-0.5,1.3-0.5,2.3C2.4,9.8,2.4,10.1,2.4,12.6c0,2.5,0,2.8,0.1,3.8c0,1,0.2,1.7,0.5,2.3c0.3,0.6,0.7,1.2,1.2,1.7s1.1,0.9,1.7,1.2c0.6,0.3,1.3,0.5,2.3,0.5c1,0,1.3,0.1,3.8,0.1s2.8,0,3.8-0.1c1,0,1.7-0.2,2.3-0.5c0.6-0.3,1.2-0.7,1.7-1.2s0.9-1.1,1.2-1.7c0.3-0.6,0.5-1.3,0.5-2.3c0-1,0.1-1.3,0.1-3.8s0-2.8-0.1-3.8c0-1-0.2-1.7-0.5-2.3c-0.3-0.6-0.7-1.2-1.2-1.7s-1.1-0.9-1.7-1.2c-0.6-0.3-1.3-0.5-2.3-0.5C14.8,3,14.5,3,12,3z M12,4.6c2.4,0,2.7,0,3.7,0.1c0.9,0,1.4,0.2,1.7,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.1,0.3,0.3,0.8,0.3,1.7c0,0.9,0.1,1.2,0.1,3.7s0,2.7-0.1,3.7c0,0.9-0.2,1.4-0.3,1.7c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.1-0.8,0.3-1.7,0.3c-0.9,0-1.2,0.1-3.7,0.1s-2.7,0-3.7-0.1c-0.9,0-1.4-0.2-1.7-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.1-0.3-0.3-0.8-0.3-1.7c0-0.9-0.1-1.2-0.1-3.7s0-2.7,0.1-3.7c0-0.9,0.2-1.4,0.3-1.7c0.2-0.4,0.4-0.7,0.7-1s0.6-0.5,1-0.7c0.3-0.1,0.8-0.3,1.7-0.3C9.3,4.6,9.6,4.6,12,4.6z M12,7.3c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7S14.6,7.3,12,7.3z M12,14.9c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S13.6,14.9,12,14.9z M17.9,7.1c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1S17.9,6.5,17.9,7.1z" }
  ];

  return (
    <footer  className="bg-gradient-to-b from-background to-lightGray pt-16 pb-6 border-t border-gray-100/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brandBlue/5 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brandRed/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Logo and company info */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <img
                src={`${process.env.PUBLIC_URL}/assets/iona-ai-logo.png`}
                alt="ionai Logo"
                className="h-12"
              />
            </Link>
            <p className="text-secondaryText mb-6 max-w-sm">
            The future of high-volume hiring is autonomous. It's iona.ai.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.platform === "linkedin" ? "https://www.linkedin.com/company/iona-ai/" : 
                        social.platform === "facebook" ? "https://www.facebook.com/ionaai/" : 
                        `https://www.${social.platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-glass/80 backdrop-blur-sm flex items-center justify-center text-accent border border-gray-100/20 shadow-glass hover:text-white hover:bg-accent/90 transition-colors duration-300"
                  variants={socialVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
            {/* Logos row under social icons */}
            <div className="flex flex-row justify-between items-center w-full max-w-xl mx-auto gap-6 mt-10 mb-4">
              <img src={`${process.env.PUBLIC_URL}/assets/ISO Logo.png`} alt="ISO Logo" className="h-24 w-auto object-contain flex-1" />
              <img src={`${process.env.PUBLIC_URL}/assets/GDPR Logo.png`} alt="GDPR Logo" className="h-24 w-auto object-contain flex-1" />
              <img src={`${process.env.PUBLIC_URL}/assets/IS0 901 Logo.png`} alt="ISO 901 Logo" className="h-28 w-auto object-contain flex-1" />
              <img src={`${process.env.PUBLIC_URL}/assets/HMGovtLogo.png`} alt="HM Govt Logo" className="h-24 w-auto object-contain flex-1" />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <FooterColumn
            title="Company"
            links={[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ]}
            variants={itemVariants}
          />

          <FooterColumn
            title="Solutions"
            links={[
              { name: "NovaCount", path: "/solutions/novacount"},
              { name: "NovaAssist", path: "/solutions/novaassist" },
              { name: "NovaTrack", path: "/solutions/speedboard" },
              { name: "NovaStart", path: "/solutions/novastart" },
              { name: "NovaDoc", path: "/solutions/novadoc" },
              { name: "NovaEngage", path: "/solutions/novaengage" },
              { name: "NovaTrain", path: "/solutions/trainplus" },
              { name: "NovaVerify", path: "/solutions/novaverify" },
              { name: "NovaConnect", path: "/solutions/novaconnect" },
            ]}
            variants={itemVariants}
          />

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-blue-gradient">Connect with us</h3>
            <ul className="space-y-4">
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                text={
                  <>
                    NW1, London, UK<br />
                  </>
                }
              />
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter subscription */}
        <motion.div 
          className="mb-12 bg-glass/30 backdrop-blur-sm p-6 rounded-xl border border-gray-100/20 shadow-glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:max-w-md">
              <h3 className="font-bold text-xl mb-2">Join Our Newsletter</h3>
              <p className="text-secondaryText text-sm">Stay updated with the latest in AI recruitment technology</p>
            </div>
            <div className="flex-grow max-w-md w-full">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent focus:outline-none" 
                />
                <motion.button 
                  className="bg-accent text-white px-5 py-3 rounded-lg font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright and legal */}
        <motion.div 
          className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-secondaryText text-sm mb-4 md:mb-0">
            © {currentYear} iona.ai All rights reserved. A <a href="https://www.werp.tech/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Werp.Tech</a> Ltd UK partner company
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-secondaryText text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondaryText text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-secondaryText text-sm hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Footer column component
const FooterColumn = ({ title, links, variants }) => (
  <motion.div variants={variants}>
    <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-blue-gradient">{title}</h3>
    <ul className="space-y-3">
      {links.map((item) => (
        <motion.li 
          key={item.name}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link 
            to={item.path}
            className="text-secondaryText hover:text-accent transition-colors"
          >
            {item.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

// Contact item component
const ContactItem = ({ icon, text }) => (
  <motion.li 
    className="flex items-start gap-3 text-secondaryText"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <span className="text-accent mt-0.5">{icon}</span>
    <span>{text}</span>
  </motion.li>
);

export default Footer; 