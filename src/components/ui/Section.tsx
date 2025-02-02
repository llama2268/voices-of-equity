import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'alternate' | 'highlight';
  spacing?: 'sm' | 'default' | 'lg';
  className?: string;
  title: string;
  subtitle: string;
  description?: string;
}

export function Section({ 
  children, 
  variant = 'default',
  spacing = 'default',
  className,
  title,
  subtitle,
  description
}: SectionProps) {
  return (
    <section className={cn(
      'w-full',
      {
        'bg-white': variant === 'default',
        'bg-gray-50': variant === 'alternate',
        'bg-gradient-to-br from-white to-gray-50': variant === 'highlight', // Updated gradient
      },
      {
        'py-8': spacing === 'sm',
        'py-16': spacing === 'default',
        'py-24': spacing === 'lg',
      },
      className
    )}>
      <Container>
        <div className="text-center mb-12">
          <p className="font-serif text-lg text-secondary-600 mb-3 italic">
            {subtitle}
          </p>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
} 