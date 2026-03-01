"use client"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
interface Category {
  id: string
  title: string
  color: string
  serviceCount?: number
}
interface ServiceNavProps {
  categories: Category[]
}
export function ServiceNav({ categories }: ServiceNavProps) {
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const t = useTranslations('servicesPage.nav')
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((c) => document.getElementById(c.id))
      const scrollPosition = window.scrollY + 250
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(categories[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories])
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 32
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMobileOpen(false)
  }
  const sidebarContent = (
    <nav className="flex flex-col gap-1.5 py-4">
      {categories.map((category, index) => {
        const isActive = activeId === category.id
        return (
          <motion.button
            key={category.id}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.04,
              duration: 0.3,
            }}
            onClick={() => scrollToSection(category.id)}
            className={`cursor-pointer group relative flex items-center gap-3 w-full text-start px-4 py-3 rounded-xl text-[clamp(0.75rem,1vw,1.25rem)] font-medium transition-all duration-300 ${isActive ? 'text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900'}`}
            style={
              isActive
                ? {
                    backgroundColor: category.color,
                  }
                : {}
            }
          >

            {/* Color dot */}
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-300"
              style={{
                backgroundColor: isActive ? '#fff' : category.color,
                transform: isActive ? 'scale(1.2)' : 'scale(1)',
              }}
            />

            <span className="truncate leading-relaxed">{category.title}</span>

            {/* Arrow for active */}
            {isActive && (
              !isRTL ? (
                <ChevronRight size={14} className="ms-auto shrink-0 opacity-70" />
              ) : (
                <ChevronLeft size={14} className="ms-auto shrink-0 opacity-70" />
              )
            )}
          </motion.button>
        )
      })}
    </nav>
  )
  return (
    <>
      {/* Desktop Sidebar - في منتصف الارتفاع ولا يدخل تحت الهيدر */}
      <aside className="hidden lg:block w-[280px] shrink-0 min-h-0">
        <div
          className="sticky max-h-[calc(100vh-4rem)] w-full bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden"
          style={{
            top: 'max(5rem, calc(50vh - 14rem))',
          }}
        >
          {/* Sidebar Header */}
          <div className="px-5 pt-5 pb-3 border-b border-gray-100">
            <h3 className="text-[clamp(0.75rem,1.5vw,1.5rem)] font-bold text-gray-800">{t('title')}</h3>
            <p className="text-[clamp(0.75rem,0.5vw,1rem)] text-gray-400 mt-1">
              {t('subtitle')}
            </p>
          </div>

          {/* Scrollable nav - مُوسَّط عمودياً عندما المحتوى أقل من الارتفاع */}
          <div className="px-3 flex flex-col justify-center min-h-[200px] max-h-[calc(100vh-11rem)] overflow-y-auto sidebar-scroll">
            {sidebarContent}
          </div>

          {/* Sidebar Footer */}
          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
            <p className="text-[clamp(0.75rem,0.5vw,1rem)] text-gray-400 text-center">
              {categories.length} {t('count')} •{' '}
              {categories.reduce(
                (acc, c) => acc + (c.serviceCount ?? 0),
                0,
              ) || '40+'}{' '}
              {t('service')}
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 start-6 z-50 bg-[#0A1628] text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        style={{
          boxShadow: '0 8px 32px rgba(10, 22, 40, 0.4)',
        }}
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{
                x: isRTL ? '100%' : '-100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: isRTL ? '100%' : '-100%',
              }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              className="lg:hidden fixed top-0 start-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[70] shadow-2xl overflow-hidden flex flex-col rtl:start-auto rtl:end-0"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-[clamp(0.75rem,1.5vw,1.5rem)] font-bold text-gray-800">
                  {t('title')}
                </h3>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Nav */}
              <div className="flex-1 overflow-y-auto px-3 sidebar-scroll">
                {sidebarContent}
              </div>

              {/* Mobile Footer */}
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                <p className="text-[clamp(0.75rem,0.5vw,1rem)] text-gray-400 text-center">
                  {categories.length} {t('count')} • 40+ {t('service')}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
