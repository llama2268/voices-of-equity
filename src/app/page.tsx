'use client'
import Hero from '../components/Hero/Hero'
import PageLayout from '../components/Layout/PageLayout'
import ImpactTracker from '@/components/Stats/ImpactTracker'
import { whoWeArePage } from '@/content';
import { homePage } from '@/content'
import { SocialCallout } from '@/components/ui/SocialCallout'
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { mission } = whoWeArePage.mission;
  const totalSlides = 4;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const missionPoints = [
    { title: "Educate", icon: <EducateIcon />, description: mission.keyPoints?.[0]?.description ?? '' },
    { title: "Inspire", icon: <InspireIcon />, description: mission.keyPoints?.[1]?.description ?? '' },
    { title: "Empower", icon: <EmpowerIcon />, description: mission.keyPoints?.[2]?.description ?? '' }
  ];

  const slides = [
    { title: 'National Initiatives', description: 'Nationwide programs advancing health equity across communities', bg: '/paintingtry.jpg', bgPos: 'center 45%', cta: { text: 'Learn More', href: '/what-we-do/national' } },
    { title: 'Our Impact', description: 'Real stories of change and transformation in our communities', bg: '/impact-stories.jpeg', bgPos: 'center 45%', cta: { text: 'See Our Work', href: '/what-we-do/impact' } },
    { title: 'Our Chapters', description: 'Student-led chapters driving change across 60+ universities nationwide', bg: '/cornell-chapter.jpg', bgPos: 'center 30%', cta: { text: 'Find a Chapter', href: '/get-involved/chapters' } },
    { title: 'Resources', description: 'Educational materials and research for health equity advocacy', bg: '/home-resources.jpg', bgPos: 'center 30%', cta: { text: 'Explore Resources', href: '/resources' } },
  ];

  return (
    <PageLayout fullWidth>

      {/* Hero */}
      <Hero title={homePage.hero.title} description={homePage.hero.description} />

      {/* Photo Strip */}
      <section className="overflow-hidden bg-white">
        <div className="flex gap-1 w-max voe-marquee">
          {(() => {
            const images = [
              '/impact-stories.jpeg', '/local-initiatives.jpeg', '/paintingtry.jpg',
              '/team-picture.jpg', '/empower.jpg', '/voe-journey.jpeg',
              '/cornell-chapter.jpg', '/home-resources.jpg', '/hero-new.jpeg',
            ];
            return [...images, ...images].map((src, idx) => (
              <div key={`${src}-${idx}`} className="relative h-44 md:h-52 w-72 md:w-80 flex-shrink-0">
                <Image src={src} alt="" fill className="object-cover" sizes="320px" />
              </div>
            ));
          })()}
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] mb-4 font-medium">Our Purpose</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171219] mb-6 tracking-tight max-w-3xl">
              {mission.heading}
            </h2>
            <p className="text-lg md:text-xl text-[#4A5568] leading-relaxed max-w-3xl mb-20">
              {mission.text}
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {missionPoints.map((point, idx) => (
              <AnimateOnScroll key={point.title} animation="fade-up" delay={idx * 150}>
                <div className="text-[#587FDA] mb-5">{point.icon}</div>
                <h3 className="font-display text-xl font-semibold text-[#171219] mb-3">{point.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{point.description}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="mb-16">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] mb-4 font-medium">By The Numbers</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-[#171219] tracking-tight">Our Impact</h2>
            </div>
            <ImpactTracker />
            <div className="mt-12">
              <Link
                href="/what-we-do/impact"
                className="text-[#587FDA] font-medium font-display hover:text-[#4566B8] transition-colors link-underline"
              >
                View Full Impact Report &#x2192;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* University Logo Bar */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 font-medium text-center">Our Chapter Network</p>
        </div>
        <div className="flex gap-12 w-max voe-marquee items-center">
          {(() => {
            const names = ['Cornell University', 'Carnegie Mellon', 'Howard University', 'MIT', 'UCLA', 'Princeton', 'Brown University', 'NYU', 'Ohio State', 'Purdue', 'UConn', 'UT Austin', 'WashU', 'UNC Chapel Hill', 'Binghamton', 'McGill'];
            return [...names, ...names].map((name, idx) => (
              <span key={`${name}-${idx}`} className="text-sm font-medium text-gray-400 whitespace-nowrap font-display">{name}</span>
            ));
          })()}
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-warm-wash py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="min-w-full flex-none">
                    <div className="relative h-[28rem] md:h-[32rem]">
                      <Image src={slide.bg} alt={slide.title} fill className="object-cover" style={{ objectPosition: slide.bgPos }} />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-2xl mx-auto px-8" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                          <h3 className="text-3xl md:text-5xl font-bold font-display mb-4 text-white">{slide.title}</h3>
                          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">{slide.description}</p>
                          <Link
                            href={slide.cta.href}
                            className="inline-block px-8 py-3 bg-white text-[#171219] font-medium font-display rounded-md hover:bg-gray-100 transition-colors"
                          >
                            {slide.cta.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#171219] p-2 rounded-full transition-colors z-10" aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#171219] p-2 rounded-full transition-colors z-10" aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === i ? 'bg-[#587FDA] w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 bg-gradient-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] mb-4 font-medium">What We Do</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#171219] mb-4 tracking-tight">Key Initiatives</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mb-16">
              Building health equity through education, activation, and community-driven change.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {homePage.initiatives.map((initiative, idx) => (
              <AnimateOnScroll key={initiative.title} animation="scale-in" delay={idx * 150}>
                <div className="premium-card group overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-lg font-semibold text-[#171219] mb-3 transition-colors duration-300 group-hover:text-[#2A8D87]">
                      {initiative.title}
                    </h3>
                    <p className="text-[#4A5568] leading-relaxed text-sm">{initiative.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-24 bg-warm-wash">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            <AnimateOnScroll animation="fade-in-left">
              <Link href="/who-we-are/team" className="group block bg-white p-10 hover:bg-[#F7F8FA] hover-lift">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-medium">Meet Our Team</p>
                <h3 className="text-2xl font-bold font-display text-[#171219] mb-3 group-hover:text-[#587FDA] transition-colors">
                  Executive Leadership
                </h3>
                <p className="text-[#4A5568] mb-4 leading-relaxed">
                  The passionate leaders behind Voices of Equity driving change in health equity nationwide.
                </p>
                <span className="text-[#587FDA] font-medium text-sm">View Team &#x2192;</span>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right">
              <Link href="/get-involved/start" className="group block bg-white p-10 hover:bg-[#F7F8FA] hover-lift">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-medium">Get Involved</p>
                <h3 className="text-2xl font-bold font-display text-[#171219] mb-3 group-hover:text-[#587FDA] transition-colors">
                  Start a Chapter
                </h3>
                <p className="text-[#4A5568] mb-4 leading-relaxed">
                  Launch a Voices of Equity chapter at your university and advance health equity in your community.
                </p>
                <span className="text-[#587FDA] font-medium text-sm">Get Started &#x2192;</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#171219]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="heading">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with changemakers building a more equitable future for all.
            </p>
            <SocialCallout />
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
