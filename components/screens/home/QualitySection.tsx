 "use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const columnImages = [
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
]
const columnColors = ['gold', 'teal', 'burgundy'] as const
const columnItemCounts = [5, 5, 5]
const colorClasses = {
  gold: {
    badge: 'bg-gold/20 border-gold/30 text-gold',
    titleHighlight: 'text-gold',
    iconBg: 'bg-gold/20',
    iconText: 'text-gold',
    border: 'hover:border-gold/50',
    overlay: 'from-navy-dark to-gold/40',
  },
  teal: {
    badge: 'bg-teal/20 border-teal/30 text-teal-light',
    titleHighlight: 'text-teal-light',
    iconBg: 'bg-teal/20',
    iconText: 'text-teal-light',
    border: 'hover:border-teal/50',
    overlay: 'from-navy-dark to-teal/40',
  },
  burgundy: {
    badge: 'bg-burgundy/30 border-burgundy/40 text-burgundy-light',
    titleHighlight: 'text-burgundy-light',
    iconBg: 'bg-burgundy/30',
    iconText: 'text-burgundy-light',
    border: 'hover:border-burgundy-light/50',
    overlay: 'from-navy-dark to-burgundy/60',
  },
}
export function QualitySection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('quality')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden px-[5%]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background */}
      <div className="absolute inset-0 pattern-lines opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((idx) => {
            const colors = colorClasses[columnColors[idx]]
            const title = t(`columns.${idx}.title`)
            const subtitle = t(`columns.${idx}.subtitle`)
            const highlightWord = subtitle.split(' ').pop()
            const restOfSubtitle = subtitle.replace(highlightWord || '', '').trim()
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  delay: idx * 0.15,
                }}
                className={`glass-dark rounded-3xl overflow-hidden border border-white/10 ${colors.border} transition-all duration-500 hover:-translate-y-2 group flex flex-col`}
              >
                {/* Header Image */}
                <div className="relative h-[clamp(10rem,20vw,30rem)] overflow-hidden">
                  <Image
                    src={columnImages[idx]}
                    width={600}
                    height={600}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />

                  <div className="absolute bottom-4 left-6 right-6">
                    <span
                      className={`inline-block rounded-full px-4 py-1.5 border backdrop-blur-md ${colors.badge} font-tajawal text-sm shadow-lg`}
                    >
                      {title}
                    </span>
                  </div>
                </div>

                <div className="p-8 pt-4 flex-1">
                  <h3 className="font-cairo font-bold text-2xl text-white mb-8">
                    {restOfSubtitle}{' '}
                    <span className={colors.titleHighlight}>
                      {highlightWord}
                    </span>
                  </h3>

                  <ul className="space-y-4">
                    {Array.from({ length: columnItemCounts[idx] }, (_, index) => (
                      <motion.li
                        key={index}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                x: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.15 + index * 0.05,
                        }}
                        className="flex items-center gap-4 group/item"
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                        >
                          <CheckIcon className={`w-4 h-4 ${colors.iconText}`} />
                        </div>
                        <span className="font-tajawal text-white/80 text-[clamp(1rem,1vw,3rem)] group-hover/item:text-white transition-colors">
                          {t(`columns.${idx}.items.${index}`)}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
