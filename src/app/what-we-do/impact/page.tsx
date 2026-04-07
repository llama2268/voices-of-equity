'use client';
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import ImpactTracker from '@/components/Stats/ImpactTracker';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const ChapterMap = dynamic(() => import('@/components/Map/SimpleChapterMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-[#F7F8FA] flex items-center justify-center text-gray-400">
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

      {/* Impact Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 text-left">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Impact</p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] leading-tight">
              55+ chapters. 60,000+ views. 400+ active members.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#4A5568] leading-relaxed">
              Our impact is measured in moments of learning, care, and connection — and in the
              systems we strengthen for long-term health equity.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="text-2xl font-bold text-[#587FDA]">55+</div>
                <div className="text-sm text-[#4A5568] mt-1">Chapters</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="text-2xl font-bold text-[#587FDA]">60,000+</div>
                <div className="text-sm text-[#4A5568] mt-1">Views</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="text-2xl font-bold text-[#587FDA]">400+</div>
                <div className="text-sm text-[#4A5568] mt-1">Active Members</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-lg border border-gray-200">
              <div className="relative w-full h-[320px] md:h-[420px]">
                <Image
                  src="/impact-stories.jpeg"
                  alt="Voices of Equity impact moments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6">
                <p className="text-white text-sm md:text-base">
                  Student-led programs advancing health equity through education, advocacy, and community action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Impact Tracker */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactTracker />
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Our Impact Map + Narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#587FDA] mb-8">Our Global Reach</h2>
            <ChapterMap />
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Beyond the map</p>
              <p className="text-base text-[#4A5568] leading-relaxed">
                Each chapter represents a network of students and mentors who show up in classrooms,
                clinics, and communities. We amplify health equity conversations through education,
                outreach, and media — making it easier for new leaders to take action.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#F7F8FA] rounded-lg p-4">
                  <div className="text-lg font-bold text-[#587FDA]">55+</div>
                  <div className="text-xs text-[#4A5568]">Chapters</div>
                </div>
                <div className="bg-[#F7F8FA] rounded-lg p-4">
                  <div className="text-lg font-bold text-[#587FDA]">60k+</div>
                  <div className="text-xs text-[#4A5568]">Views</div>
                </div>
                <div className="bg-[#F7F8FA] rounded-lg p-4">
                  <div className="text-lg font-bold text-[#587FDA]">350+</div>
                  <div className="text-xs text-[#4A5568]">Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Chapter Reflections */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChapterReflections
            reflections={whatWeDoPage.impact.chapterReflections}
            title="Chapter Reflections"
            subtitle="Fall 2025"
          />
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Chapter Spotlights */}
      <Section
        title="Chapter Spotlights"
        subtitle="Leading the charge on campus"
        className="bg-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {whatWeDoPage.impact.spotlights.map((school, i) => {
            const isLogo = school.image.includes('/icons/chapters/');
            return (
              <div key={i} className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="relative w-full h-24 mb-3 overflow-hidden rounded">
                  {isLogo ? (
                    <Image src={school.image} alt={school.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-[#587FDA] flex items-center justify-center rounded">
                      <span className="text-white text-xs font-semibold text-center px-2 leading-tight">{school.name}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xs font-semibold text-[#171219] text-center">{school.name}</h3>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="border-t border-gray-200" />

      {/* National Impacts */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">National Impacts</p>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#171219] mb-6">Impacts from Health Equity Week Fall 2025</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-[#4A5568]">
              {whatWeDoPage.impact.nationalStats.map((stat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#587FDA] mt-1">{stat.icon}</span>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Community Gallery / Initiatives in Action */}
      <div className="py-24 bg-white">
        <ImpactGallery items={galleryItems} />
      </div>

    </PageLayout>
  );
}
