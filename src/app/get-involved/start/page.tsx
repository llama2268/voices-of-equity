import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters } from '@/content/chapters';
import { startChapterContent } from '@/content/start-chapter';
import Link from 'next/link';
import { chapterPagesContent } from '@/content/chapter-pages';
import { RelatedContent } from '@/components/RelatedContent';
import { Callout } from '@/components/ui/Callout';
import { GoogleFormEmbed } from '@/components/ui/GoogleFormEmbed';
import { SocialCallout } from '@/components/ui/SocialCallout';

export default function StartChapterPage() {
  const { start } = chapterPagesContent;
  const { vision, process, cta } = startChapterContent;

  return (
    <PageLayout
      title={start.page.title}
      subtitle={start.page.subtitle}
      hero
      reduced
    >
      {/* Introduction */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {start.page.introduction}
          </p>
        </div>
        <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{cta.title}</h2>
          <div className="bg-[#498B86] text-white rounded-lg p-12">
            <p className="text-xl mb-8">{cta.description}</p>
            <div className="flex gap-4 justify-center">
              {/* <Link
                href={cta.buttons.primary.href}
                className="px-8 py-4 bg-white text-[#498B86] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                {cta.buttons.primary.text}
              </Link> */}
              <a
                href={cta.buttons.secondary.href}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                {cta.buttons.secondary.text}
              </a>
            </div>
          </div>
        </div>
      </Section>

        {/* Vision Section */}
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
      

      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <Callout
            eyebrow="Chapter Resources"
            title="Tools for Success"
            description="Access our comprehensive collection of guides, templates, and best practices for running a successful chapter."
            link={{
              text: "Explore Resources",
              href: "/what-we-do/resources"
            }}
            variant="resources"
          />
        </div>
      </Section>

      {/* Process Steps */}
      {/* <Section variant="alternate" spacing="sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{process.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {chapters.requirements.process.steps.map((step) => (
              <div key={step.number} className="text-center">
                <div 
                  className="w-12 h-12 rounded-full bg-[#498B86] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4"
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section> */}


      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <RelatedContent {...chapterPagesContent.start.relatedContent} />
        </div>
      </Section>

      {/* Application Form */}
      {/* <Section 
        title="Start Your Chapter"
        subtitle="Application Form"
        description="Complete the form below to begin your chapter application process"
      >
        <div className="max-w-4xl mx-auto">
          <GoogleFormEmbed
            formUrl="https://docs.google.com/forms/d/e/1FAIpQLSelfZqxZzRBYG2BEA55JVz2skaAfLLFfFglPGDFAFiA9lUj2w/viewform?embedded=true"
            title="Chapter Application Form"
          />
        </div>
      </Section> */}

      {/* Social Media Callout */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>
    </PageLayout>
  );
}