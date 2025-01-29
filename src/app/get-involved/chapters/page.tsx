import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';

export default function ChaptersPage() {
  const { title, subtitle, content } = getInvolved.chapters;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {content}
    </PageLayout>
  );
} 