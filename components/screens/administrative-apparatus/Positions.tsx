'use client';
import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
const categories = ['الكل', 'إدارة', 'حماية', 'علاقات', 'تحليل', 'مالي', 'دولي'];
const positions = [
{
  id: 1,
  title: 'مدير إدارة الأزمات',
  category: 'حماية',
  desc: 'التدخل الفوري لحل أي أزمة قبل وصولها لمكتبك.',
  img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  details: [
  'رصد المخاطر المبكرة',
  'التدخل السريع والفعال',
  'حماية السمعة المؤسسية']

},
{
  id: 2,
  title: 'مدير التدقيق الداخلي',
  category: 'تحليل',
  desc: 'مراقبة دقيقة لكل العمليات لضمان النزاهة.',
  img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  details: [
  'مراجعة القوائم المالية',
  'تقييم الأداء التشغيلي',
  'ضمان الامتثال']

},
{
  id: 3,
  title: 'مدير العلاقات الخارجية',
  category: 'علاقات',
  desc: 'بناء جسور التواصل مع الجهات الحكومية والخاصة.',
  img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
  details: ['إدارة العلاقات الحكومية', 'تمثيل المؤسسة', 'توسيع شبكة الشركاء']
},
{
  id: 4,
  title: 'مدير الحماية الاستراتيجية',
  category: 'حماية',
  desc: 'تأمين المصالح القانونية والتشغيلية.',
  img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  details: ['الحماية القانونية', 'تأمين الأصول', 'استراتيجيات الدفاع']
},
{
  id: 5,
  title: 'مدير الدراسات والتحليل',
  category: 'تحليل',
  desc: 'توفير بيانات دقيقة لدعم قراراتك.',
  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
  details: ['تحليل السوق', 'دراسات الجدوى', 'استشراف المستقبل']
},
{
  id: 6,
  title: 'مدير العمليات التنفيذية',
  category: 'إدارة',
  desc: 'الإشراف على تنفيذ المشاريع بدقة.',
  img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  details: ['إدارة المشاريع', 'متابعة التنفيذ', 'ضمان الجودة']
},
{
  id: 7,
  title: 'مدير تطوير الأعمال',
  category: 'إدارة',
  desc: 'اقتناص الفرص وتوسيع نطاق العمل.',
  img: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
  details: ['تحديد الفرص الجديدة', 'بناء الشراكات', 'استراتيجيات النمو']
},
{
  id: 8,
  title: 'مدير الهوية والاتصال',
  category: 'علاقات',
  desc: 'صناعة الصورة الذهنية اللائقة بمكانتك.',
  img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80',
  details: [
  'إدارة العلامة التجارية',
  'العلاقات العامة',
  'التواصل الاستراتيجي']

},
{
  id: 9,
  title: 'مدير إدارة المخاطر',
  category: 'حماية',
  desc: 'توقع المخاطر ووضع خطط استباقية.',
  img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
  details: ['تقييم المخاطر', 'خطط الطوارئ', 'استمرارية الأعمال']
},
{
  id: 10,
  title: 'المدير المالي',
  category: 'مالي',
  desc: 'إدارة الثروات وتوجيه الاستثمارات.',
  img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
  details: ['التخطيط المالي', 'إدارة الاستثمارات', 'التحليل المالي']
},
{
  id: 11,
  title: 'مدير المشاريع الكبرى',
  category: 'إدارة',
  desc: 'قيادة المبادرات الضخمة والمعقدة.',
  img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  details: ['تخطيط المشاريع', 'إدارة الموارد', 'تسليم المشاريع']
},
{
  id: 12,
  title: 'مدير العمليات الدولية',
  category: 'دولي',
  desc: 'إدارة المصالح خارج الحدود.',
  img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
  details: ['التوسع الدولي', 'إدارة الفروع الخارجية', 'الامتثال الدولي']
},
{
  id: 13,
  title: 'مدير الامتثال',
  category: 'حماية',
  desc: 'ضمان التوافق مع القوانين والتشريعات.',
  img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  details: ['المراجعة القانونية', 'تطبيق اللوائح', 'التدريب على الامتثال']
},
{
  id: 14,
  title: 'مدير أمن المعلومات',
  category: 'حماية',
  desc: 'حماية البيانات والملفات السرية.',
  img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
  details: ['الأمن السيبراني', 'حماية البيانات', 'إدارة الوصول']
},
{
  id: 15,
  title: 'مدير الجودة',
  category: 'تحليل',
  desc: 'ضمان أعلى معايير الأداء.',
  img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  details: ['مراقبة الجودة', 'تحسين العمليات', 'تطبيق المعايير']
},
{
  id: 16,
  title: 'مدير علاقات كبار الشخصيات',
  category: 'علاقات',
  desc: 'إدارة شبكة العلاقات الخاصة والنخبوية.',
  img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
  details: ['إدارة العلاقات الخاصة', 'تنظيم اللقاءات', 'البروتوكول']
},
{
  id: 17,
  title: 'مدير التفاوض الاستراتيجي',
  category: 'إدارة',
  desc: 'إدارة الصفقات الكبرى لضمان أفضل الشروط.',
  img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  details: ['إدارة المفاوضات', 'إغلاق الصفقات', 'حل النزاعات']
},
{
  id: 18,
  title: 'مدير الامتيازات الخاصة',
  category: 'علاقات',
  desc: 'توفير خدمات حصرية استثنائية.',
  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  details: ['الخدمات الحصرية', 'إدارة السفر', 'الطلبات الخاصة']
},
{
  id: 19,
  title: 'مدير الملفات السرية',
  category: 'حماية',
  desc: 'إدارة القضايا الحساسة بتكتم تام.',
  img: 'https://images.unsplash.com/photo-1614064641913-6b059828cdd4?auto=format&fit=crop&q=80',
  details: ['حفظ الأسرار', 'إدارة الأزمات الحساسة', 'التحقيقات الخاصة']
},
{
  id: 20,
  title: 'مدير المتابعة التنفيذية',
  category: 'إدارة',
  desc: 'مراقبة تنفيذ توجيهاتك بدقة.',
  img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  details: ['متابعة القرارات', 'تقارير الأداء', 'ضمان التنفيذ']
}];

