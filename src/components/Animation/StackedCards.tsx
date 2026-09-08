'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Cards that pile up as you scroll.
 *
 * Each child is wrapped in a sticky item pinned a step lower than the one
 * before it, so the next card slides up over the last. As a card is
 * covered it is scaled back and dimmed a touch (via CSS custom properties
 * set here), which is what gives the pile its depth. Layout and the
 * reduced-motion fallback live in design-system.css (.voe-stack).
 */
export default function StackedCards({ children, className = '' }: { children: ReactNode[]; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('.voe-stack__item'));
    let raf = 0;

    const update = () => {
      raf = 0;
      const step = parseFloat(getComputedStyle(el).getPropertyValue('--voe-stack-step')) || 16;
      for (let i = 0; i < items.length - 1; i++) {
        const cur = items[i]!.getBoundingClientRect();
        const next = items[i + 1]!.getBoundingClientRect();
        // 0 while the next card is still below this one; 1 once it has
        // climbed all the way up and only this card's top edge shows.
        const travel = Math.max(1, cur.height - step);
        const p = Math.min(1, Math.max(0, (cur.bottom - next.top) / travel));
        items[i]!.style.setProperty('--voe-stack-scale', (1 - 0.06 * p).toFixed(4));
        items[i]!.style.setProperty('--voe-stack-dim', (1 - 0.16 * p).toFixed(4));
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} className={`voe-stack ${className}`}>
      {children.map((child, i) => (
        <div key={i} className="voe-stack__item" style={{ ['--voe-stack-i' as string]: i, zIndex: i + 1 }}>
          {child}
        </div>
      ))}
    </div>
  );
}
