import PageLayout from '../../../components/Layout/PageLayout';
import { whoWeAre } from '@/content/content';

export default function MissionPage() {
  const { title, subtitle, content } = whoWeAre.mission;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {content}
    </PageLayout>
  );
} 