import { whatWeDo } from '@/content/content';
import { Section } from '@/components/ui/Section';
import { FeaturedArticle } from '@/components/Article/FeaturedArticle';
import { ArticleCard } from '@/components/Article/ArticleCard';
import PageLayout from '@/components/Layout/PageLayout';

export default function ArchivePage() {
  const { featured, articles } = whatWeDo.news;
  
  // Separate memos and news items
  const memos = articles.filter(article => article.type === 'memo');
  const newsItems = articles.filter(article => article.type === 'news');
  
  // For the equity archive, we assume that articles of type 'equity'
  // (or a new property) represent the stories, editorial content, etc.
  const equityContent = articles.filter(article => article.type === 'equity');
  
  // Sort all articles by date (newest first)
  const allArticles = articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageLayout title="Equity Archive" subtitle="Making real change in communities">
      <Section>
        <div className="min-h-screen flex flex-col items-center justify-start pt-20">
          <h1 className="text-6xl md:text-8xl font-bold text-center text-primary-600">
            Coming Soon
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Stay tuned for our archive.
          </p>
        </div>
      </Section>
    </PageLayout>
    // <PageLayout 
    //   title="Equity Archive" 
    //   subtitle="Deep dives into health equity issues and updates from our community"
    // >
    //   {/* Featured Article */}
    //   <Section spacing="sm">
    //     <FeaturedArticle {...featured} />
    //   </Section>

    //   {/* Latest Articles */}
    //   <Section>
    //     <div className="space-y-16">
    //       {/* Deep Dives */}
    //       <div>
    //         <div className="text-center mb-12">
    //           <p className="font-serif text-lg text-primary-600 mb-3 italic">
    //             Deep Dives
    //           </p>
    //           <h2 className="text-3xl font-bold mb-4">Health Equity Analysis</h2>
    //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    //             In-depth explorations of critical healthcare accessibility issues
    //           </p>
    //         </div>
    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
    //           {memos.slice(0, 3).map((memo) => (
    //             <ArticleCard
    //               key={memo.slug}
    //               {...memo}
    //               variant="memo"
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       {/* Latest Updates */}
    //       <div>
    //         <div className="text-center mb-12">
    //           <p className="font-serif text-lg text-primary-600 mb-3 italic">
    //             Latest Updates
    //           </p>
    //           <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
    //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    //             Recent developments and success stories from our chapters
    //           </p>
    //         </div>
    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
    //           {newsItems.slice(0, 3).map((item) => (
    //             <ArticleCard
    //               key={item.slug}
    //               {...item}
    //               variant="news"
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       {/* Equity Archive */}
    //       <div>
    //         <div className="text-center mb-12">
    //           <p className="font-serif text-lg text-primary-600 mb-3 italic">
    //             Equity Archive
    //           </p>
    //           <h2 className="text-3xl font-bold mb-4">Editorials & Stories</h2>
    //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    //             Humanize the issue and inspire action through stories—be it video interviews, written journals, or other firsthand accounts.
    //           </p>
    //         </div>
    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
    //           {equityContent.slice(0, 6).map((article) => (
    //             <ArticleCard
    //               key={article.slug}
    //               {...article}
    //               variant="equity"
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       {/* All Articles */}
    //       <div>
    //         <div className="text-center mb-12">
    //           <p className="font-serif text-lg text-primary-600 mb-3 italic">
    //             Archive
    //           </p>
    //           <h2 className="text-3xl font-bold mb-4">All Articles</h2>
    //         </div>
    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
    //           {allArticles.slice(0, 6).map((article) => (
    //             <ArticleCard
    //               key={article.slug}
    //               {...article}
    //               variant={article.type}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </Section>
    // </PageLayout>
  );
}