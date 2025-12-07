import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { whatWeDoPage } from '@/content';
import Image from 'next/image';

export default function NationalPage() {
  const { national } = whatWeDoPage;

  return (
    <PageLayout title={national.title} subtitle={national.subtitle} reduced>
      <Section spacing="sm" className="pt-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Intro */}
          <div className="text-lg text-gray-700">
            <p>{national.intro}</p>
          </div>

          {/* Poster */}
          {national.poster && (
            <div className="flex justify-center my-6">
              <Image
                src={national.poster.src}
                alt={national.poster.alt}
                width={800}
                height={1200}
                className="rounded-lg shadow-xl"
              />
            </div>
          )}

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

          {/* Speaker Event Poster */}
          {national.speakerPoster && (
            <div className="flex justify-center my-6">
              <Image
                src={national.speakerPoster.src}
                alt={national.speakerPoster.alt}
                width={800}
                height={1200}
                className="rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Partners Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {national.partners.title}
            </h2>
            <div className="flex justify-center gap-8">
              {national.partners.organizations.map((org, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="mx-auto mb-4 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900">{org.name}</h3>
                    {org.description && (
                      <p className="text-sm text-gray-600 mt-2">{org.description}</p>
                    )}
                    {org.handout && (
                      <a
                        href={org.handout}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        View Handout
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
