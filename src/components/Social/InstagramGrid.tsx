import Image from 'next/image';
import Reveal from '@/components/Animation/Reveal';
import {
  instagramPosts,
  hasArtworkForEveryPost,
  postUrl,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '@/content/instagram';

/**
 * The Instagram wall.
 *
 * Renders the real posts from @voices.of.equity. Two modes — square tiles
 * once artwork is saved for every post, Instagram's own embeds until then.
 * See src/content/instagram.ts for the reasoning and how to switch.
 *
 * The embeds are iframes with `loading="lazy"`, so nothing is fetched from
 * Instagram until a reader scrolls near the section.
 */
export default function InstagramGrid({
  eyebrow = 'Follow Along',
  heading = 'Follow our journey on Instagram',
  onDark = false,
}: {
  eyebrow?: string;
  heading?: string;
  onDark?: boolean;
}) {
  const ink = onDark ? 'text-white' : 'text-[#171219]';

  return (
    <div className="voe-container">
      <Reveal variant="fade">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={`voe-eyebrow mb-3 ${onDark ? '!text-white/75' : ''}`}>
              {eyebrow}
            </p>
            <h2 className={`voe-display-md font-display ${ink}`}>{heading}</h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`voe-btn ${onDark ? 'voe-btn--on-dark' : 'voe-btn--primary'} shrink-0`}
          >
            <svg
              className="mr-2 h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5.5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </Reveal>

      {hasArtworkForEveryPost ? (
        <div className="voe-ig">
          {instagramPosts.map((post, i) => (
            <Reveal key={post.code} variant="scale" delay={i * 45} className="!block">
              <a
                href={postUrl(post)}
                target="_blank"
                rel="noopener noreferrer"
                className="voe-ig__tile"
                aria-label={`Instagram post: ${post.caption}`}
              >
                <Image
                  src={post.image as string}
                  alt={post.alt ?? ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <span className="voe-ig__veil">{post.caption}</span>
              </a>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="voe-ig-embeds">
          {instagramPosts.map((post, i) => (
            <Reveal key={post.code} variant="up" delay={i * 60} className="!block">
              <div className="voe-ig-embed">
                <iframe
                  src={`https://www.instagram.com/${post.kind}/${post.code}/embed`}
                  title={post.caption}
                  loading="lazy"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                />
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
