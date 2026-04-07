import Link from 'next/link';

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
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                  {category}
                </span>
                <div className="text-xs text-white/70">
                  <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</time>
                  {readTime && <span className="ml-2">&middot; {readTime}</span>}
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4 group-hover:text-gray-200 transition-colors">
                {title}
              </h2>
              <p className="text-lg text-white/80 line-clamp-2 mb-4 leading-relaxed">
                {excerpt}
              </p>

              {author && (
                <p className="text-white/70 text-sm">
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
