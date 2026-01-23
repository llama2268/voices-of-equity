'use client';
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import ImpactTracker from '@/components/Stats/ImpactTracker';
// import { ChapterMap } from '@/components/Map/ChapterMap'; // Removed static import
import Image from 'next/image';
import Link from 'next/link';

// Dynamically import ChapterMap with SSR disabled to prevent build errors
import dynamic from 'next/dynamic';
const ChapterMap = dynamic(() => import('@/components/Map/ChapterMap').then(mod => mod.ChapterMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  )
});
import { ImpactGallery } from '@/components/Gallery/ImpactGallery';
import { ChapterReflections } from '@/components/Chapter/ChapterReflections';
import { whatWeDoPage } from '@/content/what-we-do';

export default function ImpactPage() {
  const galleryItems = Array.isArray(whatWeDoPage.impact.content) ? whatWeDoPage.impact.content : [];

  return (
    <PageLayout title="Our Impact" subtitle="Driving Change Across Communities">

      {/* Impact Tracker Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <ImpactTracker />
        </div>
      </Section>

      {/* Chapter Reflections - Fall 2025 */}
      <Section>
        <ChapterReflections
          reflections={whatWeDoPage.impact.chapterReflections}
          title="Chapter Reflections"
          subtitle="Fall 2025"
        />
      </Section>

      {/* Interactive Map Section */}
      <Section>
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Global Reach</h2>
          <ChapterMap />

          {/* Bold Impact Numbers Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-xl sm:text-2xl font-bold bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <span className="text-primary-600 mr-2">55+</span> chapters
            </div>
            <div className="hidden sm:block text-gray-300">∙</div>
            <div className="flex items-center">
              <span className="text-primary-600 mr-2">60,000+</span> views
            </div>
            <div className="hidden sm:block text-gray-300">∙</div>
            <div className="flex items-center">
              <span className="text-primary-600 mr-2">350+</span> active members
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter Spotlights Tiles */}
      <Section title="Chapter Spotlights" subtitle="Leading the charge on campus">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDoPage.impact.spotlights.map((school, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-64 flex flex-col items-center justify-center p-4">
              <div className="relative w-full h-40 mb-4">
                <Image src={school.image} alt={school.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center">{school.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Main Impact Content */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">National Impacts at a Glance</h2>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 mb-12 text-left">
            <h3 className="text-2xl font-bold mb-4 text-[#498B86]">Impacts from Health Equity Week Fall 2025</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              {whatWeDoPage.impact.nationalStats.map((stat, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-[#498B86] mr-2">{stat.icon}</span> {stat.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Community Gallery / Initiatives in Action */}
      <div className="mb-20">
        <ImpactGallery items={galleryItems} />
      </div>

    </PageLayout>
  );
}
