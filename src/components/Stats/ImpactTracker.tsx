import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const impactStats = [
    { label: 'Amount Raised', value: '$40K+', numericValue: 40, unit: 'K+', prefix: '$', subtext: 'For Health Equity Initiatives' },
    { label: 'VoE Grant Funding', value: '$1000+', numericValue: 1000, unit: '+', prefix: '$', subtext: 'Distributed' },
    { label: 'Campuses Engaged', value: '50+', numericValue: 50, unit: '+', prefix: '', subtext: 'Across North America' },
    { label: 'Members Involved', value: '400+', numericValue: 400, unit: '+', prefix: '', subtext: 'Active Members' },
    { label: 'Students Reached', value: '1000+', numericValue: 1000, unit: '+', prefix: '', subtext: 'Through Educational Programming' },
];

function CountUpNumber({ numericValue, prefix, unit }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let start = 0;
        const end = numericValue;
        const duration = 2000;
        let animationFrameId;

        const animate = (timestamp) => {
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
            {prefix}
            {count.toLocaleString()}
            {unit}
        </span>
    );
}

export default function ImpactTracker() {
    return (
        <div className="w-full py-16 bg-gradient-to-br from-[#607AD4] via-[#4C62AA] to-[#3A4A88] rounded-2xl shadow-2xl my-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Impact</h2>
                    <p className="text-lg text-blue-100">Making a tangible difference in communities nationwide</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {impactStats.map((stat, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#7FA3E8] to-[#607AD4] hover:from-[#8BAEF5] hover:to-[#6F88E0] transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 cursor-pointer group shadow-xl hover:shadow-2xl">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-blue-50 transition-colors">
                                <CountUpNumber 
                                    numericValue={stat.numericValue} 
                                    prefix={stat.prefix}
                                    unit={stat.unit}
                                />
                            </div>
                            <div className="text-sm font-bold text-blue-100 uppercase tracking-wider mb-2">{stat.label}</div>
                            <div className="text-xs text-blue-100/80">{stat.subtext}</div>
                            <div className="mt-3 h-1 bg-white opacity-0 group-hover:opacity-30 rounded-full transition-opacity"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                        <Link
                            href="/what-we-do/impact"
                            className="inline-block px-8 py-3 bg-white text-[#607AD4] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                            aria-label="View impact details"
                        >
                            Learn More About Our Impact →
                        </Link>
                    </div>
            </div>
        </div>
        
    );
}
