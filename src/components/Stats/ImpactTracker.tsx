import React from 'react';
import Link from 'next/link';

const impactStats = [
    { label: 'Amount Raised', value: '$40K+', subtext: 'For Health Equity Initiatives' },
    { label: 'VoE Grant Funding', value: '$1000+', subtext: 'Distributed' },
    { label: 'Campuses Engaged', value: '50+', subtext: 'Across North America' },
    { label: 'Members Involved', value: '400+', subtext: 'Active Members' },
    { label: 'Students Reached', value: '1000+', subtext: 'Through Educational Programming' },
];

export default function ImpactTracker() {
    return (
        <div className="w-full py-12 bg-white rounded-xl shadow-xl border border-gray-100 my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Impact</h2>
                    <p className="text-lg text-gray-600">Making a tangible difference in communities nationwide</p>
                </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {impactStats.map((stat, index) => (
                        <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="text-3xl md:text-4xl font-bold text-[#498B86] mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.subtext}</div>
                        </div>
                    ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/what-we-do/impact"
                            className="inline-block px-8 py-3 bg-[#498B86] text-white font-semibold rounded-full hover:bg-[#3A6F6B] transition-colors shadow-md"
                            aria-label="View impact details"
                        >
                            View Our Impact →
                        </Link>
                    </div>
            </div>
                    </div>
        
    );
}
