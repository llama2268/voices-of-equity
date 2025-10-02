import { Section } from '@/components/ui/Section';
import PageLayout from '@/components/Layout/PageLayout';
import { resourcesPage } from '@/content';
import type { ArchiveItem } from '@/content/types';
import Image from 'next/image';

interface ArchiveCardProps {
  item: ArchiveItem;
}

function ArchiveCard({ item }: ArchiveCardProps) {
  const typeColors = {
    article: 'bg-blue-100 text-blue-800',
    video: 'bg-red-100 text-red-800', 
    training: 'bg-green-100 text-green-800',
    interview: 'bg-purple-100 text-purple-800',
    module: 'bg-yellow-100 text-yellow-800',
    'op-ed': 'bg-orange-100 text-orange-800',
    resource: 'bg-gray-100 text-gray-800'
  };

  const CardContent = () => (
    <>
      <div className="flex justify-between items-start mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[item.type]}`}>
          {item.type}
        </span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>
      
      {/* Image support */}
      {item.image && (
        <div className="relative w-full h-48 mb-4">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* YouTube iframe for videos */}
      {item.type === 'video' && item.videoId && (
        <div className="relative w-full h-48 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
      {item.author && (
        <p className="text-sm text-gray-600 mb-2">by {item.author}</p>
      )}
      <p className="text-gray-600 mb-4">{item.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag: string, index: number) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  // Wrap items with URLs with links
  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-primary-300 h-full max-h-[400px] flex flex-col"
      >
        <div className="flex-1 overflow-hidden">
          <CardContent />
        </div>
        <div className="mt-4 text-primary-600 text-sm font-medium">
          {item.type === 'article' ? 'Read Article' : item.type === 'module' ? 'View Module' : 'View Content'} →
        </div>
      </a>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow h-full max-h-[400px] flex flex-col">
      <div className="flex-1 overflow-hidden">
        <CardContent />
      </div>
    </div>
  );
}

function FeaturedArchiveCard({ item }: ArchiveCardProps) {
  const FeaturedContent = () => (
    <>
      <div className="flex justify-between items-start mb-4">
        <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
          Featured
        </span>
        <span className="text-sm text-gray-600">{item.date}</span>
      </div>

      {/* Image support for featured */}
      {item.image && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* YouTube iframe for featured videos */}
      {item.type === 'video' && item.videoId && (
        <div className="relative w-full h-64 mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
      {item.author && (
        <p className="text-sm text-gray-600 mb-3">by {item.author}</p>
      )}
      <p className="text-gray-700 mb-6 text-lg">{item.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag: string, index: number) => (
          <span key={index} className="px-3 py-1 bg-white text-primary-600 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  // Wrap featured articles with links
  if (item.type === 'article' && item.url) {
    return (
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
      >
        <FeaturedContent />
        <div className="mt-4 text-primary-600 font-medium">
          Read Featured Article →
        </div>
      </a>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 rounded-lg p-8">
      <FeaturedContent />
    </div>
  );
}

export default function ArchivePage() {
  const { archive } = resourcesPage;

  return (
    <div className="relative">
      {/* Background Banner Image */}
      {archive.banner && (
        <div className="absolute top-0 left-0 w-full h-[600px] -z-10">
          <Image
            src={archive.banner}
            alt="Equity Archive Banner"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
      )}

      <PageLayout title={archive.title} subtitle={archive.subtitle}>
        <Section>
          <div className="max-w-6xl mx-auto px-4">
            {/* All Archive Items */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Archive Collection</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archive.items.map((item: any) => (
                  <ArchiveCard key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>
        </Section>
      </PageLayout>
    </div>
  );
}