import React from "react";
import { useParams } from "react-router-dom";
import { AlternativePagesData } from "../../components/Data/AlternativeDynamic";

import SectionDetails from "../../components/Pages/Alternative/SectionDetails";
import SectionComparison from "../../components/Pages/Alternative/SectionComparison";
import SectionWhySwitch from "../../components/Pages/Alternative/SectionWhySwitch";
import SectionDifference from "../../components/Pages/Alternative/SectionDifference";
import ResultSection from "../../components/Pages/LandingPage/ResultSection";
import SectionChoose from "../../components/Pages/Alternative/SectionChoose";
import CertificationSection from "../../components/Pages/SecLandingPage/CertificationSection";
import TestimonialSlider from "../../components/utils/TestimonialSlider";
import CTASection from "../../components/Pages/HomePage/CTASection";
import FAQComponent from "../../components/utils/FAQComponent";
import SeoHeader from "../../components/utils/SeoHeader";
import AlternativeBanner from "../../components/Pages/Alternative/AlternativeBanner";

function AlternativeDynamic() {
  const { Alternative } = useParams();
  const AlternativeData = AlternativePagesData[Alternative];

  if (!AlternativeData) return <h1>Case Study Not Found</h1>;

  return (
    <div>
      <SeoHeader
        title={AlternativeData.seo.title}
        description={AlternativeData.seo.description}
      />
      <AlternativeBanner banner={AlternativeData.banner} />
      <SectionDetails detail={AlternativeData.details} />
      <SectionComparison comparison={AlternativeData.comparison} />
      <SectionWhySwitch switchData={AlternativeData.switch} />
      <SectionDifference />
      <ResultSection />
      <SectionChoose />
      <CertificationSection />
      <TestimonialSlider />
      <CTASection
        title={AlternativeData.cta.title}
        description={
         AlternativeData.cta.description
        }
      />
      <FAQComponent FAQList={AlternativeData.FaqList} />
    </div>
  );
}

export default AlternativeDynamic;
