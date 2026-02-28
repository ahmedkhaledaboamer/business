"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const pillarIcons = [TrendingUp, ShieldCheck, Users];

export function AboutSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations("about");
  const pillars = [
    { icon: pillarIcons[0], titleKey: "pillars.0.title", descKey: "pillars.0.desc" },
    { icon: pillarIcons[1], titleKey: "pillars.1.title", descKey: "pillars.1.desc" },
    { icon: pillarIcons[2], titleKey: "pillars.2.title", descKey: "pillars.2.desc" },
  ];
  return (
    <section
      id="about"
      className="relative pt-32 pb-16 overflow-hidden px-[5%]"
      style={{ backgroundColor: "#F9F6EF" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201,168,76,0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Large ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0E7C6B]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Label ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[rgba(14,124,107,0.1)] border border-[rgba(14,124,107,0.2)] text-[#0E7C6B] font-['Tajawal',sans-serif] text-sm mb-5">
            {t("label")}
          </span>
          <h2 className="font-['Cairo',sans-serif] font-bold text-4xl sm:text-5xl text-[#0F1923] text-center leading-tight">
            {t("title")}{" "}
            <span className="relative mx-3">
              <span className="relative z-10 text-[#C9A84C]">{t("titleHighlight")}</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#C9A84C]/15 rounded -z-0" />
            </span>
          </h2>
          <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-l from-[#C9A84C] to-[#C9A84C]/20" />
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* — Image Stack — */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1 h-[520px]"
          >
            {/* Gold frame accent */}
            <div className="absolute -top-5 -right-5 w-[85%] h-[85%] border border-[#C9A84C]/30 rounded-3xl z-0" />

            {/* Main image */}
            <div className="absolute top-0 right-0 w-[80%] h-[78%] rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(15,25,35,0.18)] z-10 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt={t("imageAlt1")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/50 via-transparent to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[58%] h-[56%] rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(15,25,35,0.22)] z-20 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt={t("imageAlt2")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E7C6B]/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 right-2 z-30 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#C9A84C]/20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                <span className="text-[#C9A84C] font-['Cairo',sans-serif] font-bold text-sm">+500</span>
              </div>
              <div>
                <p className="font-['Cairo',sans-serif] font-bold text-[#0F1923] text-sm leading-tight">{t("badgeStat")}</p>
                <p className="font-['Tajawal',sans-serif] text-[#0F1923]/50 text-xs">{t("badgeStatSub")}</p>
              </div>
            </motion.div>

            {/* Corner dots */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#C9A84C]/10 rounded-2xl -z-10" />
            <div className="absolute top-10 -left-8 w-20 h-20 border border-[#0E7C6B]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* — Text Side — */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <p className="font-['Tajawal',sans-serif] text-lg text-[#0F1923]/65 leading-[2] mb-6">
              {t("intro")}
            </p>

            {/* Highlighted quote */}
            <div className={`relative p-6 rounded-2xl bg-white shadow-sm border-[#C9A84C] mb-10 ${!isRTL ? "border-l-4" : "border-r-4"}`}>
              <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-8 h-8 text-[#C9A84C]/20`}>
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.657 1.343-3 3-3V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.657 1.343-3 3-3V8z"/></svg>
              </div>
              <p className="font-['Tajawal',sans-serif] text-base text-[#0F1923]/70 leading-[1.9] pr-6">
                {t("quote")}
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, titleKey, descKey }, i) => (
                <motion.div
                  key={titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white hover:bg-[#C9A84C]/5 border border-transparent hover:border-[#C9A84C]/20 transition-all duration-300 shadow-sm cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 transition-colors flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="font-['Cairo',sans-serif] font-bold text-[#0F1923] text-xs mb-1">{t(titleKey)}</p>
                  <p className="font-['Tajawal',sans-serif] text-[#0F1923]/50 text-[11px] leading-snug">{t(descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}