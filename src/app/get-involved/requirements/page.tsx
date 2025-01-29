import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';

export default function RequirementsPage() {
  const { title, subtitle } = getInvolved.requirements;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {/* Requirements content will be added here */}
    </PageLayout>
  );
} 