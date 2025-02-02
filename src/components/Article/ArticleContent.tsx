import { MDXRemote } from 'next-mdx-remote';
import { Callout } from './Callout';

interface ArticleContentProps {
  content: string;
  callout?: {
    type: 'quote' | 'statistic' | 'metric' | 'cta';
    content: string;
    author?: string;
    description?: string;
    link?: string;
  };
}

export function ArticleContent({ content, callout }: ArticleContentProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <article className="prose prose-lg prose-primary mx-auto">
        {/* Article content with styling for headers, lists, quotes etc */}
        <div className="mb-12">
          <MDXRemote 
            {...content}
            components={{
              h2: (props) => (
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6" {...props} />
              ),
              p: (props) => (
                <p className="text-gray-700 leading-relaxed mb-6" {...props} />
              ),
              blockquote: (props) => (
                <blockquote className="font-serif text-xl italic text-gray-700 border-l-4 border-primary-500 pl-6 my-8" {...props} />
              ),
              ul: (props) => (
                <ul className="list-disc list-inside space-y-3 mb-6" {...props} />
              ),
            }}
          />
        </div>

        {/* Callout section if present */}
        {callout && (
          <div className="my-12">
            <Callout {...callout} />
          </div>
        )}
      </article>
    </div>
  );
} 