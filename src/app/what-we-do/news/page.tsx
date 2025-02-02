import { whatWeDo } from '@/content/content';
import { Section } from '@/components/ui/Section';
import { FeaturedArticle } from '@/components/Article/FeaturedArticle';
import { ArticleCard } from '@/components/Article/ArticleCard';
import PageLayout from '@/components/Layout/PageLayout';

export default function NewsPage() {
  const { featured, articles } = whatWeDo.news;
  
  // Separate memos and news items
  const memos = articles.filter(article => article.type === 'memo');
  const newsItems = articles.filter(article => article.type === 'news');
  
  const allArticles = articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageLayout 
      title="Voices & Impact" 
      subtitle="Deep dives into health equity issues and updates from our community"
    >
      {/* Featured Article */}
      <Section spacing="sm">
        <FeaturedArticle {...featured} />
      </Section>

      {/* Latest Articles */}
      <Section>
        <div className="space-y-16">
          {/* Deep Dives */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Deep Dives
              </p>
              <h2 className="text-3xl font-bold mb-4">Health Equity Analysis</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In-depth explorations of critical healthcare accessibility issues
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {memos.slice(0, 3).map((memo) => (
                <ArticleCard
                  key={memo.slug}
                  {...memo}
                  variant="memo"
                />
              ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Latest Updates
              </p>
              <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recent developments and success stories from our chapters
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {newsItems.slice(0, 3).map((item) => (
                <ArticleCard
                  key={item.slug}
                  {...item}
                  variant="news"
                />
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Archive
              </p>
              <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
              {allArticles.slice(0, 6).map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  variant={article.type}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 