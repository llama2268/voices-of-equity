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
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 text-center text-base mb-2">{subtitle}</p>}
      </div>

      {/* Horizontal scrollable container */}
      <div className="w-full overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex gap-5 px-4 md:px-8">
          {reflections.map((reflection, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 bg-gray-50 rounded-xl p-5 md:p-6 w-[560px] max-w-[86vw] min-h-[300px] border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* Text Content */}
                <div className={`flex flex-col justify-center ${reflection.images.length > 0 ? 'md:w-1/2' : 'w-full'}`}>
                  {/* President Info */}
                  <div className="flex items-center gap-3 mb-5">
                    {reflection.president.headshot && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary-400/70 shadow-sm flex-shrink-0">
                        <Image
                          src={reflection.president.headshot}
                          alt={reflection.president.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{reflection.chapterName}</h3>
                      <p className="text-primary-600 font-semibold text-xs md:text-sm">{reflection.president.name}</p>
                      <p className="text-gray-600 text-xs">{reflection.president.title}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary-600 pl-6">
                    <p className="text-sm md:text-base text-gray-800 font-serif italic leading-relaxed line-clamp-5">
                      &quot;{reflection.quote}&quot;
                    </p>
                  </blockquote>
                </div>

                {/* Images - Only if they exist */}
                {reflection.images.length > 0 && (
                  <div className="md:w-1/2 flex items-center">
                    <div className={`grid gap-3 w-full ${
                      reflection.images.length === 1 ? 'grid-cols-1' :
                      reflection.images.length === 2 ? 'grid-cols-2' :
                      reflection.images.length === 3 ? 'grid-cols-2 grid-rows-2' :
                      'grid-cols-2 grid-rows-2'
                    }`}>
                      {reflection.images.slice(0, 4).map((image, i) => (
                        <div
                          key={i}
                          className={`relative overflow-hidden rounded-lg shadow-md group ${
                            reflection.images.length === 1 ? 'aspect-[4/3]' :
                            reflection.images.length === 3 && i === 0 ? 'col-span-2 aspect-[2/1]' :
                            'aspect-square'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${reflection.chapterName} event ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 400px"
                          />
                          {i === 3 && reflection.images.length > 4 && (
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
                              <span className="text-white text-2xl font-bold">+{reflection.images.length - 4}</span>
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

      {/* Scroll indicator with navigation dots */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex gap-2">
          {reflections.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-500 transition-colors cursor-pointer"
              title={reflections[index].chapterName}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">
        Scroll to explore more chapter stories
      </p>
    </div>
  );
}
