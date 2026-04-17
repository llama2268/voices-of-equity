'use client';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';
import AnimatedCounter from '@/components/Animation/AnimatedCounter';

const ChapterMap = dynamic(() => import('@/components/Map/ChapterMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-[#F7F8FA] flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  )
});

const cbiPhases = [
  {
    num: 1,
    name: 'Identify',
    short: 'Understand the community.',
    long: "Chapters begin by mapping their community's health landscape through Community Health Assessments (CHAs) and Community Health Improvement Plans (CHIPs). This phase is about listening — not proposing. Members identify existing organizations, unmet needs, and the specific gaps where undergraduate capacity can add value.",
    image: '/impact-photos/howard-2.jpeg',
  },
  {
    num: 2,
    name: 'Align',
    short: 'Build authentic partnerships.',
    long: 'Chapters approach community health organizations as shared stakeholders — not as volunteers looking for work. Alignment means finding mutual priorities, clarifying roles, and earning trust before any initiative is designed. Partnerships built here are meant to last across leadership transitions.',
    image: '/impact-photos/cmu-1.jpeg',
  },
  {
    num: 3,
    name: 'Design',
    short: 'Co-create with the partner.',
    long: 'Initiatives are designed with the partner organization, never for them. Chapters co-create programs with clear value, defined deliverables, and measurable outcomes — ensuring every project amplifies the partner\'s existing work instead of duplicating it.',
    image: '/impact-photos/uconn-2.jpeg',
  },
  {
    num: 4,
    name: 'Execute',
    short: 'Implement with accountability.',
    long: 'Execution is where intent meets follow-through. Chapters deliver on committed scope, track progress transparently, and communicate proactively with the partner. Reliability here is what turns a one-semester project into a long-term relationship.',
    image: '/impact-photos/arkansas-1.jpg',
  },
  {
    num: 5,
    name: 'Iterate',
    short: 'Evaluate and build forward.',
    long: 'After execution, chapters produce impact reports, collect partner feedback, and hand off documentation to the next leadership cohort. Iteration is what makes community-based work durable — each cycle strengthens the partnership and sharpens the next initiative.',
    image: '/impact-photos/binghamton-1.jpg',
  },
];

const stats = [
  { value: 60, suffix: '+', label: 'Chapters', prefix: '' },
  { value: 1000, suffix: '+', label: 'Members', prefix: '' },
  { value: 43000, suffix: '+', label: 'Raised', prefix: '$' },
  { value: 10000, suffix: '+', label: 'Reach', prefix: '' },
];

const partners = [
  {
    name: 'Operation Golden Shield',
    description: 'Providing immediate relief to individuals and Veterans experiencing homelessness and food insecurity.',
    href: '/resources/partners',
  },
  {
    name: 'The Phoenix',
    description: 'A free sober active community fostering health, healing, and connection through movement.',
    href: '/resources/partners',
  },
  {
    name: 'Young People in Recovery',
    description: 'A national grassroots organization equipping young people with the skills and resources to lead recovery-friendly lives.',
    href: '/resources/partners',
  },
];

// Full-bleed split-screen themes (2)
const splitThemes = [
  {
    title: 'Mobilizing Students as Community Partners',
    paragraphs: [
      "VoE chapters don't show up to 'help' communities — they show up to listen, learn, and contribute where undergraduate capacity is genuinely needed.",
      'Our chapters approach community health work with humility, grounding every initiative in Community Health Assessments and direct conversations with local health organizations before proposing any action.',
    ],
    image: '/impact-photos/howard-1.jpeg',
    caption: 'Chapter members at a community tabling event',
    imageLeft: true,
  },
  {
    title: 'Amplify Impact',
    paragraphs: [
      "Community health organizations already know what their communities need. As an undergraduate organization, we don't reinvent the wheel \u2014 we map our resources onto the work already underway.",
      'Our chapters contribute what undergraduates uniquely offer: student outreach capacity, volunteer energy, university resources, and a national network. Those assets extend the reach of partners already leading the work \u2014 not replace them.',
    ],
    image: '/impact-photos/arkansas-3.jpg',
    caption: 'Volunteers at a National Health Equity Week event',
    imageLeft: false,
  },
];

