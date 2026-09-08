"use client"

import { whoWeArePage } from '@/content';
import Link from 'next/link';
import Image from 'next/image';
import Reveal, { RevealWords } from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';
import CoreValues from '@/components/Mission/CoreValues';

/**
 * Mission page.
 *
 * Hero, then the mission statement set large on Equity Blue with the three
 * pillars as photo cards hanging off the bottom of it into the white
 * section below - the card-over-the-boundary move from the reference
 * site. Vision as a full split with the photograph running edge to edge.
 * Then the values, then the ask.
 */

const PILLARS = [
  {
    title: 'Educate',
    image: '/photos/classroom-session.jpg',
    alt: 'A curriculum session running in a classroom',
    position: 'center 40%',
  },
  {
    title: 'Inspire',
    image: '/photos/speaker-session.jpg',
    alt: 'A speaker addressing a room of students',
    position: 'center 35%',
  },
  {
    title: 'Empower',
    image: '/photos/ucf-tabling.jpg',
    alt: 'Chapter members tabling on campus',
    position: 'center 45%',
  },
];

export default function MissionPage() {
  const { introduction, mission, vision, callToAction } = whoWeArePage.mission;
  const points = mission.keyPoints ?? [];

  return (
    <>
      {/* ─── 1. Hero ─────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Who We Are"
        title="Our Mission"
        subtitle={introduction.text}
        image="/team-picture.jpg"
        imageAlt="The Voices of Equity team"
        objectPosition="center 38%"
      />

      {/* ─── 2. The mission, set large, with the pillars hanging off it ── */}
      <section className="voe-ground-blue voe-texture pb-36 pt-[var(--voe-section-y)] md:pb-44">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-5 text-center !text-white/80">Our Mission</p>
          </Reveal>
          <RevealWords
            as="h2"
            text={mission.text}
            className="voe-display-lg font-display mx-auto max-w-5xl text-center text-white"
            stagger={24}
            highlight={['educate', 'inspire', 'empower']}
          />
        </div>
      </section>

      <section className="voe-ground-white pb-[var(--voe-section-y)]">
        <div className="voe-container">
          {/* pulled up over the blue section above */}
          <div className="-mt-28 grid gap-6 md:-mt-32 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 120} className="h-full">
                <article className="voe-card flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(14,26,51,0.18)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ParallaxFill
                      src={p.image}
                      alt={p.alt}
                      objectPosition={p.position}
                      strength={40}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="voe-display-sm font-display mb-2 text-[#171219]">{p.title}</h3>
                    <div className="voe-rule mb-4" />
                    <p className="text-[15px] leading-relaxed text-[#4A5568]">
                      {points[i]?.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Vision - the two of them rising out of the panel ────── */}
      <section className="voe-section voe-ground-blue-soft overflow-hidden">
        <div className="voe-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal variant="left">
              <div className="voe-popout voe-popout--duo mx-auto max-w-xl lg:max-w-none">
                <div className="voe-popout__panel voe-popout__panel--blue voe-texture" />
                <Image
                  src="/photos/cutouts/our-vision-2-cutout.png"
                  alt="Two chapter leaders at a chapter meeting"
                  width={1261}
                  height={1200}
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="voe-popout__figure"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="voe-eyebrow mb-4">Looking Ahead</p>
              <h2 className="voe-display-lg font-display mb-5 text-[#171219]">Our Vision</h2>
              <div className="voe-rule mb-6" />
              <p className="voe-lead">{vision.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. Values ───────────────────────────────────────────────── */}
      <Edge from={GROUND.blueSoft} />
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <CoreValues />
      </section>

      {/* ─── 5. The ask ──────────────────────────────────────────────── */}
      <Edge from={GROUND.blue} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <h2 className="voe-display-lg font-display mb-5 text-white">{callToAction.heading}</h2>
            <p className="voe-lead mx-auto mb-10 max-w-2xl !text-white/85">{callToAction.text}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={callToAction.buttonLink} className="voe-btn voe-btn--on-dark">
                Get Involved
              </Link>
              <Link href="/who-we-are/history" className="voe-btn voe-btn--outline-white">
                Learn Our History
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
