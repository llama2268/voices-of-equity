'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * A row of people you scroll sideways.
 *
 * Three portraits fill the column and the row runs on past its edge, so
 * a bigger group visibly continues off the screen and scrolls left and
 * right instead of wrapping to a second row. The arrows sit under the
 * row, never over a face, and only appear when there is somewhere to go.
 */
export default function PeopleRail({ children, label }: { children: ReactNode; label: string }) {
  const rail = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () => {
      const last = el.lastElementChild;
      const edge = el.getBoundingClientRect().right;
      setCanPrev(el.scrollLeft > 8);
      // more to see only if the last card actually runs past the visible edge
      setCanNext(!!last && last.getBoundingClientRect().right > edge + 2);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('.voe-people__item');
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    const w = item ? item.offsetWidth + gap : el.clientWidth / 3;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  const scrollable = canPrev || canNext;

  return (
    <div className="voe-people">
      <div ref={rail} className="voe-people__rail" role="region" aria-label={label}>
        {children}
      </div>
      {scrollable && (
        <div className="voe-people__controls">
          <button type="button" className="voe-rail-nav" onClick={() => step(-1)} disabled={!canPrev} aria-label={`${label}: previous`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button type="button" className="voe-rail-nav" onClick={() => step(1)} disabled={!canNext} aria-label={`${label}: next`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
