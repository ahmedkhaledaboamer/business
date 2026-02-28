"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  LockIcon,
  ZapIcon,
  NetworkIcon,
  BrainIcon,
  TargetIcon,
  RocketIcon,
} from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

const featureIcons = [LockIcon, ZapIcon, NetworkIcon, BrainIcon, TargetIcon, RocketIcon]
const featureStyles = [
  { color: 'from-gold/20 to-gold/5', border: 'group-hover:border-gold/50', iconColor: 'text-gold' },
  { color: 'from-teal/20 to-teal/5', border: 'group-hover:border-teal/50', iconColor: 'text-teal-light' },
  { color: 'from-burgundy/30 to-burgundy/10', border: 'group-hover:border-burgundy-light/50', iconColor: 'text-burgundy-light' },
  { color: 'from-gold/20 to-gold/5', border: 'group-hover:border-gold/50', iconColor: 'text-gold' },
  { color: 'from-teal/20 to-teal/5', border: 'group-hover:border-teal/50', iconColor: 'text-teal-light' },
  { color: 'from-burgundy/30 to-burgundy/10', border: 'group-hover:border-burgundy-light/50', iconColor: 'text-burgundy-light' },
]

export function WhyUsSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('whyUs')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }
  return (
    <section id="why-us" className="py-24 relative overflow-hidden px-[5%]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/10 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full px-5 py-2 bg-teal/20 border border-teal/40 text-teal-light font-tajawal text-sm mb-6 shadow-[0_0_15px_rgba(14,124,107,0.3)]">
            {t('badge')}
          </span>
          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg">
            {t('title')}{' '}
            <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </h2>
          <p className="font-tajawal text-lg text-white/70 mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const Icon = featureIcons[index]
            const style = featureStyles[index]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-navy/80 backdrop-blur-md border border-gold/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${style.border} overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] will-change-transform`}
              >
                {/* Background Gradient Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Icon className={`w-8 h-8 ${style.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-cairo font-bold text-xl text-white group-hover:text-white transition-colors leading-snug">
                    {t(`features.${index}`)}
                  </h3>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-transparent group-hover:border-white/20 rounded-tl-2xl transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-transparent group-hover:border-white/20 rounded-br-2xl transition-colors duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
