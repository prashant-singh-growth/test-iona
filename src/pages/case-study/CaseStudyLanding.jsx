import React from 'react'
import CaseStudyBanner from '../../components/Pages/CaseStudy/CaseStudyBanner'
import CaseStudyCard from '../../components/Pages/CaseStudy/CaseStudyCard'
import SeoHeader from '../../components/utils/SeoHeader'

function CaseStudyLanding() {
  return (
    <div>
        <SeoHeader
      
      title={"Enterprise Hiring Case Studies | iona.ai Success Stories"}
      description={"Discover how leading enterprises use iona.ai to transform hiring, reduce turnaround time, and improve recruitment efficiency."}
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
          "item": "https://www.iona.ai/case-studies"
        }
      ]
    })
  }}
  async
/>
        <CaseStudyBanner/>
        <CaseStudyCard/>
    </div>
  )
}

export default CaseStudyLanding