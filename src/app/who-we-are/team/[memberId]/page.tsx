import PageLayout from "../../../../components/Layout/PageLayout";
import { whoWeArePage } from "@/content";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const allMembers = [
    ...whoWeArePage.team.members,
    ...whoWeArePage.team.engineers,
    ...whoWeArePage.team.Media_team,
    ...whoWeArePage.team.Education,
    ...whoWeArePage.team.Outreach,
    ...whoWeArePage.team.VOX,
    ...whoWeArePage.team.Philanthrophy,
  ];

  return allMembers.map((member) => ({
    memberId: member.id,
  }));
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default async function TeamMemberPage({
  params,
}: {
  params: { memberId: string };
}) {
  const allMembers = [
    ...whoWeArePage.team.members,
    ...whoWeArePage.team.engineers,
    ...whoWeArePage.team.Media_team,
    ...whoWeArePage.team.Education,
    ...whoWeArePage.team.Outreach,
    ...whoWeArePage.team.VOX,
    ...whoWeArePage.team.Philanthrophy,
  ];
  const { memberId } = await params;
  const member = allMembers.find((m) => m.id === memberId);

  if (!member) {
    return (
      <PageLayout>
        <section className="bg-white pb-24 pt-32">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-display text-3xl font-bold text-[#171219]">
              Member not found
            </h1>
            <p className="mb-8 text-[#4A5568]">
              The team member you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/who-we-are/team"
              className="inline-block rounded-md bg-[#587FDA] px-8 py-3 font-display font-medium text-white transition-colors hover:bg-[#4566B8]"
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
      <section className="bg-white pb-6 pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/who-we-are/team"
            className="text-sm font-medium text-[#587FDA] transition-colors hover:text-[#4566B8]"
          >
            &larr; Back to Team
          </Link>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
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
                      className="flex items-center gap-3 text-sm text-[#4A5568] transition-colors hover:text-[#587FDA]"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                      className="flex items-center gap-3 text-sm text-[#4A5568] transition-colors hover:text-[#587FDA]"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
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
              <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-[#587FDA]">
                {member.role}
              </p>
              <h1 className="mb-8 font-display text-4xl font-bold text-[#171219] md:text-5xl">
                {member.name}
              </h1>
              <div className="mb-8 h-px w-16 bg-[#587FDA]" />
              <div className="space-y-5">
                {member.fullBio.split("\n\n").map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-[#4A5568]"
                    >
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
      <section className="bg-[#F7F8FA] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-6 text-[#4A5568]">
            Explore the rest of our leadership team.
          </p>
          <Link
            href="/who-we-are/team"
            className="inline-block rounded-md bg-[#587FDA] px-8 py-3 font-display font-medium text-white transition-colors hover:bg-[#4566B8]"
          >
            View All Team Members
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
