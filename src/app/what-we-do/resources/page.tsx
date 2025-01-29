import PageLayout from '../../../components/Layout/PageLayout';
import { whatWeDo } from '@/content/content';

export default function ResourcesPage() {
  const { title, subtitle } = whatWeDo.resources;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {/* Resources grid will be added here */}
    </PageLayout>
  );
} 