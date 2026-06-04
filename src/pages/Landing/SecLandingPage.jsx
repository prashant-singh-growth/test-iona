import React from 'react'
import LandingPageBanner from '../../components/Pages/SecLandingPage/LandingPageBanner'
import ClientBadgeSection from '../../components/Pages/HomePage/ClientBadgeSection'
import NovaFixesSection from '../../components/Pages/SecLandingPage/NovaFixesSection'
import NovaVerifySection from '../../components/Pages/SecLandingPage/NovaVerifySection'
import LPHeader from '../../components/Pages/LandingPage/LPHeader'
import LPFooter from '../../components/Pages/LandingPage/LPFooter'
import CTASection from '../../components/Pages/HomePage/CTASection'
import CertificationSection from '../../components/Pages/SecLandingPage/CertificationSection'
// import CustomersExperienceSection from '../../components/Pages/SecLandingPage/CustomersExperienceSection'
import SeoHeader from '../../components/utils/SeoHeader'
import TestimonialSlider from '../../components/utils/TestimonialSlider'


function SecLandingPage() {
  return (
   <div className="bg-white theme-lora-font">
    <SeoHeader
    title={"Automated Employee Background Verification India | iona.ai"}
    description={"Automate employee background verification in India with faster onboarding, lower costs and 100% accuracy. Book a demo with iona.ai today."}

    />
    <LPHeader/>
    <LandingPageBanner/>
    <ClientBadgeSection/>
    <NovaFixesSection/>
    <NovaVerifySection/>
 <TestimonialSlider />
{/* <CustomersExperienceSection/> */}
    <CTASection
    title={"Ready to solve your background check hassles?"}
    description={"Get started today and automate 100% of your recruitment from sourcing to onboarding with background verification and a 100% data accuracy guarantee."}
    />
    <CertificationSection/>
    <LPFooter/>
   </div>
  )
}

export default SecLandingPage