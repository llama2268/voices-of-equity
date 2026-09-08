'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * National Initiatives.
 *
 * Two programs, told in order: National Health Equity Week (the flagship,
 * Fall 2025) and the CARE Packet initiative (Spring 2026). The CARE
 * material used to auto-rotate inside a carousel; it now reads top to
 * bottom beside a sticky overview image, so nothing moves out from under
 * the reader.
 */
const WEEK_ACTIVITIES = [
  {
    title: 'Fundraising',
    body: 'Fundraising efforts to support national and local partners advancing equity in addiction care.',
  },
  {
    title: 'Advocacy',
    body: 'Advocacy campaigns that raised awareness and pushed for systemic change.',
  },
  {
    title: 'Education',
    body: 'Educational modules grounding members in the science and policies of addiction.',
  },
  {
    title: 'Panels',
    body: 'Panels and guest speakers featuring professionals and advocates.',
  },
];

const CARE = [
  {
    title: 'What are CARE Packets?',
    body: [
      'The Community Access and Resource Education (CARE) Packet initiative is a Voices of Equity service-based project designed to improve access to care beyond the clinical setting.',
      'Healthcare does not end at discharge. For many patients, recovery and long-term health depend on access to food, housing, transportation, financial assistance, mental health support, and other community-based services.',
    ],
  },
  {
    title: 'Bridging the gap',
    body: [
      'CARE Packets help bridge this gap by connecting patients with vetted, local resources that address the social determinants of health.',
      'Through this initiative, Voices of Equity chapters develop patient-facing resource packets tailored to the specific needs of their surrounding communities.',
    ],
  },
  {
    title: 'Where CARE Packets are used',
    body: [
      'CARE Packets are intended for use by hospitals, clinics, urgent care centers, and community health organizations as supplemental discharge or referral materials.',
      'Each packet is customized to the local community, ensuring patients receive relevant and actionable information about available support services.',
    ],
  },
];

const CHAPTER_PHOTOS: Array<{ src: string; alt: string; tall?: boolean }> = [
  { src: '/highlights/tabling-highlight-3.jpg', alt: 'Chapter members at a campus table', tall: true },
  { src: '/images/chapters/howard-1.jpg', alt: 'Howard University chapter event' },
  { src: '/images/chapters/uconn-2.jpg', alt: 'UConn chapter outreach' },
  { src: '/images/chapters/arkansas-2.jpg', alt: 'University of Arkansas chapter', tall: true },
  { src: '/images/chapters/arkansas-3.jpg', alt: 'University of Arkansas chapter event' },
  { src: '/impact-photos/general-2.jpg', alt: 'Chapter members at a general body meeting' },
];

export default function NationalPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="What We Do"
        title="National Initiatives"
        subtitle="Coordinated programs uniting 70+ chapters in a shared mission to advance health equity nationwide."
        image="/photos/speaker-session.jpg"
        imageAlt="A national speaker session"
        objectPosition="center 42%"
      />

      {/* ─── Flagship ────────────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal variant="left">
              <div className="voe-photo voe-ar-landscape shadow-[0_24px_60px_rgba(14,26,51,0.16)]">
                <ParallaxFill
                  src="/highlights/tabling-highlight-2.jpg"
                  alt="A chapter's Addiction in Health Equity table during National Health Equity Week"
                  strength={60}
                  objectPosition="center 45%"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="voe-eyebrow mb-4">Flagship initiative</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">National Health Equity Week</h2>
              <p className="voe-lead mb-5">
                National Health Equity Week is Voices of Equity’s flagship annual initiative, uniting chapters across the country in a coordinated week of education, outreach, and community engagement around pressing health equity issues.
              </p>
              <p className="leading-relaxed text-[#4A5568]">
                For Fall 2025, our focus was health equity through the lens of addiction — examining how substance use is shaped by disparities in access to care, stigma, systemic bias, and socioeconomic barriers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── The week itself ─────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <div className="voe-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Reveal variant="fade">
                <p className="voe-eyebrow mb-3">Fall 2025 · Addiction and equity</p>
                <h2 className="voe-display-md font-display mb-10 text-white">One week, every chapter.</h2>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                {WEEK_ACTIVITIES.map((a, i) => (
                  <Reveal key={a.title} variant="up" delay={i * 90} className="h-full">
                    <article className="voe-value h-full">
                      <span className="voe-value__rule" aria-hidden="true" />
                      <h3 className="voe-value__title font-display">{a.title}</h3>
                      <p className="voe-value__body">{a.body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal variant="scale" delay={200}>
              <div className="mx-auto max-w-sm lg:max-w-none">
                <div className="voe-photo voe-ar-portrait rotate-[2.5deg] shadow-[0_30px_70px_rgba(14,26,51,0.35)] transition-transform duration-500 hover:rotate-0">
                  <Image
                    src="/health-equity-week-2025-poster.jpg"
                    alt="Health Equity Week 2025 poster"
                    fill
                    sizes="(max-width: 1024px) 90vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CARE ────────────────────────────────────────────────────── */}
      <Edge from={GROUND.blue} />
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-14 max-w-3xl">
              <p className="voe-eyebrow mb-3">Spring 2026</p>
              <h2 className="voe-display-lg font-display text-[#171219]">
                Community Access and Resource Education (CARE)
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="left">
                <div className="voe-photo voe-ar-landscape shadow-[0_24px_60px_rgba(14,26,51,0.16)]">
                  <Image
                    src="/highlights/slide_4.png"
                    alt="CARE initiative overview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div>
              {CARE.map((c, i) => (
                <Reveal key={c.title} variant="up" delay={i * 80}>
                  <div className={i === 0 ? '' : 'mt-12 border-t border-[#171219]/10 pt-12'}>
                    <h3 className="voe-display-sm font-display mb-4 text-[#171219]">{c.title}</h3>
                    <div className="space-y-4">
                      {c.body.map((p) => (
                        <p key={p} className="leading-relaxed text-[#4A5568] md:text-[17px]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapters in action ──────────────────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">On campus</p>
            <h2 className="voe-display-md font-display mb-10 text-[#171219]">Chapters in action</h2>
          </Reveal>
          <div className="grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-4 sm:auto-rows-[190px] md:grid-cols-4 md:gap-5 lg:auto-rows-[230px]">
            {CHAPTER_PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} variant="scale" delay={i * 70} className={photo.tall ? 'row-span-2' : ''}>
                <div className="voe-photo voe-grade h-full w-full shadow-[0_14px_36px_rgba(14,26,51,0.12)]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <Edge from={GROUND.blueSoft} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">What’s next</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">Join the movement.</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">
              Start a chapter at your university and be part of our next national initiative.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-involved/start" className="voe-btn voe-btn--on-dark">
                Start a chapter
              </Link>
              <Link href="/what-we-do/impact" className="voe-btn voe-btn--outline-white">
                See our impact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
