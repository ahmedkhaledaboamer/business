'use client';

import React, { useState } from 'react';
import {
  X,
  Crown,
  Scale,
  ShieldCheck,
  Rocket,
  Lock,
  Handshake,
  Quote } from
'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const accentColors = [
'#C9A84C',
'#B87333',
'#1A6B5C',
'#7A2D4A',
'#1B2A4A',
'#D4A574'];

const terms = [
{
  term: 'النفوذ',
  desc: 'القدرة على التأثير في مسار القرارات الكبرى',
  img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
  quote: 'النفوذ الحقيقي هو الذي لا يُرى، بل تُرى نتائجه.',
  icon: Crown
},
{
  term: 'القرار',
  desc: 'اللحظة التي تفصل بين التردد والإنجاز',
  img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  quote: 'القرار الصائب في الوقت الخاطئ هو قرار خاطئ.',
  icon: Scale
},
{
  term: 'الحماية',
  desc: 'الدرع الذي يحمي المصالح قبل أن تُهدد',
  img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  quote: 'أفضل حماية هي تلك التي تمنع الخطر قبل وقوعه.',
  icon: ShieldCheck
},
{
  term: 'التنفيذ',
  desc: 'تحويل الخطط إلى نتائج ملموسة بدقة',
  img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  quote: 'الفكرة بلا تنفيذ هي مجرد حلم.',
  icon: Rocket
},
{
  term: 'السرية',
  desc: 'الثقة المطلقة في حفظ المعلومات',
  img: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&q=80',
  quote: 'السرية ليست إخفاءً، بل هي احترام للثقة.',
  icon: Lock
},
{
  term: 'الشراكة',
  desc: 'علاقة مبنية على الاحترام والمصلحة المشتركة',
  img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
  quote: 'الشراكة الناجحة هي التي تجعل 1+1 يساوي 3.',
  icon: Handshake
}];

export function BrandDictionary() {
  const [activeTerm, setActiveTerm] = useState<(typeof terms)[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className="py-28 bg-[#F8F7F4] px-[5%]">
      <div className="mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            قاموس الكيان
          </h2>
          <p className="text-xl text-gray-500">مصطلحات تشكل لغتنا الخاصة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((item, idx) => {
            const Icon = item.icon;
            const accent = accentColors[idx];
            return (
              <div
                key={idx}
                onClick={() => setActiveTerm(item)}
                className={`relative bg-white rounded-2xl p-8 cursor-pointer group transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${idx * 100}ms`
                }}>

                {/* Hover Border Glow */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 z-10 pointer-events-none group-hover:border-current"
                  style={{
                    color: accent + '60'
                  }} />

                <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 z-0" />

                {/* Number Badge */}
                <div
                  className="absolute top-4 left-4 z-20 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{
                    backgroundColor: accent + 'CC'
                  }}>

                  0{idx + 1}
                </div>

                <div className="relative z-20 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: accent + '15'
                    }}>

                    <Icon
                      className="w-8 h-8"
                      style={{
                        color: accent
                      }} />

                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1A1A1A] hover-color-target transition-colors duration-300"
                    style={
                    {
                      '--hover-color': accent
                    } as React.CSSProperties
                    }>

                    {item.term}
                  </h3>
                  <p className="text-sm text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Modal */}
      {activeTerm &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
          className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActiveTerm(null)} />

          <div className="relative bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div
            className="h-2 w-full"
            style={{
              background: `linear-gradient(to right, ${accentColors[terms.indexOf(activeTerm)]}, #D4A574, ${accentColors[(terms.indexOf(activeTerm) + 2) % 6]})`
            }} />

            <button
            onClick={() => setActiveTerm(null)}
            className="absolute top-6 left-6 z-10 bg-white/90 hover:bg-white p-2 rounded-full text-gray-800 transition-all hover:scale-110 shadow-md">

              <X className="w-5 h-5" />
            </button>
            <div className="relative h-72 overflow-hidden">
              <img
              src={activeTerm.img}
              alt={activeTerm.term}
              className="w-full h-full object-cover" />

              {/* Dot Pattern Overlay */}
              <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 right-8 flex items-center gap-4">
                <activeTerm.icon className="w-10 h-10 text-[#C9A84C]" />
                <h3 className="text-4xl font-bold text-white drop-shadow-md">
                  {activeTerm.term}
                </h3>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-2xl text-[#1A1A1A] font-bold mb-8 leading-relaxed">
                {activeTerm.desc}
              </p>
              <div className="relative p-6 bg-[#FDF8F0] rounded-xl border border-[#C9A84C]/20">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C9A84C]/20" />
                <p className="text-xl text-gray-700 italic font-medium relative z-10">
                  &quot;{activeTerm.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

}