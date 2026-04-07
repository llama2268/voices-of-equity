import Link from 'next/link';
import { GuideIcon, StartIcon, ConnectIcon } from '@/components/icons/JourneyIcons';

interface RelatedContentProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
  }>;
}

export function RelatedContent({ title = "Continue Your Journey", items }: RelatedContentProps) {
  const iconMap: Record<string, React.ReactNode> = {
    "guide": <GuideIcon />,
    "start": <StartIcon />,
    "connect": <ConnectIcon />
  };

  return (
    <div className="border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold font-display text-[#171219] mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group p-6 hover:bg-[#F7F8FA] transition-colors rounded-lg"
          >
            <div className="text-[#587FDA] mb-3">
              {iconMap[item.icon]}
            </div>
            <h3 className="font-bold font-display text-[#171219] mb-2 group-hover:text-[#587FDA] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
