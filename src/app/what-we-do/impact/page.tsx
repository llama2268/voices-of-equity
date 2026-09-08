'use client';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Reveal, { CountUp } from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';
import { ParallaxFill, ScrollFadeOut } from '@/components/Animation/Parallax';
import ImpactMetrics from '@/components/Stats/ImpactMetrics';
import InstagramGrid from '@/components/Social/InstagramGrid';
import ZoomWall from '@/components/Impact/ZoomWall';

const ChapterMap = dynamic(() => import('@/components/Map/ChapterMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] w-full items-center justify-center bg-[#F1F5FD] font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#587FDA]">
      Loading map
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
    image: '/media/12.jpeg',
    caption: 'Chapter members at a community tabling event',
    objectPosition: 'center 38%',
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
    objectPosition: 'center 30%',
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
    image: '/paintingtry.jpg',
    caption: 'Chapter members volunteering at a community partner event',
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

function CBIInteractive() {
  const [active, setActive] = useState(0);
  const phase = cbiPhases[active]!;
  const fill = cbiPhases.length > 1 ? (active / (cbiPhases.length - 1)) * 100 : 0;

  return (
    <div>
      {/* Phase rail - the five phases in order, read left to right */}
      <div className="voe-steps mb-12" role="tablist" aria-label="Community-Based Initiative framework phases">
        <span className="voe-steps__fill" style={{ width: `${fill}%` }} aria-hidden />
        {cbiPhases.map((p, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <button
              key={p.name}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`voe-step ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}
            >
              <span className="voe-step__dot" aria-hidden />
              <span className="voe-step__name font-display">{p.name}</span>
              <span className="voe-step__short">{p.short}</span>
            </button>
          );
        })}
      </div>

      {/* Active phase */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div key={`img-${active}`} className="voe-photo voe-grade voe-ar-landscape animate-fadeIn shadow-[0_24px_60px_rgba(14,26,51,0.14)]">
          <Image src={phase.image} alt={phase.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div key={`txt-${active}`} className="animate-fadeIn">
          <p className="voe-eyebrow mb-3">{phase.short}</p>
          <h3 className="voe-display-md font-display mb-5 text-[#171219]">{phase.name}</h3>
          <p className="leading-relaxed text-[#4A5568] md:text-[17px]">{phase.long}</p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => setActive((v) => Math.max(0, v - 1))}
              disabled={active === 0}
              className="voe-btn voe-btn--ghost disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActive((v) => Math.min(cbiPhases.length - 1, v + 1))}
              disabled={active === cbiPhases.length - 1}
              className="voe-btn voe-btn--primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next phase
            </button>
          </div>
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
        data-hero
        className="relative min-h-[80vh] w-full overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxFill
            src="/photos/ursinus-poster.jpg"
            alt="Voices of Equity chapter members presenting their community impact"
            objectPosition="center 38%"
            strength={130}
            priority
          />
        </div>
        <div aria-hidden className="absolute inset-0 z-[1] bg-[#587FDA] mix-blend-multiply opacity-[0.82]" />
        <div aria-hidden className="absolute inset-0 z-[1] bg-[#3A57A6]/35" />
        <div className="voe-container relative z-10 flex min-h-[80vh] flex-col justify-end pb-24 pt-40">
          <ScrollFadeOut>
          <Reveal variant="up">
            <h1 className="voe-display-xl font-display text-white">
              70+ chapters.<br />
              1,000+ members.<br />
              <span className="text-[#FFD166]">1 mission.</span>
            </h1>
          </Reveal>
          <Reveal variant="up" delay={220}>
            <p className="voe-lead mt-10 max-w-3xl !text-white/80">
              At Voices of Equity, impact is measured in mobilization — the community
              partnerships built, the initiatives launched, and the undergraduates equipped to
              lead health equity work beyond their campuses. Since our founding in December
              2024, we&apos;ve grown from one chapter to a nationwide movement of students turning
              health equity principles into action.
            </p>
          </Reveal>
          </ScrollFadeOut>
        </div>
      </section>

      {/* 2. Map */}
      <section id="map" className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="voe-eyebrow mb-4">
                Where We Work
              </p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                A Nationwide Network
              </h2>
              <p className="voe-lead">
                Each marker represents a chapter of undergraduates organizing health equity
                work in their community. Behind every dot is a team running workshops,
                building partnerships, and launching community-based initiatives.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-3xl">
              <ChapterMap />
            </div>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-8 text-center font-display text-lg md:text-xl font-semibold text-[#171219]">
              70+ chapters across the United States and Canada
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2b. The network on one call */}
      <section id="network" className="voe-ground-white pb-[var(--voe-section-y)] pt-6">
        <div className="voe-container">
          <ZoomWall />
        </div>
      </section>

      {/* 3. CBI Framework — interactive tabs */}
      <Edge from={GROUND.white} size="sm" />
      <section id="cbi" className="voe-section voe-section--tight-top voe-ground-green-soft voe-accent-green">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="voe-eyebrow mb-4">
                How We Mobilize
              </p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                The Community-Based Initiative Framework
              </h2>
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="voe-lead mx-auto mb-10 max-w-3xl text-center">
              Every VoE chapter uses our Community-Based Initiative (CBI) Framework to build
              meaningful, sustainable health equity work. Rather than creating parallel
              programs, chapters partner with the organizations already leading community
              health work — amplifying their capacity with the outreach power, volunteer
              energy, and university resources undergraduates uniquely offer.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <CBIInteractive />
          </Reveal>

          <Reveal variant="up" delay={300}>
            <div className="mt-10 text-center">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-display font-semibold text-[#587FDA] hover:text-[#4A6FCC] transition-colors text-base"
              >
                Read the Full Framework
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Stats Bar */}
      <Edge from={GROUND.greenSoft} />
      <section id="stats" className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <ImpactMetrics
          onDark
          cutout="/photos/cutouts/student-podium-cutout.png"
          cutoutAlt="A chapter member speaking at a general body meeting"
          sticker="70 chapters and counting"
        />
      </section>

      <Edge from={GROUND.blue} />
      <section id="nhew" className="voe-section voe-section--tight-top voe-ground-mist">
        <div className="voe-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-6">
          <Reveal variant="left">
            <div className="voe-photo voe-ar-portrait shadow-[0_24px_60px_rgba(14,26,51,0.16)]">
              <Image
                src="/impact-photos/nhew-flyer.jpg"
                alt="National Health Equity Week 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal variant="right">
            <p className="voe-eyebrow mb-4">
              Flagship Initiative
            </p>
            <h2 className="voe-display-lg font-display text-[#171219]">
              National Health Equity Week
            </h2>
            <p className="voe-lead mt-6">
              Our first National Health Equity Week launched in Fall 2025 with the theme
              <em> Addiction in Health Equity </em>— examining how substance use is shaped by
              disparities in access to care, stigma, systemic bias, and socioeconomic
              barriers. The week mobilized chapters nationwide through online speakers,
              virtual panels, advocacy tabling, and a national fundraiser, including a
              keynote from addiction recovery advocate and former NFL quarterback Ryan Leaf.
            </p>
            <p className="mt-6 text-sm md:text-base text-[#4A5568] font-medium">
              $43,000+ raised &nbsp;·&nbsp; 50+ campuses engaged
            </p>
            <Link
              href="/what-we-do/national"
              className="inline-flex items-center gap-2 mt-8 font-display font-semibold text-[#587FDA] hover:text-[#4A6FCC] transition-colors text-base"
            >
              Learn about NHEW
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. Partnerships */}
      
      <section id="partners" className="voe-section voe-section--tight-top voe-ground-green-soft voe-accent-green">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="text-center mb-6 max-w-3xl mx-auto">
              <p className="voe-eyebrow mb-4">
                Partnerships
              </p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                Standing With Community
              </h2>
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="voe-lead mx-auto mb-10 max-w-3xl text-center">
              We partner with organizations that share our commitment to on-the-ground health
              equity work. Our partners bring deep expertise in the communities they serve —
              we bring undergraduate energy, reach, and resources to amplify their impact.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={i * 120}>
                <Link
                  href={p.href}
                  className="voe-card block h-full rounded-3xl bg-white p-8 shadow-[0_14px_36px_rgba(14,26,51,0.10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(14,26,51,0.16)]"
                >
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219]">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-display font-semibold text-[#587FDA]">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
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
                style={{ objectPosition: splitThemes[0].objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className={`flex items-center px-8 md:px-16 voe-section ${splitThemes[0].imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
              style={{ background: '#EEF2FB' }}
            >
              <div className="max-w-xl">
                <Reveal variant={splitThemes[0].imageLeft ? 'right' : 'left'}>
                  <h3 className="voe-display-md font-display mb-6 text-[#171219]">
                    {splitThemes[0].title}
                  </h3>
                  {splitThemes[0].paragraphs.map((p, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed text-[#4A5568] md:text-[17px]">
                      {p}
                    </p>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        )}

        {/* Contained blocks */}
        <div className="voe-section voe-ground-white">
          <div className="voe-container space-y-14">
            {containedThemes.map((theme) => (
              <div key={theme.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Reveal
                  variant={theme.imageLeft ? 'left' : 'right'}
                  className={theme.imageLeft ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="voe-photo voe-grade aspect-[4/3] shadow-[0_18px_44px_rgba(14,26,51,0.12)]">
                    <Image
                      src={theme.image}
                      alt={theme.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant={theme.imageLeft ? 'right' : 'left'}
                  className={theme.imageLeft ? 'lg:order-2' : 'lg:order-1'}
                >
                  <h3 className="voe-display-md font-display mb-6 text-[#171219]">
                    {theme.title}
                  </h3>
                  {theme.paragraphs.map((p, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed text-[#4A5568] md:text-[17px]">
                      {p}
                    </p>
                  ))}
                </Reveal>
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
                style={{ objectPosition: splitThemes[1].objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className={`flex items-center px-8 md:px-16 voe-section ${splitThemes[1].imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
              style={{ background: '#EEF2FB' }}
            >
              <div className="max-w-xl">
                <Reveal variant={splitThemes[1].imageLeft ? 'right' : 'left'}>
                  <h3 className="voe-display-md font-display mb-6 text-[#171219]">
                    {splitThemes[1].title}
                  </h3>
                  {splitThemes[1].paragraphs.map((p, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed text-[#4A5568] md:text-[17px]">
                      {p}
                    </p>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 9. Instagram wall */}
      
      <section id="instagram" className="voe-section voe-section--tight-top voe-ground-white">
        <InstagramGrid />
      </section>

      {/* 10. Final CTA */}
      <Edge from={GROUND.white} />
      <section id="cta" className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Get involved</p>
            <h2 className="voe-display-lg font-display mb-6 text-white">
              Join the Movement
            </h2>
            <p className="voe-lead mx-auto mb-10 max-w-2xl">
              Whether you want to start a chapter, volunteer, or partner with VoE, there&apos;s a
              place for you in this movement.
            </p>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved/start"
                className="voe-btn voe-btn--on-dark"
              >
                Start a Chapter
              </Link>
              <Link
                href="/get-involved/partner"
                className="voe-btn voe-btn--outline-white"
              >
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
