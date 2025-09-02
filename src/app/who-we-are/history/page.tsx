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