import { ClosingManifesto } from "@/components/screens/brand-identity/ClosingManifesto";
import { HeroSection } from "@/components/screens/brand-identity/HeroSection";
import { SectionDivider } from "@/components/screens/brand-identity/SectionDivider";
import { BrandIntro } from "@/components/screens/brand-identity/BrandIntro";
import { BrandPersonality } from "@/components/screens/brand-identity/BrandPersonality";
import { BrandStatement } from "@/components/screens/brand-identity/BrandStatement";
import { StatsSection } from "@/components/screens/brand-identity/StatsSection";
import { BrandDictionary } from "@/components/screens/brand-identity/BrandDictionary";
import { HowWeWork } from "@/components/screens/brand-identity/HowWeWork";
import { BrandPromise } from "@/components/screens/brand-identity/BrandPromise";
import { ServicesGrid } from "@/components/screens/brand-identity/ServicesGrid";
import { WhoWeServe } from "@/components/screens/brand-identity/WhoWeServe";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("brandIdentity.meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BrandIdentityPage() {
  const locale = await getLocale();
  const isRTL = locale === "ar";
  return (
    <main className="w-full overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div id="hero">
        <HeroSection />
      </div>
      <SectionDivider />
      <BrandIntro />
      <BrandPersonality />
      <SectionDivider />
      <BrandStatement />
      <StatsSection />
      <SectionDivider />
      <BrandDictionary />
      <SectionDivider />
      <HowWeWork />
      <BrandPromise />
      <SectionDivider />
      <div id="services">
        <ServicesGrid />
      </div>
      <WhoWeServe />
      <div id="contact">
        <ClosingManifesto />
      </div>
    </main>

  );
}

