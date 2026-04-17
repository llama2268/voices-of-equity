'use client';

import PageLayout from '@/components/Layout/PageLayout';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

export default function PartnerPage() {
  return (
    <PageLayout
      title="Partner With Us"
      subtitle="Create lasting impact through collaboration"
    >
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Under Development</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-[#587FDA] mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Partnership information coming soon.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
