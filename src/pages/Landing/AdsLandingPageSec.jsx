import React from 'react'
import AdslandingBanner from '../../components/Pages/LandingPage/adsSecLanding/AdslandingBanner'
import InsideBook from '../../components/Pages/LandingPage/adsSecLanding/InsideBook'
import HowtoGetCopy from '../../components/Pages/LandingPage/adsSecLanding/HowtoGetCopy'
import AdsCta from '../../components/Pages/LandingPage/adsSecLanding/AdsCta'
import FAQComponent from '../../components/utils/FAQComponent'
import { landingpagefaqads } from '../../components/Data/FaqData'
import SeoHeader from '../../components/utils/SeoHeader'
import LPFooter from '../../components/Pages/LandingPage/LPFooter'
import LPHeader from '../../components/Pages/LandingPage/LPHeader'

function AdsLandingPageSec() {
  return (
    <div className='font-lora'>
        <SeoHeader/>
        <LPHeader ctaText={"Reserve Your Free Copy"}/>
        <AdslandingBanner/>
        <InsideBook/>
        <HowtoGetCopy/>
        <AdsCta/>
        <FAQComponent FAQList={landingpagefaqads}/>
        <LPFooter/>
    </div>
  )
}

export default AdsLandingPageSec