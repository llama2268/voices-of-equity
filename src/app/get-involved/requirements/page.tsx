import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters } from '@/content/chapters';
import Link from 'next/link';
import { chapterPagesContent } from '@/content/chapter-pages';
import { RelatedContent } from '@/components/RelatedContent';

export default function RequirementsPage() {
  const { requirements } = chapterPagesContent;

  return (
    <PageLayout
      title={requirements.page.title}
      subtitle={requirements.page.subtitle}
      hero
      reduced
    >
      {/* Introduction */}
      <Section 
        title="Chapter Requirements"
        subtitle="What you need to know"
        spacing="sm"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {requirements.page.introduction}
          </p>
        </div>
      </Section>

      {/* Requirements Overview */}
      <Section
        title="Requirements Overview"
        subtitle="Key criteria for starting a chapter"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.sections.map((section, index) => (
              <div 
                key={`section-${index}-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border-l-4 border-[#498B86]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={`item-${index}-${itemIndex}-${item.substring(0, 20)}`} 
                      className="flex items-start"
                    >
                      <span className="text-[#498B86] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section 
        variant="alternate"
        title={requirements.process.title}
        subtitle="Follow these steps to get started"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {requirements.process.steps.map((step) => (
              <div 
                key={`step-${step.number}-${step.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center"
              >
                <div 
                  className="w-12 h-12 rounded-full bg-[#498B86] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section 
        spacing="sm"
        title="Related Resources"
        subtitle="Learn more about our chapter program"
      >
        <div className="max-w-4xl mx-auto">
          <RelatedContent {...chapterPagesContent.requirements.relatedContent} />
        </div>
      </Section>

      {/* Call to Action */}
      <Section 
        variant="highlight"
        title="Take Action"
        subtitle="Begin your journey with us"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start a Chapter?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing network of changemakers and make a difference in your community.
          </p>
          <Link
            href="/get-involved/start"
            className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white rounded-lg font-semibold transition-colors"
          >
            Start Your Chapter
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}