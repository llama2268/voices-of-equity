'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Partner With Us.
 *
 * Was a "Coming Soon" placeholder. The partnership story already existed
 * on the Impact page - how chapters approach community organisations, and
 * who they already work with - so this page tells it from the partner's
 * side of the table and ends with a way to get in touch.
 */
const PRINCIPLES = [
  {
    title: 'We start by listening',
    body: 'Chapters ground every initiative in Community Health Assessments and direct conversations with local health organizations before proposing any action.',
  },
  {
    title: 'You already know what your community needs',
    body: 'As an undergraduate organization, we don’t reinvent the wheel — we map our resources onto the work already underway and extend its reach.',
  },
  {
    title: 'We bring what undergraduates uniquely offer',
    body: 'Student outreach capacity, volunteer energy, university resources, and a national network of chapters — assets that amplify partners already leading the work, not replace them.',
  },
  {
    title: 'We stay',
    body: 'Partnerships carry across leadership transitions through structured documentation, transition plans, and mentorship from outgoing leaders to incoming ones.',
  },
];

const PARTNERS = [
  {
    name: 'Operation Golden Shield',
    description: 'Providing immediate relief to individuals and Veterans experiencing homelessness and food insecurity.',
  },
  {
    name: 'The Phoenix',
    description: 'A free sober active community fostering health, healing, and connection through movement.',
  },
  {
    name: 'Young People in Recovery',
    description: 'A national grassroots organization equipping young people with the skills and resources to lead recovery-friendly lives.',
  },
];

export default function PartnerPage() {
  return (
    <PageLayout
      title="Partner With Us"
      subtitle="Create lasting impact through collaboration"
      eyebrow="Get Involved"
      image="/photos/education-team.jpg"
      imageAlt="A chapter education session"
      objectPosition="center 40%"
    >
      {/* ─── The offer ───────────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal variant="left">
              <p className="voe-eyebrow mb-4">For organizations</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                Student capacity for the work you already lead.
              </h2>
              <p className="voe-lead mb-4">
                Community health organizations, clinics, coalitions and nonprofits: our chapters show up to listen, learn, and contribute where undergraduate capacity is genuinely needed — with 70+ campuses behind them.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Partnerships range from a single semester’s outreach event to a standing relationship across years of chapter leadership.
              </p>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="voe-photo voe-ar-landscape shadow-[0_24px_60px_rgba(14,26,51,0.16)]">
                <ParallaxFill
                  src="/photos/committee-presentation.jpg"
                  alt="A chapter leader presenting to community partners"
                  strength={60}
                  objectPosition="center 30%"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── How we work ─────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">How we work with partners</p>
            <h2 className="voe-display-md font-display mb-12 text-white">Four things you can count on</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 90} className="h-full">
                <article className="voe-value h-full">
                  <span className="voe-value__rule" aria-hidden="true" />
                  <h3 className="voe-value__title font-display">{p.title}</h3>
                  <p className="voe-value__body">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who we work with ────────────────────────────────────────── */}
      <Edge from={GROUND.blue} />
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="voe-eyebrow mb-3">In good company</p>
                <h2 className="voe-display-md font-display text-[#171219]">Organizations we work alongside</h2>
              </div>
              <Link href="/resources/partners" className="voe-btn voe-btn--ghost shrink-0">
                All partners
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={i * 100} className="h-full">
                <article className="h-full rounded-3xl bg-[#F1F5FD] p-8">
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219]">{p.name}</h3>
                  <div className="voe-rule mb-4" />
                  <p className="text-[15px] leading-relaxed text-[#4A5568]">{p.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Talk to us ──────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Start a conversation</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">Tell us about your work.</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">
              A short note is enough — who you serve, and where student capacity would help. We’ll connect you with the chapters nearest you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:gyc23@cornell.edu?subject=Partnership Inquiry" className="voe-btn voe-btn--on-dark">
                Email the partnerships team
              </a>
              <Link href="/what-we-do/impact" className="voe-btn voe-btn--outline-white">
                See how chapters work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