// Contained themes (2)
const containedThemes = [
  {
    title: 'Building Durable Partnerships',
    paragraphs: [
      "A successful CBI isn't a single semester's project — it's the foundation of an ongoing relationship.",
      'Chapters maintain partnerships across leadership transitions through structured documentation, transition plans, and mentorship from outgoing leaders to incoming ones.',
    ],
    image: '/impact-photos/cmu-3.jpeg',
    caption: 'Chapter leadership at a partner organization meeting',
    imageLeft: false,
  },
  {
    title: 'From Principles to Practice',
    paragraphs: [
      'Health equity frameworks often live in academic papers. The CBI Framework translates them into something undergraduates can actually execute.',
      'By providing structured phases, clear deliverables, and honest guidance on what goes wrong, we equip chapters to move from good intentions to measurable community impact.',
    ],
    image: '/impact-photos/uconn-1.jpeg',
    caption: "Executive leadership reviewing a chapter's CBI impact report",
    imageLeft: true,
  },
];

// Masonry gallery — varied row spans
const gallery: { src: string; span: string }[] = [
  { src: '/impact-photos/binghamton-1.jpg', span: 'row-span-2' },
  { src: '/impact-photos/cmu-2.jpeg', span: '' },
  { src: '/impact-photos/howard-2.jpeg', span: '' },
  { src: '/impact-photos/arkansas-2.jpg', span: '' },
  { src: '/impact-photos/uconn-2.jpeg', span: 'row-span-2' },
  { src: '/impact-photos/general-1.jpeg', span: '' },
  { src: '/impact-photos/binghamton-3.jpg', span: '' },
  { src: '/impact-photos/howard-4.jpeg', span: '' },
  { src: '/impact-photos/general-3.jpg', span: '' },
  { src: '/impact-photos/cmu-1.jpeg', span: '' },
];

