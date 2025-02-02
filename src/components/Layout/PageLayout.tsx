import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

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
          "relative",
          hero && "min-h-[40vh] flex items-center",
          !fullWidth && !reduced && "pt-24 pb-12 md:pb-16 lg:pb-20",
          reduced && "pt-24 pb-6 md:pb-8 lg:pb-10"
        )}>
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-gray-600">
                  {subtitle}
                </p>
              )}
            </div>
          </Container>
        </header>
      )}
      {children}
    </main>
  );
} 