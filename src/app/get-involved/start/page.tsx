import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters } from '@/content/chapters';
import { startChapterContent } from '@/content/start-chapter';
import Link from 'next/link';

export default function StartChapterPage() {
  const { page, vision, process, cta } = startChapterContent;

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      reduced
    >
      {/* Vision Section */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                {vision.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {vision.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">{vision.impact.title}</h3>
                  <ul className="space-y-3">
                    {vision.impact.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-[#E4826D] mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">{vision.growth.title}</h3>
                  <ul className="space-y-3">
                    {vision.growth.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-[#E4826D] mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Steps */}
      <Section variant="alternate" spacing="sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{process.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {chapters.requirements.process.steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E4826D] text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements Preview */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{cta.title}</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-lg text-gray-600 mb-8">
              {cta.description}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href={cta.buttons.primary.href}
                className="px-8 py-4 bg-[#E4826D] hover:bg-[#d97661] text-white rounded-lg font-semibold transition-colors"
              >
                {cta.buttons.primary.text}
              </Link>
              <a
                href={cta.buttons.secondary.href}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-semibold transition-colors border-2 border-gray-200"
              >
                {cta.buttons.secondary.text}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}