const categoryColors: Record<
  string,
  {
    bg: string;
    text: string;
    border: string;
    badge: string;
    hoverBg: string;
  }> =
{
  إدارة: {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
    border: 'border-blue-500',
    badge: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-500'
  },
  حماية: {
    bg: 'bg-rose-500',
    text: 'text-rose-500',
    border: 'border-rose-500',
    badge: 'bg-rose-500',
    hoverBg: 'hover:bg-rose-500'
  },
  علاقات: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-500',
    border: 'border-emerald-500',
    badge: 'bg-emerald-500',
    hoverBg: 'hover:bg-emerald-500'
  },
  تحليل: {
    bg: 'bg-purple-500',
    text: 'text-purple-500',
    border: 'border-purple-500',
    badge: 'bg-purple-500',
    hoverBg: 'hover:bg-purple-500'
  },
  مالي: {
    bg: 'bg-amber-500',
    text: 'text-amber-500',
    border: 'border-amber-500',
    badge: 'bg-amber-500',
    hoverBg: 'hover:bg-amber-500'
  },
  دولي: {
    bg: 'bg-indigo-500',
    text: 'text-indigo-500',
    border: 'border-indigo-500',
    badge: 'bg-indigo-500',
    hoverBg: 'hover:bg-indigo-500'
  }
};
export function Positions() {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [activeTab, setActiveTab] = useState('الكل');
  const [selectedPosition, setSelectedPosition] = useState<
    (typeof positions)[0] | null>(
    null);
  useEffect(() => {
    if (selectedPosition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPosition]);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPosition(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  const filteredPositions =
  activeTab === 'الكل' ?
  positions :
  positions.filter((p) => p.category === activeTab);
  return (
    <section className="py-24 bg-white px-[5%]">
      <div className=" mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 inline-block relative">
            المناصب التنفيذية
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gold rounded-full w-1/2 mx-auto" />
          </h2>
          <p className="text-[clamp(1rem,1vw,3rem)] text-gray-600 mt-8 mx-auto">
            كل منصب يؤدي دورًا محددًا… بينما تبقى أنت في موقع القرار فقط
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const color = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-semibold text-[clamp(1rem,1vw,3rem)] transition-colors ${activeTab === cat ? `${color ? color.bg : 'bg-gold'} text-white` : 'bg-warm-gray text-charcoal hover:bg-gray-200'}`}>

                {cat}
              </button>);

          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPositions.map((pos) => {
            const color =
            categoryColors[pos.category] || categoryColors['إدارة'];
            return (
              <div
                key={pos.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border-0">

                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${color.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10`} />


                <div className="relative h-[clamp(10rem,20vw,30rem)] overflow-hidden rounded-t-2xl">
                  <Image
                    src={pos.img}
                    alt={pos.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={800}
                    height={600}
                    />

                  <div
                    className={`absolute top-4 right-4 ${color.badge} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md text-sm`}>

                    {pos.id}
                  </div>
                  {/* Category Tag */}
                  <div
                    className={`absolute bottom-3 left-3 ${color.bg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>

                    {pos.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {pos.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 h-10 line-clamp-2">
                    {pos.desc}
                  </p>
                  <button
                    className={`w-full py-2.5 rounded-lg border-2 ${color.border} ${color.text} ${color.hoverBg} hover:text-white transition-colors font-semibold text-sm`}
                    onClick={() => setSelectedPosition(pos)}>

                    عرض التفاصيل
                  </button>
                </div>
              </div>);

          })}
        </div>
      </div>

      {/* Position Detail Modal */}
      {selectedPosition &&
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        dir="rtl">

          <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPosition(null)} />

          <div className="relative bg-white rounded-2xl shadow-heavy w-full max-w-[600px] overflow-hidden animate-slide-up max-h-[90vh] overflow-y-auto">
            <button
            onClick={() => setSelectedPosition(null)}
            className="absolute top-4 left-4 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors">

              <X className="w-4 h-4" />
            </button>

            <div className="h-[250px] relative">
              <Image
              src={selectedPosition.img}
              alt={selectedPosition.title}
              className="w-full h-full object-cover"
              width={800}
              height={600}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span
                  className={`inline-block ${categoryColors[selectedPosition.category]?.bg || 'bg-gold'} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>

                    {selectedPosition.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {selectedPosition.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {selectedPosition.desc}
              </p>

              <h4 className="font-bold text-charcoal text-xl mb-4">
                المهام والمسؤوليات:
              </h4>
              <ul className="space-y-3">
                {selectedPosition.details.map((detail, idx) =>
              <li key={idx} className="flex items-center gap-3">
                    <div
                  className={`w-6 h-6 rounded-full ${categoryColors[selectedPosition.category]?.bg || 'bg-gold'}/20 flex items-center justify-center shrink-0`}
                  style={{
                    backgroundColor: `${categoryColors[selectedPosition.category] ? '' : ''}`
                  }}>

                      <Check
                    className={`w-4 h-4 ${categoryColors[selectedPosition.category]?.text || 'text-gold'}`} />

                    </div>
                    <span className="text-gray-800 font-medium">{detail}</span>
                  </li>
              )}
              </ul>

              <div className="mt-8 flex justify-end">
                <button
                onClick={() => setSelectedPosition(null)}
                className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-2.5 rounded-lg font-semibold transition-colors">

                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

}