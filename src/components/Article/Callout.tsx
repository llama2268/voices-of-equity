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
        <blockquote className="relative p-8 bg-primary-50 rounded-lg">
          <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-4">
            <span className="text-6xl text-primary-300">"</span>
          </div>
          <p className="font-serif text-2xl text-gray-800 italic leading-relaxed mb-4">
            {content}
          </p>
          {author && (
            <cite className="block text-gray-600 not-italic">
              — {author}
            </cite>
          )}
        </blockquote>
      );

    case 'statistic':
      return (
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-lg">
          <p className="text-4xl md:text-5xl font-bold mb-2">
            {content}
          </p>
          {description && (
            <p className="text-lg text-white/90">
              {description}
            </p>
          )}
        </div>
      );

    case 'metric':
      return (
        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
          <div className="text-center md:text-left">
            <p className="text-5xl font-bold text-primary-600 mb-2">
              {content}
            </p>
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-lg mb-2">Impact Breakdown</h4>
            {/* Add more metric details here */}
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-8 rounded-lg text-center">
          <p className="text-2xl font-bold mb-4">
            {content}
          </p>
          {description && (
            <p className="text-lg mb-6">
              {description}
            </p>
          )}
          {link && (
            <a 
              href={link}
              className="inline-block bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          )}
        </div>
      );
  }
} 