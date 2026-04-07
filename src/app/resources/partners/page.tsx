import Image from 'next/image';

import PageLayout from '@/components/Layout/PageLayout';

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
    <PageLayout>
      {/* Dark Hero */}
      <section className="relative bg-[#171219] pt-32 pb-20 overflow-hidden">
        {/* Watermark logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/logo-new.png"
            alt=""
            width={600}
            height={540}
            className="opacity-5"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Partnerships</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">Our Partners</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Organizations supporting Voices of Equity&apos;s national initiatives
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {partnerGroups.map((group) => (
          <section key={group.title} className="py-24">
            <div className="mb-12">
              {group.title && (
                <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">{group.title}</p>
              )}
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#171219]">Our Partners</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.partners.map((partner) => (
                <article
                  key={partner.name}
                  className="bg-white border border-gray-200 rounded-lg p-8"
                >
                  <div className="mx-auto mb-6 w-36 h-36 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={144}
                      height={144}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#171219] text-center">{partner.name}</h3>
                  <p className="text-sm text-[#4A5568] mt-3 text-center leading-relaxed">{partner.description}</p>
                  <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-8 py-3 rounded-md bg-[#587FDA] text-white hover:bg-[#4566B8] transition-colors font-medium"
                    >
                      Visit Website
                    </a>
                    {partner.handout && (
                      <a
                        href={partner.handout}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-8 py-3 rounded-md border border-gray-200 text-[#587FDA] hover:bg-[#F7F8FA] transition-colors font-medium"
                      >
                        View Handout
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
