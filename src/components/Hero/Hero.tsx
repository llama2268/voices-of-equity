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

const Hero = ({ title, subtitle, description, ctaButtons }: HeroProps) => {
  // Split the title into two parts at the comma
  const [firstHalf, secondHalf] = title.split(',').map(part => part.trim());

  return (
    <div className="relative pt-16 items-center bg-gradient-to-b from-white via-[#E3ECFF] to-white overflow-hidden">
      {/* Gradient Background Accents */}
      <div className="absolute -top-28 right-0 h-[28rem] w-[28rem] rounded-full bg-[#607AD4]/65 blur-3xl" />
      <div className="absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[#607AD4]/30 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#498B86]/14 blur-3xl" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2A44] mb-6 leading-tight">
            <span className="font-display block mb-2 text-[#607AD4]">{title}</span>
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-involved/chapters"
              className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white font-semibold rounded-lg transition-colors"
            >
              Join Our Movement
            </Link>
            <Link
              href="/who-we-are/mission"
              className="px-8 py-4 border border-[#607AD4] text-[#607AD4] hover:bg-[#607AD4]/10 font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-[#607AD4]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero; 
