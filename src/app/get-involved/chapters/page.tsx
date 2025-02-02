import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { getInvolved } from '@/content/content';

export default function ChaptersPage() {
  const { chapters } = getInvolved;
  
  return (
    <PageLayout title={chapters.title} subtitle={chapters.subtitle}>
      <Section>
        <div className="space-y-16">
          {/* Introduction */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Our Network
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {chapters.content}
              </p>
            </div>
          </div>

          {/* Active Chapters */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Active Chapters
              </p>
              <h2 className="text-3xl font-bold mb-4">Find a Chapter Near You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {/* Chapter cards */}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
