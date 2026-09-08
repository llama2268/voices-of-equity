'use client';

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

type Variant = 'up' | 'left' | 'right' | 'scale' | 'mask' | 'fade';

const VARIANT_CLASS: Record<Variant, string> = {
  up: '',
  left: 'voe-reveal--left',
  right: 'voe-reveal--right',
  scale: 'voe-reveal--scale',
  mask: 'voe-reveal--mask',
  fade: 'voe-reveal--fade',
};

interface RevealProps {
  children: ReactNode;
  /** direction / style of the entrance */
  variant?: Variant;
  /** ms before this element starts animating once in view */
  delay?: number;
  /** how much of the element must be visible before it fires */
  threshold?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper.
 *
 * Latches on first intersection and disconnects - the element never
 * animates back out. (The old AnimateOnScroll sibling did the same, but
 * ImpactTracker did not, which is how the homepage counters ended up
 * showing zeros to anyone who scrolled past and back.)
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the element is already in view on mount (above the fold, or a
    // restored scroll position), show it without waiting for a scroll.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        // Latch on intersection OR once the element sits above the viewport.
        // A fast scroll (or a jump to an anchor) can skip an element entirely
        // between observer callbacks - without this it would report
        // `isIntersecting: false` forever and never appear.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);

    // IntersectionObserver only fires when the intersection *state* changes.
    // Scroll fast enough (or jump to an anchor) and an element can go from
    // "below the fold" to "above the fold" without ever being reported as
    // intersecting - so it would stay invisible for good. This passive
    // fallback catches those, and detaches as soon as the element is shown.
    let raf = 0;
    const check = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94) {
        setShown(true);
        cleanup();
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    const cleanup = () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return cleanup;
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`voe-reveal ${VARIANT_CLASS[variant]} ${shown ? 'is-in' : ''} ${className}`}
      style={{ ['--voe-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/**
 * Headline that rises word by word. Falls back to a plain heading
 * when the user prefers reduced motion (handled in CSS).
 */
export function RevealWords({
  text,
  className = '',
  stagger = 55,
  as: Tag = 'h2',
  highlight = [],
  highlightClassName = 'text-[#FFD166]',
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: ElementType;
  /** words to set in the accent colour (matched without punctuation, case-insensitive) */
  highlight?: string[];
  highlightClassName?: string;
}) {
  const wanted = new Set(highlight.map((w) => w.toLowerCase()));
  const isHighlighted = (word: string) => wanted.has(word.toLowerCase().replace(/[^a-z0-9'-]/g, ''));
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    let raf = 0;
    const check = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94) { setShown(true); cleanup(); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    const cleanup = () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return cleanup;
  }, []);

  return (
    <Tag ref={ref} className={`${shown ? 'is-in' : ''} ${className}`}>
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`voe-word ${isHighlighted(word) ? highlightClassName : ''}`}
          style={{ ['--voe-delay' as string]: `${i * stagger}ms` }}
        >
          {word}
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Counts up once when scrolled into view, then stays put.
 */
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setValue(Math.floor(eased * to));
        if (t < 1) requestAnimationFrame(step);
        else setValue(to);
      };
      requestAnimationFrame(step);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      done.current = true;
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
