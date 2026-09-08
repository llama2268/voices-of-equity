'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CountUp } from '@/components/Animation/Reveal';

export interface RailMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
  stats?: { value: number; prefix?: string; suffix?: string; label: string }[];
  /** Where the whole card goes when clicked - an outside site, opened in a new tab. */
  href?: string;
  /** The line at the foot of a linked card, e.g. "Read the journal". */
  cta?: string;
}

function formatDate(raw: string) {
  const [mon, year] = raw.split(' ');
  const month = mon ? mon.charAt(0) + mon.slice(1).toLowerCase() : '';
  return `${month} ${year ?? ''}`.trim();
}

/**
 * The timeline as a sideways rail: one card per milestone, laid out left
 * to right along a single line, scrolled with a trackpad, a swipe, or the
 * two buttons. Cards snap into place; the bar under the buttons shows how
 * far along the story you are.
 */
export default function TimelineRail({ milestones }: { milestones: RailMilestone[] }) {
  const rail = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;
    setProgress(max > 0 ? Math.min(1, Math.max(0, x / max)) : 1);
    setAtStart(x <= 2);
    setAtEnd(x >= max - 2);
  }, []);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.voe-rail__card');
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) || 24;
    const by = (card ? card.getBoundingClientRect().width : 400) + gap;
    el.scrollBy({ left: dir * by, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="voe-container">
        <div className="flex items-center justify-between gap-6">
          <div className="voe-rail-progress flex-1 max-w-xs">
            <span style={{ width: `${Math.max(6, progress * 100)}%` }} />
          </div>
          <div className="flex gap-3">
            <button type="button" className="voe-rail-nav" onClick={() => step(-1)} disabled={atStart} aria-label="Earlier">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button type="button" className="voe-rail-nav" onClick={() => step(1)} disabled={atEnd} aria-label="Later">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ol ref={rail} className="voe-rail" aria-label="Timeline">
        {milestones.map((m) => {
          const card = (
            <>
              <div className="voe-rail__photo">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 640px) 82vw, 400px"
                  className="object-cover"
                  style={{ objectPosition: m.objectPosition ?? 'center' }}
                />
              </div>
              <div className="voe-rail__body">
                <p className="voe-rail__date font-display">{formatDate(m.year)}</p>
                <h3 className="voe-rail__title font-display">{m.title}</h3>
                <p className="voe-rail__text">{m.description}</p>
                {m.stats && m.stats.length > 0 && (
                  <dl className="voe-rail__stats">
                    {m.stats.map((s) => (
                      <div key={s.label}>
                        <dd className="voe-rail__stat-value font-display">
                          <CountUp to={s.value} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} />
                        </dd>
                        <dt className="voe-rail__stat-label font-display">{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
                {m.href && (
                  <span className="voe-rail__cta font-display">
                    {m.cta ?? 'Learn more'}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                )}
              </div>
            </>
          );
          return (
            <li key={m.year} className={`voe-rail__card${m.href ? ' voe-rail__card--link' : ''}`}>
              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="voe-rail__link"
                  aria-label={`${m.title} - opens ${new URL(m.href).hostname} in a new tab`}
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
