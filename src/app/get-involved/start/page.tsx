import PageLayout from "@/components/Layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { chapters } from "@/content/chapters";
import { startChapterContent } from "@/content/start-chapter";
import Link from "next/link";
import { chapterPagesContent } from "@/content/chapter-pages";
import { RelatedContent } from "@/components/RelatedContent";
import { Callout } from "@/components/ui/Callout";
import { GoogleFormEmbed } from "@/components/ui/GoogleFormEmbed";
import { SocialCallout } from "@/components/ui/SocialCallout";

export default function StartChapterPage() {
  const { start } = chapterPagesContent;
  const { vision, process } = startChapterContent;

  return (
    <PageLayout
      title={start.page.title}
      subtitle={start.page.subtitle}
      hero
      reduced
    >
      {/* Introduction */}
      <Section spacing="sm">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-gray-600 mb-10">
            {start.page.introduction}
          </p>
          <div className="text-center">
            <a
              href="mailto:gyc23@cornell.edu" // Replace with your contact email
              className="inline-block rounded bg-[#607AD4] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#5068BD]"
            >
              Email Us
            </a>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
                {vision.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {vision.description}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    {vision.impact.title}
                  </h3>
                  <ul className="space-y-3">
                    {vision.impact.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 text-[#E4826D]">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    {vision.growth.title}
                  </h3>
                  <ul className="space-y-3">
                    {vision.growth.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 text-[#E4826D]">•</span>
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
    </PageLayout>
  );
}
