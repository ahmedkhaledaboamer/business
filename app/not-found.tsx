import Logo from "@/components/logo";
import { routing } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const locale =
    (await getLocale().catch(() => null)) ?? routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <main className="min-h-screen bg-[#050816] text-white flex flex-col overflow-hidden relative">

      {/* ── Deep background layers ── */}
      {/* Radial nebula center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #1A1A3E 0%, #0D0D1F 45%, #050816 100%)",
        }}
      />

      {/* Gold top-right corona */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Emerald bottom-left corona */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Stars ── */}
      {[
        { top: "8%", left: "12%", size: 2, opacity: 0.6 },
        { top: "15%", left: "78%", size: 1.5, opacity: 0.4 },
        { top: "22%", left: "45%", size: 1, opacity: 0.3 },
        { top: "35%", left: "88%", size: 2, opacity: 0.5 },
        { top: "65%", left: "6%", size: 1.5, opacity: 0.4 },
        { top: "72%", left: "92%", size: 1, opacity: 0.3 },
        { top: "85%", left: "30%", size: 2, opacity: 0.5 },
        { top: "90%", left: "68%", size: 1.5, opacity: 0.4 },
        { top: "5%", left: "55%", size: 1, opacity: 0.35 },
        { top: "50%", left: "3%", size: 1.5, opacity: 0.3 },
      ].map((star, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* ── Main centered content ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <section className="w-fit mx-auto">

          {/* Card */}
          <div
            className="relative overflow-hidden rounded-3xl text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 0 0 1px rgba(201,168,76,0.08), 0 32px 64px -16px rgba(0,0,0,0.7), 0 0 80px -20px rgba(201,168,76,0.15)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Card inner glow top */}
            <div
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
              }}
            />

            {/* Blobs inside card */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full"
              style={{
                background: "rgba(201,168,76,0.12)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 rounded-full"
              style={{
                background: "rgba(16,185,129,0.07)",
                filter: "blur(40px)",
              }}
            />

            {/* ── 404 Ghost Number ── */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
              aria-hidden="true"
            >
              <span
                style={{
                  fontSize: "clamp(120px, 35vw, 200px)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  fontFamily: "'Georgia', serif",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,168,76,0.12)",
                  userSelect: "none",
                }}
              >
                404
              </span>
            </div>

            {/* ── Card Content ── */}
            <div className="relative z-10 flex flex-col items-center gap-7 px-8 py-12 md:px-12 md:py-14">

              {/* Logo with ring */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
                    filter: "blur(12px)",
                    transform: "scale(1.4)",
                  }}
                />
                <div
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(201,168,76,0.2), 0 8px 32px rgba(0,0,0,0.5)",
                    background: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Logo size={80} className="w-full h-full rounded-3xl" />
                </div>
              </div>

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-5 py-1.5"
                style={{
                  background: "rgba(0,0,0,0.45)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#C9A84C",
                    letterSpacing: "0.05em",
                  }}
                >
                  404
                </span>
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#C9A84C", opacity: 0.7 }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.85)",
                    fontFamily: "monospace",
                  }}
                >
                  {t("badge")}
                </span>
              </div>

              {/* Heading + description */}
              <div className="space-y-3">
                <h1
                  className="text-2xl md:text-3xl font-bold leading-snug text-white"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {t("title")}
                </h1>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {t("description")}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-2 relative group">
                {/* Button glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "rgba(201,168,76,0.3)",
                    filter: "blur(16px)",
                    transform: "scale(1.2)",
                  }}
                />
                <Link
                  href={locale ? `/${locale}` : "/"}
                  className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9A84C 0%, #D4B762 50%, #B8932E 100%)",
                    color: "#12100A",
                    boxShadow:
                      "0 4px 24px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                  }}
                >
                  {t("cta")}
                </Link>
              </div>

            </div>

            {/* Card bottom line */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              }}
            />
          </div>

          {/* Below-card hint */}
          <p
            className="mt-6 text-center text-xs"
            style={{
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.15em",
              fontFamily: "monospace",
              textTransform: "uppercase",
            }}
          >
            HTTP 404 · Page not found
          </p>

        </section>
      </div>
    </main>
  );
}