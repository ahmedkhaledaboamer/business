'use client'
import { motion } from 'framer-motion'
import {
  Anchor,
  TrendingUp,
  ShieldCheck,
  Brain,
  Network,
  Navigation,
} from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

const termIcons = [Anchor, TrendingUp, ShieldCheck, Brain, Network, Navigation]

export function GlossarySection() {
  const locale = useLocale()
  const t = useTranslations('execution.glossary')
  const termsRaw = t.raw('terms') as Array<{ title: string; desc: string }>
  const terms = termsRaw.map((term, i) => ({ ...term, icon: termIcons[i] }))
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
      scale: 0.95,
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
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="py-24 bg-[#F0FDFA] relative px-[5%]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-[clamp(0.75rem,2vw,6rem)] font-bold text-slate-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-[clamp(0.75rem,2vw,1.5rem)] text-teal-800 mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Decorative Images Strip */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex justify-center gap-4 mb-16"
        >
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px',
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {terms.map((term, index) => {
            const Icon = term.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center md:items-start lg:justify-start bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-teal-100 group"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors text-teal-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-center md:text-right text-[clamp(0.75rem,1vw,3rem)] font-bold text-slate-900 mb-3">
                  {term.title}
                </h3>
                <p className="text-slate-600 text-center md:text-right text-[clamp(0.75rem,1vw,2rem)] leading-relaxed">{term.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
