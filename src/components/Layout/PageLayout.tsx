import { cn } from "@/lib/utils";

interface PageLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  hero?: boolean;
  fullWidth?: boolean;
  reduced?: boolean;
}

export default function PageLayout({
  title,
  subtitle,
  children,
  hero = false,
  fullWidth = false,
  reduced = false
}: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      {(title || subtitle) && (
        <header className={cn(
          "relative bg-white",
          hero && "min-h-[40vh] flex items-center",
          !fullWidth && !reduced && "pt-28 pb-16",
          reduced && "pt-28 pb-8"
        )}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-[#171219] mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-[#4A5568] leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200" />
        </header>
      )}
      {children}
    </main>
  );
}
