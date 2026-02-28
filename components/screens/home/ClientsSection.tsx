"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  BriefcaseIcon,
  UsersIcon,
  GlobeIcon,
  BuildingIcon,
  TrendingUpIcon,
  UserCogIcon,
} from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

const clientIcons = [BriefcaseIcon, UsersIcon, GlobeIcon, BuildingIcon, TrendingUpIcon, UserCogIcon]
const clientColors = ['gold', 'burgundy', 'teal', 'gold', 'burgundy', 'teal'] as const
const colorMap = {
  gold: {
    border: 'border-r-gold',
    bgHover: 'hover:bg-gold/5',
    iconBg: 'from-gold/20 to-gold/5',
    iconText: 'text-gold',
  },
  burgundy: {
    border: 'border-r-burgundy',
    bgHover: 'hover:bg-burgundy/5',
    iconBg: 'from-burgundy/20 to-burgundy/5',
    iconText: 'text-burgundy',
  },
  teal: {
    border: 'border-r-teal',
    bgHover: 'hover:bg-teal/5',
    iconBg: 'from-teal/20 to-teal/5',
    iconText: 'text-teal',
  },
}
export function ClientsSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('clients')
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
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section className="py-24 relative overflow-hidden px-[5%]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-warm-white/95" />
      <div className="absolute inset-0 pattern-dots opacity-30" />

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
          <span className="inline-block rounded-full px-5 py-2 bg-burgundy/10 border border-burgundy/20 text-burgundy font-tajawal text-sm mb-6 shadow-sm">
            {t('badge')}
          </span>
          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-dark mb-6">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-6" />
          <p className="font-tajawal text-lg text-navy/60 mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const Icon = clientIcons[index]
            const colors = colorMap[clientColors[index]]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-white rounded-2xl border border-gray-100 border-r-4 ${colors.border} p-8 shadow-lg shadow-black/5 hover:shadow-xl ${colors.bgHover} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                  >
                    <Icon className={`w-8 h-8 ${colors.iconText}`} />
                  </div>
                  <div>
                    <h3
                      className={`font-cairo font-bold text-xl text-navy-dark mb-2 group-hover:${colors.iconText} transition-colors`}
                    >
                      {t(`items.${index}.title`)}
                    </h3>
                    <p className="font-tajawal text-base text-navy/60 leading-relaxed">
                      {t(`items.${index}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
