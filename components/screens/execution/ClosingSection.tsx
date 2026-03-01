'use client'
import { Phone, Mail, Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export function ClosingSection() {
  const locale = useLocale()
  const t = useTranslations('execution.closing')
  const isRtl = locale === 'ar'
  return (
    <section
      id="contact"
      dir={isRtl ? 'rtl' : 'ltr'}
      className="py-24 bg-[#F5F0E8] relative overflow-hidden px-[clamp(1rem,5vw,10rem)] "
    >
      {/* Decorative background */}
    <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNEMEEyNzQiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40"></div>

    <div className={`flex gap-10 items-center justify-evenly mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
     

        {/* Contact Area */}
        <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/5 overflow-hidden border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-teal-900 text-white p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-center md:text-right text-[clamp(0.75rem,2vw,6rem)] font-bold mb-8 text-amber-400">
                  {t('title')}
                </h3>
                <p className="text-teal-100 text-center md:text-right mb-10 text-[clamp(0.75rem,2vw,1.5rem)]">
                  {t('subtitle')}
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-200 mb-1">
                        {t('phone')}
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,3rem)] font-medium dir-ltr text-left">
                        +966 50 000 0000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[clamp(0.75rem,1vw,3rem)] text-teal-200 mb-1">
                        {t('email')}
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,3rem)] font-medium">
                        executive@masarak.com
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16">
              <h3 className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-slate-900 mb-8">
                {t('sendMessage')}
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-slate-700 mb-2"
                    >
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-slate-700 mb-2"
                    >
                      {t('phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                      placeholder={t('phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-slate-700 mb-2"
                  >
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8]"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[clamp(0.75rem,2vw,1.5rem)] font-medium text-slate-700 mb-2"
                  >
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-[#FAFAF8] resize-none"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>{t('submit')}</span>
                  <Send className={`w-5 h-5 transition-transform ${isRtl ? 'rotate-0 group-hover:translate-x-1' : 'rotate-180 group-hover:-translate-x-1'}`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
