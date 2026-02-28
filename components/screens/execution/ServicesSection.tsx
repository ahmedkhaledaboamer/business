'use client'
import { motion } from 'framer-motion'
import {
  Crown,
  FileKey,
  LineChart,
  Network,
  Radar,
  Sparkles,
  Building2,
  Map,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const serviceIcons = [
  Crown,
  FileKey,
  LineChart,
  Network,
  Radar,
  Sparkles,
  Building2,
  Map,
]

export function ServicesSection() {
  const t = useTranslations('execution.services')
  const items = Array.from({ length: 8 }, (_, i) => ({
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    icon: serviceIcons[i],
  }))
  return (
    <section id="services" className="py-24 bg-white px-[5%]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-full mb-16 relative rounded-2xl overflow-hidden shadow-md h-48 md:h-64"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt={t('imageAlt')}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end justify-center pb-8">
            <h3 className="text-white text-[clamp(1rem,1vw,3rem)] font-bold">
              {t('intro')}
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.1,
                }}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-slate-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white text-amber-600 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
