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
import PopUpSection from '../../components/Pages/LandingPage/PopUpSection'
import { Helmet } from 'react-helmet-async'

function AdsLandingPageSec() {
  return (
    <div className='font-lora'>
        <SeoHeader
        title={"AI-First CHRO Playbook | Why Do 74% of AI Initiatives Fail?"}
        description={"74% of AI initiatives fail in HR. The AI-First CHRO playbook has the answer. Built on 150,000+ AI-driven hires, not textbook theory. 75 free copies. India only."}/>
        <Helmet>
          <meta property="og:type" content="website" />
<meta property="og:url" content="https://www.iona.ai/ai-first-chro" />
<meta property="og:title" content="AI-First CHRO Playbook | Why Do 74% of AI Initiatives Fail?" />
<meta property="og:description" content="The AI-First CHRO is the missing playbook for HR leaders navigating AI. Built on 150,000+ AI-driven hires, not textbook theory. 75 free hardcopies. India only." />
<meta property="og:image" content="https://www.iona.ai/assets/pages/landingpage/free-copy.webp" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.iona.ai/ai-first-chro" />
<meta property="twitter:title" content="AI-First CHRO Playbook | Why Do 74% of AI Initiatives Fail?" />
<meta property="twitter:description" content="The AI-First CHRO is the missing playbook for HR leaders navigating AI. Built on 150,000+ AI-driven hires, not textbook theory. 75 free hardcopies. India only." />
<meta property="twitter:image" content="https://www.iona.ai/assets/pages/landingpage/free-copy.webp" />

        </Helmet>

        <PopUpSection/>
        <LPHeader ctaText={"Reserve Your Free Copy"}/>
        <AdslandingBanner/>
        <InsideBook/>
        <HowtoGetCopy/>
        <AdsCta/>
        <FAQComponent FAQList={landingpagefaqads}/>
        <LPFooter/>    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How are the 75 recipients selected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every application is reviewed personally by the author. The criteria: you lead or co-lead HR at a 1,000+ employee organisation in India, and you are navigating AI in your function. No algorithm. Just judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any obligation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "None whatsoever. No review. No social posts. No follow-up pitch. The book is sent because the frameworks were designed for people in your position."
      }
    },
    {
      "@type": "Question",
      "name": "What if all 75 copies are claimed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You stay on the waitlist for priority launch notification and early platform access. The waitlist has value even after the 75 copies are gone."
      }
    },
    {
      "@type": "Question",
      "name": "When can I purchase the book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The book is in print. Public availability will be announced to the waitlist before any other channel."
      }
    },
    {
      "@type": "Question",
      "name": "What is AIFirstCHRO.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The companion platform. Interactive assessments, diagnostic tools, team variance analysis, downloadable resources, all grounded in the book's six frameworks. First 75 readers receive priority beta access."
      }
    }
  ]
}
`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "The AI-FIRST CHRO",
  "alternateName": "The AI-First CHRO: The Missing Playbook – From AI Promise to Boardroom Results",
  "author": {
    "@type": "Person",
    "name": "Amit Srivastava"
  },
  "bookFormat": "https://schema.org/Hardcover",
  "publisher": {
    "@type": "Organization",
    "name": "iona.ai"
  },
  "inLanguage": "en",
  "url": "https://www.iona.ai/ai-first-chro",
  "offers": {
    "@type": "Offer",
    "price": "1599",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
}

`
          }}
        />
     
    </div>
  )
}

export default AdsLandingPageSec