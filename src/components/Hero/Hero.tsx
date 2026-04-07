import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    primary?: boolean;
  }>;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="relative pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-[#171219] leading-[1.1] mb-8 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-[#4A5568] mb-12 leading-relaxed max-w-2xl font-light">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-involved/chapters"
              className="px-10 py-4 bg-[#587FDA] hover:bg-[#4566B8] text-white font-medium font-display
                         rounded-md transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98] tracking-wide uppercase text-sm"
            >
              Join Our Movement
            </Link>
            <Link
              href="/who-we-are/mission"
              className="px-10 py-4 border border-gray-300 text-[#333333] hover:border-gray-400 hover:bg-gray-50
                         font-medium font-display rounded-md transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98] tracking-wide uppercase text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200" />
    </section>
  );
};

export default Hero;
