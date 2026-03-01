"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  BarChart3Icon,
  ShieldIcon,
  GlobeIcon,
  SettingsIcon,
  FileCheckIcon,
  NetworkIcon,
} from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const serviceIcons = [BarChart3Icon, ShieldIcon, GlobeIcon, SettingsIcon, FileCheckIcon, NetworkIcon]
const serviceImages = [
  '/imges/home/2.webp',
  '/imges/home/3.webp',
  '/imges/home/4.webp',
  '/imges/home/5.webp',
  '/imges/home/6.webp',
  '/imges/home/7.webp',
]
const serviceColors = ['gold', 'burgundy', 'teal', 'gold', 'burgundy', 'teal'] as const
const colorClasses = {
  gold: {
    overlay: 'from-navy-dark/90 to-gold/40',
    bg: 'bg-gold/10',
    border: 'border-t-gold',
    icon: 'text-gold',
    hover: 'hover:border-gold/50 hover:shadow-gold/20',
  },
  burgundy: {
    overlay: 'from-navy-dark/90 to-burgundy/60',
    bg: 'bg-burgundy/10',
    border: 'border-t-burgundy',
    icon: 'text-burgundy',
    hover: 'hover:border-burgundy/50 hover:shadow-burgundy/20',
  },
  teal: {
    overlay: 'from-navy-dark/90 to-teal/60',
    bg: 'bg-teal/10',
    border: 'border-t-teal',
    icon: 'text-teal',
    hover: 'hover:border-teal/50 hover:shadow-teal/20',
  },
}
export function ServicesSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('services')
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
        staggerChildren: 0.15,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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
    <section
      id="services"
      className="py-24 bg-warm-white relative overflow-hidden px-[5%]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
          <span className="inline-block rounded-full px-5 py-2 bg-burgundy/10 border border-burgundy/20 text-burgundy font-tajawal text-[clamp(0.75rem,2vw,2rem)] mb-6 shadow-sm">
            {t('badge')}
          </span>
          <h2 className="font-cairo font-bold text-[clamp(0.75rem,2vw,6rem)] text-navy-dark mb-6">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-burgundy/50 to-transparent mx-auto mb-6" />
          <p className="font-tajawal text-[clamp(0.75rem,2vw,2rem)] text-navy/60 mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const Icon = serviceIcons[index]
            const title = t(`items.${index}.title`)
            const description = t(`items.${index}.description`)
            const colors = colorClasses[serviceColors[index]]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-black/5 overflow-hidden ${colors.hover} transition-all duration-500 hover:-translate-y-2 flex flex-col`}
              >
                {/* Image Header */}
                <div className="relative h-60 md:h-80 lg:h-70 xl:h-80 2xl:h-150 overflow-hidden">
                  <Image
                    src={serviceImages[index]}
                    width={600}
                    height={600}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} mix-blend-multiply`}
                  />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 right-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-cairo font-bold text-[clamp(0.75rem,1.5vw,3rem)] text-navy-dark mb-4 group-hover:text-navy transition-colors">
                    {title}
                  </h3>
                  <p className="font-tajawal text-[clamp(1rem,1vw,2rem)] text-navy/60 leading-relaxed flex-1">
                    {description}
                  </p>

                  {/* Decorative bottom line */}
                  <div
                    className={`h-1 w-12 ${colors.bg.replace('bg-', 'bg-').replace('/10', '')} rounded-full mt-6 group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