function CBIInteractive() {
  const [active, setActive] = useState(0);
  const phase = cbiPhases[active]!;
  const progressPercent = ((active + 1) / cbiPhases.length) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="relative h-[3px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, #4A6FCC 0%, #587FDA 50%, #6B8FE8 100%)',
            }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {cbiPhases.map((p, i) => (
            <span
              key={p.num}
              className={`text-[10px] md:text-xs font-display uppercase tracking-wider transition-colors duration-300 ${
                i <= active ? 'text-[#587FDA] font-semibold' : 'text-gray-400'
              }`}
            >
              Phase {p.num}
            </span>
          ))}
        </div>
      </div>

      {/* Phase tabs */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 mb-10">
        {cbiPhases.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.num}
              onClick={() => setActive(i)}
              className={`group flex flex-col items-center py-4 md:py-6 rounded-xl border transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'bg-[#587FDA] border-[#587FDA] text-white shadow-lg shadow-[#587FDA]/25'
                  : 'bg-white border-gray-200 text-[#171219] hover:border-[#587FDA]/50'
              }`}
            >
              <span
                className={`font-display font-bold transition-all duration-300 ${
                  isActive ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl opacity-70'
                }`}
              >
                {p.num}
              </span>
              <span
                className={`mt-1 text-[10px] md:text-xs font-display font-semibold uppercase tracking-wider ${
                  isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#171219]'
                }`}
              >
                {p.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active phase content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div key={`img-${active}`} className="relative aspect-[4/3] rounded-xl overflow-hidden animate-fadeIn">
          <Image
            src={phase.image}
            alt={phase.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div key={`txt-${active}`} className="animate-fadeIn">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-3">
            Phase {phase.num}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-4 leading-tight">
            {phase.name}
          </h3>
          <p className="text-lg font-display font-semibold text-[#4A5568] mb-4">{phase.short}</p>
          <p className="text-base text-[#4A5568] leading-relaxed">{phase.long}</p>
        </div>
      </div>
    </div>
  );
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen relative">
      {/* 1. Headline Hero */}
      <section
        id="hero"
        className="pt-40 pb-32 relative overflow-hidden bg-gradient-hero"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h1 className="font-display font-bold text-[#171219] text-5xl md:text-7xl leading-[1.05] tracking-tight">
              60+ chapters.<br />
              1,000+ members.<br />
              <span className="text-[#587FDA]">1 mission.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="mt-10 text-lg md:text-xl text-[#4A5568] leading-relaxed max-w-3xl">
              At Voices of Equity, impact is measured in mobilization — the community
              partnerships built, the initiatives launched, and the undergraduates equipped to
              lead health equity work beyond their campuses. Since our founding in December
              2024, we&apos;ve grown from one chapter to a nationwide movement of students turning
              health equity principles into action.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Map */}
      <section id="map" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                Where We Work
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] mb-6">
                A Nationwide Network
              </h2>
              <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
                Each marker represents a chapter of undergraduates organizing health equity
                work in their community. Behind every dot is a team running workshops,
                building partnerships, and launching community-based initiatives.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in">
            <div className="rounded-lg overflow-hidden">
              <ChapterMap />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="mt-8 text-center font-display text-lg md:text-xl font-semibold text-[#171219]">
              60+ chapters across the United States
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3. CBI Framework — interactive tabs */}
      <section id="cbi" className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                How We Mobilize
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] mb-6">
                The Community-Based Initiative Framework
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-3xl mx-auto text-center mb-16">
              Every VoE chapter uses our Community-Based Initiative (CBI) Framework to build
              meaningful, sustainable health equity work. Rather than creating parallel
              programs, chapters partner with the organizations already leading community
              health work — amplifying their capacity with the outreach power, volunteer
              energy, and university resources undergraduates uniquely offer.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <CBIInteractive />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="mt-16 text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-display font-semibold text-[#587FDA] hover:text-[#4A6FCC] transition-colors text-base"
              >
                Read the Full Framework
                <span aria-hidden>→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Stats Bar */}
      <section id="stats" className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-14">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                By The Numbers
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] tracking-tight">
                Impact at a Glance
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 100}>
                <p className="inline-block px-3 text-5xl md:text-6xl font-bold font-display text-gradient-accent leading-none">
                  <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#4A5568] mt-4 font-display font-medium">
                  {s.label}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NHEW */}
      <section id="nhew" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-6">
          <AnimateOnScroll animation="fade-in-left">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/impact-photos/nhew-flyer.jpg"
                alt="National Health Equity Week 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-right">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
              Flagship Initiative
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] leading-tight">
              National Health Equity Week
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#4A5568] leading-relaxed">
              Our first National Health Equity Week launched in Fall 2025 with the theme
              <em> Addiction in Health Equity </em>— examining how substance use is shaped by
              disparities in access to care, stigma, systemic bias, and socioeconomic
              barriers. The week mobilized chapters nationwide through online speakers,
              virtual panels, advocacy tabling, and a national fundraiser, including a
              keynote from addiction recovery advocate and former NFL quarterback Ryan Leaf.
            </p>
            <p className="mt-6 text-sm md:text-base text-[#4A5568] font-medium">
              $43,000+ raised &nbsp;·&nbsp; 50+ campuses engaged &nbsp;·&nbsp; 1,000+ students mobilized
            </p>
            <Link
              href="/what-we-do/national"
              className="inline-flex items-center gap-2 mt-8 font-display font-semibold text-[#587FDA] hover:text-[#4A6FCC] transition-colors text-base"
            >
              Learn about NHEW
              <span aria-hidden>→</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 6. Partnerships */}
      <section id="partners" className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-6 max-w-3xl mx-auto">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                Partnerships
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219] mb-6">
                Standing With Community
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-3xl mx-auto text-center mb-16">
              We partner with organizations that share our commitment to on-the-ground health
              equity work. Our partners bring deep expertise in the communities they serve —
              we bring undergraduate energy, reach, and resources to amplify their impact.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <AnimateOnScroll key={p.name} animation="fade-up" delay={i * 120}>
                <Link
                  href={p.href}
                  className="block bg-white border border-gray-200 rounded-lg p-8 h-full hover-lift card-hover-border"
                >
                  <h3 className="font-display font-bold text-xl text-[#171219] mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-display font-semibold text-[#587FDA]">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Themes — mix of full-bleed + contained */}
      <section id="themes">
        {/* Full-bleed split 1 */}
        {splitThemes[0] && (
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            <div className={`relative min-h-[360px] lg:min-h-[520px] ${splitThemes[0].imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <Image
                src={splitThemes[0].image}
                alt={splitThemes[0].caption}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className={`flex items-center px-8 md:px-16 py-16 md:py-24 ${splitThemes[0].imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
              style={{ background: 'linear-gradient(135deg, #F7F8FA 0%, #F0F4FF 100%)' }}
            >
              <div className="max-w-xl">
                <AnimateOnScroll animation={splitThemes[0].imageLeft ? 'fade-in-right' : 'fade-in-left'}>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold text-[#171219] leading-tight mb-6">
                    {splitThemes[0].title}
                  </h3>
                  {splitThemes[0].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base md:text-lg text-[#4A5568] leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        )}

        {/* Contained blocks */}
        <div className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {containedThemes.map((theme) => (
              <div key={theme.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <AnimateOnScroll
                  animation={theme.imageLeft ? 'fade-in-left' : 'fade-in-right'}
                  className={theme.imageLeft ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden hover-image-zoom">
                    <Image
                      src={theme.image}
                      alt={theme.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-3 text-sm italic text-gray-500">{theme.caption}</p>
                </AnimateOnScroll>
                <AnimateOnScroll
                  animation={theme.imageLeft ? 'fade-in-right' : 'fade-in-left'}
                  className={theme.imageLeft ? 'lg:order-2' : 'lg:order-1'}
                >
                  <h3 className="text-3xl font-display font-semibold text-[#171219] leading-tight mb-6">
                    {theme.title}
                  </h3>
                  {theme.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base md:text-lg text-[#4A5568] leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>

        {/* Full-bleed split 2 */}
        {splitThemes[1] && (
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            <div className={`relative min-h-[360px] lg:min-h-[520px] ${splitThemes[1].imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <Image
                src={splitThemes[1].image}
                alt={splitThemes[1].caption}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className={`flex items-center px-8 md:px-16 py-16 md:py-24 ${splitThemes[1].imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
              style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #F7F8FA 100%)' }}
            >
              <div className="max-w-xl">
                <AnimateOnScroll animation={splitThemes[1].imageLeft ? 'fade-in-right' : 'fade-in-left'}>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold text-[#171219] leading-tight mb-6">
                    {splitThemes[1].title}
                  </h3>
                  {splitThemes[1].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base md:text-lg text-[#4A5568] leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 8. Masonry Gallery */}
      <section id="gallery" className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                In The Field
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-[#171219]">
                Moments That Matter
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {gallery.map((photo, i) => (
              <AnimateOnScroll key={photo.src} animation="scale-in" delay={i * 50} className={photo.span}>
                <div className="relative w-full h-full overflow-hidden rounded-lg group">
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="cta" className="py-24 bg-gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you want to start a chapter, volunteer, or partner with VoE, there&apos;s a
              place for you in this movement.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/start"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#587FDA] font-display font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Start a Chapter
              </Link>
              <Link
                href="/get-involved/partner"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-display font-semibold rounded-md hover:bg-white hover:text-[#587FDA] transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
