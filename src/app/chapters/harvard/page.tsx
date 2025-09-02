import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';

export default function HarvardChapterPage() {
  return (
    <PageLayout title="Harvard Chapter">
      <Section>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-500">
              Harvard chapter information coming soon.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 