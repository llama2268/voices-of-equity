import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime?: string;
  slug: string;
  variant?: 'memo' | 'news';
}

export function ArticleCard({
  title,
  excerpt,
  date,
  image,
  category,
  readTime,
  slug,
  variant = 'memo'
}: ArticleCardProps) {
  const href = variant === 'memo' 
    ? `/what-we-do/voices/${slug}`
    : `/what-we-do/impact/${slug}`;

  return (
    <Link href={href}>
      <article className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
        {/* Image Container */}
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Meta */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 text-sm font-medium bg-primary-50 text-primary-600 rounded-full">
              {category}
            </span>
            <div className="text-sm text-gray-500">
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</time>
              {readTime && <span className="ml-2">· {readTime}</span>}
            </div>
          </div>

          {/* Title & Excerpt */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
} 