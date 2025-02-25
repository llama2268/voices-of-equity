import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters, chaptersContent } from '@/content/chapters';
import Link from 'next/link';
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
      title: 'Resources & Support',
      description: 'Access our comprehensive resource library, receive mentorship from experienced leaders, and get support for event planning and community outreach initiatives.',
      icon: <ResourceIcon />
    },
    {
      title: 'National Recognition',
      description: 'Join a network of recognized changemakers, get featured in our national publications, and receive opportunities to present at conferences and symposiums.',
      icon: <AwardIcon />
    },
    {
      title: 'Leadership Development',
      description: 'Develop crucial leadership skills through structured training programs, workshops, and hands-on experience managing impactful community projects.',
      icon: <LeadershipIcon />
    }
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
                <img
                  src="/chapters/cornell.jpg"
                  alt="Cornell Chapter"
                  className="absolute inset-0 w-full h-full object-cover"
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
                        <p className="font-medium text-gray-900">Caleb T. Suh</p>
                        <p className="text-sm text-gray-600">Co-Founder & President</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">Zaid Al-Shoha</p>
                        <p className="text-sm text-gray-600">Co-Founder & Vice President</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 mt-8">
                    <span className="text-gray-600">45 active members</span>
                    {/* <Link
                      href="/cornell"
                      className="px-6 py-2 bg-[#E4826D] hover:bg-[#d97661] text-white rounded-lg transition-colors"
                    >
                      Visit Chapter
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section spacing="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Related Content */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <RelatedContent {...chapters.relatedContent} />
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="highlight" spacing="sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{cta.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{cta.description}</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/get-involved/start"
              className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white rounded-lg font-semibold transition-colors"
            >
              Start a Chapter
            </Link>
            <Link
              href={cta.secondaryButton.href}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-lg font-semibold transition-colors border-2 border-gray-200"
            >
              {cta.secondaryButton.text}
            </Link>
          </div>
        </div>
      </Section>

      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <Callout
            eyebrow="Chapter Success Stories"
            title="Making Real Change"
            description="Discover how our chapters are creating lasting impact in their communities through innovative programs and dedicated leadership."
            link={{
              text: "Read Impact Stories",
              href: "/what-we-do/impact"
              // href: "/what-we-do/impact"
            }}
            variant="impact"
          />
        </div>
      </Section>

      {/* Social Media Integration */}
      <Section 
        title="Connect With Chapters"
        subtitle="Follow Our Journey"
        description="Stay connected with our chapters across the country"
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>
    </PageLayout>
  );
}
