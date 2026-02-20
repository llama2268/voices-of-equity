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
      <Hero
        title={homePage.hero.title}
        description={homePage.hero.description}
      />

      <Section variant="alternate">
        <div className="text-center mb-12">
          {/* <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Purpose
          </p> */}
          <h2 className="text-3xl font-bold mb-6">{mission.heading}</h2>
          <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto mb-12">
            {mission.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <Card key={index} className="text-center">
              <div className="text-primary-500 mb-4 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </Card>
          ))}
        </div>
      </Section>

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
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 md:h-[500px]">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-no-repeat"
                    style={{ backgroundImage: "url('/voe-journey.jpeg')", backgroundPosition: 'center 40%' }}
                  />
                  <span className="sr-only">Follow our Instagram</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8">
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
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 md:h-[500px]">
                  <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/paintingtry.jpg')", backgroundPosition: 'center 45%' }} />
                  <span className="sr-only">National Initiatives</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8">
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
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 md:h-[500px]">
                  <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/local-initiatives.jpeg')", backgroundPosition: 'center 30%' }} />
                  <span className="sr-only">Local Initiatives</span>
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-8">
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
              <div className="w-full flex-shrink-0">
                <Link href="/what-we-do/impact" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/impact-stories.jpeg')", backgroundPosition: 'center 45%' }} />
                    <span className="sr-only">Impact Stories</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
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
              <div className="w-full flex-shrink-0">
                <Link href="/get-involved/chapters" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/cornell-chapter.jpg')", backgroundPosition: 'center 30%' }} />
                    <span className="sr-only">Our Chapters</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#607AD4]/60 to-[#498B86]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
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
              <div className="w-full flex-shrink-0">
                <Link href="/resources" className="block">
                  <div className="relative h-96 md:h-[500px]">
                    <div aria-hidden className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/home-resources.jpg')", backgroundPosition: 'center 30%' }} />
                    <span className="sr-only">Our Resources</span>
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#498B86]/60 to-[#607AD4]/60 backdrop-blur-sm" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
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
      <Section className="bg-gradient-to-r from-[#607AD4]/10 to-[#498B86]/10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Callout
            eyebrow="Meet Our Team"
            title="Executive Leadership"
            description="Get to know the passionate leaders behind Voices of Equity and learn how they're driving change in health equity nationwide."
            link={{
              text: "View Our Team",
              href: "/who-we-are/team"
            }}
            variant="impact"
            className="bg-white text-gray-900"
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
            className="bg-white/80 text-gray-900 border border-white/70 shadow-[0_20px_50px_-35px_rgba(73,139,134,0.35)] backdrop-blur"
          />
        </div>
      </Section>

      {/* Initiatives with alternating accent colors */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#607AD4]">Key Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building health equity through education, activation, and community-driven change.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {homePage.initiatives.map((initiative, index) => (
            <div 
              key={initiative.title} 
              className="p-8 bg-white rounded-lg shadow-2xl transform transition-all duration-300 border-t-4 hover:shadow-[0_20px_50px_rgba(96,122,212,0.3)]"
              style={{ 
                borderTopColor: index % 2 === 0 ? '#607AD4' : '#498B86'
              }}
            >
              <h3 className="text-center text-xl font-bold mb-4 transition-colors"
                  style={{ 
                    color: index % 2 === 0 ? '#607AD4' : '#498B86'
                  }}>
                {initiative.title}
              </h3>
              <div className="mb-4 flex justify-center">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="rounded shadow-md"
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
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
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
