import { HeroSection } from '@/components/screens/service/HeroSection'
import { ServiceNav } from '@/components/screens/service/ServiceNav'
import { ServicesGrid } from '@/components/screens/service/ServicesGrid'
import { categories } from '@/services'
export default function ServicesPage() {
  const navCategories = categories.map((c) => ({
    id: c.id,
    title: c.title,
    color: c.color,
  }))
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <HeroSection />

      {/* Main layout: Sidebar + Content */}
      <div className="flex gap-8 px-[5%] mx-auto pt-12">
        {/* Sidebar Navigation */}
        <ServiceNav categories={navCategories} />

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-20">
          {categories.map((category) => (
            <ServicesGrid
              key={category.id}
              id={category.id}
              title={category.title}
              color={category.color}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
