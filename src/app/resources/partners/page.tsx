import Image from 'next/image';

import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';

const partnerGroups = [
  {
    title: '',
    partners: [
      {
        name: 'Young People in Recovery (YPR)',
        logo: '/ypr-logo.png',
        website: 'https://youngpeopleinrecovery.org/',
        handout: '/ypr-handout.png',
        description:
          'Recovery-oriented supports focused on evidence-based access to treatment pathways and peer-led education.'
      },
      {
        name: 'The Phoenix',
        logo: '/thephoenixlogo.png',
        website: 'https://thephoenix.org/',
        handout: '/phoenixhandout.pdf',
        description:
          'Recovery community programs and partnerships built around support, connection, and long-term stability.'
      },
      {
        name: 'Operation Golden Shield',
        logo: '/operationgoldenshield.jpg',
        website: 'https://operationgoldenshield.com/',
        description:
          'Community recovery and support partnership extending resources and services for people impacted by addiction and instability.'
      }
    ]
  }
];

export default function PartnersPage() {
  return (
    <PageLayout title="Our Partners" subtitle="Organizations supporting Voices of Equity's national initiatives">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Section spacing="sm" className="bg-gradient-to-b from-white via-[#F4F7FF] to-white">
          {partnerGroups.map((group) => (
            <div key={group.title} className="mb-12">
              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-3">{group.title}</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Partners</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.partners.map((partner) => (
                  <article
                    key={partner.name}
                    className="rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_25px_60px_-45px_rgba(96,122,212,0.35)] backdrop-blur"
                  >
                    <div className="mx-auto mb-5 w-40 h-40 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mt-3 text-center">{partner.description}</p>
                    <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-4 py-3 rounded-lg bg-[#607AD4] text-white hover:bg-[#4F66B8] transition-colors"
                      >
                        Visit Website
                      </a>
                      {partner.handout && (
                        <a
                          href={partner.handout}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center px-4 py-3 rounded-lg border border-[#607AD4]/40 text-[#607AD4] hover:bg-[#607AD4] hover:text-white transition-colors"
                        >
                          View Handout
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </Section>
      </div>
    </PageLayout>
  );
}
