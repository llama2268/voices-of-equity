import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeAre } from '@/content/content';

export default function TeamPage() {
  const { title, subtitle, members } = whoWeAre.team;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members?.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </PageLayout>
  );
} 