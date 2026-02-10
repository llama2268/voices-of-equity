import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeArePage } from '@/content';
import { Section } from '@/components/ui/Section';

export default function TeamPage() {
  const { title, subtitle, members, engineers, Media_team, Education, Outreach, Philanthrophy, VOX } = whoWeArePage.team;
  
  return (
    <PageLayout>
      <Section>
        <div className="space-y-16">
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Voices of Equity
              </p>
              <h2 className="text-3xl font-bold mb-4">Executive Leadership</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 px-4 sm:px-6 lg:px-8">
              {members?.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
                    <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Outreach Team</h2>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 max-w-6xl mx-auto">
            {Outreach?.map((outreach_member) => (
                <TeamMember key={outreach_member.name} {...outreach_member} />
              ))}
            </div>
          </div>

                    <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Education Team</h2>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 max-w-6xl mx-auto">
            {Education?.map((education_member) => (
                <TeamMember key={education_member.name} {...education_member} />
              ))}
            </div>
          </div>

                    <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Media Team</h2>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 max-w-6xl mx-auto">
            {Media_team?.map((Media) => (
                <TeamMember key={Media.name} {...Media} />
              ))}
            </div>
          </div>

                    <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Philanthropy Team</h2>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 max-w-6xl mx-auto">
            {Philanthrophy?.map((phil_member) => (
                <TeamMember key={phil_member.name} {...phil_member} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">VOX Equity Team</h2>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="flex flex-wrap justify-center gap-x-1 gap-y-6 lg:gap-x-10 lg:gap-y-8 max-w-6xl mx-auto">
            {VOX?.map((engineer) => (
                <TeamMember key={engineer.name} {...engineer} />
              ))}
            </div>
          </div>
{/* 
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Chapters
              </p>
              <h2 className="text-3xl font-bold mb-4">Chapter Leaders</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
            </div>
          </div> */}
        </div>
      </Section>
    </PageLayout>
  );
} 
