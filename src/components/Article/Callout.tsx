interface CalloutProps {
  type: 'quote' | 'statistic' | 'metric' | 'cta';
  content: string;
  author?: string;
  description?: string;
  link?: string;
}

export function Callout({ type, content, author, description, link }: CalloutProps) {
  switch (type) {
    case 'quote':
      return (
        <blockquote className="border-l-2 border-[#587FDA] pl-8 py-4">
          <p className="text-2xl text-[#333333] leading-relaxed mb-4">
            {content}
          </p>
          {author && (
            <cite className="block text-[#4A5568] not-italic text-sm">
              &mdash; {author}
            </cite>
          )}
        </blockquote>
      );

    case 'statistic':
      return (
        <div className="bg-[#587FDA] text-white p-8 rounded-lg">
          <p className="text-4xl md:text-5xl font-bold font-display mb-2">
            {content}
          </p>
          {description && (
            <p className="text-lg text-white/80">
              {description}
            </p>
          )}
        </div>
      );

    case 'metric':
      return (
        <div className="border border-gray-200 rounded-lg p-8">
          <p className="text-5xl font-bold font-display text-[#587FDA] mb-2">
            {content}
          </p>
          {description && (
            <p className="text-lg text-[#4A5568]">
              {description}
            </p>
          )}
        </div>
      );

    case 'cta':
      return (
        <div className="bg-[#171219] text-white p-8 rounded-lg text-center">
          <p className="text-2xl font-bold font-display mb-4">
            {content}
          </p>
          {description && (
            <p className="text-lg text-gray-400 mb-6">
              {description}
            </p>
          )}
          {link && (
            <a
              href={link}
              className="inline-block bg-[#587FDA] text-white px-8 py-3 rounded-md font-medium hover:bg-[#4566B8] transition-colors"
            >
              Learn More
            </a>
          )}
        </div>
      );
  }
}
