'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle2, X, ShieldCheck, Globe, Award } from 'lucide-react';
export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => setIsSubmitted(false), 500);
    }, 2000);
  };
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=80")'
        }} />


      {/* Rich Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-gold/10 to-transparent mix-blend-overlay" />

      {/* Decorative Radiating Lines */}
      <div className="absolute inset-0 z-15 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-gold/30 animate-pulse" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-gold/20 animate-pulse"
          style={{
            animationDelay: '0.5s'
          }} />

        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-gold/10 animate-pulse"
          style={{
            animationDelay: '1s'
          }} />

      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          جهاز إداري كامل يعمل <span className="gradient-text">لصالحك…</span>
        </h2>
        <p className="text-2xl text-gold-light italic mb-12 font-medium">
          لأن وقتك أثمن من أن يضيع في التفاصيل.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-white text-xl px-12 py-5 rounded-full transition-all hover:scale-105 shadow-glow w-full sm:w-auto font-bold">
            ابدأ الآن
          </button>
          <button
            className="glass text-white hover:bg-white/20 text-xl px-12 py-5 rounded-full transition-all hover:scale-105 w-full sm:w-auto font-bold"
            onClick={() => setIsModalOpen(true)}>

            تحدث معنا
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium">سرية تامة</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Globe className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium">خبرة عالمية</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Award className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium">نتائج مضمونة</span>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen &&
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        dir="rtl">

          <div
          className="absolute inset-0 bg-navy/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)} />

          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[500px] overflow-hidden animate-scale-in">
            {/* Modal Top Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-gold via-gold-light to-gold" />

            <div className="p-8">
              <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 left-6 text-gray-400 hover:text-charcoal transition-colors bg-warm-gray rounded-full p-2">

                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ?
            <>
                  <h3 className="text-3xl font-bold text-charcoal mb-3">
                    تواصل مع الإدارة
                  </h3>
                  <p className="text-gray-500 mb-8 text-lg">
                    اترك بياناتك وسيقوم أحد مدرائنا التنفيذيين بالتواصل معك
                    فوراً.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                    htmlFor="name"
                    className="block text-charcoal font-bold text-sm">

                        الاسم الكريم
                      </label>
                      <input
                    id="name"
                    required
                    className="w-full bg-warm-gray border border-transparent rounded-xl px-5 py-4 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="أدخل اسمك" />

                    </div>
                    <div className="space-y-2">
                      <label
                    htmlFor="phone"
                    className="block text-charcoal font-bold text-sm">

                        رقم الهاتف
                      </label>
                      <input
                    id="phone"
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full bg-warm-gray border border-transparent rounded-xl px-5 py-4 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="أدخل رقم هاتفك" />

                    </div>
                    <div className="space-y-2">
                      <label
                    htmlFor="message"
                    className="block text-charcoal font-bold text-sm">

                        رسالتك (اختياري)
                      </label>
                      <textarea
                    id="message"
                    className="w-full bg-warm-gray border border-transparent rounded-xl px-5 py-4 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all min-h-[120px] resize-none"
                    placeholder="كيف يمكننا خدمتك؟" />

                    </div>
                    <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-white text-xl py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-glow mt-4">

                      إرسال الطلب
                    </button>
                  </form>
                </> :

            <div className="py-16 flex flex-col items-center justify-center text-center animate-scale-in">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-3">
                    تم استلام طلبك بنجاح
                  </h3>
                  <p className="text-gray-500 text-lg">
                    سنتواصل معك في أقرب وقت ممكن.
                  </p>
                </div>
            }
            </div>
          </div>
        </div>
      }
    </section>);

}