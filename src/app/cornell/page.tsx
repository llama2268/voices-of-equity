import PageLayout from '../../components/Layout/PageLayout';
import { cornellChapter } from '@/content/content';

export default function CornellChapterPage() {
  const { title, subtitle } = cornellChapter;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <h1 className="text-center">The Cornell University Voices of Equity chapter was founded in January 2025, as our founding chapter.</h1>
      <div className="text-center">
        Events
      </div>
      <div className="text-center">
        Meet The Executive Board
      </div>
    </PageLayout>
  );
} 