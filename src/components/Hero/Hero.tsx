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
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="font-display block mb-2">{firstHalf}</span>
            <span className="font-serif font-normal italic">{secondHalf}</span>
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <a
              href="/get-involved/chapters"
              className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white font-semibold rounded-lg transition-colors"
            >
              Join Our Movement
            </a>
            <a
              href="/who-we-are/mission"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
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