'use client';

import type { ReactNode } from 'react';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill, ScrollFadeOut } from '@/components/Animation/Parallax';

/**
 * The site-wide page hero.
 *
 * Same language as the Home and Impact heroes: a full-bleed photograph
 * that parallaxes, a directional scrim so the type always reads, and
 * content that lifts away as you scroll off it.
 *
 * Without an `image` it falls back to a deep navy-to-blue ground, which
 * keeps pages that have no good photograph consistent with the rest.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  objectPosition = 'center 40%',
  height = 'min-h-[62vh]',
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
  height?: string;
  children?: ReactNode;
}) {
  return (
    <section data-hero className={`relative isolate w-full overflow-hidden ${height}`}>
      {image ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <ParallaxFill
              src={image}
              alt={imageAlt}
              objectPosition={objectPosition}
              strength={120}
              priority
            />
          </div>
          {/* Equity Blue laid over the photograph - a colour field with the
              picture showing through, matching the home hero. */}
          <div aria-hidden className="absolute inset-0 z-[1] bg-[#587FDA] mix-blend-multiply opacity-[0.82]" />
          <div aria-hidden className="absolute inset-0 z-[1] bg-[#3A57A6]/35" />
        </>
      ) : (
        <div aria-hidden className="voe-texture absolute inset-0 bg-[#587FDA]" />
      )}

      <div
        className={`voe-container relative z-10 flex ${height} flex-col justify-end pb-16 pt-36`}
      >
        <ScrollFadeOut className="max-w-4xl">
          {eyebrow && (
            <Reveal variant="fade">
              <p className="voe-eyebrow mb-4 !text-white/75">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal variant="up" delay={80}>
            <h1 className="voe-display-lg font-display text-white">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal variant="up" delay={220}>
              <p className="voe-lead mt-5 max-w-2xl !text-white/85">{subtitle}</p>
            </Reveal>
          )}
          {children && (
            <Reveal variant="up" delay={320}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </ScrollFadeOut>
      </div>
      </section>
  );
}
