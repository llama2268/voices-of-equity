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
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="p-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{link.platform}</span>
          <img
            src={`/icons/social/${link.platform}.png`}
            alt={link.platform}
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  );
}
