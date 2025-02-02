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
  return (
    <div className={` relative h-screen`}>
      <div className="absolute inset-0 bg-[url('/hero-bg.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-20 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-end">
          {/* Left side content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="font-serif text-2xl md:text-3xl text-white/90 mb-4 italic">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg text-white/80">
                {description}
              </p>
            )}
          </div>

          {/* Right side CTA */}
          <div className="hidden lg:block">
            <a
              href="/get-involved/chapters"
              className="inline-block px-8 py-4 text-lg font-semibold bg-[#E4826D] hover:bg-[#d97661] text-white transition-colors duration-300"
            >
              Join Our Movement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 