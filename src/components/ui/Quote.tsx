interface QuoteProps {
  text: string;
  author: string;
  role?: string;
}

export function Quote({ text, author, role }: QuoteProps) {
  return (
    <figure className="max-w-2xl mx-auto px-4 py-8 border-l-2 border-[#587FDA] pl-8">
      <blockquote>
        <p className="text-xl md:text-2xl text-[#333333] leading-relaxed mb-4">
          &ldquo;{text}&rdquo;
        </p>
      </blockquote>
      <figcaption>
        <cite className="font-medium font-display text-[#587FDA] not-italic">{author}</cite>
        {role && (
          <span className="block text-sm text-gray-500 mt-1">{role}</span>
        )}
      </figcaption>
    </figure>
  );
}
