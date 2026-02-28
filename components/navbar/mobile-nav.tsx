"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import LocaleSwitcher from "../locale-switcher";
import Logo from "../logo";

interface Route {
  href: string;
  label: string;
}

const panelTransition = { type: "spring" as const, stiffness: 260, damping: 30 };
const overlayTransition = { duration: 0.2 };
const itemStagger = 0.05;

export default function MobileNavbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const routesRaw = t.raw("routes");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const routes = useMemo<Route[]>(() => {
    if (!Array.isArray(routesRaw)) return [];
    return routesRaw
      .map((route: unknown) => {
        const r = route as { label?: unknown; href?: unknown };
        const href = String(r.href ?? "");
        const label = String(r.label ?? "");
        return { href, label };
      })
      .filter((r) => r.href && r.href !== "[object Object]");
  }, [routesRaw]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/" || pathname === `/${locale}`;
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname, locale]
  );

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeMenu]);

  // Return focus to trigger button when menu closes
  useEffect(() => {
    if (!isOpen) openButtonRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  const panelSide = isRTL ? "left-0" : "right-0";
  const slideFrom = isRTL ? "-100%" : "100%";

  return (
    <div className="md:hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      <button
        ref={openButtonRef}
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-full bg-white/5 text-white p-2.5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={t("navMenu")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              id="mobile-nav-panel"
              initial={{ x: slideFrom }}
              animate={{ x: 0 }}
              exit={{ x: slideFrom }}
              transition={panelTransition}
              className={cn(
                "absolute top-0 bottom-0 w-80 max-w-[85vw] bg-navy-dark shadow-2xl flex flex-col",
                panelSide
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 shrink-0">
                <Logo className="w-24 h-auto" size={80} />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
                  aria-label={t("closeMenu")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label={t("navMenu")}>
                <ul className="space-y-1">
                  {routes.map((route, index) => (
                    <motion.li
                      key={route.href}
                      initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * itemStagger,
                      }}
                    >
                      <Link
                        href={route.href}
                        onClick={closeMenu}
                        className={cn(
                          "block font-tajawal text-lg py-3 px-2 -mx-2 rounded-lg transition-colors",
                          isActive(route.href)
                            ? "text-gold font-semibold bg-gold/10"
                            : "text-white/80 hover:text-gold hover:bg-white/5"
                        )}
                      >
                        {route.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-6 flex justify-center">
                  <LocaleSwitcher />
                </div>
              </nav>

              <div className="px-6 py-4 border-t border-white/10 shrink-0">
                <Link
                  href="/execution"
                  onClick={closeMenu}
                  className="block bg-gold text-navy-dark font-cairo font-bold px-6 py-3 rounded-full text-center w-full hover:bg-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy-dark"
                  aria-label={t("cta")}
                >
                  {t("cta")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
