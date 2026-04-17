'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { resourcesPage } from '@/content';
import type { ArchiveItem } from '@/content/types';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/Animation/AnimateOnScroll';

interface ArchiveCardProps {
  item: ArchiveItem;
}

function ArchiveCard({ item }: ArchiveCardProps) {
  const typeColors: Record<string, string> = {
    article: 'bg-[#587FDA]/10 text-[#587FDA]',
    video: 'bg-red-50 text-red-700',
    training: 'bg-[#2A8D87]/10 text-[#2A8D87]',
    interview: 'bg-purple-50 text-purple-700',
    module: 'bg-amber-50 text-amber-700',
    'op-ed': 'bg-orange-50 text-orange-700',
    resource: 'bg-gray-100 text-gray-700'
  };

  const getLink = () => {
    if (item.id === 'article-redlining-heart-disease') {
      return '/resources/archive/redlining-heart-disease';
    }
    return item.url;
  };

  const link = getLink();
  const isExternal = link?.startsWith('http');

  const CardContent = () => (
    <>
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2.5 py-0.5 rounded text-xs font-medium uppercase tracking-widest ${typeColors[item.type] || typeColors.resource}`}>
          {item.type}
        </span>
        <span className="text-xs text-gray-500">{item.date}</span>
      </div>

      {item.image && (
        <div className="relative w-full h-44 mb-4 hover-image-zoom">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded"
          />
        </div>
      )}

      {item.type === 'video' && item.videoId && (
        <div className="relative w-full h-44 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            className="w-full h-full rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <h3 className="text-lg font-bold font-display text-[#171219] mb-2 line-clamp-2">{item.title}</h3>
      {item.author && (
        <p className="text-xs text-gray-500 mb-2">by {item.author}</p>
      )}
      <p className="text-sm text-[#4A5568] mb-4 leading-relaxed line-clamp-3">{item.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.tags.slice(0, 3).map((tag: string, index: number) => (
          <span key={index} className="px-2 py-0.5 bg-[#F7F8FA] text-gray-500 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (link) {
    const linkProps = isExternal
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {};

    const Wrapper = isExternal ? 'a' : Link;

    return (
      <Wrapper
        href={link}
        {...linkProps}
        className="group block bg-white border border-gray-200 rounded-lg p-6 hover-lift
                   transition-all duration-200 h-full flex flex-col"
      >
        <div className="flex-1 flex flex-col">
          <CardContent />
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200 text-[#587FDA] text-sm font-semibold font-display
                        group-hover:text-[#4566B8] transition-colors">
          {item.type === 'article' ? 'Read Article' : item.type === 'module' ? 'View Module' : 'View Content'} &#x2192;
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <div className="flex-1 flex flex-col">
        <CardContent />
      </div>
    </div>
  );
}

function FeaturedArticleCard({ item }: ArchiveCardProps) {
  const link = item.id === 'article-redlining-heart-disease'
    ? '/resources/archive/redlining-heart-disease'
    : item.url;

  return (
    <Link
      href={link || '#'}
      className="group block bg-white border border-gray-200 rounded-lg p-8 md:p-10 hover-lift transition-all duration-200 mb-12"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {item.image && (
          <div className="relative w-full md:w-80 h-52 md:h-auto flex-shrink-0 hover-image-zoom">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#587FDA] text-white rounded text-xs font-medium uppercase tracking-widest">
              Featured
            </span>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#171219] mb-2 group-hover:text-[#587FDA] transition-colors">
            {item.title}
          </h2>
          {item.author && (
            <p className="text-sm text-gray-500 mb-3">by {item.author}</p>
          )}
          <p className="text-[#4A5568] mb-6 leading-relaxed text-base md:text-lg">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-[#F7F8FA] text-[#4A5568] rounded text-xs font-medium border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[#587FDA] font-semibold font-display group-hover:text-[#4566B8] transition-colors">
            Read Full Article &#x2192;
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ArchivePage() {
  const { archive } = resourcesPage;

  const featuredItems = archive.items.filter((item: ArchiveItem) => item.featured);
  const regularItems = archive.items.filter((item: ArchiveItem) => !item.featured);

  return (
    <PageLayout title={archive.title} subtitle={archive.subtitle}>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured Articles */}
          {featuredItems.length > 0 && (
            <div className="mb-8">
              {featuredItems.map((item: ArchiveItem) => (
                <AnimateOnScroll key={item.id} animation="fade-up">
                  <FeaturedArticleCard item={item} />
                </AnimateOnScroll>
              ))}
            </div>
          )}

          <div className="border-t border-gray-200 mb-12" />

          {/* Archive Grid */}
          <div>
            <AnimateOnScroll animation="fade-up">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Browse All</p>
              <h2 className="text-2xl font-bold font-display text-[#171219] mb-8">Archive Collection</h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item: ArchiveItem, i: number) => (
                <AnimateOnScroll key={item.id} animation="scale-in" delay={i * 80}>
                  <ArchiveCard item={item} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
