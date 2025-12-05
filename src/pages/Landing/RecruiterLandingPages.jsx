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
      title={"Excel with Agentic AI for Smarter Recruitment | iona.ai"}
      description={"Resolve recruitment pain points with Agentic AI. Automate CV parsing, candidate matching, and more for faster, smarter hiring. Start free today!"}
      />
      <LPHeader ctaText={"Get Started its Free"}/>
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