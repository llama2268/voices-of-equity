import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { getInvolvedPage } from '@/content';
import Link from 'next/link';

export default function RequirementsPage() {
  const { title, subtitle, requirements, bottomNote } = getInvolvedPage.requirements;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
    >
      {/* Requirements */}
      <Section spacing="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {requirements.map((requirement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-primary-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {requirement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {requirement.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom Note */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">{bottomNote.title}</h3>
          <p className="text-lg text-gray-600 mb-8">
            {bottomNote.description}
          </p>
          <Link
            href="/get-involved/start"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}