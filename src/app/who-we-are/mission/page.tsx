"use client"

import { whoWeArePage } from '@/content';
import Link from 'next/link';
import Image from 'next/image';
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import { useEffect, useRef, useState, type ReactNode } from 'react';

// ── FadeInSection wrapper ──────────────────────────────────────────────
function FadeInSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry && entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
    >
      {children}
    </div>
  );
}

// ── Animated counter hook ──────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ── Stat item ──────────────────────────────────────────────────────────
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-[#587FDA]">
        {count}{suffix}
      </p>
      <p className="text-xs uppercase tracking-wider text-[#4A5568] mt-2">{label}</p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
export default function MissionPage() {
  const { introduction, mission, vision, values, callToAction } = whoWeArePage.mission;

  const missionPoints = [
    { title: "Educate",  icon: <EducateIcon />,  description: mission.keyPoints?.[0]?.description ?? '' },
    { title: "Inspire",  icon: <InspireIcon />,  description: mission.keyPoints?.[1]?.description ?? '' },
    { title: "Empower",  icon: <EmpowerIcon />,  description: mission.keyPoints?.[2]?.description ?? '' },
  ];

  const stats = [
    { value: 55,   suffix: '+', label: 'Chapters' },
    { value: 400,  suffix: '+', label: 'Members' },
    { value: 25,   suffix: '+', label: 'Universities' },
    { value: 1000, suffix: '+', label: 'Students Reached' },
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
        {/* Background image + overlay */}
        <Image
          src="/team-picture.jpg"
          alt="Voices of Equity team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-16">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-4">WHO WE ARE</p>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">Our Mission</h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            {mission.text}
          </p>
        </div>
      </section>

      {/* ─── 2. Three Pillars Section ────────────────────────────────── */}
      <FadeInSection>
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-[#587FDA] font-medium mb-4">OUR APPROACH</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219]">
                Educate. Inspire. Empower.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionPoints.map((point, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-200 rounded-lg p-8 text-center border-t-2 border-t-transparent hover:border-t-[#587FDA] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-[#587FDA] mb-4 flex justify-center">{point.icon}</div>
                  <h3 className="text-2xl font-bold text-[#171219] mb-3">{point.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ─── 3. Animated Stats Section ───────────────────────────────── */}
      <section className="py-20 bg-[#F7F8FA] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <AnimatedStat key={i} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Vision Section ───────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 relative aspect-[4/3]">
                <Image
                  src="/our-vision-2.png"
                  alt="Our Vision"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-xs uppercase tracking-widest text-[#587FDA] font-medium mb-4">LOOKING AHEAD</p>
                <h2 className="font-display text-3xl font-bold text-[#171219] mb-4">{vision.heading}</h2>
                <div className="w-12 h-px bg-[#587FDA] mb-6" />
                <p className="text-lg text-[#4A5568] leading-relaxed">{vision.text}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ─── 5. VOICES Values Section ───────────────────────────────────── */}
      <FadeInSection>
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-[#587FDA] font-medium mb-4">WHAT DRIVES US</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219]">Our Core Values</h2>
            </div>

            {/* VOICES vertical stack */}
            <div>
              <div className="space-y-12">
                {[
                  { letter: 'V', word: 'Vision', description: 'Stay focused on long-term impact and health equity outcomes. Every decision we make should move us closer to a world where healthcare access is not determined by geography, race, or income.' },
                  { letter: 'O', word: 'Opportunity for Better Health', description: "Health isn't just about doctors and hospitals — it's about the opportunities people have to stay healthy. We fight to remove barriers like lack of insurance, food insecurity, and unequal access to care." },
                  { letter: 'I', word: 'Impact Over Words', description: 'We measure success not by what we say, but by what we do. Every initiative, event, and partnership must drive tangible outcomes for the communities we serve.' },
                  { letter: 'C', word: 'Community First', description: 'Health starts where we live, work, and gather. We listen to communities, support grassroots efforts, and ensure that solutions are created with the people they serve.' },
                  { letter: 'E', word: 'Empowerment', description: 'Inspire and enable others to lead and create change. We believe lasting impact comes from building the capacity of individuals to advocate for their own health and the health of their communities.' },
                  { letter: 'S', word: 'Sustainability', description: "Build systems and partnerships that endure beyond any single leader, event, or academic year. Real change doesn't happen overnight — we work to create lasting systems of support." },
                ].map((item) => (
                  <FadeInSection key={item.letter} className="">
                    <div className="flex items-start gap-6 md:gap-10">
                      {/* Large letter */}
                      <div className="flex-shrink-0 w-[4.5rem] h-[4.5rem] flex items-center justify-center">
                        <span className="text-5xl md:text-6xl font-bold font-display text-[#587FDA]">
                          {item.letter}
                        </span>
                      </div>
                      {/* Word + Description */}
                      <div className="pt-2 flex-1">
                        <h3 className="text-xl font-bold font-display text-[#171219] mb-2">{item.word}</h3>
                        <p className="text-[#4A5568] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ─── 6. Community Photos Section ─────────────────────────────── */}
      <FadeInSection>
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219]">Our Community</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {communityPhotos.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Community photo ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ─── 7. CTA Section ──────────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-24 bg-[#171219]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {callToAction.heading}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {callToAction.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={callToAction.buttonLink}
                className="inline-block bg-[#587FDA] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4566B8] transition-colors"
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
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
