import Hero from '../components/Hero/Hero';
import StatCard from '../components/Stats/StatCard';
import PageLayout from '../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { homePage } from '@/content/content';
import { Callout } from '@/components/ui/Callout';

export default function HomePage() {
  return (
    <PageLayout fullWidth>
      <Hero
        title="Building a More Equitiable Future, One Voice at a Time"
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
            description="Get to know the passionate leaders behind Voices of Equity and learn how they’re driving change in health equity nationwide."
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
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Work
          </p>
          <h2 className="text-3xl font-bold mb-4">Key Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving change through focused action and community engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homePage.initiatives.map((initiative, index) => (
            <div 
              key={initiative.title} 
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-transparent hover:border-secondary-500"
            >
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-bold text-primary-600 mb-4 group-hover:text-secondary-600 transition-colors">
                {initiative.title}
              </h3>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#607AD4] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/get-involved/chapters"
              className="px-8 py-4 bg-[#E4826D] hover:bg-[#d97661] text-white font-semibold rounded-lg transition-colors"
            >
              Join a Chapter
            </a>
            <a
              href="/who-we-are/mission"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-[#607AD4] font-semibold rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
