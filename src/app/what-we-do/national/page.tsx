'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';
import AnimatedCounter from '@/components/Animation/AnimatedCounter';

/* ------------------------------------------------------------------ */
/*  CARE Carousel slide type & data                                    */
/* ------------------------------------------------------------------ */
type InitiativeSlide =
  | { type: 'text'; title: string; body: string[] }
  | { type: 'image'; title: string; src: string };

const careSlides: InitiativeSlide[] = [
  {
    type: 'text',
    title: 'What Are CARE Packets?',
    body: [
      'The Community Access and Resource Education (CARE) Packet initiative is a Voices of Equity service-based project designed to improve access to care beyond the clinical setting.',
      'Healthcare does not end at discharge. For many patients, recovery and long-term health depend on access to food, housing, transportation, financial assistance, mental health support, and other community-based services.',
    ],
  },
  {
    type: 'text',
    title: 'Bridging the Gap',
    body: [
      'CARE Packets help bridge this gap by connecting patients with vetted, local resources that address the social determinants of health.',
      'Through this initiative, Voices of Equity chapters develop patient-facing resource packets tailored to the specific needs of their surrounding communities.',
    ],
  },
  {
    type: 'text',
    title: 'Where CARE Packets Are Used',
    body: [
      'CARE Packets are intended for use by hospitals, clinics, urgent care centers, and community health organizations as supplemental discharge or referral materials.',
      'Each packet is customized to the local community, ensuring patients receive relevant and actionable information about available support services.',
    ],
  },
  {
    type: 'image',
    title: 'CARE Initiative Overview',
    src: '/highlights/slide_4.png',
  },
];

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const stats = [
  { value: 43000, prefix: '$', suffix: '+', label: 'Raised' },
  { value: 60, prefix: '', suffix: '+', label: 'Chapters Engaged' },
  { value: 1000, prefix: '', suffix: '+', label: 'Members Involved' },
];

/* ------------------------------------------------------------------ */
/*  Chapter photos                                                     */
/* ------------------------------------------------------------------ */
const chapterPhotos = [
  { src: '/images/chapters/howard-1.jpg', alt: 'Howard University chapter event' },
  { src: '/images/chapters/cmu-2.jpg', alt: 'Carnegie Mellon chapter tabling' },
  { src: '/images/chapters/uconn-2.jpg', alt: 'UConn chapter outreach' },
  { src: '/images/chapters/arkansas-2.jpg', alt: 'University of Arkansas chapter' },
  { src: '/images/chapters/arkansas-3.jpg', alt: 'University of Arkansas chapter event' },
  { src: '/images/chapters/cmu-5.jpg', alt: 'Carnegie Mellon chapter engagement' },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function NationalPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = careSlides.length;

  const goNext = useCallback(() => { setCurrentSlide((p) => (p + 1) % totalSlides); }, [totalSlides]);
  const goPrev = useCallback(() => { setCurrentSlide((p) => (p === 0 ? totalSlides - 1 : p - 1)); }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const slide = careSlides[currentSlide] as any;

  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="relative pt-32 pb-20 bg-[#171219] overflow-hidden">
        <Image
          src="/images/chapters/cmu-1.jpg"
          alt="Community Engagement"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-white/60 mb-4">What We Do</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              National Initiatives
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Coordinated programs uniting 60+ chapters in a shared mission to advance health equity nationwide.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== 2. NATIONAL HEALTH EQUITY WEEK ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimateOnScroll animation="fade-in-left">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden hover-image-zoom">
                <Image
                  src="/images/chapters/howard-1.jpg"
                  alt="National Health Equity Week"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll animation="fade-in-right">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] mb-3">Flagship Initiative</p>
                <h2 className="text-3xl font-bold font-display text-[#171219] mb-6">
                  National Health Equity Week
                </h2>
                <div className="w-12 h-px bg-[#587FDA] mb-6" />
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  National Health Equity Week is Voices of Equity&apos;s flagship annual initiative, uniting chapters across the country in a coordinated week of education, outreach, and community engagement around pressing health equity issues.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  For Fall 2025, our focus was health equity through the lens of addiction &mdash; examining how substance use is shaped by disparities in access to care, stigma, systemic bias, and socioeconomic barriers.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== 3. STATS ===== */}
      <section className="py-16 bg-[#F7F8FA] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 100}>
                <div>
                  <p className="text-4xl md:text-5xl font-bold font-display text-[#171219]">
                    <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 font-sans text-sm uppercase tracking-wide text-[#4A5568]">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. HEALTH EQUITY WEEK ACTIVITIES ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text (left on desktop) */}
            <AnimateOnScroll animation="fade-in-left" className="order-2 md:order-1">
              <h2 className="text-3xl font-bold font-display text-[#171219] mb-6">Week Activities</h2>
              <ul className="space-y-4 text-[#4A5568]">
                {[
                  'Fundraising efforts to support national and local partners advancing equity in addiction care',
                  'Advocacy campaigns that raised awareness and pushed for systemic change',
                  'Educational modules grounding members in the science and policies of addiction',
                  'Panels and guest speakers featuring professionals and advocates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 mt-2 mr-3 h-1.5 w-1.5 rounded-full bg-[#587FDA]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* Flyer */}
            <AnimateOnScroll animation="fade-in-right" className="order-1 md:order-2">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#F7F8FA] hover-image-zoom">
                <Image
                  src="/health-equity-week-2025-poster.jpg"
                  alt="Health Equity Week 2025 Poster"
                  fill
                  className="object-contain"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== 5. CARE PACKETS CAROUSEL ===== */}
      <section className="py-24 bg-blue-wash">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="text-center mb-12">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] mb-3">Spring 2026</p>
              <h2 className="text-3xl font-bold font-display text-[#171219]">
                Community Access and Resource Education (CARE)
              </h2>
            </div>

            <div
              className="relative border border-gray-200 bg-white rounded-lg p-8 md:p-12"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition-shadow"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-[#171219]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:shadow-md transition-shadow"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-[#171219]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="min-h-[300px] flex items-center justify-center px-8">
                {slide.type === 'text' && (
                  <div>
                    <h3 className="text-2xl font-bold font-display text-[#171219] mb-6">{slide.title}</h3>
                    <div className="space-y-4 text-[#4A5568] leading-relaxed">
                      {slide.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                )}
                {slide.type === 'image' && (
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-xl font-bold font-display text-[#171219] mb-6">{slide.title}</h3>
                    <div className="relative w-full max-h-[360px] overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-8 gap-2">
                {careSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === i ? 'bg-[#587FDA] w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== 6. CHAPTER PHOTO GRID ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <h2 className="text-3xl font-bold font-display text-[#171219] text-center mb-12">
              Chapters in Action
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapterPhotos.map((photo, i) => (
              <AnimateOnScroll key={photo.src} animation="scale-in" delay={i * 100}>
                <div className="relative aspect-[4/3] rounded-lg hover-image-zoom">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover rounded-lg" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA ===== */}
      <section className="py-24 bg-[#171219]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="heading">
            <h2 className="text-4xl font-bold font-display text-white mb-4">Join the Movement</h2>
            <p className="text-lg text-white/70 mb-8">
              Start a chapter at your university and be part of our next national initiative.
            </p>
            <Link
              href="/get-involved/start"
              className="inline-block px-8 py-3 bg-[#587FDA] text-white font-semibold rounded-lg hover:bg-[#4566B8] transition-colors hover-scale"
            >
              Start a Chapter
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
