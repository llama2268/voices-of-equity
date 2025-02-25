import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeAre } from '@/content/content';
import { Section } from '@/components/ui/Section';
import { SocialCallout } from '@/components/ui/SocialCallout';

export default function TeamPage() {
  const { title, subtitle, members, engineers } = whoWeAre.team;
  
  return (
    <PageLayout title="Our Team" subtitle="Meet the people driving our mission forward">
      <Section>
        <div className="space-y-16">
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Leadership
              </p>
              <h2 className="text-3xl font-bold mb-4">Executive Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {members?.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Advisory
              </p>
              <h2 className="text-3xl font-bold mb-4">Engineering Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {engineers?.map((engineer) => (
                <TeamMember key={engineer.name} {...engineer} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Chapters
              </p>
              <h2 className="text-3xl font-bold mb-4">Chapter Leaders</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {/* Chapter leader cards */}
            </div>
          </div>
        </div>
      </Section>

      <Section 
        title="Connect With Our Team"
        subtitle="Behind the Scenes"
        description="Follow our journey and daily updates"
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>
    </PageLayout>
  );
} 