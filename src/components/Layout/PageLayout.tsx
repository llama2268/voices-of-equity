interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageLayout = ({ children, title, subtitle, className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen pt-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-xl text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 