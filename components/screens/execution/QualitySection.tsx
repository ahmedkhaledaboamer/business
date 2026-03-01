'use client'
import { motion } from 'framer-motion'
import { CheckSquare, MessageSquare, Handshake } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export function QualitySection() {
  const locale = useLocale()
  const t = useTranslations('execution.quality')
  const columns = (t.raw('columns') as Array<{ title: string; subtitle: string; items: string[] }>) || []
  return (
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="py-24 bg-[#FAFAF8] px-[5%]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, colIdx) => {
            const Icon = [CheckSquare, MessageSquare, Handshake][colIdx] || CheckSquare
            const iconWrap = colIdx === 0 ? 'bg-teal-50 text-teal-600' : colIdx === 1 ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
            const iconItem = colIdx === 0 ? 'text-teal-500' : colIdx === 1 ? 'text-amber-500' : 'text-rose-500'
            return (
              <motion.div
                key={colIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIdx * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconWrap}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-slate-900">{col.title}</h3>
                </div>
                <p className="text-slate-500 mb-6 text-[clamp(0.75rem,2vw,1.5rem)]">{col.subtitle}</p>
                <ul className="space-y-4">
                  {(col.items || []).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconItem}`} />
                      <span className="text-slate-700 font-medium text-[clamp(0.75rem,1vw,2rem)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
