"use client"

import { whoWeArePage } from '@/content';
import Link from 'next/link';
import Image from 'next/image';
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';
import AnimatedCounter from '@/components/Animation/AnimatedCounter';

// ── Page ───────────────────────────────────────────────────────────────
export default function MissionPage() {
  const { introduction, mission, vision, values, callToAction } = whoWeArePage.mission;

  const missionPoints = [
    { title: "Educate",  icon: <EducateIcon />,  description: mission.keyPoints?.[0]?.description ?? '' },
    { title: "Inspire",  icon: <InspireIcon />,  description: mission.keyPoints?.[1]?.description ?? '' },
    { title: "Empower",  icon: <EmpowerIcon />,  description: mission.keyPoints?.[2]?.description ?? '' },
  ];

  const stats = [
    { value: 60,      suffix: '+', label: 'Chapters', prefix: '' },
    { value: 1000,    suffix: '+', label: 'Members', prefix: '' },
    { value: 43000,   suffix: '+', label: 'Raised', prefix: '$' },
    { value: 10000,   suffix: '+', label: 'Students Reached', prefix: '' },
  ];

  const communityPhotos = [
    '/images/chapters/howard-1.jpg',
    '/images/chapters/cmu-1.jpg',
    '/images/chapters/uconn-1.jpg',
    '/images/chapters/cmu-2.jpg',
    '/images/chapters/arkansas-1.jpg',
    '/images/chapters/uconn-3.jpg',
  ];

  return (
    <>
      {/* ─── 1. Hero Section ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pt-32 pb-24">
        <Image
          src="/team-picture.jpg"
          alt="Voices of Equity team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-16">
          <AnimateOnScroll animation="fade-in">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-white/60 mb-4">WHO WE ARE</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">Our Mission</h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {mission.text}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── 2. Three Pillars Section ────────────────────────────────── */}
      <section className="py-24 bg-blue-wash">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">OUR APPROACH</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219]">
                Educate. Inspire. Empower.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, i) => (
              <AnimateOnScroll key={i} animation="scale-in" delay={i * 150}>
                <div className="group bg-white border border-gray-200 rounded-lg p-8 text-center border-t-2 border-t-transparent hover:border-t-[#587FDA] hover-lift">
                  <div className="text-[#587FDA] mb-4 flex justify-center">{point.icon}</div>
                  <h3 className="text-2xl font-bold font-display text-[#171219] mb-3">{point.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{point.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Animated Stats Section ───────────────────────────────── */}
      <section className="py-20 bg-[#171219]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold font-display text-white">
                    <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="text-sm uppercase tracking-wide text-white/70 mt-3 font-sans font-medium">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Vision Section ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimateOnScroll animation="fade-in-left" className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] hover-image-zoom rounded-lg overflow-hidden">
                <Image
                  src="/our-vision-2.png"
                  alt="Our Vision"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right" className="w-full lg:w-1/2">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">LOOKING AHEAD</p>
              <h2 className="font-display text-3xl font-bold text-[#171219] mb-4">{vision.heading}</h2>
              <div className="w-12 h-px bg-[#587FDA] mb-6" />
              <p className="text-lg text-[#4A5568] leading-relaxed">{vision.text}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── 5. VOICES Values Section ───────────────────────────────────── */}
      <section className="py-24 bg-gradient-surface">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-20">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">What Drives Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#171219]">Our Core Values</h2>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-gray-200/70">
            {[
              { letter: 'V', word: 'Vision', description: 'Stay focused on long-term impact and health equity outcomes. Every decision we make should move us closer to a world where healthcare access is not determined by geography, race, or income.' },
              { letter: 'O', word: 'Opportunity for Better Health', description: "Health isn\u2019t just about doctors and hospitals \u2014 it\u2019s about the opportunities people have to stay healthy. We fight to remove barriers like lack of insurance, food insecurity, and unequal access to care." },
              { letter: 'I', word: 'Impact Over Words', description: 'We measure success not by what we say, but by what we do. Every initiative, event, and partnership must drive tangible outcomes for the communities we serve.' },
              { letter: 'C', word: 'Community First', description: 'Health starts where we live, work, and gather. We listen to communities, support grassroots efforts, and ensure that solutions are created with the people they serve.' },
              { letter: 'E', word: 'Empowerment', description: 'Inspire and enable others to lead and create change. We believe lasting impact comes from building the capacity of individuals to advocate for their own health and the health of their communities.' },
              { letter: 'S', word: 'Sustainability', description: "Build systems and partnerships that endure beyond any single leader, event, or academic year. Real change doesn\u2019t happen overnight \u2014 we work to create lasting systems of support." },
            ].map((item, index) => (
              <AnimateOnScroll key={item.letter} animation="fade-up" delay={index * 150}>
                <div className="grid grid-cols-[auto_1fr] items-center gap-8 md:gap-12 py-16 md:py-20">
                  <span
                    className="font-serif font-bold text-[#171219] leading-none select-none"
                    style={{ fontSize: 'clamp(120px, 16vw, 220px)' }}
                    aria-hidden="true"
                  >
                    {item.letter}
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-[#171219] mb-3 tracking-tight">{item.word}</h3>
                    <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Community Photos Section ─────────────────────────────── */}
      <section className="py-24 bg-warm-wash">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219]">Our Community</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {communityPhotos.map((src, i) => (
              <AnimateOnScroll key={i} animation="scale-in" delay={i * 100}>
                <div className="relative aspect-[4/3] rounded-lg hover-image-zoom">
                  <Image
                    src={src}
                    alt={`Community photo ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CTA Section ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#171219]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {callToAction.heading}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {callToAction.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={callToAction.buttonLink}
                className="inline-block bg-[#587FDA] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4566B8] transition-colors hover-scale"
              >
                Get Involved
              </Link>
              <Link
                href="/who-we-are/history"
                className="inline-block border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn Our History
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
