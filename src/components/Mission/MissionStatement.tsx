export function MissionStatement({ text }: { text: string }) {
  return (
    <blockquote className="max-w-3xl mx-auto text-center px-4 py-8">
      <p className="font-serif text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
        "{text}"
      </p>
    </blockquote>
  );
} 