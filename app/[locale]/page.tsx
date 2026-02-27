import { AboutSection } from "@/components/screens/home/AboutSection";
import { ClientsSection } from "@/components/screens/home/ClientsSection";
import { ContactSection } from "@/components/screens/home/ContactSection";
import Header from "@/components/screens/home/header";
import { OfferSection } from "@/components/screens/home/OfferSection";
import { QualitySection } from "@/components/screens/home/QualitySection";
import { ServicesSection } from "@/components/screens/home/ServicesSection";
import { VisionSection } from "@/components/screens/home/VisionSection";
import { WhyUsSection } from "@/components/screens/home/WhyUsSection";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("page");

  return (
    <section>
      <Header />
      <AboutSection />
      <ServicesSection />
      <OfferSection />
      <ClientsSection />
      <QualitySection />
      <VisionSection />
      <WhyUsSection />
      <ContactSection />
    </section>
  );
}
