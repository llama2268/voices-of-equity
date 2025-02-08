import PageLayout from '../../../../components/Layout/PageLayout';
import { whoWeAre } from '@/content/content';

export async function generateStaticParams() {
  const allMembers = [...whoWeAre.team.members, ...whoWeAre.team.engineers];
  return allMembers.map((member) => ({
    memberId: member.id,
  }));
}

export default async function TeamMemberPage({ params }: { params: { memberId: string } }) {
  const allMembers = [...whoWeAre.team.members, ...whoWeAre.team.engineers];
  // @ts-ignore
  const memberId = (params as { memberId: string }).memberId;
  const member = allMembers.find(m => m.id === memberId);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <PageLayout
      title={member.name}
      subtitle={member.role}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="flex-grow">
            {member.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {member.email && (
          <div className="flex justify-center">
            <a
              href={`mailto:${member.email}`}
              className="text-[#607AD4] hover:text-[#E4826D]"
            >
              Contact via Email
            </a>
          </div>
        )}
      </div>
    </PageLayout>
  );
} 