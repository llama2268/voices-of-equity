'use client';

import PageLayout from '@/components/Layout/PageLayout';
import ComingSoon from '@/components/ui/ComingSoon';

export default function NewsPage() {
  return (
    <PageLayout
      title="Voices & Impact"
      subtitle="Deep dives into health equity issues and updates from our community"
      eyebrow="What We Do"
      image="/photos/committee-presentation.jpg"
      imageAlt="A chapter presentation"
      objectPosition="center 38%"
    >
      <ComingSoon
        title="Stories from the chapters are on their way."
        body="We’re gathering news and impact stories from across the network. Until then, the Equity Archive and our impact page carry the work so far."
        links={[
          { label: 'Read the Equity Archive', href: '/resources/archive' },
          { label: 'See our impact', href: '/what-we-do/impact' },
        ]}
      />
    </PageLayout>
  );
}
