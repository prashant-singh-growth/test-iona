import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { enforceHTTPS } from "./utils/security";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const AboutSection = lazy(() => import("./pages/AboutSection"));
const Highlights = lazy(() => import("./components/Highlights"));
const CTA = lazy(() => import("./components/CTA"));
const Contact = lazy(() => import("./pages/Contact"));
const NovaCount = lazy(() => import("./pages/NovaCount"));
const NovaAssist = lazy(() => import("./pages/NovaAssist"));
const NovaTrack = lazy(() => import("./pages/NovaTrack"));
const NovaStart = lazy(() => import("./pages/NovaStart"));
const NovaDoc = lazy(() => import("./pages/NovaDoc"));
const NovaTrain = lazy(() => import("./pages/NovaTrain"));
const NovaEngage = lazy(() => import("./pages/NovaEngage"));
const NovaVerify = lazy(() => import("./pages/NovaVerify"));
const NovaConnect = lazy(() => import("./pages/NovaConnect"));
const Blogs = lazy(() => import("./pages/Blogs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Vids = lazy(() => import("./pages/Vids"));
const ScheduleDemo = lazy(() => import("./pages/ScheduleDemo"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Landingpage = lazy(()=> import("./pages/Landingpages"))


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page transition wrapper
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Loading screen
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center">
      <div className="text-accent relative w-16 h-16">
        <svg className="animate-spin h-16 w-16" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      <p className="mt-4 text-lg font-medium text-accent">Loading...</p>
    </div>
  </div>
);

// Routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutSection />
              <Highlights />
              <CTA />
            </PageTransition>
          }
        />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/scheduledemo" element={<PageTransition><ScheduleDemo /></PageTransition>} />
        <Route path="/find" element={<PageTransition><NovaCount /></PageTransition>} />
        <Route path="/novaassist" element={<PageTransition><NovaAssist /></PageTransition>} />
        <Route path="/speedboard" element={<PageTransition><NovaTrack /></PageTransition>} />
        <Route path="/novatrack" element={<PageTransition><NovaTrack /></PageTransition>} />
        <Route path="/novastart" element={<PageTransition><NovaStart /></PageTransition>} />
        <Route path="/novadoc" element={<PageTransition><NovaDoc /></PageTransition>} />
        <Route path="/trainplus" element={<PageTransition><NovaTrain /></PageTransition>} />
        <Route path="/novaengage" element={<PageTransition><NovaEngage /></PageTransition>} />
        <Route path="/novaverify" element={<PageTransition><NovaVerify /></PageTransition>} />
        <Route path="/novaconnect" element={<PageTransition><NovaConnect /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/videos" element={<PageTransition><Vids /></PageTransition>} />
        <Route path="/casestudies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/cookies" element={<PageTransition><CookiePolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/end-to-end-hiring-solution-for-enterprises" element={<PageTransition><Landingpage/></PageTransition>} />
        <Route
          path="*"
          element={
            <PageTransition>
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// ✅ FIXED App — useLocation now inside Router
function AppWrapper() {
  useEffect(() => {
    enforceHTTPS();

    if (process.env.REACT_APP_XSS_PROTECTION === "true") {
      const metaXSS = document.createElement("meta");
      metaXSS.httpEquiv = "X-XSS-Protection";
      metaXSS.content = "1; mode=block";
      document.head.appendChild(metaXSS);

      const metaNoSniff = document.createElement("meta");
      metaNoSniff.httpEquiv = "X-Content-Type-Options";
      metaNoSniff.content = "nosniff";
      document.head.appendChild(metaNoSniff);

      const metaFrameOptions = document.createElement("meta");
      metaFrameOptions.httpEquiv = "X-Frame-Options";
      metaFrameOptions.content = "DENY";
      document.head.appendChild(metaFrameOptions);
    }
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
      delay: 0,
    });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/end-to-end-hiring-solution-for-enterprises"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {!shouldHideNavbar && <Navbar />}
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        {!shouldHideNavbar && <Footer />}
      </div>
    </>
  );
}

export default AppWrapper;
