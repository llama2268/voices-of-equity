'use client'

import { whoWeArePage } from '@/content';
import Image from 'next/image';
import { useState, useRef, useEffect, type ReactNode } from 'react';

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

// ── Types ──────────────────────────────────────────────────────────────
interface Milestone {
  year: string | number;
  title: string;
  description: string;
  side?: string;
}

// ── Interactive Timeline ───────────────────────────────────────────────
function InteractiveTimeline({ milestones }: { milestones: Milestone[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  // Fraction of the progress line that should be filled
  const progressFraction =
    activeIndex !== null && milestones.length > 1
      ? activeIndex / (milestones.length - 1)
      : 0;

  return (
    <>
      {/* ── Desktop: horizontal timeline (md+) ── */}
      <div className="hidden md:block">
        {/* Node row */}
        <div className="relative mx-auto max-w-6xl">
          {/* Background line */}
          <div className="absolute top-[10px] left-0 right-0 h-1 bg-gray-200 rounded" />
          {/* Progress line */}
          <div
            className="absolute top-[10px] left-0 h-1 bg-[#587FDA] rounded transition-all duration-500 ease-out"
            style={{ width: `${progressFraction * 100}%` }}
          />

          {/* Nodes */}
          <div className="relative flex justify-between">
            {milestones.map((m, i) => {
              const isActive = activeIndex === i;
              const isPast = activeIndex !== null && i <= activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className="flex flex-col items-center group focus:outline-none"
                  style={{ width: `${100 / milestones.length}%` }}
                >
                  {/* Dot */}
                  <div
                    className={`rounded-full border-[3px] transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'w-6 h-6 bg-[#587FDA] border-[#587FDA] scale-110'
                        : isPast
                        ? 'w-5 h-5 bg-[#587FDA] border-[#587FDA]'
                        : 'w-5 h-5 bg-white border-gray-300 group-hover:border-[#587FDA]'
                    }`}
                  >
                    {isActive && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  {/* Label */}
                  <span
                    className={`mt-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[#587FDA]' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {m.year}
                  </span>
                  <span
                    className={`mt-1 text-xs leading-tight text-center max-w-[140px] transition-colors duration-300 ${
                      isActive ? 'text-[#171219] font-medium' : 'text-gray-500'
                    }`}
                  >
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expanded content panel */}
        <div
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: activeIndex !== null ? '500px' : '0px',
            opacity: activeIndex !== null ? 1 : 0,
          }}
        >
          {activeIndex !== null && milestones[activeIndex] && (
            <div className="mt-10 max-w-3xl mx-auto text-center p-8 md:p-10 min-h-[200px] flex flex-col items-center justify-center">
              <h3 className="text-xl md:text-2xl font-bold font-display text-[#171219] mb-4">
                {milestones[activeIndex]!.title}
              </h3>
              <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
                {milestones[activeIndex]!.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile: vertical accordion (below md) ── */}
      <div className="md:hidden" ref={scrollRef}>
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-[17px] top-0 bottom-0 w-[3px] bg-gray-200 rounded" />
          {/* Progress line */}
          <div
            className="absolute left-[17px] top-0 w-[3px] bg-[#587FDA] rounded transition-all duration-500 ease-out"
            style={{
              height:
                activeIndex !== null && milestones.length > 1
                  ? `${(activeIndex / (milestones.length - 1)) * 100}%`
                  : '0%',
            }}
          />

          {milestones.map((m, i) => {
            const isActive = activeIndex === i;
            const isPast = activeIndex !== null && i <= activeIndex;
            return (
              <div key={i} className="relative mb-6">
                {/* Dot */}
                <div
                  className={`absolute -left-10 top-4 w-8 h-8 rounded-full border-[3px] transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'bg-[#587FDA] border-[#587FDA] scale-110'
                      : isPast
                      ? 'bg-[#587FDA] border-[#587FDA]'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>

                {/* Card */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left focus:outline-none"
                >
                  <div
                    className={`rounded-lg border p-6 transition-all duration-300 ${
                      isActive
                        ? 'border-[#587FDA] bg-[#587FDA]/5'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-[#587FDA]">
                          {m.year}
                        </span>
                        <h3 className="text-lg font-bold font-display text-[#171219] mt-1">
                          {m.title}
                        </h3>
                      </div>
                      <svg
                        className={`w-6 h-6 text-[#587FDA] transition-transform duration-300 flex-shrink-0 ml-4 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Expandable description */}
                    <div
                      className="overflow-hidden transition-all duration-400 ease-out"
                      style={{
                        maxHeight: isActive ? '400px' : '0px',
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '16px' : '0px',
                      }}
                    >
                      <p className="text-[#4A5568] leading-relaxed text-base">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ── Page ────────────────────────────────────────────────────────────────
export default function HistoryPage() {
  const { title, subtitle, content, timeline, conclusion } = whoWeArePage.history;

  // Filter out year-only separator entries — keep only real milestones
  const milestones: Milestone[] = timeline
    .filter((e) => 'title' in e && 'description' in e && !!e.title && !!e.description)
    .map((e) => ({
      year: String(e.year),
      title: (e as { title: string }).title,
      description: (e as { description: string }).description,
      side: (e as { side?: string }).side,
    }));

  return (
    <>
      {/* Hero Image */}
      <div className="relative w-full h-[70vh] mt-16">
        <Image
          src="/our-history-2.jpg"
          alt="History"
          fill
          className="object-cover object-center"
          quality={100}
          priority
        />
      </div>

      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171219] mb-4">{title}</h1>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg text-[#4A5568] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Interactive Timeline */}
      <FadeInSection>
        <section className="py-28 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium text-center mb-4">MILESTONES</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-[#171219] mb-16">Our Journey</h2>
            <InteractiveTimeline milestones={milestones} />
          </div>
        </section>
      </FadeInSection>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Impact Numbers */}
      <FadeInSection>
        <section className="py-24 bg-[#F7F8FA]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium text-center mb-4">By The Numbers</p>
            <h2 className="font-display text-3xl font-bold text-center text-[#171219] mb-16">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-sm transition-shadow">
                <h3 className="text-4xl font-bold text-[#587FDA] mb-3">$40,000+</h3>
                <p className="text-lg font-semibold text-[#171219] mb-3">Raised for Health Equity Initiatives</p>
                <p className="text-[#4A5568] leading-relaxed">Fueling community impact. Voices of Equity has mobilized over $40,000 to support programs that expand access to care and advance health equity nationwide.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-sm transition-shadow">
                <h3 className="text-4xl font-bold text-[#587FDA] mb-3">55+</h3>
                <p className="text-lg font-semibold text-[#171219] mb-3">Chapters Across Undergraduate Institutions Worldwide</p>
                <p className="text-[#4A5568] leading-relaxed">A growing global network. With more than 55 chapters across the U.S. and abroad, our student-led movement is embedding health equity into campuses and communities everywhere.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-sm transition-shadow">
                <h3 className="text-4xl font-bold text-[#587FDA] mb-3">60,000+</h3>
                <p className="text-lg font-semibold text-[#171219] mb-3">People Reached Through Health Equity Education</p>
                <p className="text-[#4A5568] leading-relaxed">Expanding awareness and action. Our content and programming have reached over 60,000 people, with more than 350 individuals trained through our health equity curriculum.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Conclusion */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#4A5568] leading-relaxed">
              {conclusion}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
