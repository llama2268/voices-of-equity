'use client';
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import ImpactTracker from '@/components/Stats/ImpactTracker';
// import { ChapterMap } from '@/components/Map/ChapterMap'; // Removed static import
import Image from 'next/image';

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

      {/* Impact Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF6F4] to-white" spacing="lg">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#607AD4]/25 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#498B86]/25 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-4">Impact</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              55+ chapters. 60,000+ views. 400+ active members.
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Our impact is measured in moments of learning, care, and connection — and in the
              systems we strengthen for long-term health equity.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-[#607AD4]/20 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-semibold text-[#607AD4]">55+</div>
                <div className="text-sm text-gray-500">Chapters</div>
              </div>
              <div className="rounded-xl border border-[#498B86]/20 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-semibold text-[#498B86]">60,000+</div>
                <div className="text-sm text-gray-500">Views</div>
              </div>
              <div className="rounded-xl border border-[#607AD4]/20 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-semibold text-[#607AD4]">400+</div>
                <div className="text-sm text-gray-500">Active Members</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/70 shadow-[0_30px_80px_-50px_rgba(96,122,212,0.45)] backdrop-blur">
              <div className="relative w-full h-[320px] md:h-[420px]">
                <Image
                  src="/impact-stories.jpeg"
                  alt="Voices of Equity impact moments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm md:text-base">
                  Student-led programs advancing health equity through education, advocacy, and community action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Tracker */}
      <Section className="bg-gradient-to-b from-white via-[#F4F7FF] to-white">
        <div className="max-w-7xl mx-auto">
          <ImpactTracker />
        </div>
      </Section>

      {/* Our Impact Map + Narrative */}
      <Section className="bg-gradient-to-b from-white via-[#EAF6F4] to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold mb-6 text-[#607AD4]">Our Global Reach</h2>
            <ChapterMap />
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#607AD4]/15 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-[#498B86] mb-3">Beyond the map</p>
              <p className="text-base text-gray-600 leading-relaxed">
                Each chapter represents a network of students and mentors who show up in classrooms,
                clinics, and communities. We amplify health equity conversations through education,
                outreach, and media — making it easier for new leaders to take action.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-[#F4F7FF] p-3">
                  <div className="text-lg font-semibold text-[#607AD4]">55+</div>
                  <div className="text-xs text-gray-500">Chapters</div>
                </div>
                <div className="rounded-lg bg-[#EAF6F4] p-3">
                  <div className="text-lg font-semibold text-[#498B86]">60k+</div>
                  <div className="text-xs text-gray-500">Views</div>
                </div>
                <div className="rounded-lg bg-[#F4F7FF] p-3">
                  <div className="text-lg font-semibold text-[#607AD4]">350+</div>
                  <div className="text-xs text-gray-500">Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter Reflections */}
      <Section className="bg-gradient-to-b from-white via-[#F4F7FF] to-white">
        <ChapterReflections
          reflections={whatWeDoPage.impact.chapterReflections}
          title="Chapter Reflections"
          subtitle="Fall 2025"
        />
      </Section>

      {/* Chapter Spotlights */}
      <Section
        title="Chapter Spotlights"
        subtitle="Leading the charge on campus"
        className="bg-gradient-to-b from-white via-[#EAF6F4] to-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {whatWeDoPage.impact.spotlights.map((school, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-[#498B86]/15 bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className="relative w-full h-24 mb-3">
                <Image src={school.image} alt={school.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xs font-semibold text-gray-700 text-center">{school.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* National Impacts */}
      <Section className="bg-gradient-to-b from-white via-[#F4F7FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#607AD4]/10 bg-white/80 p-8 shadow-sm backdrop-blur">
            <p className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-3">National Impacts</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#498B86]">Impacts from Health Equity Week Fall 2025</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-gray-700">
              {whatWeDoPage.impact.nationalStats.map((stat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#607AD4] mt-1">{stat.icon}</span>
                  <span>{stat.label}</span>
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
