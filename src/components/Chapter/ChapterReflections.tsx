'use client';

import Image from 'next/image';
import type { ChapterReflection } from '@/content/types';

interface ChapterReflectionsProps {
  reflections: ChapterReflection[];
  title?: string;
  subtitle?: string;
}

export function ChapterReflections({ reflections, title = "Chapter Reflections", subtitle = "Fall 2025" }: ChapterReflectionsProps) {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-2">{title}</h2>
        {subtitle && <p className="text-[#4A5568]">{subtitle}</p>}
      </div>

      <div className="w-full overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-6 px-4 md:px-8">
          {reflections.map((reflection, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 w-[560px] max-w-[86vw] min-h-[300px]"
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className={`flex flex-col justify-center ${reflection.images.length > 0 ? 'md:w-1/2' : 'w-full'}`}>
                  <div className="flex items-center gap-3 mb-5">
                    {reflection.president.headshot && (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={reflection.president.headshot}
                          alt={reflection.president.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold font-display text-[#171219]">{reflection.chapterName}</h3>
                      <p className="text-[#587FDA] font-medium text-xs">{reflection.president.name}</p>
                      <p className="text-gray-500 text-xs">{reflection.president.title}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-[#587FDA] pl-5">
                    <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-5">
                      &quot;{reflection.quote}&quot;
                    </p>
                  </blockquote>
                </div>

                {reflection.images.length > 0 && (
                  <div className="md:w-1/2 flex items-center">
                    <div className={`grid gap-3 w-full ${
                      reflection.images.length === 1 ? 'grid-cols-1' :
                      reflection.images.length === 2 ? 'grid-cols-2' :
                      'grid-cols-2'
                    }`}>
                      {reflection.images.slice(0, 4).map((image, i) => (
                        <div
                          key={i}
                          className={`relative overflow-hidden rounded-lg ${
                            reflection.images.length === 1 ? 'aspect-[4/3]' :
                            reflection.images.length === 3 && i === 0 ? 'col-span-2 aspect-[2/1]' :
                            'aspect-square'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${reflection.chapterName} event ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 400px"
                          />
                          {i === 3 && reflection.images.length > 4 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                              <span className="text-white text-xl font-bold font-display">+{reflection.images.length - 4}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Scroll to explore more chapter stories
      </p>
    </div>
  );
}
