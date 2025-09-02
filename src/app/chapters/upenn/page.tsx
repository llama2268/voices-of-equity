import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';

export default function UPennChapterPage() {
  return (
    <PageLayout title="UPenn Chapter">
      <Section>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-500">
              UPenn chapter information coming soon.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}