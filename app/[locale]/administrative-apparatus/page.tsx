import { CTA } from "@/components/screens/administrative-apparatus/CTA";
import { Hero } from "@/components/screens/administrative-apparatus/Hero";
import { Stats } from "@/components/screens/administrative-apparatus/Stats";
import { Pyramid } from "@/components/screens/administrative-apparatus/Pyramid";
import { Positions } from "@/components/screens/administrative-apparatus/Positions";
import { Process } from "@/components/screens/administrative-apparatus/Process";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("administrativeApparatus");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function AdministrativeApparatusPage() {
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <main
      className="overflow-x-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ scrollBehavior: "smooth" }}
    >
      <Hero locale={locale} />
      <Stats locale={locale} />
      <Pyramid locale={locale} />
      <Positions locale={locale} />
      <Process locale={locale} />
      <CTA locale={locale} />
    </main>
  );
}
