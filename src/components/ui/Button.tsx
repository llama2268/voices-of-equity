import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'bg-secondary-main text-white hover:bg-secondary-dark focus:ring-secondary-main',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
        ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
} 