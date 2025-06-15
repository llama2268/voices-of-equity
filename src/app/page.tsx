'use client'
import Hero from '../components/Hero/Hero';
import StatCard from '../components/Stats/StatCard';
import PageLayout from '../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { homePage } from '@/content/content';
import { Callout } from '@/components/ui/Callout';
import { SocialCallout } from '@/components/ui/SocialCallout';
import Link from 'next/link';
import { useState } from 'react';
import { FormEvent } from 'react';
import Image from 'next/image'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process the form submission (e.g., call an API endpoint)
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    // For now, just log the values, then close the modal
    console.log({ name, email });
    setModalOpen(false);
  };

  return (
    <PageLayout fullWidth>
      <Hero
        title="Building a More Equitable Future, One Voice at a Time"
        description="Voices of Equity is a nationwide movement empowering students, healthcare professionals, and community leaders to raise awareness, take action, and drive meaningful change in the fight for health equity"
      />

      {/* Mission Statement */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Mission
          </p>
          <blockquote className="mb-12">
            <p className="font-serif text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
            To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives</p>
            <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500" />
          </blockquote>
          <Link
          href="/who-we-are/mission"
          className="inline-block px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 transition-colors"
         >
          Learn More
        </Link>
        </div>
      </Section>

      {/* Full-Width Carousel Section */}
      <Section title="Explore Our Impact" subtitle="Discover how we're making a difference across communities">
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
                   <Image
                     src="/team-picture.jpg"
                     alt="Follow our Instagram"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-20"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center text-white max-w-4xl mx-auto px-8">
                       <div className="mb-4">
                         <span className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium">
                           Instagram
                         </span>
                       </div>
                       <h3 className="text-4xl md:text-6xl font-bold mb-6">Follow Our Journey</h3>
                       <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                         Stay connected with our latest updates and community stories as we build a more equitable future together
                       </p>
                       <Link href="https://www.instagram.com/voices.of.equity/" className="inline-block px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                         Follow Us →
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>

                             {/* National Initiatives Slide */}
               <div className="w-full flex-shrink-0">
                 <div className="relative h-96 md:h-[500px]">
                   <Image
                     src="/paintingtry.jpg"
                     alt="National Initiatives"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 opacity-20"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center text-white max-w-4xl mx-auto px-8">
                       <div className="mb-4">
                         <span className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium">
                           Programs
                         </span>
                       </div>
                       <h3 className="text-4xl md:text-6xl font-bold mb-6">National Initiatives</h3>
                       <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                         Nationwide programs advancing health equity across communities and transforming healthcare access
                       </p>
                       <Link href="/what-we-do/national" className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                         Learn More →
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>

                                            {/* Local Initiatives Slide */}
               <div className="w-full flex-shrink-0">
                 <div className="relative h-96 md:h-[500px]">
                   <Image
                     src="/hero-image-new.png"
                     alt="Local Initiatives"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-20"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center text-white max-w-4xl mx-auto px-8">
                       <div className="mb-4">
                         <span className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium">
                           Community
                         </span>
                       </div>
                       <h3 className="text-4xl md:text-6xl font-bold mb-6">Local Initiatives</h3>
                       <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                         Community-based programs creating meaningful local impact and driving change from the ground up
                       </p>
                       <Link href="/what-we-do/local" className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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
                     <Image
                       src="/educate.jpg"
                       alt="Impact Stories"
                       fill
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium">
                            Stories
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Impact Stories</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Real stories of change and transformation in our communities, showcasing the power of collective action
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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
                  <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-red-500 to-pink-600">
                    <Image
                      src="/cornell-chapter.jpg"
                      alt="Our Chapters"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium">
                            Chapters
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Our Chapters</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Student-led chapters driving change across universities, empowering the next generation of leaders
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                          Join Us →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Resources Slide */}
              <div className="w-full flex-shrink-0">
                <Link href="/what-we-do/resources" className="block">
                  <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-yellow-500 to-orange-600">
                    <Image
                      src="/empower.jpg"
                      alt="Our Resources"
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white max-w-4xl mx-auto px-8">
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium">
                            Education
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Resources</h3>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                          Educational materials and tools for health equity advocacy, empowering you to make a difference
                        </p>
                        <div className="inline-block px-8 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === 5 ? 0 : currentSlide + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
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
                 className={`w-2 h-2 rounded-full transition-colors ${
                   currentSlide === slide ? 'bg-primary-500' : 'bg-gray-300'
                 }`}
               />
             ))}
           </div>
        </div>
      </Section>

      {/* Stats Section */}
      {/* <Section variant="alternate">
        <div className="text-center mb-12">
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Impact
          </p>
          <h2 className="text-3xl font-bold mb-4">Making Real Change</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {homePage.stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Section> */}
      {/* WILL USE LATER */}

      {/* Callouts */}
      <Section>
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
          />
        </div>
      </Section>

      {/* Initiatives */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving change through focused action and community engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {homePage.initiatives.map((initiative, index) => (
            <div 
              key={initiative.title} 
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-transparent hover:border-secondary-500"
            >
              <h3 className="text-center text-xl font-bold text-primary-600 mb-4 group-hover:text-secondary-600 transition-colors">
                {initiative.title}
              </h3>
                            <div className="mb-4 flex justify-center">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="rounded"
                />
                </div>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* <Section 
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section> */}

      {/* Call to Action Section */}
      <section className="py-20 bg-[#607AD4] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <a
              href="/get-involved/chapters"
              className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white rounded-lg font-semibold transition-colors"
            >
              Join Our Movement
            </a>
            <a
              href="/who-we-are/mission"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-[#607AD4] font-semibold rounded-lg transition-colors"
            >
              Learn More
            </a> */}
            <SocialCallout/>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
