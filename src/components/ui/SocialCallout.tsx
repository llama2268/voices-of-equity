import { siteConfig } from '@/content';

export function SocialCallout() {
  const socialLinks = [
    {
      platform: 'instagram',
      url: siteConfig.links.social.instagram
    },
    {
      platform: 'linkedin',
      url: siteConfig.links.social.linkedin
    }
  ];

  return (
    <div className="bg-[#607AD4] text-white rounded-lg p-3">
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{link.platform}</span>
            <img 
              src={`/icons/social/${link.platform}.png`} 
              alt={link.platform}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
} 