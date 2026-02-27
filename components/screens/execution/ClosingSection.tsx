'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
export function ClosingSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F5F0E8] relative overflow-hidden px-[5%] "
    >
      {/* Decorative background */}
    <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNEMEEyNzQiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40"></div>

    <div className="flex flex-row-reverse gap-10 items-center justify-evenly mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div>
                {/* Featured Image */}
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
          className="flex justify-center mb-10"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-amber-200">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="شراكة ومصافحة"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Closing Text */}
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
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            الخاتمة
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            <p>
              هذا الكيان ليس مجرد خدمة…
              <br />
              هو قوة تنفيذية تعمل لصالحك، وتحمي مصالحك، وتبني لك مسارًا يليق
              بحجم طموحك.
            </p>
            <p className="text-amber-700 font-bold pt-4">
              هنا… لن تجد شركة تبحث عن عميل،
              <br />
              بل كيانًا يبحث عن شراكة، ويبني ثقة، ويصنع نتائج تُثبت أنك في
              المكان الصحيح.
            </p>
          </div>
        </motion.div>
      </div>

        {/* Contact Area */}
        <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/5 overflow-hidden border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-teal-900 text-white p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-amber-400">
                  تواصل معنا
                </h3>
                <p className="text-teal-100 mb-10 text-lg">
                  نحن جاهزون لبناء مسارك التنفيذي. تواصل معنا لبدء الشراكة.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200 mb-1">
                        الهاتف المباشر
                      </p>
                      <p className="text-lg font-medium dir-ltr text-left">
                        +966 50 000 0000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200 mb-1">
                        البريد الإلكتروني
                      </p>
                      <p className="text-lg font-medium">
                        executive@masarak.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200 mb-1">
                        المقر الرئيسي
                      </p>
                      <p className="text-lg font-medium">
                        الرياض، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                أرسل رسالة مباشرة
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      الاسم الكريم
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      رقم الجوال
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                      placeholder="أدخل رقمك"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8] resize-none"
                    placeholder="كيف يمكننا خدمتك؟"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>إرسال الطلب</span>
                  <Send className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
