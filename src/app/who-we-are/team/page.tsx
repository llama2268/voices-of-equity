'use client';

import Link from 'next/link';
import { whoWeArePage, siteConfig } from '@/content';
import TeamMember from '@/components/Team/TeamMember';
import PeopleRail from '@/components/Team/PeopleRail';
import Reveal from '@/components/Animation/Reveal';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Our Team.
 *
 * Executive leadership, then the four national departments, all as one
 * continuous ledger - the group's remit in the margin, its people beside
 * it at the same size throughout. VOX Equity and the Board of Advisors
 * close the page.
 */
const DEPARTMENT_COPY: Record<string, string> = {
  Education:
    'Our education team develops curriculum, modules, and resources that foster practical learning experiences around health equity — ensuring every member gains a deeper understanding of systemic health disparities.',
  Philanthropy:
    'The philanthropy team leads national fundraising campaigns like National Health Equity Week and the CARE packet project, mobilizing resources to address structural health disparities and support community organizations.',
  Outreach:
    'Our outreach team drives national expansion, maintains cross-chapter communication, and builds sustainable structures that support health equity initiatives at universities across the country.',
  Media:
    'The media team amplifies health equity discussions through social media, integrating graphic design with educational content and personal stories that reach thousands of students nationwide.',
};

export default function TeamPage() {
  const { members, advisors, Media_team, Education, Outreach, Philanthrophy, VOX } = whoWeArePage.team;

  const departments = [
    { label: 'Education', people: Education },
    { label: 'Philanthropy', people: Philanthrophy },
    { label: 'Outreach', people: Outreach },
    { label: 'Media', people: Media_team },
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Who We Are"
        title="Meet Our Team"
        subtitle="The national leadership team driving health equity forward through education, advocacy, and community engagement across 70+ universities."
        image="/photos/ursinus-poster.jpg"
        imageAlt="Chapter leaders presenting their work"
        objectPosition="center 34%"
      />

      {/* ─── Executive leadership ────────────────────────────────────── */}
      <section className="voe-section voe-ground-white voe-people-host">
        <div className="voe-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="left">
                <h2 className="voe-display-lg font-display text-[#171219]">Executive Leadership</h2>
                <div className="voe-rule my-5" />
                <p className="leading-relaxed text-[#4A5568]">
                  Our executive team sets the strategic direction and ensures Voices of Equity delivers on its mission nationwide.
                </p>
              </Reveal>
            </div>
            <PeopleRail label="Executive leadership">
              {members?.map((member, i) => (
                <Reveal key={member.id} variant="up" delay={i * 80} className="voe-people__item">
                  <TeamMember {...member} />
                </Reveal>
              ))}
            </PeopleRail>
          </div>
        </div>
      </section>

      {/* ─── Departments ─────────────────────────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft voe-people-host">
        <div className="voe-container">
          <Reveal variant="fade">
            <h2 className="voe-display-lg font-display text-[#171219]">National Leadership</h2>
          </Reveal>

          {departments.map((dept, index) => (
            <div
              key={dept.label}
              className={`grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16 ${
                index === 0 ? '' : 'border-t border-[#171219]/10'
              }`}
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal variant="left">
                  <h3 className="voe-display-md font-display text-[#171219]">{dept.label}</h3>
                  <div className="voe-rule my-5" />
                  <p className="leading-relaxed text-[#4A5568]">{DEPARTMENT_COPY[dept.label]}</p>
                </Reveal>
              </div>
              <PeopleRail label={dept.label}>
                {dept.people?.map((member, i) => (
                  <Reveal key={member.id} variant="up" delay={i * 80} className="voe-people__item">
                    <TeamMember {...member} />
                  </Reveal>
                ))}
              </PeopleRail>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VOX Equity ──────────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white voe-people-host">
        <div className="voe-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="left">
                <p className="voe-eyebrow mb-3">Publication</p>
                <h2 className="voe-display-md font-display text-[#171219]">VOX Equity</h2>
                <div className="voe-rule my-5" />
                <p className="leading-relaxed text-[#4A5568]">
                  Our student-led publication advancing health equity discourse through rigorous research, analysis, and storytelling.
                </p>
              </Reveal>
            </div>
            <PeopleRail label="VOX Equity">
              {VOX?.map((member, i) => (
                <Reveal key={`${member.id}-${i}`} variant="up" delay={i * 80} className="voe-people__item">
                  <TeamMember {...member} />
                </Reveal>
              ))}
            </PeopleRail>
          </div>
        </div>
      </section>

      {/* ─── Board of Advisors ───────────────────────────────────────── */}
      <section className="voe-section voe-ground-white voe-people-host !pt-0">
        <div className="voe-container">
          <div className="grid gap-8 border-t border-[#171219]/10 pt-12 md:pt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal variant="left">
                <h2 className="voe-display-lg font-display text-[#171219]">Board of Advisors</h2>
                <div className="voe-rule my-5" />
                <p className="leading-relaxed text-[#4A5568]">
                  Our advisors guide the national team on long-term strategy, partnerships, and growth, and hold the organization to the mission it was founded on.
                </p>
              </Reveal>
            </div>
            <PeopleRail label="Board of Advisors">
              {advisors?.map((member, i) => (
                <Reveal key={member.id} variant="up" delay={i * 80} className="voe-people__item">
                  <TeamMember {...member} static />
                </Reveal>
              ))}
            </PeopleRail>
          </div>
        </div>
      </section>

      {/* ─── Join ────────────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Work with us</p>
            <h2 className="voe-display-lg font-display mb-5 text-white">Join the national team.</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">
              Interested in a role on the national team? Tell us what you’d like to work on.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.links.contact} className="voe-btn voe-btn--on-dark">
                Get in touch
              </a>
              <Link href="/get-involved/chapters" className="voe-btn voe-btn--outline-white">
                Find your chapter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
