import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { whatWeDoPage } from '@/content';
import Image from 'next/image';

export default function NationalPage() {
  const { national } = whatWeDoPage;
  
  return (
    <PageLayout title={national.title} subtitle={national.subtitle}>
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Intro */}
          <div className="text-lg text-gray-700">
            <p>{national.intro}</p>
          </div>

          {/* Content sections */}
          <div className="space-y-6">
            {national.content.map((section, index) => (
              <div key={index}>
                {section.type === 'paragraph' && (
                  <p className="text-gray-700 leading-relaxed">{section.text}</p>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-3 ml-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="text-primary-600 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {national.partners.title}
            </h2>
            <div className="flex justify-center">
              {national.partners.organizations.map((org, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={200}
                      height={200}
                      className="mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-gray-900">{org.name}</h3>
                    {org.description && (
                      <p className="text-sm text-gray-600 mt-2">{org.description}</p>
                    )}
                    {org.name === 'Young People in Recovery' && (
                        <div className="mt-4">
                          <Image
                            src={org.handoutPreview}
                            alt="Young People in Recovery — page 1"
                            width={600}
                            height={800}
                            className="mx-auto rounded shadow-sm"
                          />
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {national.secondContent && national.secondContent.length > 0 && (
          <Section>
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                {national.secondContent.map((block, idx) => (
                  <article
                    key={idx}
                    className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {block.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {block.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Section>
        )}
        </div>
      </Section>
    </PageLayout>
  );
}