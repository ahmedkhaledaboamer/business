'use client'
import { motion } from 'framer-motion'
import { Layers, Compass, Lock, UserCog, Crown, Scale } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

const levelIcons = [Layers, Compass, Lock, UserCog, Crown, Scale]

export function ServiceLevelsSection() {
  const locale = useLocale()
  const t = useTranslations('execution.serviceLevels')
  const levelsRaw = t.raw('levels') as Array<{ num: string; name: string; desc: string }>
  const levels = levelsRaw.map((level, i) => ({
    ...level,
    icon: levelIcons[i],
    highlight: i === levelsRaw.length - 1,
  }))

  return (
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="py-24 bg-white relative px-[5%]">
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
            className="text-[clamp(0.75rem,2vw,1.5rem)] text-slate-600 mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-end">
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: index * 0.1,
                }}
                className={` rounded-3xl p-8 relative overflow-hidden ${level.highlight ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-xl shadow-amber-900/20 md:col-span-2 lg:col-span-1 lg:scale-105 z-10' : 'bg-[#FAFAF8] border border-slate-100 text-slate-900 shadow-sm hover:shadow-md'}`}
              >
                {level.highlight && (
                  <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                )}

                <div className="relative z-10 flex flex-col items-center justify-center md:items-start lg:justify-start">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${level.highlight ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-white text-slate-700 shadow-sm'}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <div
                    className={`text-[clamp(0.75rem,2vw,1.5rem)] font-bold mb-2 tracking-wider ${level.highlight ? 'text-amber-200' : 'text-amber-600'}`}
                  >
                    {t('levelLabel')} {level.num}
                  </div>

                  <h3
                    className={`text-center md:text-right text-[clamp(0.75rem,2vw,2rem)] font-bold mb-4 ${level.highlight ? 'text-white' : 'text-slate-900'}`}
                  >
                    {level.name}
                  </h3>

                  <p
                    className={`text-center md:text-right text-[clamp(0.75rem,1vw,2rem)] leading-relaxed ${level.highlight ? 'text-amber-50' : 'text-slate-600'}`}
                  >
                    {level.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
