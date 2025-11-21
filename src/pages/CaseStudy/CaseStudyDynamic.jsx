import React from 'react';
import { useParams } from 'react-router-dom';
import { CaseStudyPagesData } from '../../components/Data/CaseStudyDynamic';
import CaseStudyBanner from '../../components/Pages/CaseStudy/CaseStudyBanner';
import SectionDetails from '../../components/Pages/CaseStudy/SectionDetails';
import SectionComparison from '../../components/Pages/CaseStudy/SectionComparison';
import SectionWhySwitch from '../../components/Pages/CaseStudy/SectionWhySwitch';
import SectionDifference from '../../components/Pages/CaseStudy/SectionDifference';
import ResultSection from '../../components/Pages/LandingPage/ResultSection';
import SectionChoose from '../../components/Pages/CaseStudy/SectionChoose';
import CertificationSection from '../../components/Pages/SecLandingPage/CertificationSection';
import TestimonialSlider from '../../components/utils/TestimonialSlider';
import CTASection from '../../components/Pages/HomePage/CTASection';
import FAQComponent from '../../components/utils/FAQComponent';
import SeoHeader from '../../components/utils/SeoHeader';

function CaseStudyDynamic() {
  const { caseStudy } = useParams();
  const casestudyData = CaseStudyPagesData[caseStudy]; 

  if (!casestudyData) return <h1>Case Study Not Found</h1>;

  return (
    <div>
        <SeoHeader
        title={casestudyData.seo.title}
        description={casestudyData.seo.description}
        />
        <CaseStudyBanner banner={casestudyData.banner}/>
        <SectionDetails detail={casestudyData.details}/>
        <SectionComparison comparison={casestudyData.comparison}/>
        <SectionWhySwitch switchData={casestudyData.switch}/>
        <SectionDifference/>
        <ResultSection/>
        <SectionChoose/>
        <CertificationSection/>
        <TestimonialSlider/>
        <CTASection
        title={"Ready to solve your background check hassles?"}
        description={"Get started today and automate 100% of your recruitment from sourcing to onboarding with background verification and a 100% data accuracy guarantee."}

        />
        <FAQComponent FAQList={casestudyData.FaqList}/>
    
    </div>
  );
}

export default CaseStudyDynamic;
