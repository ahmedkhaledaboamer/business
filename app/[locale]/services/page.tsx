import { HeroSection } from '@/components/screens/service/HeroSection'
import { ServiceNav } from '@/components/screens/service/ServiceNav'
import { ServicesGrid } from '@/components/screens/service/ServicesGrid'
import { categories } from '@/services'
import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('servicesPage.meta')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ServicesPage() {
  const locale = await getLocale()
  const isRTL = locale === 'ar'
  const t = await getTranslations('servicesPage.categories')
  const tPage = await getTranslations('servicesPage')
  const serviceContent = tPage.raw('serviceContent') as Record<string, Record<string, { title: string; tagline: string; items: string[] }>>
  const navCategories = categories.map((c) => ({
    id: c.id,
    title: t(`${c.id}.title`),
    color: c.color,
  }))
  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="min-h-svh bg-gray-50">
      <HeroSection />

      {/* Main layout: Sidebar + Content */}
      <div className="flex gap-8 px-4 sm:px-6 lg:px-[5%] mx-auto pt-12">
        {/* Sidebar Navigation */}
        <ServiceNav categories={navCategories} />

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-20">
          {categories.map((category) => (
            <ServicesGrid
              key={category.id}
              id={category.id}
              title={t(`${category.id}.title`)}
              color={category.color}
              serviceContent={serviceContent[category.id] ?? {}}
              isRTL={isRTL}
            />
          ))}
        </main>
      </div>
    </section>
  )
}
