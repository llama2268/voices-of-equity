'use client';

import Image from 'next/image';
import PageLayout from '@/components/Layout/PageLayout';
import Reveal from '@/components/Animation/Reveal';
import ComingSoon from '@/components/ui/ComingSoon';

/**
 * A chapter page whose story is still being written: the facts we do have
 * (logo, region, leadership, founding year) in a strip under the hero,
 * then a plain holding note.
 */
export default function ChapterStub({
  name,
  school,
  logo,
  region,
  presidents,
  foundingYear,
  image,
  imageAlt,
}: {
  name: string;
  school: string;
  logo: string;
  region: string;
  presidents: string;
  foundingYear: string;
  image: string;
  imageAlt: string;
}) {
  const facts = [
    { label: 'Region', value: region },
    { label: 'Chapter presidents', value: presidents },
    { label: 'Established', value: foundingYear },
  ];

  return (
    <PageLayout title={`${name} Chapter`} subtitle={school} eyebrow="Our Chapters" image={image} imageAlt={imageAlt}>
      <section className="voe-ground-white pt-12 md:pt-16">
        <div className="voe-container">
          <Reveal variant="up">
            <div className="flex flex-col gap-8 rounded-3xl bg-[#F1F5FD] p-7 md:flex-row md:items-center md:gap-12 md:p-9">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(14,26,51,0.08)]">
                <Image src={logo} alt={`${school} logo`} width={72} height={72} className="h-full w-full object-contain" />
              </div>
              <dl className="grid flex-1 gap-6 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="voe-eyebrow mb-1.5">{f.label}</dt>
                    <dd className="font-display text-lg font-bold tracking-tight text-[#171219]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <ComingSoon
        title={`The ${name} chapter’s page is on its way.`}
        body="Chapter pages will carry each campus’s events, reflections, and leadership. Until then, the directory lists every chapter, and the national team can put you in touch."
        links={[
          { label: 'All chapters', href: '/get-involved/chapters' },
          { label: 'Contact us', href: '/contact' },
        ]}
      />
    </PageLayout>
  );
}
