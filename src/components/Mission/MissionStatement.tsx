export function MissionStatement({ text }: { text: string }) {
  return (
    <blockquote className="max-w-3xl mx-auto px-4 py-8 border-l-2 border-[#587FDA] pl-8">
      <p className="text-2xl md:text-3xl text-[#333333] leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </blockquote>
  );
}
