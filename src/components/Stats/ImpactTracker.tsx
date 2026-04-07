import React, { useState, useEffect, useRef } from 'react';

const impactStats = [
    { label: 'Raised', numericValue: 40, unit: 'K+', prefix: '$' },
    { label: 'Grant Funding', numericValue: 1000, unit: '+', prefix: '$' },
    { label: 'Campuses', numericValue: 55, unit: '+', prefix: '' },
    { label: 'Members', numericValue: 400, unit: '+', prefix: '' },
    { label: 'Students Reached', numericValue: 1000, unit: '+', prefix: '' },
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
            {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold font-display text-[#587FDA] mb-2">
                        <CountUpNumber
                            numericValue={stat.numericValue}
                            prefix={stat.prefix}
                            unit={stat.unit}
                        />
                    </div>
                    <div className="text-xs font-medium text-[#4A5568] uppercase tracking-wider">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
