'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { SocialCallout } from '@/components/ui/SocialCallout';
import { contactPage, siteConfig } from '@/content';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

export default function ContactPage() {
  return (
    <PageLayout
      title={contactPage.title}
      subtitle={contactPage.subtitle}
      hero
      reduced
    >
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll animation="fade-up">
              <p className="text-[#4A5568] leading-relaxed text-lg mb-10">
                Have questions about starting a chapter, joining our team, or collaborating with us? We&apos;d love to hear from you.
              </p>
              <a
                href={siteConfig.links.contact}
                className="inline-block px-8 py-3 bg-[#587FDA] text-white font-semibold rounded-md hover:bg-[#4566B8] transition-colors hover-scale"
              >
                Email Us
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200" />

      {/* Social Media Section */}
      <section className="py-24 bg-blue-wash">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Connect With Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#171219] mb-4">Join Our Community</h2>
            <p className="text-lg text-[#4A5568] leading-relaxed mb-10 max-w-2xl mx-auto">
              Join our community of changemakers and help build a more equitable future for all.
            </p>
            <div className="flex gap-4 justify-center">
              <SocialCallout/>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
