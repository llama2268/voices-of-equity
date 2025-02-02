interface SectionIntroProps {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export function SectionIntro({ eyebrow, heading, description }: SectionIntroProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <p className="font-serif text-lg text-primary-600 mb-2 italic">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
} 