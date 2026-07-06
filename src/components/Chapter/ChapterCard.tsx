"use client";

import { useState } from "react";
import Image from "next/image";

export interface ChapterData {
  name: string;
  logo?: string;
  region: string;
  president: string;
  foundingYear: string;
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => !["of", "the", "and", "&"].includes(part.toLowerCase()))
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

export function ChapterCard({ chapter }: { chapter: ChapterData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <div
      className="perspective-1000 relative h-64 w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`preserve-3d relative h-full w-full transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6">
          <div className="relative mb-4 flex h-28 w-28 items-center justify-center">
            {chapter.logo && !logoError ? (
              <Image
                src={chapter.logo}
                alt={`${chapter.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#EEF2FF] font-display text-2xl font-bold text-[#587FDA]">
                {getInitials(chapter.name)}
              </div>
            )}
          </div>
          <h3 className="text-center font-display text-base font-bold leading-tight text-[#171219]">
            {chapter.name}
          </h3>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            {chapter.region}
          </p>
        </div>

        {/* Back */}
        <div
          className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-[#587FDA] p-6 text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="space-y-4 text-center">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider opacity-70">
                President
              </p>
              <p className="font-display text-lg font-bold">
                {chapter.president}
              </p>
            </div>
            <div className="mx-auto h-px w-8 bg-white/30" />
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider opacity-70">
                Established
              </p>
              <p className="font-display text-xl font-bold">
                {chapter.foundingYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
