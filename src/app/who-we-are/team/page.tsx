'use client';

import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeArePage } from '@/content';
import Image from 'next/image';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

const departmentDescriptions: Record<string, string> = {
  Education: 'Our education team develops curriculum, modules, and resources that foster practical learning experiences around health equity — ensuring every member gains a deeper understanding of systemic health disparities.',
  Philanthropy: 'The philanthropy team leads national fundraising campaigns like National Health Equity Week and the CARE packet project, mobilizing resources to address structural health disparities and support community organizations.',
  Outreach: 'Our outreach team drives national expansion, maintains cross-chapter communication, and builds sustainable structures that support health equity initiatives at universities across the country.',
  Media: 'The media team amplifies health equity discussions through social media, integrating graphic design with educational content and personal stories that reach thousands of students nationwide.',
};

export default function TeamPage() {
  const { members, engineers, Media_team, Education, Outreach, Philanthrophy, VOX } = whoWeArePage.team;

  const departments = [
    { label: "Education", data: Education },
    { label: "Philanthropy", data: Philanthrophy },
    { label: "Outreach", data: Outreach },
    { label: "Media", data: Media_team },
  ];

  return (
    <PageLayout fullWidth>

      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">Who We Are</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#171219] mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed max-w-2xl">
              The national leadership team driving health equity forward through education, advocacy, and community engagement across 60+ universities.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-4">Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219] mb-6">
              Executive Leadership
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mb-16">
              Our executive team sets the strategic direction and ensures Voices of Equity delivers on its mission nationwide.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {members?.map((member, i) => (
              <AnimateOnScroll key={member.name} animation="scale-in" delay={i * 80}>
                <TeamMember {...member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Department Sections */}
      {departments.map((dept, index) => {
        const bgClass = index % 2 === 0 ? 'bg-blue-wash' : 'bg-warm-wash';
        const deptDesc = departmentDescriptions[dept.label] || '';
        const memberCount = dept.data?.length || 0;

        return (
          <div key={dept.label}>
            <section className={`py-24 ${bgClass}`}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll animation="heading">
                  <div className="text-center mb-16">
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-3">{dept.label}</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#171219] mb-4">{dept.label} Team</h2>
                    <p className="text-[#4A5568] leading-relaxed max-w-2xl mx-auto">{deptDesc}</p>
                  </div>
                </AnimateOnScroll>

                <div className={`flex flex-wrap justify-center gap-8 ${memberCount <= 2 ? 'max-w-lg mx-auto' : 'max-w-3xl mx-auto'}`}>
                  {dept.data?.map((member, i) => (
                    <AnimateOnScroll key={member.name} animation="scale-in" delay={i * 80}>
                      <div className="w-[160px]">
                        <TeamMember {...member} />
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </section>

            {index < departments.length - 1 && <div className="border-t border-gray-200" />}
          </div>
        );
      })}

      <div className="border-t border-gray-200" />

      {/* VOX Equity */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#587FDA] font-medium mb-4">Publication</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219] mb-6">
              VOX Equity
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mb-16">
              Our student-led publication advancing health equity discourse through rigorous research, analysis, and storytelling.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {VOX?.map((member, i) => (
              <AnimateOnScroll key={member.name} animation="scale-in" delay={i * 80}>
                <TeamMember {...member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Engineers */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-4">Technology</p>
            <h2 className="font-display text-3xl font-bold text-[#171219] mb-16">
              Engineering
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {engineers?.map((member, i) => (
              <AnimateOnScroll key={member.name} animation="scale-in" delay={i * 80}>
                <TeamMember {...member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip / Geographic Reach */}
      <section className="overflow-hidden bg-white border-t border-gray-200">
        <div className="flex gap-1 w-max voe-marquee">
          {(() => {
            const images = [
              '/impact-stories.jpeg', '/local-initiatives.jpeg', '/paintingtry.jpg',
              '/team-picture.jpg', '/empower.jpg', '/voe-journey.jpeg',
              '/cornell-chapter.jpg', '/home-resources.jpg', '/hero-new.jpeg',
            ];
            return [...images, ...images].map((src, idx) => (
              <div key={`${src}-${idx}`} className="relative h-40 w-64 flex-shrink-0">
                <Image src={src} alt="" fill className="object-cover" sizes="256px" />
              </div>
            ));
          })()}
        </div>
      </section>
    </PageLayout>
  );
}
