import { memo } from "react";

// Import all the extracted components
import AboutHeroBanner from "../components/AboutHeroBanner";
import VisionMissionSection from "../components/VisionMissionSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import DifferenceSection from "../components/DifferenceSection";
import SeoHeader from "../components/utils/SeoHeader";
import BookSection from "../components/Pages/About/BookSection";

const AboutSection = memo(() => {
  return (
    <div className="bg-background">
      <SeoHeader
      title={"About IONA.AI | Redefining Purposeful, Equitable Hiring"}
      description={"Learn how iona.ai blends First Principles thinking and AI innovation to simplify hiring, foster inclusion, and empower organizations to discover true potential."}
      canonical={"/about"}
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
          "item": "https://www.iona.ai/solutions/about"
        }
      ]
    })
  }}
  async
/>
      {/* Hero Banner */}
      <AboutHeroBanner />
      
      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Values Section */}
      <ValuesSection />
<BookSection/>
      {/* Team Members Section */}
      <TeamSection />

      {/* iona.ai Difference */}
      <DifferenceSection />
    </div>
  );
});

export default AboutSection; 