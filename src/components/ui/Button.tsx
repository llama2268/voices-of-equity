import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium font-display transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide uppercase',
  {
    variants: {
      variant: {
        primary: 'bg-[#587FDA] text-white hover:bg-[#4566B8] focus:ring-[#587FDA] rounded-md',
        secondary: 'bg-[#2A8D87] text-white hover:bg-[#1F6B66] focus:ring-[#2A8D87] rounded-md',
        outline: 'border border-gray-300 text-[#333333] hover:border-gray-400 hover:bg-gray-50 focus:ring-[#587FDA] rounded-md',
        'outline-blue': 'border border-[#587FDA] text-[#587FDA] hover:bg-[#587FDA]/5 focus:ring-[#587FDA] rounded-md',
        'outline-green': 'border border-[#2A8D87] text-[#2A8D87] hover:bg-[#2A8D87]/5 focus:ring-[#2A8D87] rounded-md',
        ghost: 'text-[#587FDA] hover:bg-[#587FDA]/5 focus:ring-[#587FDA] rounded-md',
        dark: 'bg-[#171219] text-white hover:bg-[#2d2630] focus:ring-[#171219] rounded-md',
      },
      size: {
        sm: 'px-5 py-2 text-sm',
        md: 'px-8 py-3.5 text-sm',
        lg: 'px-10 py-4 text-sm',
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
