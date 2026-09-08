'use client';

import NextImage from 'next/image';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react';

/* ============================================================
   Shared scroll loop.

   Every parallax element registers here rather than attaching its own
   scroll listener. One passive listener + one rAF frame drives all of
   them, and only elements currently on screen are measured.
   ============================================================ */

type Subscriber = (progress: number, rect: DOMRect) => void;

interface Entry {
  el: HTMLElement;
  fn: Subscriber;
  visible: boolean;
}

const entries = new Set<Entry>();
let frame = 0;
let listening = false;
let observer: IntersectionObserver | null = null;

function reducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function measure() {
  frame = 0;
  const vh = window.innerHeight;
  entries.forEach((entry) => {
    if (!entry.visible) return;
    const rect = entry.el.getBoundingClientRect();
    // 0 when the element's top hits the bottom of the viewport,
    // 1 when its bottom leaves the top of the viewport.
    const progress = (vh - rect.top) / (vh + rect.height);
    entry.fn(Math.min(Math.max(progress, 0), 1), rect);
  });
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(measure);
}

function ensureListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  observer = new IntersectionObserver(
    (records) => {
      records.forEach((record) => {
        entries.forEach((entry) => {
          if (entry.el === record.target) entry.visible = record.isIntersecting;
        });
      });
      schedule();
    },
    { rootMargin: '20% 0px 20% 0px' },
  );
}

function subscribe(el: HTMLElement, fn: Subscriber) {
  ensureListening();
  const entry: Entry = { el, fn, visible: true };
  entries.add(entry);
  observer?.observe(el);
  schedule();
  return () => {
    entries.delete(entry);
    observer?.unobserve(el);
  };
}

/* ============================================================
   Parallax
   ============================================================ */

/**
 * Moves its children vertically as the section scrolls past.
 *
 * `strength` is the total travel in pixels across the whole pass -
 * 40-90 reads as depth, past ~140 it starts to feel like a glitch.
 * Negative values move against the scroll.
 */
export default function Parallax({
  children,
  strength = 60,
  scale = 1,
  className = '',
  style,
}: {
  children: ReactNode;
  strength?: number;
  /** Slight zoom held for the whole pass - useful behind a scrim. */
  scale?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = outer.current;
    const target = inner.current;
    if (!host || !target || reducedMotion()) return;

    return subscribe(host, (progress) => {
      const shift = (progress - 0.5) * strength;
      target.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0) scale(${scale})`;
    });
  }, [strength, scale]);

  return (
    <div ref={outer} className={className} style={{ overflow: 'hidden', ...style }}>
      <div
        ref={inner}
        style={{
          willChange: 'transform',
          height: '100%',
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Parallax for a `next/image` with `fill`.
 *
 * The caller supplies the positioned, overflow-hidden frame; this fills it
 * with an oversized image so the vertical travel never exposes an edge.
 */
export function ParallaxFill({
  src,
  alt = '',
  strength = 70,
  objectPosition = 'center',
  sizes = '100vw',
  priority = false,
  grade = true,
}: {
  src: string;
  alt?: string;
  strength?: number;
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  grade?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el || reducedMotion()) return;
    return subscribe(el, (progress) => {
      const shift = (progress - 0.5) * strength;
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    });
  }, [strength]);

  // the inset gives the image room to travel without showing a gap
  const bleed = Math.ceil(Math.abs(strength) / 2) + 12;

  return (
    <div
      ref={host}
      className="absolute"
      style={{
        top: -bleed,
        bottom: -bleed,
        left: 0,
        right: 0,
        willChange: 'transform',
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{
          objectPosition,
          filter: grade ? 'saturate(1.06) contrast(1.05) brightness(1.02)' : undefined,
        }}
      />
    </div>
  );
}

/**
 * Hero treatment: as you scroll away, the content drifts up and fades
 * while the photograph behind it holds. Gives the first screen a sense
 * of depth without a library.
 */
export function ScrollFadeOut({
  children,
  distance = 90,
  className = '',
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const t = Math.min(Math.max(y / (vh * 0.85), 0), 1);
      el.style.transform = `translate3d(0, ${(t * distance).toFixed(1)}px, 0)`;
      el.style.opacity = String(1 - t * 0.95);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [distance]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}

/** Thin progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left"
        style={{
          background:
            'linear-gradient(90deg, #587FDA 0%, #4A6FCC 45%, #2A8D87 100%)',
          transform: 'scaleX(0)',
        }}
      />
    </div>
  );
}

/**
 * Counts its children and hands each one an increasing delay, so grids
 * cascade instead of all arriving at once.
 */
export function useStagger(step = 90) {
  const [, force] = useState(0);
  useEffect(() => force(1), []);
  return (index: number) => index * step;
}
