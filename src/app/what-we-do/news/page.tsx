'use client';

import PageLayout from '@/components/Layout/PageLayout';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

export default function NewsPage() {
  return (
    <PageLayout
      title="Voices & Impact"
      subtitle="Deep dives into health equity issues and updates from our community"
    >
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[40vh]">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Stay tuned</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-[#171219] mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                News and impact stories coming soon.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
