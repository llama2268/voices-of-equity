import PageLayout from '../../../components/Layout/PageLayout';
import StatCard from '../../../components/Stats/StatCard';
import { whatWeDo } from '@/content/content';

export default function ImpactPage() {
  const { title, subtitle } = whatWeDo.impact;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats will be added here */}
      </div>
    </PageLayout>
  );
} 