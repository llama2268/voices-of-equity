import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { whatWeDoPage } from '@/content';
import Image from 'next/image';

export default function NationalPage() {
  const { national } = whatWeDoPage;
  const timelineItems = [
    {
      type: 'intro',
      title: 'National Initiative',
      body: national.intro,
    },
    ...national.content.map((section) => ({
      type: section.type,
      body: section,
    })),
    national.poster
      ? {
          type: 'poster',
          title: 'Health Equity Week Poster',
          image: national.poster,
        }
      : null,
    national.speakerPoster
      ? {
          type: 'speaker',
          title: 'Virtual Speaker Event',
          image: national.speakerPoster,
        }
      : null,
  ].filter(Boolean) as Array<
    | { type: 'intro'; title: string; body: string }
    | { type: 'paragraph'; body: { type: 'paragraph'; text: string } }
    | { type: 'list'; body: { type: 'list'; items: string[] } }
    | { type: 'poster'; title: string; image: { src: string; alt: string } }
    | { type: 'speaker'; title: string; image: { src: string; alt: string } }
  >;

  return (
    <PageLayout title={national.title} subtitle={national.subtitle} reduced>
      <Section spacing="sm" className="pt-6 relative overflow-hidden bg-gradient-to-b from-white via-[#F4F7FF] to-white">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#607AD4]/15 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#498B86]/15 blur-3xl" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-3">National Initiatives</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              A living timeline of health equity action
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Follow the story of our national initiative as it unfolds through education, advocacy, and collective action.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#607AD4]/60 via-[#498B86]/40 to-[#607AD4]/10" />
            <div className="space-y-10 md:space-y-16">
              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative md:flex md:items-start md:justify-between">
                    <div className={`md:w-1/2 ${isEven ? 'md:pr-10' : 'md:pl-10 md:ml-auto'} pl-12 md:pl-0`}>
                      <div className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_25px_60px_-45px_rgba(96,122,212,0.35)] backdrop-blur">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs uppercase tracking-[0.25em] text-[#607AD4]">
                            Moment {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-[#498B86]" />
                          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                            {item.type === 'intro' ? 'Overview' : item.type === 'poster' ? 'Poster' : item.type === 'speaker' ? 'Speaker' : 'Update'}
                          </span>
                        </div>

                        {item.type === 'intro' && (
                          <>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.body}</p>
                          </>
                        )}

                        {item.type === 'paragraph' && (
                          <p className="text-gray-600 leading-relaxed">{item.body.text}</p>
                        )}

                        {item.type === 'list' && (
                          <ul className="space-y-3">
                            {item.body.items.map((listItem, itemIndex) => (
                              <li key={itemIndex} className="text-gray-700 flex items-start">
                                <span className="text-[#607AD4] mr-3 mt-1">•</span>
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {(item.type === 'poster' || item.type === 'speaker') && (
                          <>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                            <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden border border-[#607AD4]/15">
                              <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2">
                      <div className="h-4 w-4 rounded-full bg-[#607AD4] ring-4 ring-[#607AD4]/20 animate-pulse" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mt-16 pt-12 border-t border-white/60">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {national.partners.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {national.partners.organizations.map((org, index) => (
                <div key={index} className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_25px_60px_-45px_rgba(73,139,134,0.35)] backdrop-blur text-center">
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
                      className="inline-block mt-4 px-4 py-2 bg-[#607AD4] text-white rounded-lg hover:bg-[#4F66B8] transition-colors"
                    >
                      View Handout
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
