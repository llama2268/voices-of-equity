'use client';

import Link from 'next/link';
import { whoWeArePage } from '@/content';
import Reveal from '@/components/Animation/Reveal';
import TimelineRail, { type RailMilestone } from '@/components/History/TimelineRail';
import { ParallaxFill } from '@/components/Animation/Parallax';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Our History.
 *
 * The origin story, then the timeline as a rail you scroll sideways: one
 * card per milestone along a single line, photographed, dated, with the
 * figures that belong to it set beneath the text.
 */
type Milestone = RailMilestone;

const MEDIA: Record<string, Pick<Milestone, 'image' | 'objectPosition' | 'stats' | 'href' | 'cta'>> = {
  'DEC 2024': { image: '/photos/founding-team.jpg', objectPosition: 'center 45%' },
  'JAN 2025': { image: '/cornell-chapter.jpg' },
  'FEB 2025': { image: '/impact-photos/cmu-1.jpeg', objectPosition: 'center 30%' },
  'MAR 2025': { image: '/impact-photos/howard-1.jpeg' },
  'JUN 2025': {
    image: '/impact-photos/uconn-1.jpeg',
    stats: [{ value: 30, suffix: '+', label: 'Active chapters' }],
  },
  'AUG 2025': {
    image: '/team-picture.jpg',
    stats: [
      { value: 100, suffix: '+', label: 'Student leaders' },
      { value: 40, suffix: '+', label: 'Institutions' },
    ],
  },
  'OCT 2025': {
    image: '/impact-photos/nhew-flyer.jpg',
    objectPosition: 'center top',
    stats: [
      { value: 43000, prefix: '$', suffix: '+', label: 'Raised' },
      { value: 5000, prefix: '$', suffix: '+', label: 'In grants' },
      { value: 50, suffix: '+', label: 'Campuses' },
    ],
  },
  'JAN 2026': { image: '/photos/timeline/onboarding-jan-2026.jpg' },
  'JUN 2026': {
    image: '/photos/timeline/vox-journal-vol1.jpg',
    href: 'https://voxthinktank.org/',
    cta: 'Read the journal',
  },
  'JUL 2026': { image: '/photos/timeline/bad-documentary.jpg' },
  'AUG 2026': {
    image: '/photos/timeline/onboarding-aug-2026.jpg',
    stats: [
      { value: 180, suffix: '+', label: 'Student leaders' },
      { value: 70, suffix: '+', label: 'Chapters' },
    ],
  },
};

export default function HistoryPage() {
  const { title, subtitle, content, timeline, conclusion } = whoWeArePage.history;

  const milestones: Milestone[] = timeline
    .filter((e) => 'title' in e && 'description' in e && !!e.title && !!e.description)
    .map((e) => {
      const key = String(e.year);
      const media = MEDIA[key] ?? { image: '/team-picture.jpg' };
      return {
        year: key,
        title: (e as { title: string }).title,
        description: (e as { description: string }).description,
        ...media,
      };
    });

  const [opening, ...rest] = content;

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Who We Are"
        title={title}
        subtitle={subtitle}
        image="/our-history-2.jpg"
        imageAlt="A chapter general body meeting"
        objectPosition="center 40%"
      />

      {/* ─── Where it started ────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="left">
                <p className="voe-eyebrow mb-4">Where it started</p>
                <h2 className="voe-display-lg font-display mb-8 text-[#171219]">
                  The message was clear: <span className="voe-highlight">the time for change is now.</span>
                </h2>
                <div className="relative">
                  <div className="voe-photo voe-ar-landscape shadow-[0_24px_60px_rgba(14,26,51,0.16)]">
                    <ParallaxFill
                      src="/photos/founding-team.jpg"
                      alt="The founding Voices of Equity team at Cornell"
                      strength={50}
                      objectPosition="center 45%"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <span className="voe-sticker -bottom-4 left-[5%]">Founded at Cornell, December 2024</span>
                </div>
              </Reveal>
            </div>
            <div>
              {opening && (
                <Reveal variant="up">
                  <p className="voe-lead mb-8">{opening}</p>
                </Reveal>
              )}
              {rest.map((paragraph, index) => (
                <Reveal key={index} variant="up" delay={80 + index * 80}>
                  <p className="mb-6 leading-relaxed text-[#4A5568] md:text-[17px]">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The journey - a rail you scroll sideways ───────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-8 md:mb-10">
              <p className="voe-eyebrow mb-3">Our journey</p>
              <h2 className="voe-display-lg font-display text-[#171219]">From idea to movement</h2>
            </div>
          </Reveal>
        </div>
        <Reveal variant="up" delay={100}>
          <TimelineRail milestones={milestones} />
        </Reveal>
      </section>

      {/* ─── Today ───────────────────────────────────────────────────── */}
      <Edge from={GROUND.blueSoft} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal variant="up">
              <p className="voe-eyebrow mb-4">Today</p>
              <p className="voe-lead mb-10 !text-white">{conclusion}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/who-we-are/team" className="voe-btn voe-btn--on-dark">
                  Meet the team
                </Link>
                <Link href="/get-involved/start" className="voe-btn voe-btn--outline-white">
                  Start a chapter
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
