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
  const iconMap = {
    "guide": <GuideIcon />,
    "start": <StartIcon />,
    "connect": <ConnectIcon />
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-[#498B86] mb-3">
              {iconMap[item.icon]}
            </div>
            <h3 className="font-bold mb-2 group-hover:text-[#498B86] transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 