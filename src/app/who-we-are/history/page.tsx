'use client'

import { whoWeArePage } from '@/content';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';
import AnimatedCounter from '@/components/Animation/AnimatedCounter';

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  stats?: { value: number; prefix?: string; suffix?: string; label: string }[];
}

const milestoneMedia: Record<string, { image: string; stats?: Milestone['stats'] }> = {
  'DEC 2024': { image: '/impact-photos/general-1.jpeg' },
  'JAN 2025': { image: '/cornell-chapter.jpg' },
  'FEB 2025': { image: '/impact-photos/cmu-1.jpeg' },
  'MAR 2025': { image: '/impact-photos/howard-1.jpeg' },
  'JUN 2025': {
    image: '/impact-photos/uconn-1.jpeg',
    stats: [
      { value: 30, suffix: '+', label: 'Chapters' },
    ],
  },
  'AUG 2025': {
    image: '/team-picture.jpg',
    stats: [
      { value: 100, suffix: '+', label: 'Student Leaders' },
      { value: 40, suffix: '+', label: 'Institutions' },
    ],
  },
  'OCT 2025': {
    image: '/impact-photos/nhew-flyer.jpg',
    stats: [
      { value: 43000, prefix: '$', suffix: '+', label: 'Raised' },
      { value: 50, suffix: '+', label: 'Campuses' },
      { value: 1000, suffix: '+', label: 'Mobilized' },
    ],
  },
};

function HorizontalTimeline({ milestones }: { milestones: Milestone[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const goTo = useCallback((next: number) => {
    setActiveIndex((prev) => {
      const clamped = Math.max(0, Math.min(milestones.length - 1, next));
      setDirection(clamped >= prev ? 1 : -1);
      return clamped;
    });
  }, [milestones.length]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    if (!isAutoplay) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => {
        const n = (prev + 1) % milestones.length;
        setDirection(1);
        return n;
      });
    }, 6000);
    return () => window.clearInterval(id);
  }, [isAutoplay, milestones.length]);

  const active = milestones[activeIndex];
  if (!active) return null;

  const progressPercent = milestones.length > 1 ? (activeIndex / (milestones.length - 1)) * 100 : 0;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Milestone tab row */}
      <div className="relative mb-12 md:mb-16">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-end justify-between gap-6 md:gap-10 min-w-max md:min-w-0 px-1">
            {milestones.map((m, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={m.year}
                  onClick={() => goTo(i)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  <span
                    className={`font-display uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? 'text-[#587FDA] font-bold text-base md:text-lg'
                        : 'text-gray-500 font-medium text-xs md:text-sm group-hover:text-gray-700'
                    }`}
                  >
                    {m.year}
                  </span>
                  <span
                    className={`mt-3 h-[2px] w-12 md:w-16 transition-all duration-300 ${
                      isActive ? 'bg-[#587FDA] h-[3px]' : 'bg-gray-200 group-hover:bg-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 relative h-[2px] bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-accent rounded-full"
            style={{
              width: `${progressPercent}%`,
              transition: 'width 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          />
        </div>
      </div>

      {/* Slide */}
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.year}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-[#587FDA] font-bold mb-4">
                {active.year}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#171219] mb-5 leading-tight tracking-tight">
                {active.title}
              </h3>
              <p className="text-base md:text-lg text-[#4A5568] leading-relaxed">
                {active.description}
              </p>

              {active.stats && active.stats.length > 0 && (
                <div
                  className={`mt-8 grid gap-4 ${
                    active.stats.length === 1
                      ? 'grid-cols-1 max-w-xs'
                      : active.stats.length === 2
                      ? 'grid-cols-2 max-w-md'
                      : 'grid-cols-3 max-w-2xl'
                  }`}
                >
                  {active.stats.map((s, si) => (
                    <div key={si} className="bg-white border border-gray-100 rounded-lg p-4 shadow-resting">
                      <p className="text-2xl md:text-3xl font-bold font-display text-[#587FDA]">
                        <AnimatedCounter target={s.value} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} />
                      </p>
                      <p className="text-xs uppercase tracking-wide text-gray-500 mt-1 font-medium">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-raised">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow controls */}
      <div className="flex items-center justify-between mt-12">
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous milestone"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#171219] hover:border-[#587FDA] hover:text-[#587FDA] transition-premium disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-[#171219]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={activeIndex === milestones.length - 1}
            aria-label="Next milestone"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#171219] hover:border-[#587FDA] hover:text-[#587FDA] transition-premium disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-[#171219]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => setIsAutoplay((v) => !v)}
            aria-label={isAutoplay ? 'Pause autoplay' : 'Play autoplay'}
            className="ml-2 text-xs font-display uppercase tracking-[0.2em] text-gray-500 hover:text-[#587FDA] transition-premium"
          >
            {isAutoplay ? 'Pause' : 'Auto'}
          </button>
        </div>
        <p className="text-xs font-display uppercase tracking-[0.2em] text-gray-400">
          <span className="text-[#171219] font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          {String(milestones.length).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const { title, subtitle, content, timeline, conclusion } = whoWeArePage.history;

  const milestones: Milestone[] = timeline
    .filter((e) => 'title' in e && 'description' in e && !!e.title && !!e.description)
    .map((e) => {
      const key = String(e.year);
      const media = milestoneMedia[key] ?? { image: '/team-picture.jpg' };
      return {
        year: key,
        title: (e as { title: string }).title,
        description: (e as { description: string }).description,
        image: media.image,
        stats: media.stats,
      };
    });

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
          <AnimateOnScroll animation="fade-up">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
              Who We Are
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171219] mb-4 tracking-tight">{title}</h1>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">{subtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {content.map((paragraph, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <p className="mb-6 text-lg text-[#4A5568] leading-relaxed">{paragraph}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section className="py-24 md:py-32 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-16">
          <AnimateOnScroll animation="heading">
            <div className="text-center">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">
                Our Journey
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#171219] tracking-tight">
                From Idea to Movement
              </h2>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="px-6">
          <HorizontalTimeline milestones={milestones} />
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-warm-wash">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-[#4A5568] leading-relaxed">{conclusion}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
