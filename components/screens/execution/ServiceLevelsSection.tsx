'use client'
import { motion } from 'framer-motion'
import { Layers, Compass, Lock, UserCog, Crown } from 'lucide-react'
export function ServiceLevelsSection() {
  const levels = [
    {
      num: '1',
      name: 'المستوى التنفيذي الأساسي',
      desc: 'إدارة ملفاتك اليومية باحترافية وثبات.',
      icon: Layers,
      highlight: false,
    },
    {
      num: '2',
      name: 'المستوى الاستراتيجي',
      desc: 'تحليل، رؤية، وتخطيط لمسارات طويلة المدى.',
      icon: Compass,
      highlight: false,
    },
    {
      num: '3',
      name: 'المستوى عالي الحساسية',
      desc: 'إدارة الملفات التي لا يجب أن يراها أحد.',
      icon: Lock,
      highlight: false,
    },
    {
      num: '4',
      name: 'المستوى الخاص برجال الأعمال',
      desc: 'خدمات مصممة حسب شخصيتك، أهدافك، وطريقة عملك.',
      icon: UserCog,
      highlight: false,
    },
    {
      num: '5',
      name: 'المستوى السيادي',
      desc: 'أعلى مستوى تشغيل… لرجال الأعمال الذين يحتاجون قوة تنفيذية كاملة تعمل خلفهم.',
      icon: Crown,
      highlight: true,
    },
  ]
  return (
    <section className="py-24 bg-white relative px-[5%]">
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
            مستويات الخدمة
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
            نحن لا نقدّم خدمة واحدة… نحن نقدّم مستويات تشغيل
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-end">
          {levels.map((level, index) => {
            const Icon = level.icon
            const isLast = index === levels.length - 1
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
                className={`rounded-3xl p-8 relative overflow-hidden ${level.highlight ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-xl shadow-amber-900/20 md:col-span-2 lg:col-span-1 lg:scale-105 z-10' : 'bg-[#FAFAF8] border border-slate-100 text-slate-900 shadow-sm hover:shadow-md'}`}
              >
                {level.highlight && (
                  <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                )}

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${level.highlight ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-white text-slate-700 shadow-sm'}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <div
                    className={`text-[clamp(0.75rem,2vw,1.5rem)] font-bold mb-2 tracking-wider ${level.highlight ? 'text-amber-200' : 'text-amber-600'}`}
                  >
                    المستوى {level.num}
                  </div>

                  <h3
                    className={`text-[clamp(0.75rem,2vw,2rem)] font-bold mb-4 ${level.highlight ? 'text-white' : 'text-slate-900'}`}
                  >
                    {level.name}
                  </h3>

                  <p
                    className={`text-[clamp(0.75rem,1vw,2rem)] leading-relaxed ${level.highlight ? 'text-amber-50' : 'text-slate-600'}`}
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
