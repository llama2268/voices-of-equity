import PageLayout from '../../../components/Layout/PageLayout';
import Timeline from '../../../components/Timeline/Timeline';
import { whoWeAre } from '@/content/content';
import { Section } from '@/components/ui/Section';

export default function HistoryPage() {
  const { title, subtitle, content, timeline } = whoWeAre.history;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <Section title={title} subtitle={subtitle}>
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
    </PageLayout>
  );
} 