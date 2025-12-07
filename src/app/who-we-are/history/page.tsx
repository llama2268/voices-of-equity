import PageLayout from '../../../components/Layout/PageLayout';
import Timeline from '../../../components/Timeline/Timeline';
import { whoWeArePage } from '@/content';
import { Section } from '@/components/ui/Section';
import Image from 'next/image'

export default function HistoryPage() {
  const { title, subtitle, content, timeline, conclusion } = whoWeArePage.history;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className="relative w-11/12 h-[80vh] mx-auto">
        <Image
          src="/our-history-2.jpg"
          alt="History"
          layout="fill"
          objectFit='cover'
          objectPosition='center'
          quality={100}
          className="filter brightness-100"
        >
        </Image>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Impact Numbers Section */}
          <div className="mb-24 grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-[#498B86] mb-2">$40,000+</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">Raised for Health Equity Initiatives</p>
              <p className="text-gray-600 leading-relaxed">Fueling community impact. Voices of Equity has mobilized over $40,000 to support programs that expand access to care and advance health equity nationwide.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-[#498B86] mb-2">55+</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">Chapters Across Undergraduate Institutions Worldwide</p>
              <p className="text-gray-600 leading-relaxed">A growing global network. With more than 55 chapters across the U.S. and abroad, our student-led movement is embedding health equity into campuses and communities everywhere.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-4xl font-bold text-[#498B86] mb-2">60,000+</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">People Reached Through Health Equity Education</p>
              <p className="text-gray-600 leading-relaxed">Expanding awareness and action. Our content and programming have reached over 60,000 people, with more than 350 individuals trained through our health equity curriculum.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="overflow-x-hidden">
            <Timeline events={timeline} />
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            {conclusion}
          </p>

        </div>
      </Section>
    </PageLayout>
  );
} 