interface QuoteProps {
  text: string;
  author: string;
  role?: string;
}

export function Quote({ text, author, role }: QuoteProps) {
  return (
    <figure className="max-w-2xl mx-auto text-center px-4 py-8">
      <blockquote>
        <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-4">
          "{text}"
        </p>
      </blockquote>
      <figcaption>
        <cite className="font-medium text-primary-600">{author}</cite>
        {role && (
          <span className="block text-sm text-gray-500 mt-1">{role}</span>
        )}
      </figcaption>
    </figure>
  );
} 