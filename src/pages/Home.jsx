import { memo } from "react";

// Import the extracted components
import HeroCarousel from "../components/HeroCarousel";
import PartnerSection from "../components/PartnerSection";
import SolutionsSection from "../components/SolutionsSection";
import BenefitsSection from "../components/BenefitsSection";
import StatsSection from "../components/StatsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet-async";

// Main component optimized with React.memo
const Home = memo(() => {
   
  return (
    <div className="bg-background text-primaryText">
       <Helmet>
            <title>iona.ai: AI-Powered End-to-End Hiring & Onboarding Solution</title>
            <meta
              name="description"
              content="ionai - Elevating Experiences with AI"
            />
            <link rel="canonical" href="/end-to-end-hiring-solution-for-enterprises"/>
          </Helmet>
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden">
        <HeroCarousel />
        
        {/* Trusted by section */}
        <PartnerSection />
      </section>

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Why clients trust us */}
      <BenefitsSection />

      {/* Statistics Section */}
      <StatsSection />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
});

export default Home;