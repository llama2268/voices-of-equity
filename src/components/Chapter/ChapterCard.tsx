'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface ChapterData {
    name: string;
    logo: string;
    region: string;
    president: string;
    foundingYear: string;
}

export function ChapterCard({ chapter }: { chapter: ChapterData }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-64 perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center p-6">
                    <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                        <Image
                            src={chapter.logo}
                            alt={`${chapter.name} Logo`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <h3 className="text-base font-bold font-display text-[#171219] text-center leading-tight">
                        {chapter.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wider">{chapter.region}</p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden bg-[#587FDA] rounded-lg flex flex-col items-center justify-center p-6 text-white rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="text-center space-y-4">
                        <div>
                            <p className="text-xs uppercase tracking-wider font-medium opacity-70 mb-1">President</p>
                            <p className="text-lg font-bold font-display">{chapter.president}</p>
                        </div>
                        <div className="w-8 h-px bg-white/30 mx-auto" />
                        <div>
                            <p className="text-xs uppercase tracking-wider font-medium opacity-70 mb-1">Established</p>
                            <p className="text-xl font-bold font-display">{chapter.foundingYear}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
