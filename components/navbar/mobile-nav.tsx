"use client";

import { motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import Button from "../button";
import LocaleSwitcher from "../locale-switcher";

interface Route {
  href: string;
  label: string;
}

const MobileNavbar = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const routesRaw = t.raw("routes");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Memoize routes processing
  const routes = useMemo<Route[]>(() => {
    if (!Array.isArray(routesRaw)) return [];
    return routesRaw
      .map((route: unknown) => {
        const r = route as { label?: unknown; href?: unknown };
        return {
          label: String(r.label || ""),
          href: String(r.href || ""),
        };
      })
      .filter((route) => route.href && route.href !== "[object Object]");
  }, [routesRaw]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return pathname === "/" || pathname === `/${locale}`;
      }
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname, locale]
  );

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute right-0 left-0 mt-2 overflow-hidden bg-navy-dark/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
      >
        <div className="px-4 py-6 space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={handleLinkClick}
              className="block font-tajawal text-white/80 hover:text-gold transition-colors py-2"
            >
              {route.label}
            </Link>
          ))}

          <Button
            asChild
            className="block bg-gold text-navy-dark font-cairo font-bold px-6 py-3 rounded-full text-center w-full mt-4 hover:bg-gold-light transition-colors"
            aria-label={t("cta")}
          >
            <Link href="#contact">{t("cta")}</Link>
          </Button>

          <div className="pt-4 border-t border-white/10 flex justify-center">
            <LocaleSwitcher />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
