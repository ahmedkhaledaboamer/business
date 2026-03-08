import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Logo from "./logo";

interface FooterLink {
  label: string;
  href: string;
}

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const contact = {
    title: t("contact.title"),
    phone: t("contact.phone"),
    email: t("contact.email"),
    location: t("contact.location"),
  };

  const quickLinksRaw = t.raw("quickLinks.links");
  const quickLinks: FooterLink[] = Array.isArray(quickLinksRaw)
    ? quickLinksRaw
        .map((link: unknown) => {
          const l = link as { label?: unknown; href?: unknown };
          return { label: String(l.label || ""), href: String(l.href || "") };
        })
        .filter((link) => link.href && link.href !== "[object Object]")
    : [];

  const socialLinks = [
    { name: "LinkedIn",  icon: Linkedin,  href: "https://linkedin.com",  ariaLabel: t("socialMedia.linkedin")  },
    { name: "Twitter",   icon: Twitter,   href: "https://twitter.com",   ariaLabel: t("socialMedia.twitter")   },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", ariaLabel: t("socialMedia.instagram") },
    { name: "Facebook",  icon: Facebook,  href: "https://facebook.com",  ariaLabel: t("socialMedia.facebook")  },
  ];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#071020]"
    >
      {/* ── Decorative backgrounds ── */}

      {/* Noise grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal teal beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-10 h-[340px] w-[3px] origin-top opacity-35"
        style={{ background: "linear-gradient(180deg, transparent, #00d4b8 40%, transparent)", transform: "rotate(-25deg)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-5 h-[240px] w-px origin-top opacity-15"
        style={{ background: "linear-gradient(180deg, transparent, #00d4b8 40%, transparent)", transform: "rotate(-25deg)" }}
      />

      {/* Glow top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 h-[360px] w-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,212,184,0.08) 0%, transparent 65%)" }}
      />

      {/* Glow bottom-center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 h-[200px] w-[500px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,184,0.06) 0%, transparent 70%)" }}
      />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 mx-auto px-[5%]">

        {/* ══ TOP STRIP — Brand + Tagline ══ */}
        <div
          className={cn(
            /* mobile: column, centered */
            "flex flex-col items-center text-center gap-5 pt-14",
            /* desktop: row, ends apart */
            "lg:flex-row justify-center",
          )}
        >
          {/* Brand */}
          <div className={cn("flex flex-col items-center gap-3", "lg:items-start")}>
            <Logo size={120} className="w-fit" />
          </div>

          {/* Tagline */}
          {t("description") && (
            <p
              className={cn(
                "font-light leading-relaxed text-white/40 text-[clamp(1rem,2vw,1.5rem)]",
                "text-center",
                "lg:text-end",
              )}
            >
              {t("description")}
            </p>
          )}
        </div>

        {/* ══ WATERMARK ══ */}
        <div
          aria-hidden="true"
          className="select-none text-center leading-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            letterSpacing: "0.06em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            marginTop: "0.5rem",
          }}
        >
          {t("brandName")}
        </div>

        {/* ── Divider with teal pip ── */}
        <HRule />

        {/* ══ NAV STRIP — Horizontal links ══ */}
        <nav aria-label="Footer navigation">
          <div
            className={cn(
              /* mobile: wrap centered */
              "flex flex-wrap justify-center",
              /* desktop: spread */
              "lg:justify-between",
            )}
          >
            {quickLinks.map((link, i) => (
              <div key={link.href} className="relative flex items-center">
                {/* Separator — hidden on mobile */}
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block w-px h-5 bg-white/15 flex-shrink-0"
                  />
                )}
                <Link
                  href={link.href}
                  aria-label={link.label}
                  className={cn(
                    "group relative px-4 py-[1.1rem] sm:px-5 text-base sm:text-[clamp(1rem,1vw,1.25rem)]",
                    "font-medium text-white/40 transition-colors duration-200 hover:text-white",
                    "tracking-[0.12em] uppercase",
                    /* underline */
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                    "after:h-0.5 after:w-0 after:rounded after:bg-[#00d4b8]",
                    "after:transition-[width] after:duration-300",
                    "hover:after:w-[calc(100%-2rem)]",
                  )}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        {/* ── Divider ── */}
        <HRule />

        {/* ══ INFO BAR — Contact left, Social right ══ */}
        <div
          className={cn(
            /* mobile: column, centered */
            "flex flex-col items-center text-center gap-8 py-10",
            /* desktop: row, apart */
            "lg:flex-row lg:items-start lg:justify-between lg:text-start",
          )}
        >

          {/* Contact */}
          <div className={cn("flex flex-col items-center gap-3", "lg:items-start")}>
            {[
              {
                href: `tel:${contact.phone.replace(/\s/g, "")}`,
                icon: <Phone className="h-5 w-5" />,
                label: contact.phone,
                isLink: true,
                ariaLabel: `Call us: ${contact.phone}`,
              },
              {
                href: `mailto:${contact.email}`,
                icon: <Mail className="h-5 w-5" />,
                label: contact.email,
                isLink: true,
                ariaLabel: `Email us: ${contact.email}`,
              },
              {
                href: "",
                icon: <MapPin className="h-5 w-5" />,
                label: contact.location,
                isLink: false,
                ariaLabel: "",
              },
            ].map(({ href, icon, label, isLink, ariaLabel }) => {
              const inner = (
                <>
                  <span
                    className={cn(
                      "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg",
                      "border border-white/[0.07] bg-white/[0.04]",
                      "transition-all duration-200",
                      isLink && "group-hover:bg-[#00d4b8] group-hover:border-[#00d4b8]",
                    )}
                  >
                    <span className="text-[#00d4b8] transition-colors duration-200 group-hover:text-[#071020]">
                      {icon}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "font-light text-white/40 transition-colors duration-200 break-all text-base sm:text-[clamp(1rem,1vw,1.25rem)]",
                      isLink && "group-hover:text-white/70",
                      "text-center lg:text-start",
                    )}
                  >
                    {label}
                  </span>
                </>
              );

              return isLink ? (
                <Link
                  key={label}
                  href={href}
                  aria-label={ariaLabel}
                  className="group flex flex-col items-center gap-1.5 sm:flex-row sm:items-center sm:gap-[0.65rem] lg:items-center"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 text-white/40 sm:flex-row sm:items-center sm:gap-[0.65rem]"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Social */}
          <div className={cn("flex flex-col items-center gap-3", "lg:items-end")}>
            <span
              className="text-white/15 text-base sm:text-lg tracking-[0.22em] uppercase"
            >
              {t("followUs") ?? "Follow Us"}
            </span>
            <div className={cn("flex flex-wrap gap-3 justify-center", "lg:justify-end")} aria-label="Social media links">
              {socialLinks.map(({ name, icon: Icon, href, ariaLabel }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className={cn(
                    "group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[10px]",
                    "border border-white/[0.07] bg-white/[0.04] text-white/40",
                    "transition-all duration-250",
                    "hover:border-[#00d4b8] hover:text-[#071020]",
                    "hover:shadow-[0_4px_18px_rgba(0,212,184,0.25)]",
                  )}
                >
                  {/* Fill animation */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-[#00d4b8] transition-transform duration-250 group-hover:scale-y-100"
                  />
                  <Icon className="relative z-10 h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <div
          className={cn(
            "flex flex-col items-center gap-2 border-t border-white/[0.07] py-5",
            "text-center",
            "justify-center",
          )}
        >
          <p
            className="text-white/15 text-base tracking-[0.08em]"
          >
            {t("copyright")}
          </p>
        </div>

      </div>
    </footer>
  );
}

/** Thin horizontal rule with centered teal pip */
function HRule() {
  return (
    <div className="flex items-center" aria-hidden="true">
      <div className="h-px flex-1 bg-white/[0.07]" />
      <div
        className="mx-0 h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#00d4b8]"
        style={{ boxShadow: "0 0 10px rgba(0,212,184,0.5)" }}
      />
      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}