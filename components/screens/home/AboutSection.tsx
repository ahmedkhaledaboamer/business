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
      className="relative pt-20  lg:pt-32 pb-14 sm:pb-16 overflow-hidden px-4 sm:px-6 lg:px-[5%]"
      style={{ backgroundColor: "#F9F6EF" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201,168,76,0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0E7C6B]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative  ">

        {/* Label */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[rgba(14,124,107,0.1)] border border-[rgba(14,124,107,0.2)] text-[#0E7C6B] text-[clamp(0.75rem,2vw,2rem)] mb-5">
            {t("label")}
          </span>

          <h2 className="font-bold text-[clamp(0.75rem,2vw,6rem)] text-[#0F1923] text-center leading-tight">
            {t("title")}{" "}
            <span className="relative mx-2 sm:mx-3">
              <span className="relative z-10 text-[#C9A84C]">
                {t("titleHighlight")}
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#C9A84C]/15 rounded -z-0" />
            </span>
          </h2>

          <div className="mt-5 w-16 h-[3px] rounded-full bg-gradient-to-l from-[#C9A84C] to-[#C9A84C]/20" />
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Images */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1 h-[380px] sm:h-[460px] lg:h-[520px] 2xl:h-[800px]"
          >
            <div className="absolute -top-5 -right-5 w-[85%] h-[85%] border border-[#C9A84C]/30 rounded-3xl z-0" />

            {/* Main image */}
            <div className="absolute top-0 right-0 w-[82%] sm:w-[80%] h-[75%] sm:h-[78%] rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(15,25,35,0.18)] z-10 border-4 border-white">
              <Image
                src="/imges/home/1.webp"
                alt={t("imageAlt1")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/50 via-transparent to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[62%] sm:w-[58%] h-[52%] sm:h-[56%] rounded-3xl overflow-hidden shadow-[0_24px_48px_rgba(15,25,35,0.22)] z-20 border-4 border-white">
              <Image
                src="/imges/home/222.webp"
                alt={t("imageAlt2")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E7C6B]/50 via-transparent to-transparent" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-6 sm:bottom-12 right-2 z-30 bg-white rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl border border-[#C9A84C]/20 flex items-center gap-3"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-sm">+500</span>
              </div>
              <div>
                <p className="font-bold text-[#0F1923] text-[clamp(0.75rem,2vw,2rem)] leading-tight">
                  {t("badgeStat")}
                </p>
                <p className="text-[#0F1923]/50 text-[clamp(0.75rem,2vw,1.5rem)]">
                  {t("badgeStatSub")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <p className="text-[clamp(0.75rem,2vw,3rem)] text-[#000] leading-[1.9] sm:leading-[2] mb-6">
              {t("intro")}
            </p>

            <div
              className={`relative p-5 sm:p-6 rounded-2xl bg-white shadow-sm border-[#C9A84C] mb-8 sm:mb-10 ${
                !isRTL ? "border-l-4" : "border-r-4"
              }`}
            >
              <p className="text-[clamp(0.75rem,2vw,3rem)] text-[#000] leading-[1.9]">
                {t("quote")}
              </p>
            </div>

            {/* Pillars */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {pillars.map(({ icon: Icon, titleKey, descKey }, i) => (
                <motion.div
                  key={titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="group full-width flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white hover:bg-[#C9A84C]/5 border border-transparent hover:border-[#C9A84C]/20 transition-all duration-300 shadow-sm"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>

                  <p className="font-bold text-[#0F1923] text-[clamp(0.75rem,1vw,3rem)] mb-1">
                    {t(titleKey)}
                  </p>
                  <p className="text-[#0F1923]/50 text-[clamp(0.75rem,1vw,2rem)] leading-snug">
                    {t(descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}