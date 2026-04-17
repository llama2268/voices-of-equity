'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { getInvolvedPage } from '@/content';
import Link from 'next/link';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

export default function RequirementsPage() {
  const { title, subtitle, requirements, bottomNote } = getInvolvedPage.requirements;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
    >
      {/* Requirements */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-0">
            {requirements.map((requirement, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="py-8 border-b border-gray-200 first:pt-0 last:border-b-0">
                  <h3 className="text-xl font-bold font-display text-[#171219] mb-3">
                    {requirement.title}
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold font-display text-[#171219] mb-4">{bottomNote.title}</h3>
            <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
              {bottomNote.description}
            </p>
            <Link
              href="/get-involved/start"
              className="inline-block px-8 py-3 bg-[#587FDA] hover:bg-[#4566B8] text-white rounded-md font-medium transition-colors hover-scale"
            >
              Get Started
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
