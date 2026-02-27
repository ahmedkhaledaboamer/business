'use client'
import { motion } from 'framer-motion'
import { Crown, Quote } from 'lucide-react'
export function BusinessmanLetterSection() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNEMEEyNzQiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
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
            duration: 0.8,
          }}
          className="bg-white rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-100 relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 text-amber-100 rotate-180 z-0">
            <Quote className="w-32 h-32" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            {/* Text Content */}
            <div className="p-10 md:p-16 lg:col-span-3 relative z-10 flex flex-col justify-center">
              <div className="flex flex-col items-start mb-10">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                  <Crown className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  كلمة لرجل الأعمال
                </h2>
                <div className="w-24 h-1 bg-amber-500 mt-6 rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
                <p>
                  أنت لست متعاملًا…
                  <br />
                  أنت صاحب قرار، وركن أساسي في كل خطوة نخطوها.
                </p>
                <p>
                  نحن لا نضعك في نهاية العملية…
                  <br />
                  نحن نضعك في بدايتها، وفي منتصفها، وفي نهايتها.
                </p>
                <p>
                  نستمع لك، نقرأ احتياجاتك، نفهم طموحك،
                  <br />
                  ونبني لك مسارًا يناسب حجمك،
                </p>
                <p className="text-2xl md:text-3xl font-bold text-amber-700 pt-6">
                  لأن نجاحك ليس نتيجة…
                  <br />
                  نجاحك هو مؤشر أدائنا الحقيقي.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:col-span-2 h-64 lg:h-auto relative order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="رجل أعمال تنفيذي"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent block lg:hidden"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
