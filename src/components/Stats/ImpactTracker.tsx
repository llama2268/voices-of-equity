import React, { useState, useEffect, useRef } from 'react';

const impactStats = [
    { label: 'Raised', numericValue: 43, unit: 'K+', prefix: '$' },
    { label: 'Chapters', numericValue: 60, unit: '+', prefix: '' },
    { label: 'Members', numericValue: 1000, unit: '+', prefix: '' },
    { label: 'Students Reached', numericValue: 10000, unit: '+', prefix: '' },
];

function CountUpNumber({ numericValue, prefix, unit }: { numericValue: number; prefix: string; unit: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry) setIsVisible(entry.isIntersecting); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) { setCount(0); return; }
        let start = 0;
        const end = numericValue;
        const duration = 2000;
        let animationFrameId: number;
        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / duration;
            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isVisible, numericValue]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{unit}
        </span>
    );
}

export default function ImpactTracker() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="inline-block px-3 text-4xl md:text-5xl font-bold font-display text-gradient-accent mb-3 leading-none">
                        <CountUpNumber
                            numericValue={stat.numericValue}
                            prefix={stat.prefix}
                            unit={stat.unit}
                        />
                    </div>
                    <div className="text-xs font-display font-medium text-[#4A5568] uppercase tracking-[0.2em]">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
