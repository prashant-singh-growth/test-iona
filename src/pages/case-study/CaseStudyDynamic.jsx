import React from 'react'
import CaseStudyDynamicBanner from '../../components/Pages/CaseStudy/CaseStudyDynamicBanner'
// import CustomerTestimonialSection from '../../components/Pages/CaseStudy/CustomerTestimonialSection'
import AboutClientSection from "../../components/Pages/CaseStudy/AboutClientSection"
import CTASection from '../../components/Pages/CaseStudy/CTASection'
import { useParams } from 'react-router-dom'
import { CaseStudyJson } from '../../components/Data/CaseStudyDynamic'
import SeoHeader from '../../components/utils/SeoHeader'
// import CaseStudyPDF from '../../components/Pages/CaseStudy/CaseStudyPDF'

function CaseStudyDynamic() {
   const { casestudy } = useParams();
    const casestudyData = CaseStudyJson[casestudy];
  
    if (!casestudyData) return <h1>Case Study Not Found</h1>;
  return (
    <div>
      <SeoHeader
      
      title={casestudyData?.seo?.title}
      description={casestudyData?.seo?.description}
      />

        <CaseStudyDynamicBanner banner={casestudyData}/>
        {/* <CustomerTestimonialSection testimony={casestudyData.customer}/> */}
        <AboutClientSection about={casestudyData}/>
        <CTASection/>
           {/* <CaseStudyPDF/> */}
    </div>
  )
}

export default CaseStudyDynamic