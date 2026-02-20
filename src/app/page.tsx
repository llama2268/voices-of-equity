'use client'
import Hero from '../components/Hero/Hero'
import PageLayout from '../components/Layout/PageLayout'
import { Section } from '@/components/ui/Section'
import ImpactTracker from '@/components/Stats/ImpactTracker'
import { whoWeArePage } from '@/content';
import { homePage } from '@/content'
import { Callout } from '@/components/ui/Callout'
import { SocialCallout } from '@/components/ui/SocialCallout'
import { Card } from '@/components/ui/Card';
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { introduction, mission, vision, values, callToAction } = whoWeArePage.mission;

  const missionPoints = [
    { 
      title: "Educate",
      icon: <EducateIcon />,
      description: mission.keyPoints[0].description 
    },
    { 
      title: "Inspire",
      icon: <InspireIcon />,
      description: mission.keyPoints[1].description 
    },
    { 
      title: "Empower",
      icon: <EmpowerIcon />,
      description: mission.keyPoints[2].description 
    }
  ];

  return (
    <PageLayout fullWidth>
      <style jsx>{`
        @keyframes voeFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes voeGlow {
          0% { opacity: 0.35; }
          50% { opacity: 0.6; }
          100% { opacity: 0.35; }
        }
        @keyframes voePan {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1.02); }
        }
        @keyframes voeFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes voePop {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes voeOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes voeMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .voe-float {
          animation: voeFloat 10s ease-in-out infinite;
        }
        .voe-glow {
          animation: voeGlow 8s ease-in-out infinite;
        }
        .voe-pan {
          animation: voePan 14s ease-in-out infinite;
        }
        .voe-fade-up {
          animation: voeFadeUp 700ms ease-out both;
        }
        .voe-pop {
          animation: voePop 650ms ease-out both;
        }
        .voe-delay-1 { animation-delay: 120ms; }
        .voe-delay-2 { animation-delay: 240ms; }
        .voe-delay-3 { animation-delay: 360ms; }
        .voe-delay-4 { animation-delay: 480ms; }
        .voe-delay-5 { animation-delay: 600ms; }
        .voe-delay-6 { animation-delay: 720ms; }
        .voe-marquee {
          animation: voeMarquee 62s linear infinite;
          will-change: transform;
        }
        .voe-orbit {
          position: relative;
          height: 440px;
        }
        .voe-orbit-spin {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          animation: voeOrbit 22s linear infinite;
        }
        .voe-orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle)));
        }
        .voe-orbit-item-inner {}
      `}</style>
      <div className="voe-fade-up relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#607AD4]/15 via-white/30 to-[#498B86]/15" />
        <Hero
          title={homePage.hero.title}
          description={homePage.hero.description}
        />
      </div>

      {/* Hero Mosaic */}
      <section className="relative -mt-6 pb-16 overflow-hidden">
        <div className="relative w-full">
          <div className="relative overflow-hidden px-2 sm:px-4">
            <div className="flex gap-6 w-max voe-marquee">
              {(() => {
                const images = [
                  '/impact-stories.jpeg',
                  '/local-initiatives.jpeg',
                  '/paintingtry.jpg',
                  '/team-picture.jpg',
                  '/hero-image-new.png',
                  '/our-vision-2.png',
                  '/empower.jpg',
                  '/voe-journey.jpeg',
                  '/cornell-chapter.jpg',
                  '/home-resources.jpg',
                  '/our-history-1.png',
                  '/hero-new.jpeg',
                ];
                return [...images, ...images].map((src, idx) => (
                  <div key={`${src}-${idx}`} className="relative h-48 sm:h-56 md:h-72 w-72 md:w-96 lg:w-[26rem] flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_18px_50px_-30px_rgba(96,122,212,0.45)]">
                    <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 70vw, 30vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      <Section variant="alternate" className="relative overflow-hidden">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-white blur-3xl voe-glow" />
        <div className="absolute -bottom-28 left-0 h-64 w-64 rounded-full bg-white blur-3xl voe-float" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            {/* <p className="font-serif text-lg text-primary-600 mb-3 italic">
              Our Purpose
            </p> */}
            <h2 className="text-4xl md:text-5xl mb-6 text-[#607AD4] voe-fade-up">{mission.heading}</h2>
            <p className="font-semibold text-gray-900 leading-tight text-1xl md:text-2xl voe-fade-up voe-delay-2">
              {mission.text}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-8 md:grid-cols-3">
              {missionPoints.map((point, index) => (
                <Card
                  key={index}
                  className="text-center transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-primary-500 mb-4 flex justify-center">{point.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-[#607AD4]">{point.title}</h3>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="relative h-24 sm:h-32 overflow-hidden bg-gray-50">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path
            fill="#F9FAFB"
            d="M0,80 C180,60 360,40 540,55 C720,70 900,120 1080,120 C1260,120 1350,95 1440,80 L1440,160 L0,160 Z"
          />
          <path
            fill="#BFD3F1"
            d="M0,95 C200,115 380,130 560,120 C740,110 900,70 1080,70 C1260,70 1350,90 1440,100 L1440,160 L0,160 Z"
          />
          <path
            fill="#8FB0E6"
            d="M0,115 C210,90 420,75 600,95 C780,115 960,140 1140,135 C1320,130 1380,120 1440,110 L1440,160 L0,160 Z"
          />
          <path
            fill="#607AD4"
            d="M0,130 C220,150 440,160 620,150 C800,140 980,110 1160,110 C1340,110 1400,125 1440,135 L1440,160 L0,160 Z"
          />
        </svg>
      </div>

      {/* Carousel Section */}
      <Section title="" className="bg-[#607AD4]">
                <div className="mb-12">
          <ImpactTracker />
        </div>
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Instagram Slide */}
              <div className="min-w-full flex-none">
                <div className="relative h-96 md:h-[500px]">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{ backgroundImage: "url('/voe-journey.jpeg')", backgroundPosition: 'center 40%' }}
                  />
                  <span className="sr-only">Follow our Instagram</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up">
                      <div className="mb-4">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                          Instagram
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold mb-6">Follow Our Journey</h3>
                      <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                        Stay connected with our latest updates and community stories as we build a more equitable future together
                      </p>
                      <Link href="https://www.instagram.com/voices.of.equity/" className="inline-block px-8 py-3 bg-white text-[#607AD4] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Follow Us →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* National Initiatives Slide */}
              <div className="min-w-full flex-none">
                <div className="relative h-96 md:h-[500px]">
                  <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/paintingtry.jpg')", backgroundPosition: 'center 45%' }} />
                  <span className="sr-only">National Initiatives</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up voe-delay-2">
                      <div className="mb-4">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                          Programs
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold mb-6">National Initiatives</h3>
                      <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                        Nationwide programs advancing health equity across communities and transforming healthcare access
                      </p>
                      <Link href="/what-we-do/national" className="inline-block px-8 py-3 bg-white text-[#498B86] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Initiatives Slide */}
              <div className="min-w-full flex-none">
                <div className="relative h-96 md:h-[500px]">
                  <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/local-initiatives.jpeg')", backgroundPosition: 'center 30%' }} />
                  <span className="sr-only">Local Initiatives</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up voe-delay-3">
                      <div className="mb-4">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                          Community
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold mb-6">Local Initiatives</h3>
                      <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                        Community-based programs creating meaningful local impact and driving change from the ground up
                      </p>
                      <Link href="/what-we-do/impact" className="inline-block px-8 py-3 bg-white text-[#607AD4] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Stories Slide */}
              <div className="min-w-full flex-none">
                <Link href="/what-we-do/impact" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/impact-stories.jpeg')", backgroundPosition: 'center 45%' }} />
                    <span className="sr-only">Impact Stories</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up voe-delay-4">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                            Stories
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Impact Stories</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Real stories of change and transformation in our communities, showcasing the power of collective action
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-[#498B86] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                          Read Stories →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Our Chapters Slide */}
              <div className="min-w-full flex-none">
                <Link href="/get-involved/chapters" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/cornell-chapter.jpg')", backgroundPosition: 'center 30%' }} />
                    <span className="sr-only">Our Chapters</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up voe-delay-5">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                            Chapters
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Our Chapters</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Student-led chapters driving change across universities, empowering the next generation of leaders
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-[#607AD4] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                          Join Us →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Resources Slide */}
              <div className="min-w-full flex-none">
                <Link href="/resources" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/home-resources.jpg')", backgroundPosition: 'center 30%' }} />
                    <span className="sr-only">Our Resources</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8 voe-fade-up voe-delay-6">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                            Education
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Resources</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Educational materials and tools for health equity advocacy, empowering you to make a difference
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-[#498B86] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                          Access Resources →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? 5 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#607AD4]/80 hover:bg-[#607AD4] text-white p-3 rounded-full transition-colors z-10 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === 5 ? 0 : currentSlide + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#607AD4]/80 hover:bg-[#607AD4] text-white p-3 rounded-full transition-colors z-10 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2, 3, 4, 5].map((slide) => (
              <button
                key={slide}
                onClick={() => setCurrentSlide(slide)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === slide ? 'bg-[#498B86] w-1' : 'bg-white hover:bg-[#498B86]'
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Callouts with accent background */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-[#607AD4]/10 via-white to-[#498B86]/10">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#607AD4]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[#498B86]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#607AD4]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#498B86]/50 to-transparent" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          <Callout
            eyebrow="Meet Our Team"
            title="Executive Leadership"
            description="Get to know the passionate leaders behind Voices of Equity and learn how they're driving change in health equity nationwide."
            link={{
              text: "View Our Team",
              href: "/who-we-are/team"
            }}
            variant="impact"
            className="relative bg-white/90 text-gray-900 backdrop-blur-sm border border-[#607AD4]/25 shadow-[0_24px_70px_-50px_rgba(96,122,212,0.7)] ring-1 ring-[#607AD4]/15 voe-pop voe-delay-1"
          />
          <Callout
            eyebrow="Start A Chapter"
            title="Join the Movement"
            description="Join the movement, start a Voices of Equity chapter at your school and take action to advance health equity in your community."
            link={{
              text: "Get Started",
              href: "/get-involved/start"
            }}
            variant="resources"
            className="relative bg-white/90 text-gray-900 backdrop-blur-sm border border-[#498B86]/25 shadow-[0_24px_70px_-50px_rgba(72,139,134,0.7)] ring-1 ring-[#498B86]/15 voe-pop voe-delay-2"
          />
        </div>
      </Section>

      {/* Initiatives with alternating accent colors */}
      <Section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,122,212,0.08),_transparent_55%)]" />
        <div className="text-center mb-12 voe-fade-up relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#607AD4]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#607AD4] shadow-sm">
            Key Initiatives
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#1F2A44]">Building Health Equity</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Building health equity through education, activation, and community-driven change.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center relative z-10">
          {homePage.initiatives.map((initiative, index) => (
            <div 
              key={initiative.title} 
              className={`p-8 bg-white/90 rounded-2xl border border-[#E7ECF7] shadow-[0_18px_60px_-45px_rgba(12,18,38,0.6)] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-50px_rgba(96,122,212,0.45)] voe-pop ${
                index === 0 ? 'voe-delay-1' : index === 1 ? 'voe-delay-2' : 'voe-delay-3'
              }`}
            >
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: index % 2 === 0 ? 'rgba(96,122,212,0.12)' : 'rgba(72,139,134,0.12)',
                  color: index % 2 === 0 ? '#607AD4' : '#498B86'
                }}
              >
                Initiative {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors"
                  style={{
                    color: index % 2 === 0 ? '#607AD4' : '#498B86'
                  }}>
                {initiative.title}
              </h3>
              <div className="mb-5 flex justify-center">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="rounded-xl shadow-md"
                />
              </div>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section with gradient */}
      <section className="py-20 bg-[#607AD4] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 voe-fade-up">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto voe-fade-up voe-delay-2">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            <SocialCallout />
          </div>
        </div>
      </section>
    </PageLayout >
  );
}
