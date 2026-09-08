'use client'

import Link from 'next/link'
import Reveal from '@/components/Animation/Reveal';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';

const GRANT_APPLICATION_URL =
  'https://docs.google.com/document/d/1BEeCtxVcqXeV5EiqcWwTwoIO-kjp0TTtOrCbr4Uma-8/edit?usp=sharing'

const EventIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const PartnersIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const BudgetIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TimelineIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const requirements = [
  {
    title: 'Event Overview',
    icon: <EventIcon />,
    items: [
      'Purpose of the event',
      'Target population or community need',
      'Expected outcomes and impact',
    ],
  },
  {
    title: 'Partnership Confirmation',
    icon: <PartnersIcon />,
    items: [
      'Name of partner organization',
      'Contact person and role',
      'Description of partnership and their role',
      'Evidence of contact (email, meeting summary)',
    ],
  },
  {
    title: 'Budget Proposal',
    icon: <BudgetIcon />,
    items: [
      'Line-item breakdown of expenses',
      'Total amount requested',
      'Description of how each cost supports the goal',
    ],
  },
  {
    title: 'Timeline & Logistics',
    icon: <TimelineIcon />,
    items: [
      'Proposed event date',
      'Key planning deadlines',
      'Volunteer or committee structure',
    ],
  },
]

const criteria = [
  { title: 'Impact', body: 'How meaningful is the event for the local community?' },
  { title: 'Preparation', body: 'Has the chapter done the necessary legwork?' },
  { title: 'Feasibility', body: 'Is the event well-scoped and realistic?' },
  { title: 'Alignment', body: "Does it reflect VoE's mission?" },
]

const steps = [
  { title: 'Review the requirements', body: 'Understand what your application needs before starting.' },
  { title: 'Submit the application', body: 'Complete the VoE Grant Application form.' },
  { title: 'Hear back', body: 'Applications are reviewed on a rolling basis.' },
]

// Shared type treatments — keeps the page typographically consistent
const eyebrow = 'voe-eyebrow mb-3'
const heading = 'voe-display-md font-display text-[#171219] mb-6'
const body = 'voe-lead max-w-2xl'
const buttonBase = 'voe-btn'

export default function GrantsPage() {
  return (
    <main className="min-h-screen">
      {/* ── Group 1: Hero + Purpose + Eligibility (white) ───────────────── */}
      <div className="voe-ground-white">
        {/* Hero */}
        <PageHero
          eyebrow="Chapter Resources"
          title="Voices of Equity Grant Program"
          subtitle="Supplemental funding for chapters launching high-impact, community-based events that advance health equity."
          image="/impact-photos/general-3.jpg"
          imageAlt="Chapter members tabling on campus"
          objectPosition="center 58%"
          height="min-h-[74vh]"
        />


        {/* Purpose + eligibility, side by side */}
        <section className="voe-section">
          <div className="voe-container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <Reveal variant="left">
                <p className={eyebrow}>About The Grant</p>
                <h2 className={heading}>Empowering chapters to create real community impact</h2>
                <p className={body}>
                  The Voices of Equity Grant is designed to empower chapters to create high-impact, community-based events that advance our mission of health equity. This grant provides supplemental funding for chapters with strong plans, local partnerships, and a vision to make a difference.
                </p>
              </Reveal>
              <Reveal variant="right" delay={120}>
                <div className="rounded-3xl bg-[#F1F5FD] p-8">
                  <p className={eyebrow}>Eligibility</p>
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219]">Who can apply</h3>
                  <p className="leading-relaxed text-[#4A5568]">
                    Any official VoE chapter is eligible to apply. The Chapter Director of Philanthropy is responsible for submitting the application on behalf of the chapter.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* ── Group 2: Requirements + Evaluation ─────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <div className="voe-ground-blue-soft">
        {/* Requirements */}
        <section className="voe-section">
          <div className="voe-container">
            <Reveal variant="fade">
              <div className="mb-9">
                <p className={eyebrow}>Application Requirements</p>
                <h2 className={heading}>What to Include in Your Application</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
              {requirements.map((req, idx) => (
                <Reveal key={req.title} variant="up" delay={idx * 100} className="h-full">
                  <div className="premium-card h-full p-8 md:p-10 flex flex-col">
                    <div className="text-[#587FDA] mb-5">{req.icon}</div>
                    <h3 className="font-display text-xl font-semibold text-[#171219] mb-5 tracking-tight">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#4A5568] leading-relaxed">
                          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#587FDA] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="voe-section">
          <div className="voe-container">
            <Reveal variant="fade">
              <div className="mb-12">
                <p className={eyebrow}>How Applications Are Reviewed</p>
                <h2 className={heading}>Evaluation Criteria</h2>
                <p className={body}>
                  Applications are reviewed by the National Leadership Team and selected based on four criteria:
                </p>
              </div>
            </Reveal>

            <div className="max-w-5xl divide-y divide-[#171219]/10">
              {criteria.map((c, idx) => (
                <Reveal key={c.title} variant="up" delay={idx * 100}>
                  <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-6 md:py-8">
                    <h3 className="font-display text-xl font-semibold text-[#171219] tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-[#4A5568]">
              Projects don&apos;t need to fit the semester&apos;s national theme.
            </p>
          </div>
        </section>
      </div>

      {/* ── Group 3: Application Process + Dual CTA ─────────────────────── */}
      <div className="voe-ground-white">
        {/* Application Process */}
        <section className="voe-section">
          <div className="voe-container">
            <Reveal variant="fade">
              <div className="mb-9">
                <p className={eyebrow}>How to Apply</p>
                <h2 className={heading}>The Application Process</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step, idx) => (
                <Reveal key={step.title} variant="up" delay={idx * 120} className="h-full">
                  <div className="voe-card flex h-full flex-col rounded-3xl bg-[#F1F5FD] p-8">
                    <h3 className="voe-display-sm font-display mb-3 text-[#171219]">{step.title}</h3>
                    <div className="voe-rule mb-4" />
                    <p className="text-[15px] leading-relaxed text-[#4A5568]">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <section className="voe-section">
          <div className="voe-container text-center">
            <Reveal variant="up">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#171219] mb-6 tracking-tight">
                Ready to Apply?
              </h2>
              <p className={`${body} mx-auto mb-10`}>
                Start your application or download the template to prepare offline with your chapter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={GRANT_APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} voe-btn--primary`}
                >
                  Start Your Application
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={GRANT_APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} voe-btn--ghost`}
                >
                  Download Application Template
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* ── Group 4: Payment Info ───────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <div className="voe-ground-blue-deep voe-texture">
        <section className="voe-section">
          <div className="voe-container text-center">
            <Reveal variant="up">
              <p className={`${eyebrow} !text-white/80`}>For Awarded Recipients</p>
              <h2 className={`${heading} !text-white`}>Submit Payment Information</h2>
              <p className={`${body} mx-auto mb-10 !text-white/85`}>
                Once your grant has been approved, complete the secure payment information form so funds can be disbursed to your chapter.
              </p>
              <Link
                href="/resources/grants/payment-info"
                className={`${buttonBase} voe-btn--on-dark`}
              >
                Submit Payment Info
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </div>

      {/* ── Group 5: Contact ────────────────────────────────────────────── */}
      <div className="voe-ground-white">
        <section className="voe-section--tight-top pb-10 pt-6">
          <div className="voe-container text-center">
            <p className="text-sm text-[#4A5568] leading-relaxed">
              Questions? Reach out to <span className="font-semibold text-[#171219]">Adam Jac</span>, National Director of Philanthropy, via Slack or email.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
