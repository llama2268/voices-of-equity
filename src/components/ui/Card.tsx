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
        'rounded-lg overflow-hidden transition-all duration-200',
        'p-6 md:p-8',
        {
          'bg-white border border-gray-100': variant === 'default',
          'bg-white border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300': variant === 'interactive',
          'bg-[#F7F8FA] hover:bg-gray-100': variant === 'hover',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
