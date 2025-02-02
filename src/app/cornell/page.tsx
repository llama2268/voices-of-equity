import PageLayout from '../../components/Layout/PageLayout';
import { cornellChapter } from '@/content/content';

export default function CornellChapterPage() {
  const { title, subtitle } = cornellChapter;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
<div className="
    relative 
    w-full max-w-4xl 
    h-[30rem]
    mx-auto 
    overflow-hidden 
    rounded-[20px]">
  <img
    src="/cornell-chapter.jpg"
    alt="Cornell Chapter"
    className="object-cover w-full h-full"
  />
  <div 
        className="
          absolute top-10 left-10 
          w-32 h-32 md:w-40 md:h-40 
          bg-white p-2 rounded-full shadow-lg 
          flex items-center justify-center opacity-0 
          animate-fade-in-logo
        "
      >
        <img 
          src="/cornell-logo.jpg" 
          alt="Cornell Logo" 
          className="w-full h-full object-contain"
        />
      </div>
  <div className="absolute inset-0 bg-black/30" />
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <p className="text-center text-white font-semibold text-lg max-w-sm">
      The Cornell University Voices of Equity chapter was founded in January 2025,
      as our founding chapter.
    </p>
  </div>
</div>
      <div className="text-center">
        Events
      </div>
      <div className="text-center">
        Meet The Executive Board
      </div>
    </PageLayout>
  );
} 