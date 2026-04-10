

import SingleSolutionBanner from '../../components/Pages/SolutionPage/SingleSolutionPage/SingleSolutionBanner'
// import StateCard from '../../components/Pages/SolutionPage/SingleSolutionPage/StateCard'
import SolutionDetailsCard from '../../components/Pages/SolutionPage/SingleSolutionPage/SolutionDetailsCard'
import PlatformCapabilitiesSection from '../../components/Pages/SolutionPage/SingleSolutionPage/PlatformCapabilitiesSection'
import HowThisWorkSection from '../../components/Pages/SolutionPage/SingleSolutionPage/HowThisWorkSection'
import CTASection from '../../components/Pages/HomePage/CTASection'
import { Navigate, useParams } from 'react-router-dom'
import { solutionPageList } from '../../components/Data/solutions/SolutionPageList'
import SeoHeader from '../../components/utils/SeoHeader'
import { Helmet } from 'react-helmet-async'

function SingleSolutionPage() {
  const { solutions } = useParams();
  const solutionPageData = solutionPageList.find(url => url.url === solutions)
   console.log(solutionPageData,"hello")
    if (!solutionPageData) return <Navigate to="/404" replace />
 
  return (
<div className='bg-white flex flex-col theme-lora-font !pt-10'>
  <SeoHeader
  title={solutionPageData.page.seo.title}
  description={solutionPageData.page.seo.description}
  />
  <Helmet>
          <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://www.iona.ai/solutions/${solutionPageData.url}`} />
  <meta property="og:title" content={solutionPageData.page.seo.title} />
  <meta property="og:description" content={solutionPageData.page.seo.description} />
  <meta property="og:image" content={`https://www.iona.ai${solutionPageData.page.banner.bannerImage.imgurl}`} />
  
  
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={`https://www.iona.ai/solutions/${solutionPageData.url}`} />
  <meta property="twitter:title" content={solutionPageData.page.seo.title} />
  <meta property="twitter:description" content={solutionPageData.page.seo.description} />
  <meta property="twitter:image" content={`https://www.iona.ai${solutionPageData.page.banner.bannerImage.imgurl}`} />
  
        </Helmet>
         <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": `${solutionPageData.page.seo.title}`,
  "url": `https://www.iona.ai/solutions/${solutionPageData.url}`,
  "description": `${solutionPageData.page.seo.description}`,
  "applicationCategory": "HumanResourcesApplication",
  "operatingSystem": "Web",
  "publisher": {
    "@id": "https://www.iona.ai/#organization"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "url": `https://www.iona.ai/solutions/${solutionPageData.url}`
  }
}
)
  }}
  async
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.iona.ai/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product",
          "item": `https://www.iona.ai/solutions/${solutionPageData.url}`
        }
      ]
    })
  }}
  async
/>
<SingleSolutionBanner banner={solutionPageData.page.banner}/>
{/* <StateCard state={solutionPageData.page.state}/> */}
<SolutionDetailsCard detail={solutionPageData.page.detailSection}/>
<PlatformCapabilitiesSection plateform={solutionPageData.page.platformCapabilities} url={solutionPageData.url}/>
{/* <CTASection
title={solutionPageData.page.cta.ctaSec.title ? solutionPageData.page.cta.ctaSec.title :"Upscale Your Hiring to the Next Level"}
description={solutionPageData.page.cta.ctaSec.description ? solutionPageData.page.cta.ctaSec.description :"Transform your workforce planning and analytics using AI-driven intelligence."}
ctaText={solutionPageData.page.cta.ctaSec.urlText ? solutionPageData.page.cta.ctaSec.urlText : "Request Your Personalized Demo" }
ctaUrl={solutionPageData.page.cta.ctaSec.url ? solutionPageData.page.cta.ctaSec.url:  "schedule-demo"}

/> */}
<HowThisWorkSection howwork={solutionPageData.page.howWork}/>
<CTASection
title={solutionPageData.page.cta.ctafirst.title}
description={solutionPageData.page.cta.ctafirst.description}
ctaText={solutionPageData.page.cta.ctafirst.urlText ? solutionPageData.page.cta.ctafirst.urlText : "Request a Demo" }
ctaUrl={solutionPageData.page.cta.ctafirst.url ? solutionPageData.page.cta.ctafirst.url:  "schedule-demo"}
/>
</div>
  )
}

export default SingleSolutionPage