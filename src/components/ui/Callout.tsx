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
      'p-8 border-l-2 transition-colors duration-200',
      variant === 'impact'
        ? 'border-[#587FDA]'
        : 'border-[#2A8D87]',
      className
    )}>
      <p className="text-xs font-medium font-display uppercase tracking-widest mb-3 text-gray-500">
        {eyebrow}
      </p>
      <h3 className="text-xl font-bold font-display mb-3 text-[#171219]">{title}</h3>
      <p className="text-[#4A5568] mb-6 leading-relaxed">{description}</p>
      <Link
        href={link.href}
        className={cn(
          'inline-flex items-center font-medium font-display transition-colors duration-200',
          variant === 'impact'
            ? 'text-[#587FDA] hover:text-[#4566B8]'
            : 'text-[#2A8D87] hover:text-[#1F6B66]'
        )}
      >
        {link.text}
        <span className="ml-2">&#x2192;</span>
      </Link>
    </div>
  );
}
