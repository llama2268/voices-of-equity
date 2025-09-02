import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';

export default function NewsPage() {
  return (
    <PageLayout 
      title="Voices & Impact" 
      subtitle="Deep dives into health equity issues and updates from our community"
    >
      <Section>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-500">
              News and impact stories coming soon.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}