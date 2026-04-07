'use client';

import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeArePage } from '@/content';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function CountUp({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = 0;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
    >
      {children}
    </div>
  );
}

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

  const teamStats = [
    { value: 55, suffix: '+', label: 'Chapters' },
    { value: 8, suffix: '', label: 'National Directors' },
    { value: 25, suffix: '+', label: 'Universities' },
    { value: 400, suffix: '+', label: 'Active Members' },
  ];

  return (
    <PageLayout fullWidth>

      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#587FDA] font-medium mb-4">Who We Are</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#171219] mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-[#4A5568] leading-relaxed max-w-2xl">
              The national leadership team driving health equity forward through education, advocacy, and community engagement across 55+ universities.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Animated Stats Bar */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-[#587FDA] mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-[#4A5568] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219] mb-6">
              Executive Leadership
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mb-16">
              Our executive team sets the strategic direction and ensures Voices of Equity delivers on its mission nationwide.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {members?.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Department Sections — Clean, minimal, people-focused */}
      {departments.map((dept, index) => {
        const bgClass = index % 2 === 0 ? 'bg-[#F7F8FA]' : 'bg-white';
        const deptDesc = departmentDescriptions[dept.label] || '';
        const memberCount = dept.data?.length || 0;

        return (
          <div key={dept.label}>
            <section className={`py-24 ${bgClass}`}>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInSection>
                  {/* Department header — centered */}
                  <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-widest text-[#587FDA] font-medium mb-3">{dept.label}</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#171219] mb-4">{dept.label} Team</h2>
                    <p className="text-[#4A5568] leading-relaxed max-w-2xl mx-auto">{deptDesc}</p>
                  </div>

                  {/* Team Members — centered, responsive */}
                  <div className={`flex flex-wrap justify-center gap-8 ${memberCount <= 2 ? 'max-w-lg mx-auto' : 'max-w-3xl mx-auto'}`}>
                    {dept.data?.map((member) => (
                      <div key={member.name} className="w-[160px]">
                        <TeamMember {...member} />
                      </div>
                    ))}
                  </div>
                </FadeInSection>
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
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#587FDA] font-medium mb-4">Publication</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171219] mb-6">
              VOX Equity
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mb-16">
              Our student-led publication advancing health equity discourse through rigorous research, analysis, and storytelling.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {VOX?.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Engineers */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Technology</p>
            <h2 className="font-display text-3xl font-bold text-[#171219] mb-16">
              Engineering
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {engineers?.map((member) => (
              <TeamMember key={member.name} {...member} />
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
