import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'subtle';
}

export function Heading({ 
  level = 2, 
  variant = 'default',
  className,
  children,
  ...props 
}: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Component
      className={cn(
        'font-bold tracking-tight',
        {
          // Size variations based on heading level
          'text-4xl md:text-5xl lg:text-6xl': level === 1,
          'text-3xl md:text-4xl': level === 2,
          'text-2xl md:text-3xl': level === 3,
          'text-xl md:text-2xl': level === 4,
          'text-lg md:text-xl': level === 5,
          'text-base md:text-lg': level === 6,
          
          // Updated variant styles
          'text-gray-900': variant === 'default',
          'text-gradient-primary': variant === 'gradient',
          'text-gray-600': variant === 'subtle',
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 