'use client';

import PageLayout from '@/components/Layout/PageLayout';
import { resourcesPage } from '@/content';
import type { ArchiveItem } from '@/content/types';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';

interface ArchiveCardProps {
  item: ArchiveItem;
}

function ArchiveCard({ item }: ArchiveCardProps) {
  const typeColors: Record<string, string> = {
    article: 'bg-[#587FDA]/10 text-[#587FDA]',
    video: 'bg-[#F47B67]/15 text-[#C8553F]',
    training: 'bg-[#2A8D87]/10 text-[#2A8D87]',
    interview: 'bg-[#587FDA]/10 text-[#587FDA]',
    module: 'bg-[#F2EE68]/40 text-[#6B6A1E]',
    'op-ed': 'bg-[#F47B67]/15 text-[#C8553F]',
    resource: 'bg-[#F1F5FD] text-[#4A5568]'
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
        <span className={`rounded-full px-2.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] ${typeColors[item.type] || typeColors.resource}`}>
          {item.type}
        </span>
        <span className="text-xs text-[#4A5568]/80">{item.date}</span>
      </div>

      {item.image && (
        <div className="voe-photo relative mb-4 h-44 w-full rounded-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      {item.type === 'video' && item.videoId && (
        <div className="relative w-full h-44 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            className="h-full w-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <h3 className="text-lg font-bold font-display text-[#171219] mb-2 line-clamp-2">{item.title}</h3>
      {item.author && (
        <p className="mb-2 text-xs text-[#4A5568]/80">by {item.author}</p>
      )}
      <p className="text-sm text-[#4A5568] mb-4 leading-relaxed line-clamp-3">{item.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.tags.slice(0, 3).map((tag: string, index: number) => (
          <span key={index} className="rounded-full bg-[#F1F5FD] px-2.5 py-0.5 text-xs text-[#4A5568]">
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
        className="voe-card group flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_12px_32px_rgba(14,26,51,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(14,26,51,0.14)]"
      >
        <div className="flex-1 flex flex-col">
          <CardContent />
        </div>
        <div className="mt-4 pt-3 text-[#587FDA] text-sm font-semibold font-display
                        group-hover:text-[#4566B8] transition-colors">
          {item.type === 'article' ? 'Read Article' : item.type === 'module' ? 'View Module' : 'View Content'} &#x2192;
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="voe-card flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_12px_32px_rgba(14,26,51,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(14,26,51,0.14)]">
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
      className="voe-card group block rounded-3xl bg-white p-8 shadow-[0_18px_44px_rgba(14,26,51,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(14,26,51,0.18)] md:p-10"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {item.image && (
          <div className="voe-photo relative h-52 w-full flex-shrink-0 rounded-2xl md:h-auto md:w-80">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-[#587FDA] px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Featured
            </span>
            <span className="text-xs text-[#4A5568]/80">{item.date}</span>
          </div>
          <h2 className="voe-display-md font-display mb-2 text-[#171219] transition-colors group-hover:text-[#587FDA]">
            {item.title}
          </h2>
          {item.author && (
            <p className="mb-3 text-sm text-[#4A5568]/80">by {item.author}</p>
          )}
          <p className="text-[#4A5568] mb-6 leading-relaxed text-base md:text-lg">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag: string, index: number) => (
              <span key={index} className="rounded-full bg-[#F1F5FD] px-3 py-1 text-xs font-medium text-[#4A5568]">
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
    <PageLayout
      title={archive.title}
      subtitle={archive.subtitle}
      eyebrow="Equity Archive"
      image="/impact-photos/binghamton-2.jpg"
      imageAlt="A chapter presentation in a classroom"
    >
      {/* ─── Featured ────────────────────────────────────────────────── */}
      {featuredItems.length > 0 && (
        <section className="voe-section voe-ground-white">
          <div className="voe-container">
            <Reveal variant="fade">
              <p className="voe-eyebrow mb-3">Featured</p>
              <h2 className="voe-display-md font-display mb-8 text-[#171219]">Start here</h2>
            </Reveal>
            {featuredItems.map((item: ArchiveItem) => (
              <Reveal key={item.id} variant="up">
                <FeaturedArticleCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ─── The collection ──────────────────────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">Browse All</p>
            <h2 className="voe-display-md font-display mb-8 text-[#171219]">Archive Collection</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularItems.map((item: ArchiveItem, i: number) => (
              <Reveal key={item.id} variant="up" delay={Math.min(i, 8) * 70} className="h-full">
                <ArchiveCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
