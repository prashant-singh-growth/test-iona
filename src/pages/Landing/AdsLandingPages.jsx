import React from 'react'
import AdsBanner from '../../components/Pages/LandingPage/AdsBanner'
import CTASection from '../../components/Pages/HomePage/CTASection'
import PopUpSection from '../../components/Pages/LandingPage/PopUpSection'
import MeetAuthorSection from '../../components/Pages/LandingPage/MeetAuthorSection'

function AdsLandingPages() {
  return (
    <div>
        <AdsBanner/>
        <PopUpSection/>
        <MeetAuthorSection/>
        <CTASection 
        title={"Don't leave Nextech empty-handed"}
        description={"Whether you are looking to solve high-volume hiring bottlenecks or simply want to understand the framework behind successful AI implementation, this book is your roadmap."}
        ctaText={"Reserve a Company Copy Now"}
        ctaUrl={"#reserve-copy"}
        />
    </div>
  )
}

export default AdsLandingPages