import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters, chaptersContent } from '@/content/chapters';
import Link from 'next/link';
import Image from 'next/image';
import { RelatedContent } from '@/components/RelatedContent';
import { chapterPagesContent } from '@/content/chapter-pages';
import { Callout } from '@/components/ui/Callout';
import { SocialCallout } from '@/components/ui/SocialCallout';
import { ResourceIcon, AwardIcon, LeadershipIcon } from '@/components/icons/ChapterIcons';

export default function ChaptersPage() {
  const { page, benefits, stats, cta } = chaptersContent;
  const { chapters } = chapterPagesContent;
  
  const updatedBenefits = [
    {
      title: 'Real-World Impact',
      description: 'Lead community-based initiatives that address health disparities, from educational outreach to philanthropic projects, empowering your campus to drive meaningful change locally and nationally.',
      icon: <ResourceIcon />
    },
    {
      title: 'Exclusive Resources and Networking',
      description: 'Access comprehensive health equity curricula, workshops, and mentorship opportunities while connecting with healthcare professionals, community leaders, and other chapter leaders across the country.',
      icon: <AwardIcon />
    },
    {
      title: 'Leadership Development',
      description: 'Gain hands-on leadership experience by organizing impactful initiatives, leading educational events, and collaborating with peers nationwide to advance health equity on your campus and in your community.',
      icon: <LeadershipIcon />
    }
  ];

  // University chapters data
  const universities = [
    { name: 'Cornell University', logo: '/partners/cornell.png' },
    { name: 'University of Illinois - Urbana Champaign', logo: '/icons/chapters/University of Illinois at Urbana-Champaign.png' },
    { name: 'University of Michigan - Ann Arbor', logo: '/icons/chapters/University of Michigan-Ann Arbor.png' },
    { name: 'Virginia Commonwealth University', logo: '/icons/chapters/Virginia Commonwealth University.png' },
    { name: 'University of South Carolina', logo: '/icons/chapters/University of South Carolina - Columbia.png' },
    { name: 'Brown University', logo: '/icons/chapters/Brown University.png' },
    { name: 'Carleton College', logo: '/icons/chapters/simplified-carleton-symbol.png' },
    { name: 'Carnegie Mellon University', logo: '/icons/chapters/Carnegie Mellon University.png' },
    { name: 'Franklin & Marshall University', logo: '/icons/chapters/franklinmashall.png' },
    { name: 'Arizona State University', logo: '/icons/chapters/Arizona State University.png' },
    { name: 'Georgia Institute of Technology', logo: '/icons/chapters/Georgia Institute of Technology.png' },
    { name: 'Howard University', logo: '/icons/chapters/Howard_University_seal.svg.png' },
    { name: 'Ithaca College', logo: '/icons/chapters/Formal_Seal_of_Ithaca_College,_Ithaca,_NY,_USA.svg.png' },
    { name: 'Northeastern University', logo: '/icons/chapters/Northeastern University (Boston).png' },
    { name: 'Massachusetts Institute of Technology', logo: '/icons/chapters/Massachusetts Institute of Technology (MIT).png' },
    { name: 'McGill University', logo: '/icons/chapters/McGill University.png' },
    { name: 'Miami University - Oxford', logo: '/icons/chapters/Miami University Oxford.png' },
    { name: 'New York University', logo: '/icons/chapters/New York University.png' },
    { name: 'Rutgers University', logo: '/icons/chapters/Rutgers, The State University of New Jersey - New Brunswick.png' },
    { name: 'Syracuse University', logo: '/icons/chapters/Syracuse University.png' },
    { name: 'The Ohio State University', logo: '/icons/chapters/The Ohio State University - Columbus.png' },
    { name: 'Cleveland State University', logo: '/icons/chapters/Cleveland_State_University_logo.png' },
    { name: 'Tulane University', logo: '/icons/chapters/Tulane University.png' },
    { name: 'University of California Los Angeles', logo: '/icons/chapters/University of California, Los Angeles.png' },
    { name: 'University of California Riverside', logo: '/icons/chapters/University of California, Riverside.png' },
    { name: 'Ohio University', logo: '/icons/chapters/Ohio University.png' },
    { name: 'Livingstone College', logo: '/icons/chapters/Livingstone_College_Logo.png' },
    { name: 'University of Chicago', logo: '/icons/chapters/University_of_Chicago_shield.svg.png' },
    { name: 'Emory University', logo: '/icons/chapters/Emory University.png' },
    { name: 'Princeton University', logo: '/icons/chapters/Princeton University.png' },
    { name: 'George Washington University', logo: '/icons/chapters/The George Washington University.png' },
    { name: 'University of Colorado Boulder', logo: '/icons/chapters/University of Colorado at Boulder.png' },
    { name: 'Purdue University', logo: '/icons/chapters/Purdue University - West Lafayette.png' },
    { name: 'Texas A&M University', logo: '/icons/chapters/Texas A&M University.png' },
    { name: 'The University of Utah', logo: '/icons/chapters/University of Utah.png' },
    { name: 'University of California San Diego', logo: '/icons/chapters/University of California, San Diego.png' },
    { name: 'University of Florida', logo: '/icons/chapters/University of Florida.png' },
    { name: 'University of Connecticut', logo: '/icons/chapters/University of Connecticut.png' },
    { name: 'Wellesley College', logo: '/icons/chapters/Formal_Logo_of_Wellesley_College,_Wellesley,_MA,_USA.svg.png' },
    { name: 'University of Illinois Chicago', logo: '/icons/chapters/University_of_Illinois_at_Chicago_circle_logo.svg.png' },
    { name: 'University of Pittsburgh', logo: '/icons/chapters/University of Pittsburgh.png' },
    { name: 'University of Texas at Austin', logo: '/icons/chapters/The University of Texas at Austin.png' },
    { name: 'University of Southern California', logo: '/icons/chapters/University of Southern California.png' },
    { name: 'University of Pennsylvania', logo: '/icons/chapters/University of Pennsylvania.png' },
    { name: 'University of North Carolina', logo: '/icons/chapters/University of North Carolina at Chapel Hill.png' },
    { name: 'University of California Santa Barbara', logo: '/icons/chapters/UC_Santa_Barbara_Seal.png' },
  ];

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      hero
      reduced
    >
      {/* Introduction & Benefits */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {page.introduction}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {updatedBenefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-[#498B86]"
            >
              <div className="text-[#498B86] mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Chapter - Cornell */}
      <Section variant="alternate" spacing="sm">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/chapters/cornell.jpg"
                  alt="Cornell Chapter"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-secondary-50 text-secondary-600 rounded-full text-sm font-medium">
                    Featured Chapter
                  </span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                    Est. 2024
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Cornell University Chapter</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our founding chapter at Cornell University has set the standard for what a Voices of Equity chapter can achieve. Through innovative programs and dedicated leadership, they've created lasting impact in healthcare accessibility and equity awareness.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Initiatives</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-600">Student-led health equity research program</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-600">Community health literacy workshops</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-600">Healthcare accessibility advocacy</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Leadership</h3>
                    <div className="grid md:grid-cols-2 gap-6 py-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">Jimmy Quinlan</p>
                        <p className="text-sm text-gray-600">President</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 mt-8">
                    <span className="text-gray-600">45 active members</span>
                    <Link
                      href="/cornell"
                      className="px-6 py-2 bg-[#E4826D] hover:bg-[#d97661] text-white rounded-lg transition-colors"
                    >
                      Visit Chapter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All University Chapters */}
      <Section spacing="sm" title="Our Chapters" subtitle="Universities Leading Change">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {universities.map((university) => (
              <div key={university.name} className="flex p-4 flex-col gap-4 items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <Image 
                    src={university.logo} 
                    alt={university.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {university.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <RelatedContent {...chapters.relatedContent} />
        </div>
      </Section>

      {/* Call to Action */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <Callout
            eyebrow="Chapter Success Stories"
            title="Making Real Change"
            description="Discover how our chapters are creating lasting impact in their communities through innovative programs and dedicated leadership."
            link={{
              text: "Read Impact Stories",
              href: "/what-we-do/impact"
            }}
            variant="impact"
          />
        </div>
      </Section>

      {/* Social Media Integration */}
      <section className="py-20 bg-[#607AD4] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            <SocialCallout/>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
