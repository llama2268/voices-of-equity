import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'alternate' | 'highlight';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  contained?: boolean;
}

export function Section({ 
  children, 
  variant = 'default', 
  spacing = 'lg',
  contained = true,
  className,
  ...props 
}: SectionProps) {
  const sectionClasses = cn(
    // Base styles
    'w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]',
    
    // Refined spacing variants
    {
      'py-8 md:py-12': spacing === 'sm',
      'py-12 md:py-16': spacing === 'md',
      'py-16 md:py-20': spacing === 'lg',
      'py-20 md:py-24': spacing === 'xl',
    },
    
    // Updated background variants
    {
      'bg-white': variant === 'default',
      'bg-gray-50': variant === 'alternate',
      'bg-gradient-to-br from-primary-50/80 to-primary-100/80': variant === 'highlight',
    },
    
    className
  );

  const contentClasses = cn(
    // Content container styles
    contained && [
      'max-w-7xl mx-auto',
      'px-4 sm:px-6 lg:px-8', // Consistent horizontal padding
      'w-full'
    ]
  );

  return (
    <section className={sectionClasses} {...props}>
      <div className={contentClasses}>
        {children}
      </div>
    </section>
  );
} 