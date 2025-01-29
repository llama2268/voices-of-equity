import PageLayout from '../../../components/Layout/PageLayout';
import Timeline from '../../../components/Timeline/Timeline';
import { whoWeAre } from '@/content/content';

export default function HistoryPage() {
  const { title, subtitle, content, timeline } = whoWeAre.history;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className="max-w-4xl mx-auto">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <Timeline events={timeline} />
      </div>
    </PageLayout>
  );
} 