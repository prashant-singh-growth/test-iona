// import React from "react";
// import { useParams } from "react-router-dom";
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

function AlternativeDynamic({alternativePage}) {
  // const { Alternative } = useParams();
  const AlternativeData = AlternativePagesData[alternativePage];

  if (!AlternativeData) return ;

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
      <TestimonialSlider />
      <CTASection
        title={AlternativeData.cta.title}
        description={
         AlternativeData.cta.description
        }
      />
      <FAQComponent FAQList={AlternativeData.FaqList} />
      <CertificationSection />
      {/* {faqschema && ( */}
  
{alternativePage === "peoplestrong-alternative" ?<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What makes iona.ai different?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Other vendors sell you a tool and walk away. We offer a unique promise: a 100% outcome guarantee. This is possible because iona.ai isn't just a tool; it's an agent. Our true Agentic AI, backed by a human-in-the-loop, autonomously runs the process—making us a true partner who owns the outcome."
    }
  },{
    "@type": "Question",
    "name": "How does iona.ai ensure compliance with industry regulations?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "iona.ai adheres to ISO 27001, GDPR, and other regulatory standards, ensuring secure data handling, real-time compliance checks, and zero errors in documentation."
    }
  },{
    "@type": "Question",
    "name": "Can iona.ai integrate with my existing HR tools?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, iona.ai seamlessly integrates with your HRMS, ATS, payroll systems, and other HR tools, creating a unified onboarding and recruitment experience."
    }
  },{
    "@type": "Question",
    "name": "How does iona.ai handle high-volume hiring for global enterprises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "iona.ai is designed for scalability, automating every step of the recruitment process, enabling high-volume hiring across multiple regions with zero delays and 100% accuracy."
    }
  },{
    "@type": "Question",
    "name": "Do I need other HR tools or recruiters to use iona.ai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. iona.ai is designed to replace legacy ATS systems and manual workflows. The autonomous system handles sourcing, evaluation, offer issuance, and pre-boarding, freeing HR teams to focus on high-priority strategic initiatives."
    }
  },{
    "@type": "Question",
    "name": "What results can enterprises expect after deploying iona.ai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enterprises using iona.ai experience dramatically faster hiring cycles, lower cost-per-hire, error-free compliance, and a fully automated, predictable hiring pipeline. Real deployments have shown 90% faster onboarding and 90% reduction in costs."
    }
  },{
    "@type": "Question",
    "name": "How secure is candidate data within iona.ai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "iona.ai follows enterprise-grade security protocols, including encryption at rest and in transit, role-based access controls, and GDPR/ISO-compliant data handling, ensuring candidate and organisational data remain fully protected."
    }
  },{
    "@type": "Question",
    "name": "Can iona.ai handle thousands of hires simultaneously?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. NovaSuite is built for high-volume enterprise hiring, capable of processing and tracking thousands of candidates in parallel while maintaining speed, accuracy, and compliance."
    }
  }]
}
)
  }}
  async
/>: null}
    </div>
  );
}

export default AlternativeDynamic;
