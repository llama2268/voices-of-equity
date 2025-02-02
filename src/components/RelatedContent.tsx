import Link from 'next/link';

interface RelatedContentProps {
  title: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
  }>;
}

export function RelatedContent({ title, items }: RelatedContentProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-[#E4826D] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 