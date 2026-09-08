'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio?: string;
  email?: string;
  linkedin?: string;
  /** Larger portrait and type for the executive row. */
  size?: 'default' | 'large';
  /** Portrait, name and title only - no profile page behind the card. */
  static?: boolean;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * A person: portrait, name, role. The whole card is the link to their
 * profile; the mail and LinkedIn marks sit outside it so they stay
 * independently clickable. A `static` card (the Board of Advisors) is
 * the portrait, name and title alone - nothing to click through to.
 * Portraits sit in black and white and take colour on hover (.voe-portrait).
 */
export default function TeamMember({ id, name, role, image, email, linkedin, size = 'default', static: isStatic = false }: TeamMemberProps) {
  const [imgError, setImgError] = useState(false);
  const large = size === 'large';

  const card = (
    <>
      <div className="voe-photo voe-portrait voe-ar-portrait rounded-2xl shadow-[0_14px_36px_rgba(14,26,51,0.10)] transition-shadow duration-300 group-hover:shadow-[0_24px_54px_rgba(14,26,51,0.16)]">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#587FDA]">
            <span className="font-display text-3xl font-bold text-white">{getInitials(name)}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes={large ? '(max-width: 640px) 100vw, 33vw' : '(max-width: 640px) 50vw, 20vw'}
            className="object-cover group-hover:scale-[1.04]"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className={large ? 'mt-5' : 'mt-4'}>
        <h3
          className={`font-display font-bold tracking-tight text-[#171219] transition-colors duration-300 group-hover:text-[#587FDA] ${
            large ? 'text-xl md:text-2xl' : 'text-[15px] md:text-base'
          }`}
        >
          {name}
        </h3>
        <p className={`mt-1 text-[#4A5568] ${large ? 'text-[15px]' : 'text-[13px] leading-snug'}`}>{role}</p>
      </div>
    </>
  );

  if (isStatic) {
    return <div className="group">{card}</div>;
  }

  return (
    <div className="group">
      <Link href={`/who-we-are/team/${id}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#587FDA] focus-visible:ring-offset-4 rounded-2xl">
        {card}
      </Link>

      {(email || linkedin) && (
        <div className="mt-2.5 flex gap-3">
          {email && (
            <a href={`mailto:${email}`} aria-label={`Email ${name}`} className="text-[#171219]/40 transition-colors hover:text-[#587FDA]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              aria-label={`${name} on LinkedIn`}
              className="text-[#171219]/40 transition-colors hover:text-[#587FDA]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
