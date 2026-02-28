"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRightIcon,
  Sparkles as SparklesIcon,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [isCta1Hovered, setIsCta1Hovered] = useState(false);
  const [isCta2Hovered, setIsCta2Hovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,25,35,0.9)] via-[rgba(11,29,58,0.85)] to-[rgba(15,25,35,0.95)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(122,31,62,0.2)] via-transparent to-[rgba(14,124,107,0.1)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center pt-[clamp(1rem,8vw,10rem)]">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 sm:px-6 py-2 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] mb-6 sm:mb-8"
        >
          <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
          <span className="text-[#C9A84C] text-sm sm:text-base font-medium">
            {t("badge")}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-[clamp(0.75rem,2vw,6rem)] text-white leading-[1.25] mb-2"
        >
          {t("titleLine1")}
          <br />
          <span className="text-[#C9A84C]">{t("titleHighlight")}</span>
          <br />
          {t("titleLine2")}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/70 text-[clamp(0.75rem,2vw,1.5rem)] max-w-7xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex  items-center justify-center gap-3 "
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsCta1Hovered(true)}
            onMouseLeave={() => setIsCta1Hovered(false)}
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#C9A84C] text-[clamp(0.75rem,2vw,2rem)] hover:bg-[#D4B85A] text-[#0F1923] font-bold px-7 py-3.5 rounded-full transition"
          >
            <span>{t("ctaPrimary")}</span>
            {isRTL ? (
              <ArrowLeftIcon
                className={`w-5 h-5 transition ${
                  isCta1Hovered ? "-translate-x-1" : ""
                }`}
              />
            ) : (
              <ArrowRightIcon
                className={`w-5 h-5 transition ${
                  isCta1Hovered ? "translate-x-1" : ""
                }`}
              />
            )}
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsCta2Hovered(true)}
            onMouseLeave={() => setIsCta2Hovered(false)}
            className={`flex items-center justify-center gap-3 text-[clamp(0.75rem,2vw,2rem)] w-full sm:w-auto border-2 font-bold px-7 py-3.5 rounded-full transition ${
              isCta2Hovered
                ? "border-[#C9A84C] text-[#C9A84C]"
                : "border-white/30 text-white"
            }`}
          >
            {t("ctaSecondary")}
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#C9A84C]">
              +500
            </div>
            <div className="text-white/60 text-sm mt-1">
              {t("statsClients")}
            </div>
          </div>

          <div className="border-x border-white/10 px-4">
            <div className="text-2xl sm:text-3xl font-bold text-[#C9A84C]">
              15+
            </div>
            <div className="text-white/60 text-sm mt-1">
              {t("statsExperience")}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#C9A84C]">
              100%
            </div>
            <div className="text-white/60 text-sm mt-1">
              {t("statsConfidentiality")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}