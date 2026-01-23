import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CalloutProps {
  eyebrow: string;
  title: string;
  description: string;
  link: {
    text: string;
    href: string;
  };
  variant?: 'impact' | 'resources';
  className?: string;
}

export function Callout({ eyebrow, title, description, link, variant = 'impact', className }: CalloutProps) {
  return (
    <div className={cn(
      'p-8 rounded-lg border-l-4',
      variant === 'impact' ? 'bg-primary-50/50 border-primary-500' : 'bg-secondary-50/50 border-[#498B86]',
      className
    )}>
      <p className="text-sm font-medium uppercase tracking-wide mb-2 text-gray-600">
        {eyebrow}
      </p>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={link.href}
        className="group inline-flex items-center font-semibold text-gray-900 hover:text-[#498B86] transition-colors"
      >
        {link.text}
        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
} 