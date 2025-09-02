import PageLayout from "@/components/Layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { getInvolvedPage, siteConfig } from "@/content";

export default function StartChapterPage() {
  const { title, subtitle, content } = getInvolvedPage.start;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
    >
      <Section spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            {content}
          </p>
          <a
            href={siteConfig.links.contact}
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            Contact Us to Get Started
          </a>
        </div>
      </Section>
    </PageLayout>
  );
}
