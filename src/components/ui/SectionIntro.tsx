interface SectionIntroProps {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export function SectionIntro({ eyebrow, heading, description }: SectionIntroProps) {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      {eyebrow && (
        <p className="font-display text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-[#4A5568] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
