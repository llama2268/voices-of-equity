import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
}

export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        'rounded-lg overflow-hidden',
        'transition duration-200',
        
        // Consistent internal spacing
        'p-6 md:p-8',
        
        // Variants
        {
          'bg-white shadow-sm hover:shadow-md': variant === 'default',
          'bg-white shadow-md hover:shadow-lg': variant === 'interactive',
          'bg-gray-50 hover:bg-gray-100': variant === 'hover',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 