import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { whoWeArePage } from '@/content';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * A team member's profile.
 *
 * Blue header carrying the name and role, with the portrait card breaking
 * out of it into the white body - the same "pop out" the rest of the site
 * uses for people - then the biography in a single reading column.
 */
function allMembers() {
  return [
    ...whoWeArePage.team.members,
    ...whoWeArePage.team.engineers,
    ...whoWeArePage.team.Media_team,
    ...whoWeArePage.team.Education,
    ...whoWeArePage.team.Outreach,
    ...whoWeArePage.team.VOX,
    ...whoWeArePage.team.Philanthrophy,
  ];
}

export async function generateStaticParams() {
  return allMembers().map((member) => ({ memberId: member.id }));
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default async function TeamMemberPage({ params }: { params: Promise<{ memberId: string }> }) {
  const { memberId } = await params;
  const member = allMembers().find((m) => m.id === memberId);

  // people who have left the team get a real 404, not a stale page
  if (!member) notFound();

  const paragraphs = member.fullBio
    .split('\n\n')
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <section className="voe-ground-blue voe-texture relative isolate pb-24 pt-36 md:pb-28 md:pt-44">
        <div className="voe-container">
          <Reveal variant="fade">
            <Link
              href="/who-we-are/team"
              className="group mb-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Our team
            </Link>
          </Reveal>
          <div className="lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.75fr)] lg:gap-16">
            <div className="hidden lg:block" aria-hidden />
            <div>
              <Reveal variant="up" delay={60}>
                <p className="voe-eyebrow mb-4">{member.role}</p>
                <h1 className="voe-display-xl font-display text-white">{member.name}</h1>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portrait + biography ────────────────────────────────────── */}
      <section className="voe-ground-white pb-20 md:pb-28">
        <div className="voe-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.75fr)] lg:gap-16">
            <div className="-mt-16 md:-mt-20 lg:-mt-40">
              <Reveal variant="up">
                <div className="voe-ar-portrait relative mx-auto max-w-xs rounded-[26px] bg-white p-2 shadow-[0_30px_70px_rgba(14,26,51,0.22)] lg:max-w-none">
                  <div className="voe-photo absolute inset-2 rounded-[20px]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 320px, 30vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#587FDA]">
                        <span className="font-display text-4xl font-bold text-white">{getInitials(member.name)}</span>
                      </div>
                    )}
                  </div>
                </div>
                {(member.email || member.linkedin) && (
                  <div className="mx-auto mt-6 flex max-w-xs flex-col gap-2 lg:max-w-none">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-3 font-display text-sm font-semibold text-[#587FDA] transition-colors hover:text-[#4A6FCC]"
                      >
                        <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-display text-sm font-semibold text-[#587FDA] transition-colors hover:text-[#4A6FCC]"
                      >
                        <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </Reveal>
            </div>

            <div className="pt-2 lg:pt-16">
              <Reveal variant="up" delay={100}>
                <div className="voe-rule mb-8" />
                <div className="max-w-2xl space-y-6">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? 'voe-lead' : 'leading-relaxed text-[#4A5568] md:text-[17px]'}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The rest of the team ────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <p className="voe-eyebrow mb-3">Our team</p>
          <h2 className="voe-display-md font-display mb-8 text-white">Meet the rest of the national team.</h2>
          <Link href="/who-we-are/team" className="voe-btn voe-btn--on-dark">
            View all team members
          </Link>
        </div>
      </section>
    </main>
  );
}
