import Logo from "@/components/logo";
import { routing } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const locale =
    (await getLocale().catch(() => null)) ?? routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#1A1A2E] to-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-[5%] py-16">
        <section className="">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl px-8 py-10 md:px-10 md:py-12 text-center">
            <div className="absolute -top-40 -right-40 h-64 w-64 rounded-full bg-[#C9A84C]/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6">
              <Logo
                size={80}
                className="w-20 h-20 md:w-24 md:h-24 rounded-3xl shadow-lg shadow-black/40 bg-black/40"
              />

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
                <span className="text-xl">404</span>
                <span className="h-2 w-2 rounded-full bg-[#C9A84C]" />
                <span className="text-xl">{t("badge")}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold leading-snug text-white">
                  {t("title")}
                </h1>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {t("description")}
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href={locale ? `/${locale}` : "/"}
                  className="inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-2.5 text-sm md:text-base font-semibold text-[#1A1A2E] shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 hover:bg-[#D4B762] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
