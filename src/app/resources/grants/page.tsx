'use client'

import Link from 'next/link'
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll'

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
  { n: '01', title: 'Review Requirements', body: 'Understand what your application needs before starting.' },
  { n: '02', title: 'Submit Application', body: 'Complete the VoE Grant Application form.' },
  { n: '03', title: 'Receive Decision', body: 'Applications are reviewed on a rolling basis.' },
]

// Shared type treatments — keeps the page typographically consistent
const eyebrow = 'font-display text-xs uppercase tracking-[0.2em] font-medium text-[#587FDA] mb-3'
const heading = 'font-display text-3xl md:text-4xl font-semibold text-[#171219] mb-6 tracking-tight'
const body = 'text-base md:text-lg leading-relaxed text-[#4A5568] max-w-2xl'
const buttonBase = 'inline-flex items-center justify-center gap-2 px-8 py-3 font-display font-semibold rounded-md transition-premium'

export default function GrantsPage() {
  return (
    <main className="min-h-screen">
      {/* ── Group 1: Hero + Purpose + Eligibility (white) ───────────────── */}
      <div className="bg-white section-mask-fade">
        {/* Hero */}
        <section className="pt-40 pb-24 bg-gradient-hero">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <p className={eyebrow}>Chapter Resources</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[#171219] mb-6 leading-[1.05] tracking-tight max-w-4xl">
                Voices of Equity Grant Program
              </h1>
              <p className="text-lg md:text-xl text-[#4A5568] leading-relaxed max-w-3xl">
                Supplemental funding for chapters launching high-impact, community-based events that advance health equity.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <p className={eyebrow}>About The Grant</p>
              <h2 className={heading}>Empowering Chapters to Create Real Community Impact</h2>
              <p className={body}>
                The Voices of Equity Grant is designed to empower chapters to create high-impact, community-based events that advance our mission of health equity. This grant provides supplemental funding for chapters with strong plans, local partnerships, and a vision to make a difference.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <p className={eyebrow}>Eligibility</p>
              <h2 className={heading}>Who Can Apply</h2>
              <p className={body}>
                Any official VoE chapter is eligible to apply. The Chapter Director of Philanthropy is responsible for submitting the application on behalf of the chapter.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </div>

      {/* ── Group 2: Requirements + Evaluation (gradient-surface) ───────── */}
      <div className="bg-gradient-surface section-mask-fade">
        {/* Requirements */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="heading">
              <div className="mb-14">
                <p className={eyebrow}>Application Requirements</p>
                <h2 className={heading}>What to Include in Your Application</h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
              {requirements.map((req, idx) => (
                <AnimateOnScroll key={req.title} animation="fade-up" delay={idx * 100} className="h-full">
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
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="heading">
              <div className="mb-12">
                <p className={eyebrow}>How Applications Are Reviewed</p>
                <h2 className={heading}>Evaluation Criteria</h2>
                <p className={body}>
                  Applications are reviewed by the National Leadership Team and selected based on four criteria:
                </p>
              </div>
            </AnimateOnScroll>

            <div className="divide-y divide-gray-200/70 border-t border-b border-gray-200/70 max-w-5xl">
              {criteria.map((c, idx) => (
                <AnimateOnScroll key={c.title} animation="fade-up" delay={idx * 100}>
                  <div className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-6 md:py-8">
                    <h3 className="font-display text-xl font-semibold text-[#171219] tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">{c.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-gray-500">
              Projects don&apos;t need to fit the semester&apos;s national theme.
            </p>
          </div>
        </section>
      </div>

      {/* ── Group 3: Application Process + Dual CTA (white) ─────────────── */}
      <div className="bg-white section-mask-fade">
        {/* Application Process */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="heading">
              <div className="mb-14">
                <p className={eyebrow}>How to Apply</p>
                <h2 className={heading}>The Application Process</h2>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step, idx) => (
                <AnimateOnScroll key={step.n} animation="fade-up" delay={idx * 120}>
                  <div className="relative h-full bg-white rounded-xl border border-gray-100 p-8 shadow-resting">
                    <p className="font-display text-5xl font-bold text-gradient-accent leading-none mb-4">
                      {step.n}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[#171219] mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#4A5568] leading-relaxed">{step.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll animation="fade-up">
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
                  className={`${buttonBase} bg-gradient-accent text-white shadow-raised hover:shadow-hover-lift`}
                >
                  Start Your Application
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={GRANT_APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} border border-gray-300 text-[#171219] hover:border-[#587FDA] hover:text-[#587FDA]`}
                >
                  Download Application Template
                  <span aria-hidden>→</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>

      {/* ── Group 4: Payment Info (gradient-surface) ────────────────────── */}
      <div className="bg-gradient-surface section-mask-fade">
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll animation="fade-up">
              <p className={eyebrow}>For Awarded Recipients</p>
              <h2 className={heading}>Submit Payment Information</h2>
              <p className={`${body} mx-auto mb-10`}>
                Once your grant has been approved, complete the secure payment information form so funds can be disbursed to your chapter.
              </p>
              <Link
                href="/resources/grants/payment-info"
                className={`${buttonBase} bg-[#587FDA] hover:bg-[#4566B8] text-white`}
              >
                Submit Payment Info
                <span aria-hidden>→</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </div>

      {/* ── Group 5: Contact (white) ────────────────────────────────────── */}
      <div className="bg-white">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-[#4A5568] leading-relaxed">
              Questions? Reach out to <span className="font-semibold text-[#171219]">Adam Jac</span>, National Director of Philanthropy, via Slack or email.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
