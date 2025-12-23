import React from 'react'
import RecruiterBanner from '../../components/Pages/RecruiterLandingPages/RecruiterBanner'
import ClientBadgeSection from '../../components/Pages/HomePage/ClientBadgeSection'
import DetailSectionDynamic from '../../components/Pages/RecruiterLandingPages/DetailSectionDynamic'
import BuiltForRecruiterSection from '../../components/Pages/RecruiterLandingPages/BuiltForRecruiterSection'
import RecruiterTabSection from '../../components/Pages/RecruiterLandingPages/RecruiterTabSection'
import CTAWithForm from '../../components/Pages/RecruiterLandingPages/CTAWithForm'
import LPHeader from '../../components/Pages/LandingPage/LPHeader'
import LPFooter from '../../components/Pages/LandingPage/LPFooter'
import SeoHeader from '../../components/utils/SeoHeader'

function RecruiterLandingPages() {
  return (
    <div className='bg-white'>
      <SeoHeader
      title={"Agentic AI Recruiter’s Sheet | Smarter Hiring with iona.ai"}
      description={"The Recruiter’s Sheet by iona.ai uses agentic AI to streamline hiring workflows, manage candidates efficiently, and accelerate recruitment decisions."}
      />
      <LPHeader ctaText={"Get Started its Free"} ctaLink="/signup"/>
    <RecruiterBanner/>
        <ClientBadgeSection/>
        <DetailSectionDynamic
        title={"Your Recruitment Pipeline, Accelerated with Agentic AI"}
        description={"Move beyond the limits of spreadsheets. Track recruiting funnels the way your team already works, but faster, smarter, and with AI automation. Ship winning hires quickly and track your entire pipeline end-to-end."}
       imageURL={"/assets/pages/landingpage/pipeline.webp"}
        />
        <DetailSectionDynamic
        title={"Still Stuck in Spreadsheet Limbo? It's Time to Upgrade"}
        description={"Upgrade your recruitment workflow. Built for recruiters who love spreadsheets. Get the familiar format, enhanced with AI, automation, and real-time team collaboration."}
         imageURL={"/assets/pages/landingpage/table.svg"}
         
        />
        <BuiltForRecruiterSection/>
        <RecruiterTabSection/>
        <CTAWithForm/>
        <LPFooter/>
        </div>
  )
}

export default RecruiterLandingPages