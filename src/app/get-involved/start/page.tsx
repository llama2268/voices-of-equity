'use client';

import PageLayout from "@/components/Layout/PageLayout";
import { getInvolvedPage, siteConfig } from "@/content";
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

export default function StartChapterPage() {
  const { title, subtitle, content } = getInvolvedPage.start;

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
    >
      <section className="py-24 bg-blue-wash">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-lg text-[#4A5568] leading-relaxed mb-10">
              {content}
            </p>
            <a
              href={siteConfig.links.contact}
              className="inline-block px-8 py-3 bg-[#587FDA] hover:bg-[#4566B8] text-white rounded-md font-medium transition-colors hover-scale"
            >
              Contact Us to Get Started
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
