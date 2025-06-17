import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
// import { chapters, chaptersContent } from '@/content/chapters';
// import Link from 'next/link';
// import { RelatedContent } from '@/components/RelatedContent';
// import { chapterPagesContent } from '@/content/chapter-pages';
// import { Callout } from '@/components/ui/Callout';
// import { SocialCallout } from '@/components/ui/SocialCallout';
// import { ResourceIcon, AwardIcon, LeadershipIcon } from '@/components/icons/ChapterIcons';

export default function ChaptersPage() {
  // const { page, benefits, stats, cta } = chaptersContent;
  // const { chapters } = chapterPagesContent;
  
  // const updatedBenefits = [
  //   {
  //     title: 'Real-World Impact',
  //     description: 'Lead community-based initiatives that address health disparities, from educational outreach to philanthropic projects, empowering your campus to drive meaningful change locally and nationally.',
  //     icon: <ResourceIcon />
  //   },
  //   {
  //     title: 'Exclusive Resources and Networking',
  //     description: 'Access comprehensive health equity curricula, workshops, and mentorship opportunities while connecting with healthcare professionals, community leaders, and other chapter leaders across the country.',
  //     icon: <AwardIcon />
  //   },
  //   {
  //     title: 'Leadership Development',
  //     description: 'Gain hands-on leadership experience by organizing impactful initiatives, leading educational events, and collaborating with peers nationwide to advance health equity on your campus and in your community.',
  //     icon: <LeadershipIcon />
  //   }
  // ];

  return (
    <PageLayout
      title="Chapters"
      subtitle="Coming Soon"
      hero
      reduced
    >
            {/* Coming Soon Message */}
      <Section title="Chapters" subtitle="Coming Soon">
        <div></div>
      </Section>

      {/* ARCHIVED CONTENT - Original chapters page content */}
      {/*
      {/* Introduction & Benefits */}
      {/*
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
      {/*
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

      {/* Impact Stats */}
      {/*
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
      */}
      {/*
      <Section spacing="sm" title="Chapters" subtitle="Our Active Chapters">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img src="/partners/cornell.png" alt="Cornell University" width={50} className="object-contain" />
                <h3 className="text-xl font-semibold">Cornell University</h3>
              </div>
              <p className="text-gray-600 mb-4">Leading initiatives in health equity research and community health literacy workshops across Ithaca.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">President: Jimmy Quinlan</span>
                <Link href="/chapters/cornell" className="text-[#607AD4] hover:text-[#5068BD] font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img src="/partners/harvard.png" alt="Harvard University" width={50} className="object-contain" />
                <h3 className="text-xl font-semibold">Harvard University</h3>
              </div>
              <p className="text-gray-600 mb-4">Focusing on healthcare accessibility and medical education outreach in Boston communities.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">President: Sarah Chen</span>
                <Link href="/chapters/harvard" className="text-[#607AD4] hover:text-[#5068BD] font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img src="/partners/upenn.png" alt="University of Pennsylvania" width={50} className="object-contain" />
                <h3 className="text-xl font-semibold">UPenn</h3>
              </div>
              <p className="text-gray-600 mb-4">Driving change through health advocacy and community engagement in Philadelphia.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">President: Michael Park</span>
                <Link href="/chapters/upenn" className="text-[#607AD4] hover:text-[#5068BD] font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="sm" title="Partner Institutions">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-row gap-10 justify-between flex-wrap">
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/cornell.png" alt="Cornell University"  width={100} className="object-contain"/>
              <p>Cornell University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/cornell.png" alt="Cornell University"  width={100} className="object-contain"/>
              <p>Cornell University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/cornell.png" alt="Cornell University"  width={100} className="object-contain"/>
              <p>Cornell University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/cornell.png" alt="Cornell University"  width={100} className="object-contain"/>
              <p>Cornell University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/cornell.png" alt="Cornell University"  width={100} className="object-contain"/>
              <p>Cornell University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/harvard.png" alt="Harvard University"  width={100} className="object-contain"/>
              <p>Harvard University</p>
            </div>
            <div className="flex p-3 flex-col gap-4 items-center">
              <img src="/partners/upenn.png" alt="University of Pennsylvania" width={100} className="object-contain"/>
              <p>University of Pennsylvania</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      {/*
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <RelatedContent {...chapters.relatedContent} />
        </div>
      </Section>

      {/* Call to Action */}
      {/*
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
      */}

      {/* Social Media Integration */}
      {/*
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
      */}
      {/* END ARCHIVED CONTENT */}
    </PageLayout>
  );
}
