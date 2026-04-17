import PageLayout from '../../../../components/Layout/PageLayout';
import { whoWeArePage } from '@/content';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const allMembers = [...whoWeArePage.team.members, ...whoWeArePage.team.engineers];
  return allMembers.map((member) => ({
    memberId: member.id,
  }));
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export default async function TeamMemberPage({ params }: { params: { memberId: string } }) {
  const allMembers = [...whoWeArePage.team.members, ...whoWeArePage.team.engineers, ...whoWeArePage.team.Media_team,
    ...whoWeArePage.team.Education, ...whoWeArePage.team.Outreach, ...whoWeArePage.team.VOX, ...whoWeArePage.team.Philanthrophy
  ];
  const { memberId } = await params;
  const member = allMembers.find(m => m.id === memberId);

  if (!member) {
    return (
      <PageLayout>
        <section className="pt-32 pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-3xl font-bold text-[#171219] mb-4">Member not found</h1>
            <p className="text-[#4A5568] mb-8">The team member you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/who-we-are/team"
              className="inline-block px-8 py-3 bg-[#587FDA] hover:bg-[#4566B8] text-white font-medium font-display rounded-md transition-colors"
            >
              Back to Team
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout fullWidth>
      {/* Header */}
      <section className="pt-28 pb-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/who-we-are/team" className="text-sm text-[#587FDA] hover:text-[#4566B8] font-medium transition-colors">
            &larr; Back to Team
          </Link>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Contact */}
              {(member.email || member.linkedin) && (
                <div className="mt-8 space-y-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-sm text-[#4A5568] hover:text-[#587FDA] transition-colors"
                    >
                      <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      {member.email}
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#4A5568] hover:text-[#587FDA] transition-colors"
                    >
                      <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Bio */}
            <div className="lg:col-span-8">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-3">
                {member.role}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-[#171219] mb-8">
                {member.name}
              </h1>
              <div className="w-16 h-px bg-[#587FDA] mb-8" />
              <div className="space-y-5">
                {member.fullBio.split('\n\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p key={index} className="text-lg text-[#4A5568] leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Back CTA */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#4A5568] mb-6">Explore the rest of our leadership team.</p>
          <Link
            href="/who-we-are/team"
            className="inline-block px-8 py-3 bg-[#587FDA] hover:bg-[#4566B8] text-white font-medium font-display rounded-md transition-colors"
          >
            View All Team Members
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
