import { memo } from "react";

// Import all the extracted components
import AboutHeroBanner from "../components/AboutHeroBanner";
import VisionMissionSection from "../components/VisionMissionSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import DifferenceSection from "../components/DifferenceSection";
import SeoHeader from "../components/utils/SeoHeader";

const AboutSection = memo(() => {
  return (
    <div className="bg-background">
      <SeoHeader
      title={"About IONA.AI | Redefining Purposeful, Equitable Hiring"}
      description={"Learn how IONA AI blends First Principles thinking and AI innovation to simplify hiring, foster inclusion, and empower organizations to discover true potential."}
      canonical={"/about"}
      />
      {/* Hero Banner */}
      <AboutHeroBanner />
      
      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Team Members Section */}
      <TeamSection />

      {/* iona.ai Difference */}
      <DifferenceSection />
    </div>
  );
});

export default AboutSection; 