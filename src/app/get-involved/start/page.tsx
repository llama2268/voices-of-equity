'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import { getInvolvedPage, siteConfig } from '@/content';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Start a Chapter.
 *
 * This page was a "Coming Soon" placeholder. Everything it needed already
 * lived elsewhere on the site - the requirements, the by-laws, the
 * directory, the contact address - so the page now walks a prospective
 * founder through those in order rather than sending them away.
 */
const STEPS = [
  {
    title: 'Reach out',
    body: 'Email the national team with your school and a line about why you want to bring Voices of Equity to campus. A national chapter leader replies and walks you through the rest.',
  },
  {
    title: 'Build your executive board',
    body: 'Every chapter is led by five roles: President, Director of Philanthropy, Director of Education, Director of Outreach, and Media Director. You don’t need all five on day one — you need people who want them.',
  },
  {
    title: 'Run the rhythm',
    body: 'Chapters meet every other week — a national slideshow on a current health equity topic, discussion, then committee time — and host three events a semester: one philanthropic, one educational, one outreach.',
  },
];

export default function StartChapterPage() {
  const { title, subtitle } = getInvolvedPage.start;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
      eyebrow="Get Involved"
      image="/photos/ucf-tabling-seated.jpg"
      imageAlt="Chapter members tabling on campus"
      objectPosition="center 42%"
    >
      {/* ─── Why ─────────────────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal variant="left">
              <p className="voe-eyebrow mb-4">Bring it to your campus</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                Seventy chapters started exactly this way.
              </h2>
              <p className="voe-lead mb-6 max-w-xl">
                A student who cared, an email, and a semester of showing up. Chapters are led entirely by undergraduates and supported by the national team — you bring the people, we bring the curriculum, the structure, and a network of chapters who have done it before.
              </p>
              <Link href="/get-involved/chapters" className="voe-btn voe-btn--ghost">
                See who’s already in
              </Link>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="voe-photo voe-ar-portrait shadow-[0_24px_60px_rgba(14,26,51,0.16)] lg:ml-auto lg:max-w-md">
                <ParallaxFill
                  src="/photos/student-podium.jpg"
                  alt="A chapter member speaking at a general body meeting"
                  strength={60}
                  objectPosition="center 20%"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── How ─────────────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">How it works</p>
            <h2 className="voe-display-md font-display mb-12 text-white">Three steps, one semester</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 110} className="h-full">
                <article className="voe-value h-full">
                  <span className="voe-value__rule" aria-hidden="true" />
                  <h3 className="voe-value__title font-display">{s.title}</h3>
                  <p className="voe-value__body">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={300}>
            <p className="mt-10 text-[15px] text-white/80">
              The full picture — meeting structure, event minimums, board duties — is on the{' '}
              <Link href="/get-involved/requirements" className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                requirements page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Do it ───────────────────────────────────────────────────── */}
      <Edge from={GROUND.blue} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Ready?</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">Send the first email.</h2>
            <p className="voe-lead mx-auto mb-9 max-w-xl">
              Tell us your school and why. That’s all the first message needs to be.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.links.contact} className="voe-btn voe-btn--on-dark">
                Contact the national team
              </a>
              <Link href="/get-involved/requirements" className="voe-btn voe-btn--outline-white">
                Read the requirements
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
