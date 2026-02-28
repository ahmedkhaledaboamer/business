"use client";

import { motion } from "framer-motion";
import { EyeIcon, HeartHandshakeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const } },
};

export function VisionSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations("vision");

  return (
    <section
      className="py-32 relative overflow-hidden px-[5%]"
      style={{ backgroundColor: "#F9F6EF" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(201,168,76,0.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A84C]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E7C6B]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[80px]" />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="w-10 h-[3px] rounded-full bg-[#C9A84C] mb-4" />
          <p className="font-['Tajawal',sans-serif] text-[#0F1923]/40 text-[clamp(1rem,1vw,3rem)] tracking-widest uppercase">
            رؤيتنا وتعهدنا
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* ── Vision Card ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative bg-white rounded-3xl p-10 shadow-[0_8px_40px_rgba(15,25,35,0.07)] border border-[#C9A84C]/15 hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
          >
            {/* Top gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] to-[#C9A84C]/20 rounded-t-3xl" />

            {/* Bg glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <span className="relative inline-block rounded-full px-5 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#B8922A] font-['Tajawal',sans-serif] text-sm mb-8">
              {t("visionBadge")}
            </span>

            <div className={`flex items-center ${isRTL ? "justify-end lg:justify-start" : "justify-center lg:justify-start"} gap-4 mb-8`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border border-[#C9A84C]/20 flex items-center justify-center shadow-inner">
                <EyeIcon className="w-8 h-8 text-[#C9A84C]" />
              </div>
            </div>

            <h3 className="relative font-['Cairo',sans-serif] font-bold text-2xl text-[#0F1923] mb-5 leading-tight">
              {t("visionTitle")}{" "}
              <span className="text-[#C9A84C]">{t("visionHighlight")}</span>{" "}
              {t("visionTitle2")}
            </h3>

            <p className="relative font-['Tajawal',sans-serif] text-[clamp(1rem,1vw,3rem)] text-[#0F1923]/60 leading-[1.9]">
              {t("visionDesc")}
            </p>
          </motion.div>

          {/* ── Center Image ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="hidden lg:block relative h-[clamp(10rem,20vw,40rem)] rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(15,25,35,0.14)] border border-[#C9A84C]/20 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              width={600}
              height={600}
              alt={t("imageAlt")}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />

            {/* Light gradient overlay — keeps image readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6EF]/60 via-transparent to-transparent" />

            {/* Inner gold frame */}
            <div className="absolute inset-5 border border-[#C9A84C]/30 rounded-[2rem] z-10 pointer-events-none" />

            {/* Bottom info chip */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-[#C9A84C]/15 whitespace-nowrap">
              <p className="font-['Cairo',sans-serif] font-bold text-[#0F1923] text-sm text-center">
                رؤية · نفوذ · تنفيذ
              </p>
              <div className="mt-1 w-full h-[2px] rounded-full bg-gradient-to-r from-[#C9A84C]/40 via-[#C9A84C] to-[#0E7C6B]/40" />
            </div>
          </motion.div>

          {/* ── Promise Card ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="group relative bg-white rounded-3xl p-10 shadow-[0_8px_40px_rgba(15,25,35,0.07)] border border-[#0E7C6B]/15 hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
          >
            {/* Top teal accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E7C6B] to-[#0E7C6B]/20 rounded-t-3xl" />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0E7C6B]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <span className="relative inline-block rounded-full px-5 py-2 bg-[#0E7C6B]/10 border border-[#0E7C6B]/25 text-[#0A6358] font-['Tajawal',sans-serif] text-sm mb-8">
              {t("promiseBadge")}
            </span>

            <div className={`flex items-center ${isRTL ? "justify-end lg:justify-start" : "justify-center lg:justify-start"} gap-4 mb-8`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0E7C6B]/15 to-[#0E7C6B]/5 border border-[#0E7C6B]/20 flex items-center justify-center shadow-inner">
                <HeartHandshakeIcon className="w-8 h-8 text-[#0E7C6B]" />
              </div>
            </div>

            <h3 className="relative font-['Cairo',sans-serif] font-bold text-2xl text-[#0F1923] mb-5 leading-tight">
              {t("promiseTitle")}{" "}
              <span className="text-[#0E7C6B]">{t("promiseHighlight")}</span>{" "}
              {t("promiseTitle2")}
            </h3>

            <p className="relative font-['Tajawal',sans-serif] text-base text-[#0F1923]/60 leading-[1.9]">
              {t("promiseDesc")}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}