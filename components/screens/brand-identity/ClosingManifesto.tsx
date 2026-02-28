'use client';
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import { X, CheckCircle2, Loader2, Mail } from 'lucide-react';
const particleColors = [
'#C9A84C',
'#D4A574',
'#B87333',
'#C9A84C',
'#D4A574',
'#7A2D4A',
'#C9A84C',
'#B87333',
'#D4A574',
'#C9A84C',
'#1A6B5C',
'#D4A574',
'#B87333',
'#C9A84C',
'#7A2D4A'];

const confettiColors = ['#C9A84C', '#D4A574', '#B87333', '#7A2D4A', '#1A6B5C'];

const emberStyles = particleColors.map(() => ({
  w: Math.random() * 5 + 1,
  h: Math.random() * 5 + 1,
  left: Math.random() * 100,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 5
}));

const confettiStyles = confettiColors.flatMap(() =>
  [...Array(4)].map(() => ({
    duration: Math.random() * 0.8 + 0.4,
    tx: (Math.random() - 0.5) * 200,
    ty: (Math.random() - 0.5) * 200
  }))
);

export function ClosingManifesto() {
  const { ref, isVisible } = useScrollAnimation(0.4);
  const offsetY = useParallax(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const words = 'هذا الكيان ليس مجرد شركة…'.split(' ');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isSubmitting) setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, isSubmitting]);
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
            'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80")',
            transform: `translateY(${offsetY}px) scale(1.1)`
          }} />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0A05] via-[#0F0A05]/80 to-[#0F0A05]/60" />

        {/* Floating Embers with Color Variety */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {particleColors.map((color, i) => {
            const s = emberStyles[i];
            return (
            <div
              key={`ember-${i}`}
              className="absolute rounded-full blur-[1px]"
              style={{
                backgroundColor: color,
                opacity: 0.7,
                width: `${s.w}px`,
                height: `${s.h}px`,
                bottom: '-10px',
                left: `${s.left}%`,
                animation: `particle-float ${s.duration}s linear infinite`,
                animationDelay: `${s.delay}s`
              }} />
            );
          })}
        </div>

        <div
          className="container relative z-20 mx-auto px-6 text-center"
          ref={ref}>

          {/* Decorative Line Above */}
          <div
            className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>

            <div
              className="h-[1px] bg-gradient-to-l from-[#C9A84C] to-transparent"
              style={{
                width: isVisible ? '100px' : '0',
                transition: 'width 1.5s ease-out'
              }} />

            <div className="w-2 h-2 rotate-45 bg-[#C9A84C] animate-[spin-slow_6s_linear_infinite]" />
            <div
              className="h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent"
              style={{
                width: isVisible ? '100px' : '0',
                transition: 'width 1.5s ease-out 0.3s'
              }} />

          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 flex flex-wrap justify-center gap-4">
            {words.map((word, idx) =>
            <span
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-75'}`}
              style={{
                transitionDelay: `${idx * 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                textShadow: '0 4px 20px rgba(0,0,0,0.7)'
              }}>

                {word}
              </span>
            )}
          </h2>

          <div className="space-y-6 mb-20">
            <p
              className={`text-2xl text-[#D4A574] italic font-medium transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>

              نحن هنا لنصنع الفارق..
            </p>
            <p
              className={`text-2xl text-[#B87333] italic font-medium transition-all duration-1000 delay-[1300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>

              لنبني إرثاً لا يُمحى..
            </p>
            <p
              className={`text-4xl md:text-5xl font-black text-[#C9A84C] transition-all duration-1000 delay-[1600ms] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.7)'
              }}>

              أنت هنا… في المكان الصحيح.
            </p>
          </div>

          <div
            className={`relative flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 delay-[2000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md rounded-full border animate-[ping_3s_ease-in-out_infinite] opacity-15 pointer-events-none"
              style={{
                borderColor: '#C9A84C'
              }} />

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 bg-gradient-to-r from-[#C9A84C] via-[#D4A574] to-[#B87333] text-white px-10 py-4 rounded-full font-bold text-xl hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:-translate-y-1 transition-all duration-300">

              تواصل معنا الآن
            </button>
            <button
              className="relative z-10 bg-transparent text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:bg-white/10 overflow-hidden group"
              onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
              }>

              <div className="absolute inset-0 rounded-full border-2 border-white/30" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C9A84C] border-r-[#D4A574] group-hover:animate-[spin-slow_3s_linear_infinite]" />
              عودة للرئيسية
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
          className="absolute inset-0 bg-[#0F0A05]/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => !isSubmitting && setIsModalOpen(false)} />

          <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
            {/* Animated Gradient Header */}
            <div
            className="relative h-32 overflow-hidden flex items-center justify-center animate-[gradient-shift_6s_ease-in-out_infinite]"
            style={{
              background:
              'linear-gradient(135deg, #1B2A4A, #7A2D4A, #1A6B5C, #1B2A4A)',
              backgroundSize: '300% 300%'
            }}>

              <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />

              <Mail className="w-12 h-12 text-[#C9A84C] relative z-10" />
              <button
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute top-4 left-4 z-20 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              disabled={isSubmitting}>

                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-10">
              {isSuccess ?
            <div className="flex flex-col items-center justify-center py-8 animate-in zoom-in duration-500 relative">
                  {confettiColors.map((color, i) =>
              [...Array(4)].map((_, j) => {
                const cfg = confettiStyles[i * 4 + j];
                return (
              <div
                key={`c-${i}-${j}`}
                className="absolute w-2 h-2 rounded-sm"
                style={
                {
                  backgroundColor: color,
                  left: '50%',
                  top: '50%',
                  animation: `explode ${cfg.duration}s ease-out forwards`,
                  '--tx': `${cfg.tx}px`,
                  '--ty': `${cfg.ty}px`
                } as React.CSSProperties
                } />
                );
              })
                  )}
                  <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundColor: '#1A6B5C15'
                }}>

                    <CheckCircle2
                  className="w-12 h-12"
                  style={{
                    color: '#1A6B5C'
                  }} />

                  </div>
                  <h4 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                    تم الإرسال بنجاح
                  </h4>
                  <p className="text-xl text-gray-600">
                    سنتواصل معك في أقرب وقت لبدء رحلة النجاح.
                  </p>
                </div> :

            <>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                      ابدأ رحلتك معنا
                    </h3>
                    <p className="text-gray-600 font-medium">
                      دعنا نبدأ في بناء استراتيجيتك القادمة.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          الاسم الكامل
                        </label>
                        <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="أدخل اسمك" />

                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          الشركة / المؤسسة
                        </label>
                        <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="اسم شركتك" />

                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                    required
                    type="tel"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-right"
                    placeholder="05X XXX XXXX"
                    dir="ltr" />

                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        الرسالة
                      </label>
                      <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="كيف يمكننا مساعدتك؟">
                  </textarea>
                    </div>
                    <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C9A84C] via-[#D4A574] to-[#B87333] text-white py-4 rounded-xl font-bold text-xl hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0">

                      {isSubmitting ?
                  <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          جاري الإرسال...
                        </> :

                  'إرسال الطلب'
                  }
                    </button>
                  </form>
                </>
            }
            </div>
          </div>
        </div>
      }
    </>);

}