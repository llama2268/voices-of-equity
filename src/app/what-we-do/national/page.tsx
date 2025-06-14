import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { SocialCallout } from '@/components/ui/SocialCallout';

export default function NationalPage() {
  return (
    <PageLayout title="National Initiatives" subtitle="Making change across the nation">
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-700">
          Coming Soon
        </h1>
      </div>

      {/* Social Media Integration */}
      <Section 
        title="Share Your Story"
        subtitle="Join the Conversation"
        description="Connect with us on social media to share your impact stories and stay updated"
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>
    </PageLayout>
  );
}