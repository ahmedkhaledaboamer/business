"use client";

import { motion } from "framer-motion";
import { ArrowLeft as ArrowLeftIcon, Sparkles as SparklesIcon } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,25,35,0.9)] via-[rgba(11,29,58,0.85)] to-[rgba(15,25,35,0.95)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(122,31,62,0.2)] via-transparent to-[rgba(14,124,107,0.1)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gold lines */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-[2px] bg-gradient-to-r from-[rgba(201,168,76,0.5)] to-transparent"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-20 w-48 h-[2px] bg-gradient-to-l from-[rgba(201,168,76,0.4)] to-transparent"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-24 h-[2px] bg-gradient-to-r from-[rgba(14,124,107,0.3)] to-transparent"
        />

        {/* Floating dots */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-[rgba(201,168,76,0.4)]"
        />
        <motion.div
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[rgba(14,124,107,0.5)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10   px-4 text-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] mb-8"
        >
          <SparklesIcon className="w-5 h-5 text-[#C9A84C]" />
          <span className="font-['Tajawal',sans-serif] text-[#C9A84C] text-base">
            القوة التنفيذية التي تحتاجها
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Cairo',sans-serif] font-bold text-[clamp(2.25rem,5vw,4.5rem)] text-white leading-[1.2] mb-6"
        >
          شريكك التنفيذي في
          <br />
          <span className="text-[#C9A84C]">بناء النفوذ</span>
          <br />
          وصناعة القرار
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Tajawal',sans-serif] text-[clamp(1.125rem,2vw,1.25rem)] text-white/70 max-w-7xl mx-auto mb-10 leading-relaxed"
        >
          في بيئة أعمال تتغير فيها المعادلات بسرعة، وتزداد فيها الضغوط على رجل
          الأعمال لاتخاذ قرارات دقيقة في وقت ضيق، يحتاج القائد الحقيقي إلى جهة
          لا تكتفي بتقديم خدمة… بل تمنحه قوة تنفيذية، وتبني له مسارًا واضحًا.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsCta1Hovered(true)}
            onMouseLeave={() => setIsCta1Hovered(false)}
            className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#D4B85A] text-[#0F1923] font-['Cairo',sans-serif] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_20px_25px_-5px_rgba(201,168,76,0.3)] no-underline"
          >
            <span>ابدأ رحلتك الآن</span>
            <ArrowLeftIcon
              className={`w-5 h-5 transition-transform duration-300 ${
                isCta1Hovered ? "-translate-x-1" : "translate-x-0"
              }`}
            />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsCta2Hovered(true)}
            onMouseLeave={() => setIsCta2Hovered(false)}
            className={`flex items-center gap-3 border-2 font-['Cairo',sans-serif] font-bold px-8 py-4 rounded-full transition-all duration-300 no-underline ${
              isCta2Hovered
                ? "border-[rgba(201,168,76,0.5)] text-[#C9A84C]"
                : "border-white/30 text-white"
            }`}
          >
            <span>اكتشف خدماتنا</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8  "
        >
          <div className="text-center">
            <div className="font-['Cairo',sans-serif] font-bold text-[clamp(1.875rem,3vw,2.25rem)] text-[#C9A84C]">
              +500
            </div>
            <div className="font-['Tajawal',sans-serif] text-white/60 text-sm mt-1">
              عميل راضٍ
            </div>
          </div>

          <div className="text-center border-x border-white/10">
            <div className="font-['Cairo',sans-serif] font-bold text-[clamp(1.875rem,3vw,2.25rem)] text-[#C9A84C]">
              15+
            </div>
            <div className="font-['Tajawal',sans-serif] text-white/60 text-sm mt-1">
              سنة خبرة
            </div>
          </div>

          <div className="text-center">
            <div className="font-['Cairo',sans-serif] font-bold text-[clamp(1.875rem,3vw,2.25rem)] text-[#C9A84C]">
              100%
            </div>
            <div className="font-['Tajawal',sans-serif] text-white/60 text-sm mt-1">
              سرية تامة
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}