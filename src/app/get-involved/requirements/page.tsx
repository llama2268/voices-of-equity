'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import { getInvolvedPage, siteConfig } from '@/content';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Chapter Requirements.
 *
 * Three long paragraphs of policy, so the page gives each one a card with
 * its essentials pulled out beside it - the reader gets the number before
 * the paragraph, and the paragraph is still there for the detail.
 */
const ESSENTIALS: Record<string, string[]> = {
  'General Body Meetings': ['Every other week', 'National slideshow → discussion → committee time'],
  Events: ['Three per semester', 'Philanthropic · Educational · Outreach'],
  'The Executive Board': ['Five roles', 'President · Philanthropy · Education · Outreach · Media'],
};

export default function RequirementsPage() {
  const { title, subtitle, requirements, bottomNote } = getInvolvedPage.requirements;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
      eyebrow="Get Involved"
      image="/photos/committee-briefing.jpg"
      imageAlt="A chapter committee briefing"
      objectPosition="center 38%"
    >
      {/* ─── The requirements ────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-12 max-w-2xl">
              <p className="voe-eyebrow mb-3">The commitment</p>
              <h2 className="voe-display-lg font-display text-[#171219]">What every chapter does</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {requirements.map((requirement, index) => {
              const essentials = ESSENTIALS[requirement.title] ?? [];
              return (
                <Reveal key={requirement.title} variant="up" delay={index * 90}>
                  <article className="grid gap-6 rounded-3xl bg-[#F1F5FD] p-7 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12 md:p-10">
                    <div>
                      <h3 className="voe-display-sm font-display mb-3 text-[#171219]">{requirement.title}</h3>
                      {essentials.length > 0 && (
                        <ul className="space-y-1.5">
                          {essentials.map((e) => (
                            <li key={e} className="flex gap-2.5 text-[15px] font-semibold text-[#587FDA]">
                              <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#587FDA]" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <p className="leading-relaxed text-[#4A5568] md:text-[17px]">
                      {requirement.description.replace(/\s+/g, ' ').trim()}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── By-laws ─────────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">The fine print</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">{bottomNote.title}</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">{bottomNote.description.replace(/\s+/g, ' ').trim()}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.links.contact} className="voe-btn voe-btn--on-dark">
                Request the by-laws
              </a>
              <Link href="/get-involved/start" className="voe-btn voe-btn--outline-white">
                Start a chapter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
