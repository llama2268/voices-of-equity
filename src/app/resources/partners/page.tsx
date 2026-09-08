'use client';

import Image from 'next/image';
import PageLayout from '@/components/Layout/PageLayout';
import Link from 'next/link';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';

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
    <PageLayout
      title="Our Partners"
      subtitle="Organizations supporting Voices of Equity's national initiatives"
      eyebrow="Partnerships"
      image="/media/16.jpeg"
      imageAlt="Chapter members running an outreach table"
      objectPosition="center 45%"
    >
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-12 max-w-2xl">
              <p className="voe-eyebrow mb-3">In good company</p>
              <h2 className="voe-display-lg font-display text-[#171219]">Organizations we work alongside</h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {partnerGroups.flatMap((g) => g.partners).map((partner, i) => (
              <Reveal key={partner.name} variant="up" delay={i * 110} className="h-full">
                <article className="voe-card flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-[0_14px_36px_rgba(14,26,51,0.10)]">
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-[#F1F5FD] p-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={112}
                      height={112}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="voe-display-sm font-display text-[#171219]">{partner.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#4A5568]">{partner.description}</p>
                  <div className="mt-7 flex flex-col items-stretch gap-3">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="voe-btn voe-btn--primary justify-center">
                      Visit website
                    </a>
                    {partner.handout && (
                      <a href={partner.handout} target="_blank" rel="noopener noreferrer" className="voe-btn voe-btn--ghost justify-center">
                        View handout
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Join them</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">Work with our chapters.</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">
              Community health organizations, clinics and nonprofits — student capacity for the work you already lead.
            </p>
            <Link href="/get-involved/partner" className="voe-btn voe-btn--on-dark">
              Partner with us
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
