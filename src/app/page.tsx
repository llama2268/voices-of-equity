'use client'
import Hero from '../components/Hero/Hero'
import PageLayout from '../components/Layout/PageLayout'
import ImpactTracker from '@/components/Stats/ImpactTracker'
import { whoWeArePage } from '@/content';
import { homePage } from '@/content'
import { SocialCallout } from '@/components/ui/SocialCallout'
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}>
      {children}
    </div>
  );
}

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
    { title: 'Our Chapters', description: 'Student-led chapters driving change across 55+ universities nationwide', bg: '/cornell-chapter.jpg', bgPos: 'center 30%', cta: { text: 'Find a Chapter', href: '/get-involved/chapters' } },
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
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#587FDA]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-medium">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-6">
              {mission.heading}
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-3xl mb-20">
              {mission.text}
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-16">
            {missionPoints.map((point, idx) => (
              <FadeInSection key={point.title} delay={idx * 150}>
                <div className="text-[#587FDA] mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-3">{point.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{point.description}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Impact Stats */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-medium">By the Numbers</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219]">Our Impact</h2>
            </div>
            <ImpactTracker />
            <div className="mt-12">
              <Link
                href="/what-we-do/impact"
                className="text-[#587FDA] font-medium font-display hover:text-[#4566B8] transition-colors"
              >
                View Full Impact Report &#x2192;
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* University Logo Bar */}
      <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium text-center">Our Chapter Network</p>
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
      <section className="bg-white py-24">
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

      {/* Accent band before Initiatives */}
      <div className="h-1 bg-[#587FDA]" />

      {/* Initiatives */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-medium">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-4">Key Initiatives</h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mb-16">
              Building health equity through education, activation, and community-driven change.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {homePage.initiatives.map((initiative, idx) => (
              <FadeInSection key={initiative.title} delay={idx * 150}>
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="relative h-48">
                    <Image src={initiative.image} alt={initiative.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-display text-[#171219] mb-3">{initiative.title}</h3>
                    <p className="text-[#4A5568] leading-relaxed text-sm">{initiative.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Links */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-px bg-gray-200">
              <Link href="/who-we-are/team" className="group bg-white p-10 hover:bg-[#F7F8FA] hover:-translate-y-0.5 transition-all">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Meet Our Team</p>
                <h3 className="text-2xl font-bold font-display text-[#171219] mb-3 group-hover:text-[#587FDA] transition-colors">
                  Executive Leadership
                </h3>
                <p className="text-[#4A5568] mb-4 leading-relaxed">
                  The passionate leaders behind Voices of Equity driving change in health equity nationwide.
                </p>
                <span className="text-[#587FDA] font-medium text-sm">View Team &#x2192;</span>
              </Link>
              <Link href="/get-involved/start" className="group bg-white p-10 hover:bg-[#F7F8FA] hover:-translate-y-0.5 transition-all">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Get Involved</p>
                <h3 className="text-2xl font-bold font-display text-[#171219] mb-3 group-hover:text-[#587FDA] transition-colors">
                  Start a Chapter
                </h3>
                <p className="text-[#4A5568] mb-4 leading-relaxed">
                  Launch a Voices of Equity chapter at your university and advance health equity in your community.
                </p>
                <span className="text-[#587FDA] font-medium text-sm">Get Started &#x2192;</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#171219]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with changemakers building a more equitable future for all.
            </p>
            <SocialCallout />
          </FadeInSection>
        </div>
      </section>
    </PageLayout>
  );
}
