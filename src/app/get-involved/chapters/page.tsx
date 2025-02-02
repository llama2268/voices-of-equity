import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';

export default function ChaptersPage() {
  const { title, subtitle, content } = getInvolved.chapters;
  
  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
    >
      <div className=" mb-8 p-6 bg-gray-30 border-l-4 border-indigo-300 
                     leading-relaxed shadow-sm">
        {content}
      </div>
        <div className="py-10 px-4">
        <h1
          className="text-3xl md:text-5xl font-extrabold text-center mb-8"
        >
          Meet the Chapters
        </h1>
        <div
          className="max-w-lg mx-auto rounded-xl border border-gray-200 
                     p-6 shadow-sm hover:shadow-md 
                     transition-shadow duration-300 bg-white/80 text-center"
        >
          <img
          src="/cornell.png"
          className="max-w-xs max-h-40 object-contain mx-auto pb-4">
          </img>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
            Cornell University
          </h2>
          <p className="text-gray-600">
            Chapter Description
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
