import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';

export default function StartChapterPage() {
  const { title, subtitle } = getInvolved.start;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {/* Start a chapter form and instructions will be added here */}
    </PageLayout>
  );
} 