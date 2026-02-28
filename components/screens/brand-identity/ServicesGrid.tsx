'use client';
import React, { useMemo, useState } from 'react';
import {
  X,
  ArrowLeft,
  Crown,
  Map,
  Users,
  Monitor,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

const serviceColors = [
  '#C9A84C',
  '#C9A84C',
  '#1A6B5C',
  '#1A6B5C',
  '#B87333',
  '#B87333',
  '#7A2D4A',
  '#7A2D4A',
];

const serviceImages = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80',
  'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&q=80',
];

const serviceIcons = [Crown, Map, Users, Monitor, TrendingUp, Lock];

export function ServicesGrid() {
  const t = useTranslations('brandIdentity.services');
  const services = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        title: t(`items.${i}.title`),
        desc: t(`items.${i}.desc`),
        fullDesc: t(`items.${i}.detail`),
        img: serviceImages[i],
        icon: serviceIcons[i],
      })),
    [t]
  );
  const [activeService, setActiveService] = useState<
    (typeof services)[0] | null
  >(null);
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className="py-28 bg-[#F8F7F4] relative px-[5%]">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
          'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />


      <div className=" mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="text-[clamp(0.75rem,2vw,5rem)] font-bold text-[#1A1A1A] mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-[clamp(1rem,1vw,3rem)] text-gray-500 font-medium">
            {t('sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const color = serviceColors[idx];
            const row = Math.floor(idx / 4);
            const col = idx % 4;
            const delay = row * 200 + col * 150;
            return (
              <div
                key={idx}
                onClick={() => setActiveService(srv)}
                className={`bg-white rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_48px_rgba(0,0,0,0.1)] cursor-pointer group relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{
                  transitionDelay: `${delay}ms`
                }}>

                {/* Number Badge */}
                <div
                  className="absolute top-4 left-4 z-20 font-bold px-3 py-1 rounded-full text-xs text-white shadow-sm"
                  style={{
                    backgroundColor: color
                  }}>

                  0{idx + 1}
                </div>

                <div className="relative h-[clamp(10rem,20vw,30rem)] overflow-hidden">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

                  {/* Gradient Sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${color}50, transparent 60%)`
                    }} />

                </div>

                <div className="p-8 relative bg-white">
                  <div className="absolute -top-8 right-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 transition-transform duration-300 rotate-3 group-hover:rotate-0">
                    <Icon
                      className="w-8 h-8"
                      style={{
                        color
                      }} />

                  </div>
                  <h3
                    className="text-xl font-bold text-[#1A1A1A] mb-3 mt-4 hover-color-target transition-colors duration-300"
                    style={
                    {
                      '--hover-color': color
                    } as React.CSSProperties
                    }>

                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-[clamp(1rem,1vw,3rem)] leading-relaxed font-medium">
                    {srv.desc}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Modal */}
      {activeService &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
          className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveService(null)} />

          <div className="relative bg-white rounded-[32px] w-full max-w-4xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500 flex flex-col md:flex-row">
            <button
            onClick={() => setActiveService(null)}
            className="absolute top-6 left-6 z-20 bg-white/90 hover:bg-white p-3 rounded-full text-gray-800 transition-all hover:scale-110 shadow-lg">

              <X className="w-5 h-5" />
            </button>
            <div className="w-full md:w-5/12 h-64 md:h-auto relative">
              <img
              src={activeService.img}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent md:bg-gradient-to-l" />
            </div>
            <div className="w-full md:w-7/12 p-10 md:p-12 flex flex-col justify-center relative bg-white">
              <div
              className="absolute top-0 right-0 left-0 h-2"
              style={{
                background: `linear-gradient(to right, ${serviceColors[services.indexOf(activeService)]}, #D4A574)`
              }} />

              <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm"
              style={{
                backgroundColor:
                serviceColors[services.indexOf(activeService)] + '15'
              }}>

                {(() => {
                  const Icon = activeService.icon;
                  return (
                    <Icon
                      className="w-8 h-8"
                      style={{
                        color: serviceColors[services.indexOf(activeService)]
                      }}
                    />
                  );
                })()}

              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                {activeService.title}
              </h3>
              <div
              className="w-12 h-1 rounded-full mb-6"
              style={{
                backgroundColor:
                serviceColors[services.indexOf(activeService)]
              }} />

              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                {activeService.fullDesc}
              </p>
              <button
              className="text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:-translate-y-1 transition-all self-start"
              style={{
                background: `linear-gradient(to right, ${serviceColors[services.indexOf(activeService)]}, #D4A574)`
              }}>

                {t('cta')}
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      }
    </section>);

}