'use client'
import { motion } from 'framer-motion'
import { Search, Scan, Route, Play, CheckCircle, Expand } from 'lucide-react'
export function JourneySection() {
  const steps = [
    {
      num: '1',
      title: 'نقطة الفهم العميق',
      desc: 'نبدأ من حيث أنت، لا من حيث نريد نحن. نقرأ احتياجاتك، أهدافك، مخاوفك، وطموحاتك.',
      icon: Search,
    },
    {
      num: '2',
      title: 'مرحلة كشف الصورة الكاملة',
      desc: 'نضع أمامك ما لا يراه غيرك: الفرص، المخاطر، المسارات، والنتائج المحتملة.',
      icon: Scan,
    },
    {
      num: '3',
      title: 'بناء المسار التنفيذي',
      desc: 'نصمّم لك طريقًا واضحًا، بخطوات محسوبة، ومراحل لا تعتمد على الحظ.',
      icon: Route,
    },
    {
      num: '4',
      title: 'التشغيل الفعلي',
      desc: 'هنا يبدأ العمل الحقيقي: تنفيذ، متابعة، ضبط، وتعديل لحظي.',
      icon: Play,
    },
    {
      num: '5',
      title: 'نقطة الثبات',
      desc: 'المرحلة التي يصبح فيها كل شيء تحت السيطرة… وتبدأ النتائج في الظهور.',
      icon: CheckCircle,
    },
    {
      num: '6',
      title: 'التوسع الآمن',
      desc: 'نفتح لك أبوابًا جديدة… بدون مخاطرة غير محسوبة.',
      icon: Expand,
    },
  ]
  return (
    <section
      id="journey"
      className="py-24 bg-[#FAFAF8] relative overflow-hidden px-[5%]"
    >
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73b1a8e4b64?w=800&q=80"
          alt="مسار رحلة"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAFAF8]"></div>
      </div>


      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            رحلة رجل الأعمال معنا
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
            className="text-xl text-slate-600 mx-auto"
          >
            رحلتك معنا ليست خدمة… هي منظومة انتقال من نقطة إلى نقطة أعلى
          </motion.p>
        </div>

        {/* Featured Image */}
        <motion.div
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
            duration: 0.6,
          }}
          className="mx-auto mb-20 rounded-2xl overflow-hidden shadow-md border-4 border-white"
        >
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
            alt="تخطيط استراتيجي"
            loading="lazy"
            className="w-full h-48 object-cover"
          />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200/50 hidden md:block rounded-full"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 !== 0
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px',
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
                      <div className="absolute top-0 right-0 w-2 h-full bg-amber-400 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div
                        className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-amber-400 rounded-full items-center justify-center z-10 shadow-sm">
                    <span className="text-amber-600 font-bold">{step.num}</span>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
