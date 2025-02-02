import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime?: string;
  author?: string;
  slug: string;
  variant?: 'memo' | 'news';
}

export function FeaturedArticle({
  title,
  excerpt,
  date,
  image,
  category,
  readTime,
  author,
  slug,
  variant = 'memo'
}: FeaturedArticleProps) {
  const href = variant === 'memo' 
    ? `/what-we-do/voices/${slug}`
    : `/what-we-do/impact/${slug}`;

  return (
    <Link href={href}>
      <article className="group relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="relative h-[60vh] min-h-[500px]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-3xl">
              {/* Category & Meta */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-1.5 text-sm font-medium bg-white/90 text-primary-600 rounded-full">
                  {category}
                </span>
                <div className="text-sm text-white/90">
                  <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</time>
                  {readTime && <span className="ml-2">· {readTime}</span>}
                </div>
              </div>

              {/* Title & Excerpt */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">
                {title}
              </h2>
              <p className="text-lg text-white/90 line-clamp-2 mb-4">
                {excerpt}
              </p>

              {/* Author if present */}
              {author && (
                <p className="font-serif text-white/80 italic">
                  By {author}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
} 