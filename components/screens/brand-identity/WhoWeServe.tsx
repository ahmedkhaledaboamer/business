'use client';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const tagColors = ['#C9A84C', '#1A6B5C', '#B87333', '#7A2D4A'];
const photoUrls = [
  '/imges/brand-identity/49.webp',
  '/imges/brand-identity/50.webp',
  '/imges/brand-identity/51.webp',
  '/imges/brand-identity/52.webp',
];

export function WhoWeServe() {
  const t = useTranslations('brandIdentity.whoWeServe');
  const labels = (t.raw('labels') as string[]) || [];
  const photos = photoUrls.map((url, i) => ({ url, label: labels[i] || '', color: tagColors[i] }));
  const bullets = labels.slice(4, 10);
  const tags = (t.raw('tags') as string[]) || [];
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section className="py-28 bg-white overflow-hidden px-[5%]">
      <div className=" mx-auto px-6">
        <div
          className="flex flex-col lg:flex-row gap-20 items-center"
          ref={ref}>

          <div className="flex-1 relative">
            <h2 className="font-bold text-[#1A1A1A] mb-8 text-[clamp(0.75rem,2vw,6rem)]">
              {t('title')}
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed font-medium text-[clamp(0.75rem,2vw,1.5rem)]">
              {t('subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-16">
              {bullets.map((bullet, idx) =>
              <div
                key={idx}
                className={`flex items-center gap-4 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{
                  transitionDelay: `${idx * 150}ms`
                }}>

                  <div
                  className="bg-white border-2 p-1 rounded-full shadow-sm"
                  style={{
                    borderColor: tagColors[idx % 4]
                  }}>

                    <Check
                    className="w-4 h-4"
                    strokeWidth={3}
                    style={{
                      color: tagColors[idx % 4]
                    }} />

                  </div>
                  <span className="text-[#1A1A1A] font-bold text-[clamp(0.75rem,1vw,2rem)]">
                    {bullet}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mb-8 opacity-40">
              <div className="w-12 h-[1px] bg-[#C9A84C]" />
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
              <div className="w-12 h-[1px] bg-[#C9A84C]" />
            </div>

            <div className="flex flex-wrap gap-4">
              {tags.map((tag, idx) =>
              <span
                key={idx}
                className={`px-6 py-2.5 text-white rounded-full text-sm font-bold shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                style={{
                  background: `linear-gradient(135deg, ${tagColors[idx]}, ${tagColors[idx]}CC)`,
                  transitionDelay: `${idx * 100 + 800}ms`
                }}>

                  {tag}
                </span>
              )}
            </div>
          </div>

          {/* Creative Offset Collage */}
          <div className="flex-1 w-full">
            <div className="relative h-[600px] w-full mx-auto">
              {photos.map((photo, idx) => {
                const positions = [
                'top-0 right-0 w-3/5 h-[55%] z-10',
                'bottom-0 right-10 w-1/2 h-[40%] z-20',
                'top-12 left-0 w-[45%] h-[45%] z-30',
                'bottom-12 left-4 w-2/5 h-[35%] z-40'];

                return (
                  <div
                    key={idx}
                    className={`absolute ${positions[idx]} rounded-2xl overflow-hidden group transition-all duration-1000 shadow-[0_16px_32px_rgba(0,0,0,0.15)] hover:z-50 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
                    style={{
                      transitionDelay: `${idx * 200}ms`
                    }}>

                    <Image
                      src={photo.url}
                      alt={photo.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={400}
                      height={400}
                      />

                    <div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 pointer-events-none z-10"
                      style={{
                        borderColor: 'transparent'
                      }} />

                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 3px ${photo.color}`
                      }} />


                    {/* Colored Dot Indicator */}
                    <div
                      className="absolute top-3 right-3 w-3 h-3 rounded-full shadow-sm z-20"
                      style={{
                        backgroundColor: photo.color
                      }} />


                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-xl px-4 py-2 border border-white/50 rounded-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {photo.label}
                      </span>
                    </div>
                  </div>);

              })}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-dashed z-0 transition-all duration-[1500ms] animate-[spin-slow_30s_linear_infinite] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                style={{
                  borderColor: '#C9A84C30'
                }} />

            </div>
          </div>
        </div>
      </div>
    </section>);

}