'use client'
import { motion } from 'framer-motion'
import { CheckSquare, MessageSquare, Handshake, Heart } from 'lucide-react'
export function QualitySection() {
  const qualityStandards = [
    'دقة تشغيلية بنسبة 100٪',
    'توثيق كامل لكل خطوة',
    'متابعة لحظية',
    'تحليل مستمر',
    'اختبارات جودة داخلية',
    'مراجعة تنفيذ قبل وبعد',
    'نظام مراقبة مخاطر غير مرئي',
  ]
  const entityLanguage = [
    'لغة واضحة',
    'لغة بلا ضوضاء',
    'لغة تحترم وقتك',
    'لغة تعتمد على المعلومة… لا الانطباع',
    'لغة تُظهر الحقيقة… لا تغطيها',
  ]
  const principles = [
    'نلتزم قبل أن نعد',
    'نُظهر قبل أن نتكلم',
    'ننفّذ قبل أن نروّج',
    'نحترم قبل أن نطلب',
    'نوضح قبل أن نسأل',
  ]
  return (
    <section className="py-24 bg-[#FAFAF8] px-[5%]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Standards */}
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
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                معايير الجودة الداخلية
              </h3>
            </div>
            <p className="text-slate-500 mb-6 text-sm">
              نحن نعمل بمعايير لا يعرفها إلا القليل:
            </p>
            <ul className="space-y-4">
              {qualityStandards.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-teal-500 ml-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Entity Language */}
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
              delay: 0.2,
            }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">لغة الكيان</h3>
            </div>
            <p className="text-slate-500 mb-6 text-sm">نحن نتحدث لغة مختلفة:</p>
            <ul className="space-y-4">
              {entityLanguage.map((item, i) => (
                <li key={i} className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-amber-500 ml-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Principles */}
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
              delay: 0.4,
            }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                مبادئ التعامل
              </h3>
            </div>
            <p className="text-slate-500 mb-6 text-sm">مبادئنا لا تتغير:</p>
            <ul className="space-y-4">
              {principles.map((item, i) => (
                <li key={i} className="flex items-start">
                  <Heart className="w-5 h-5 text-rose-500 ml-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
