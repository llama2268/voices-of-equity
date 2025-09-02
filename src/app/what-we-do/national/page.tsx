import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { whatWeDoPage } from '@/content';

export default function NationalPage() {
  const { national } = whatWeDoPage;
  
  return (
    <PageLayout title={national.title} subtitle={national.subtitle}>
      <Section>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
              {national.content}
            </h1>
            <p className="text-xl text-gray-500">
              National initiatives coming soon.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}