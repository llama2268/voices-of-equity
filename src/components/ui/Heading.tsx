import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'subtle';
}

export function Heading({
  level = 2,
  variant = 'default',
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6';

  return (
    <Tag
      className={cn(
        'font-bold font-display tracking-tight',
        {
          'text-4xl md:text-5xl lg:text-6xl': level === 1,
          'text-3xl md:text-4xl': level === 2,
          'text-2xl md:text-3xl': level === 3,
          'text-xl md:text-2xl': level === 4,
          'text-lg md:text-xl': level === 5,
          'text-base md:text-lg': level === 6,

          'text-[#171219]': variant === 'default',
          'text-[#587FDA]': variant === 'blue',
          'text-[#4A5568]': variant === 'subtle',
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
