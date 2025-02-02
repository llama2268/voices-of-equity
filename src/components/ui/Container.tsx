import { cn } from "@/lib/utils";

// New component for consistent max-widths and padding
export function Container({ 
  children, 
  size = 'default',
  className 
}: {
  children: React.ReactNode;
  size?: 'sm' | 'default' | 'lg' | 'full';
  className?: string;
}) {
  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      {
        'max-w-3xl': size === 'sm',
        'max-w-7xl': size === 'default',
        'max-w-[1920px]': size === 'lg',
        'w-full': size === 'full'
      },
      className
    )}>
      {children}
    </div>
  );
} 