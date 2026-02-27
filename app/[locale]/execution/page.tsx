import { HeroSection } from "@/components/screens/execution/HeroSection";
import { VisionMissionSection } from "@/components/screens/execution/VisionMissionSection";
import { BusinessmanLetterSection } from "@/components/screens/execution/BusinessmanLetterSection";
import { GlossarySection } from "@/components/screens/execution/GlossarySection";
import { ValuesSection } from "@/components/screens/execution/ValuesSection";
import { JourneySection } from "@/components/screens/execution/JourneySection";
import { OperatingSystemSection } from "@/components/screens/execution/OperatingSystemSection";
import { ServiceLevelsSection } from "@/components/screens/execution/ServiceLevelsSection";
import { QualitySection } from "@/components/screens/execution/QualitySection";
import { ServicesSection } from "@/components/screens/execution/ServicesSection";
import { ClosingSection } from "@/components/screens/execution/ClosingSection";
export default function ExecutionPage() {
  return (
  <main>
    <HeroSection />
    <VisionMissionSection />
    <BusinessmanLetterSection />
    <GlossarySection />
    <ValuesSection />
    <JourneySection />
    <OperatingSystemSection />
    <ServiceLevelsSection />
    <QualitySection />
    <ServicesSection />
    <ClosingSection />
  </main>
);
}

