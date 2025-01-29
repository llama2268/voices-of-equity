import PageLayout from '../../components/Layout/PageLayout';
import { cornellChapter } from '@/content/content';

export default function CornellChapterPage() {
  const { title, subtitle } = cornellChapter;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      {/* Cornell chapter specific content will be added here */}
    </PageLayout>
  );
} 