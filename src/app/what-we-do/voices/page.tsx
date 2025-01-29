import PageLayout from '../../../components/Layout/PageLayout';
import { whatWeDo } from '@/content/content';

export default function VoicesPage() {
  const { title, subtitle } = whatWeDo.voices;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {/* Content will be added here */}
    </PageLayout>
  );
} 