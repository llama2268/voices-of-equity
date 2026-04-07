import Link from 'next/link';

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
      <article className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow duration-200">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-[#587FDA]">
              {category}
            </span>
            <div className="text-xs text-gray-500">
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</time>
              {readTime && <span className="ml-2">&middot; {readTime}</span>}
            </div>
          </div>
          <h3 className="text-lg font-bold font-display text-[#171219] mb-2 group-hover:text-[#587FDA] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#4A5568] line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
