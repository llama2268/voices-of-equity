import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'default' | 'alternate' | 'dark';
  spacing?: 'sm' | 'default' | 'lg';
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function Section({
  children,
  variant = 'default',
  spacing = 'default',
  className,
  title,
  subtitle,
  description,
  centered = false
}: SectionProps) {
  return (
    <section className={cn(
      'w-full',
      {
        'bg-white': variant === 'default',
        'bg-[#F7F8FA]': variant === 'alternate',
        'bg-[#171219]': variant === 'dark',
      },
      {
        'py-16': spacing === 'sm',
        'py-28': spacing === 'default',
        'py-36': spacing === 'lg',
      },
      className
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className={cn("mb-20", centered && "max-w-3xl mx-auto text-center")}>
            {subtitle && (
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-medium">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn(
                "text-3xl md:text-4xl font-bold font-display mb-4",
                variant === 'dark' ? 'text-white' : 'text-[#171219]'
              )}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "text-lg max-w-2xl leading-relaxed",
                variant === 'dark' ? 'text-gray-400' : 'text-[#4A5568]',
                centered && "mx-auto"
              )}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
