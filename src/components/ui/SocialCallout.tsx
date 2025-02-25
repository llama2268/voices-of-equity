import { socialLinks } from '@/content/social';

export function SocialCallout() {
  return (
    <div className="bg-[#607AD4] text-white rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-4 text-center">Join the Conversation</h3>
      <p className="text-center mb-6">Follow us on social media for updates, stories, and opportunities</p>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your B&W icons */}
            <span className="sr-only">{link.platform}</span>
            <img 
              src={`/icons/social/${link.platform}.png`} 
              alt={link.platform}
              className="w-6 h-6"
            />
          </a>
        ))}
      </div>
    </div>
  );
} 