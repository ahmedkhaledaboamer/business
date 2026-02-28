"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import LocaleSwitcher from "../locale-switcher";
import Logo from "../logo";

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

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-full bg-white/5 text-white p-2 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Off-canvas Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
            onClick={handleOverlayClick}
          >
            <motion.div
              key="mobile-menu-panel"
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className={cn(
                "absolute top-0 bottom-0 w-80 max-w-full bg-navy-dark shadow-2xl flex flex-col",
                isRTL ? "left-0" : "right-0"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                <Logo className="w-24 h-auto" size={80} />
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block font-tajawal text-lg py-2 transition-colors",
                      isActive(route.href)
                        ? "text-gold font-semibold"
                        : "text-white/80 hover:text-gold"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>

              <div className="px-6 pb-6 space-y-4 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block bg-gold text-navy-dark font-cairo font-bold px-6 py-3 rounded-full text-center w-full hover:bg-gold-light transition-colors"
                  aria-label={t("cta")}
                >
                  {t("cta")}
                </Link>

                <div className="pt-3 flex justify-center">
                  <LocaleSwitcher />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
