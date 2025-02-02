interface PageLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="w-screen overflow-x-hidden">
      {(title || subtitle) && (
        <header className="w-full bg-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </header>
      )}
      <main className="w-full min-h-screen">
        {children}
      </main>
    </div>
  );
} 