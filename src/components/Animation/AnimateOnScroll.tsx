'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in' | 'heading';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-[30px]',
    animate: 'opacity-100 translate-y-0',
  },
  'fade-in-left': {
    initial: 'opacity-0 -translate-x-[40px]',
    animate: 'opacity-100 translate-x-0',
  },
  'fade-in-right': {
    initial: 'opacity-0 translate-x-[40px]',
    animate: 'opacity-100 translate-x-0',
  },
  'scale-in': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  'heading': {
    initial: 'opacity-0 tracking-[0.15em]',
    animate: 'opacity-100 tracking-normal',
  },
};

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? animate : initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Staggered children wrapper
export function StaggerChildren({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  className = '',
  threshold = 0.1,
}: {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  threshold?: number;
}) {
  return (
    <>
      {children.map((child, i) => (
        <AnimateOnScroll
          key={i}
          animation={animation}
          delay={i * staggerDelay}
          className={className}
          threshold={threshold}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
}
