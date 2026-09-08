'use client';

import PageLayout from '@/components/Layout/PageLayout';
import ComingSoon from '@/components/ui/ComingSoon';

export default function SummaryPage() {
  return (
    <PageLayout
      title="Summary"
      subtitle="Our approach to health equity"
      eyebrow="What We Do"
      image="/photos/classroom-session.jpg"
      imageAlt="A chapter classroom session"
    >
      <ComingSoon
        title="A one-page summary is being written."
        body="Until it’s ready, our mission page explains what we do and why, and the national initiatives page shows how the chapters carry it out."
        links={[
          { label: 'Our mission', href: '/who-we-are/mission' },
          { label: 'National initiatives', href: '/what-we-do/national' },
        ]}
      />
    </PageLayout>
  );
}
