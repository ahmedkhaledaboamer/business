import { AboutSection } from "@/components/screens/home/AboutSection";
import { ClientsSection } from "@/components/screens/home/ClientsSection";
import { ContactSection } from "@/components/screens/home/ContactSection";
import Header from "@/components/screens/home/header";
import { OfferSection } from "@/components/screens/home/OfferSection";
import { QualitySection } from "@/components/screens/home/QualitySection";
import { ServicesSection } from "@/components/screens/home/ServicesSection";
import { VisionSection } from "@/components/screens/home/VisionSection";
import { WhyUsSection } from "@/components/screens/home/WhyUsSection";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page() {
  const locale = await getLocale();
  return (
    <section>
      <Header/>
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <OfferSection locale={locale} />
      <ClientsSection locale={locale} />
      <QualitySection locale={locale} />
      <VisionSection locale={locale} />
      <WhyUsSection locale={locale} />
      <ContactSection locale={locale} />
    </section>
  );
}
